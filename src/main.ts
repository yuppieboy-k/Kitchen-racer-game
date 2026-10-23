import * as THREE from 'three';
import rawSceneData from './assets/kitchen_scene_data.json';
import {
  KitchenSceneData,
  GameMode,
  VehicleInputState,
  CameraMode,
} from './types/SceneData';
import { KitchenEnvironment } from './scene/KitchenEnvironment';
import { F1Car } from './vehicles/F1Car';
import { PhysicsEngine } from './physics/PhysicsEngine';
import { CameraController } from './camera/CameraController';
import { SoundEngine } from './audio/SoundEngine';
import { HUDController } from './ui/HUDController';

declare global {
  interface Window {
    __KITCHEN_RACER_DEBUG__?: {
      getState: () => {
        fps: number;
        mode: GameMode;
        cameraMode: CameraMode;
        loadedTexturesCount: number;
        totalTexturesToLoad: number;
        player: {
          position: [number, number, number];
          speed: number;
          scaleKmh: number;
          heading: number;
          lap: number;
          checkpoint: number;
          isGrounded: boolean;
          isDrifting: boolean;
          driftCharge: number;
          boostTimer: number;
        };
        raceTimeMs: number;
        totalPropsHit: number;
      };
      setCameraMode: (mode: CameraMode) => void;
      cycleCamera: () => CameraMode;
      setSyntheticInput: (input: Partial<VehicleInputState> | null) => void;
      triggerBoost: () => void;
      respawn: () => void;
      switchGameMode: (mode: GameMode) => void;
      stepFrames: (frames: number, inputOverride?: Partial<VehicleInputState>) => void;
    };
  }
}

class MessyKitchenRacerApp {
  private readonly sceneData: KitchenSceneData;
  private readonly canvas: HTMLCanvasElement;
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene: THREE.Scene;
  private readonly environment: KitchenEnvironment;
  private readonly sound: SoundEngine;
  private readonly cameraController: CameraController;
  private readonly hud: HUDController;
  private readonly physics: PhysicsEngine;

  private readonly playerCar: F1Car;
  private readonly aiCars: F1Car[] = [];

  private gameMode: GameMode = 'GP';
  private keysPressed = new Set<string>();
  private oneShotBoost = false;
  private oneShotRespawn = false;
  private syntheticInput: Partial<VehicleInputState> | null = null;

  private raceTimeMs = 0;
  private currentLapStartMs = 0;
  private bestLapMs = 0;
  private lastLapMs = 0;
  private isRaceActive = true;

  private lastFrameTime = performance.now();
  private smoothedFps = 60;

  constructor() {
    this.sceneData = rawSceneData as unknown as KitchenSceneData;
    this.canvas = document.getElementById('game-canvas') as HTMLCanvasElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;

    this.scene = new THREE.Scene();
    this.sound = new SoundEngine();
    this.environment = new KitchenEnvironment(this.scene, this.sceneData, this.renderer);
    this.cameraController = new CameraController(window.innerWidth / window.innerHeight);
    this.hud = new HUDController(this.sceneData);

    // Create Player Miniature F1 Car (Scuderia Kitchen Red)
    this.playerCar = new F1Car({
      id: 'player_f1',
      name: 'Scuderia Espresso #1',
      primaryColor: '#e6192e',
      accentColor: '#ffd13b',
      helmetColor: '#00e5ff',
      isPlayer: true,
    });
    this.scene.add(this.playerCar.root);

    // Create 3 AI Rival Miniature F1 Cars
    const rivalConfigs = [
      {
        id: 'ai_papaya',
        name: 'McLaren Marmalade #4',
        primaryColor: '#ff8000',
        accentColor: '#38bdf8',
        helmetColor: '#facc15',
      },
      {
        id: 'ai_teal',
        name: 'Silver Toaster AMG #44',
        primaryColor: '#00d2be',
        accentColor: '#1e293b',
        helmetColor: '#a855f7',
      },
      {
        id: 'ai_cobalt',
        name: 'RedBull Blueberry #11',
        primaryColor: '#1d4ed8',
        accentColor: '#ef4444',
        helmetColor: '#fbbf24',
      },
    ];

    for (const cfg of rivalConfigs) {
      const rival = new F1Car({ ...cfg, isPlayer: false });
      this.aiCars.push(rival);
      this.scene.add(rival.root);
    }

    // Initialize Physics Engine
    this.physics = new PhysicsEngine(
      this.sceneData,
      this.environment.dynamicBodies,
      this.sound,
      {
        onCheckpoint: (cpIndex, label) => {
          this.hud.setSectorName(label);
          if (cpIndex === 1) {
            this.hud.showCallout('CHECKPOINT — LOLLIPOP JUMP', label);
          } else if (cpIndex === 4) {
            this.hud.showCallout('BACON STRIP CHICANE!', label);
          } else if (cpIndex === 7) {
            this.hud.showCallout('FLOOR DROP LAUNCH!', label);
          }
        },
        onLapComplete: (newLap, totalElapsedMs) => {
          const lapDuration = totalElapsedMs - this.currentLapStartMs;
          this.currentLapStartMs = totalElapsedMs;
          this.lastLapMs = lapDuration;
          if (this.bestLapMs === 0 || lapDuration < this.bestLapMs) {
            this.bestLapMs = lapDuration;
          }
          this.hud.showCallout(
            newLap === 3 ? 'FINAL LAP — 3 / 3!' : `LAP ${newLap} / 3`,
            `LAP TIME ${HUDController.formatTime(lapDuration)}`
          );
        },
        onRaceFinish: () => {
          const finalLapDuration = this.raceTimeMs - this.currentLapStartMs;
          this.lastLapMs = finalLapDuration;
          if (this.bestLapMs === 0 || finalLapDuration < this.bestLapMs) {
            this.bestLapMs = finalLapDuration;
          }
          this.isRaceActive = false;
          const rank = this.hud.computePlayerRank(this.playerCar, this.aiCars, this.gameMode);
          this.hud.showFinishModal(
            rank,
            this.gameMode,
            this.raceTimeMs,
            this.bestLapMs,
            this.physics.totalPropsHit
          );
        },
        onCallout: (title, subtitle) => {
          this.hud.showCallout(title, subtitle);
        },
      }
    );

    this.setupEventListeners();
    this.exposeDebugHook();
    this.startNewRace('GP');
    this.animate();
  }

  public startNewRace(mode: GameMode): void {
    this.gameMode = mode;
    this.raceTimeMs = 0;
    this.currentLapStartMs = 0;
    this.lastLapMs = 0;
    this.isRaceActive = true;
    this.hud.hideFinishModal();

    const btnGp = document.getElementById('btn-mode-gp');
    const btnTt = document.getElementById('btn-mode-tt');
    if (btnGp && btnTt) {
      btnGp.classList.toggle('active', mode === 'GP');
      btnTt.classList.toggle('active', mode === 'TIME_TRIAL');
    }

    const activeVehiclesCount = mode === 'GP' ? 4 : 1;
    this.physics.resetVehiclesToGrid([this.playerCar, ...this.aiCars], activeVehiclesCount);
    this.cameraController.snapToCar(this.playerCar);
    this.hud.setSectorName(this.sceneData.checkpoints[0].label);
    this.hud.update(
      this.playerCar,
      this.aiCars,
      this.gameMode,
      this.raceTimeMs,
      this.bestLapMs,
      this.lastLapMs
    );
  }

  private setupEventListeners(): void {
    window.addEventListener('resize', () => {
      this.cameraController.camera.aspect = window.innerWidth / window.innerHeight;
      this.cameraController.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    window.addEventListener('keydown', (e) => {
      this.sound.initOnUserGesture();
      const code = e.code;
      this.keysPressed.add(code);

      if (code === 'KeyC' && !e.repeat) {
        this.cameraController.cycleMode();
        this.hud.setCameraLabel(this.cameraController.getModeLabel());
      } else if (code === 'KeyE' && !e.repeat) {
        this.oneShotBoost = true;
      } else if (code === 'KeyR' && !e.repeat) {
        this.oneShotRespawn = true;
      } else if (code === 'KeyM' && !e.repeat) {
        this.toggleAudioMute();
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keysPressed.delete(e.code);
    });

    window.addEventListener('pointerdown', () => {
      this.sound.initOnUserGesture();
    });

    // Toolbar buttons
    document.getElementById('btn-mode-gp')?.addEventListener('click', () => {
      this.sound.initOnUserGesture();
      this.startNewRace('GP');
    });

    document.getElementById('btn-mode-tt')?.addEventListener('click', () => {
      this.sound.initOnUserGesture();
      this.startNewRace('TIME_TRIAL');
    });

    document.getElementById('btn-camera')?.addEventListener('click', () => {
      this.sound.initOnUserGesture();
      this.cameraController.cycleMode();
      this.hud.setCameraLabel(this.cameraController.getModeLabel());
    });

    document.getElementById('btn-respawn')?.addEventListener('click', () => {
      this.sound.initOnUserGesture();
      this.oneShotRespawn = true;
    });

    document.getElementById('btn-audio')?.addEventListener('click', () => {
      this.sound.initOnUserGesture();
      this.toggleAudioMute();
    });

    document.getElementById('btn-finish-gp')?.addEventListener('click', () => {
      this.startNewRace('GP');
    });

    document.getElementById('btn-finish-tt')?.addEventListener('click', () => {
      this.startNewRace('TIME_TRIAL');
    });
  }

  private toggleAudioMute(): void {
    const muted = this.sound.toggleMute();
    const btnAudio = document.getElementById('btn-audio');
    if (btnAudio) {
      btnAudio.textContent = muted ? '🔇 AUDIO MUTED' : '🔊 AUDIO ON';
    }
  }

  private readPlayerInput(): VehicleInputState {
    if (this.syntheticInput) {
      return {
        throttle: this.syntheticInput.throttle ?? 0,
        brake: this.syntheticInput.brake ?? 0,
        steer: this.syntheticInput.steer ?? 0,
        drift: this.syntheticInput.drift ?? false,
        boost: this.syntheticInput.boost ?? false,
        respawn: this.syntheticInput.respawn ?? false,
      };
    }

    const forward =
      this.keysPressed.has('KeyW') || this.keysPressed.has('ArrowUp') ? 1 : 0;
    const brake =
      this.keysPressed.has('KeyS') || this.keysPressed.has('ArrowDown') ? 1 : 0;
    const left =
      this.keysPressed.has('KeyA') || this.keysPressed.has('ArrowLeft') ? 1 : 0;
    const right =
      this.keysPressed.has('KeyD') || this.keysPressed.has('ArrowRight') ? 1 : 0;
    const drift =
      this.keysPressed.has('Space') ||
      this.keysPressed.has('ShiftLeft') ||
      this.keysPressed.has('ShiftRight');

    const boost = this.oneShotBoost || this.keysPressed.has('KeyE');
    const respawn = this.oneShotRespawn;

    this.oneShotBoost = false;
    this.oneShotRespawn = false;

    return {
      throttle: forward,
      brake,
      steer: left - right,
      drift,
      boost,
      respawn,
    };
  }

  private exposeDebugHook(): void {
    window.__KITCHEN_RACER_DEBUG__ = {
      getState: () => ({
        fps: Math.round(this.smoothedFps),
        mode: this.gameMode,
        cameraMode: this.cameraController.mode,
        loadedTexturesCount: this.environment.loadedTexturesCount,
        totalTexturesToLoad: this.environment.totalTexturesToLoad,
        player: {
          position: [
            Number(this.playerCar.position.x.toFixed(3)),
            Number(this.playerCar.position.y.toFixed(3)),
            Number(this.playerCar.position.z.toFixed(3)),
          ],
          speed: Number(this.playerCar.speed.toFixed(2)),
          scaleKmh: Math.round(Math.abs(this.playerCar.speed) * 9.6),
          heading: Number(this.playerCar.heading.toFixed(3)),
          lap: this.playerCar.lap,
          checkpoint: this.playerCar.currentCheckpointIndex,
          isGrounded: this.playerCar.isGrounded,
          isDrifting: this.playerCar.isDrifting,
          driftCharge: Number(this.playerCar.driftCharge.toFixed(2)),
          boostTimer: Number(this.playerCar.boostTimer.toFixed(2)),
        },
        raceTimeMs: Math.round(this.raceTimeMs),
        totalPropsHit: this.physics.totalPropsHit,
      }),
      setCameraMode: (mode: CameraMode) => {
        this.cameraController.setMode(mode);
        this.hud.setCameraLabel(this.cameraController.getModeLabel());
      },
      cycleCamera: () => {
        const mode = this.cameraController.cycleMode();
        this.hud.setCameraLabel(this.cameraController.getModeLabel());
        return mode;
      },
      setSyntheticInput: (input: Partial<VehicleInputState> | null) => {
        this.syntheticInput = input;
      },
      triggerBoost: () => {
        this.playerCar.driftCharge = 1.0;
        this.oneShotBoost = true;
      },
      respawn: () => {
        this.oneShotRespawn = true;
      },
      switchGameMode: (mode: GameMode) => {
        this.startNewRace(mode);
      },
      stepFrames: (frames: number, inputOverride?: Partial<VehicleInputState>) => {
        const dt = 1 / 60;
        for (let i = 0; i < frames; i++) {
          const inp: VehicleInputState = {
            throttle: inputOverride?.throttle ?? 0,
            brake: inputOverride?.brake ?? 0,
            steer: inputOverride?.steer ?? 0,
            drift: inputOverride?.drift ?? false,
            boost: inputOverride?.boost ?? false,
            respawn: inputOverride?.respawn ?? false,
          };
          if (inp.throttle > 0 || this.playerCar.speed > 0.2 || this.raceTimeMs > 0) {
            this.raceTimeMs += dt * 1000;
          }
          this.physics.step(dt, this.playerCar, this.aiCars, inp, this.raceTimeMs);
          this.cameraController.update(dt, this.playerCar);
        }
        this.hud.update(
          this.playerCar,
          this.aiCars,
          this.gameMode,
          this.raceTimeMs,
          this.bestLapMs,
          this.lastLapMs
        );
        this.renderer.render(this.scene, this.cameraController.camera);
      },
    };
  }

  private animate = (): void => {
    requestAnimationFrame(this.animate);

    const now = performance.now();
    const rawDt = (now - this.lastFrameTime) / 1000;
    this.lastFrameTime = now;
    const dt = Math.min(0.05, Math.max(0.001, rawDt));

    const instFps = 1 / Math.max(0.001, rawDt);
    this.smoothedFps = this.smoothedFps * 0.92 + instFps * 0.08;

    const input = this.readPlayerInput();

    if (this.isRaceActive) {
      // Advance race timer once player presses throttle or AI is racing
      if (this.playerCar.speed > 0.2 || input.throttle > 0 || this.raceTimeMs > 0) {
        this.raceTimeMs += dt * 1000;
      }
      this.physics.step(dt, this.playerCar, this.aiCars, input, this.raceTimeMs);
    }

    this.cameraController.update(dt, this.playerCar);
    this.sound.updateEngine(
      this.playerCar.speed,
      this.physics.maxBaseSpeed,
      this.playerCar.isDrifting,
      this.playerCar.boostTimer > 0
    );
    this.hud.update(
      this.playerCar,
      this.aiCars,
      this.gameMode,
      this.raceTimeMs,
      this.bestLapMs,
      this.lastLapMs
    );

    this.renderer.render(this.scene, this.cameraController.camera);
  };
}

window.addEventListener('DOMContentLoaded', () => {
  new MessyKitchenRacerApp();
});
