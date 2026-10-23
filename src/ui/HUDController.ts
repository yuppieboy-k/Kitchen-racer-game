import { KitchenSceneData, GameMode } from '../types/SceneData';
import { F1Car } from '../vehicles/F1Car';

export class HUDController {
  private readonly data: KitchenSceneData;
  private readonly minimapCtx: CanvasRenderingContext2D;
  private readonly minimapCanvas: HTMLCanvasElement;

  private readonly elLap: HTMLElement;
  private readonly elPosition: HTMLElement;
  private readonly elCheckpoint: HTMLElement;
  private readonly elTimer: HTMLElement;
  private readonly elBestLap: HTMLElement;
  private readonly elLastLap: HTMLElement;
  private readonly elSectorName: HTMLElement;
  private readonly elSpeed: HTMLElement;
  private readonly elGear: HTMLElement;
  private readonly elRpmFill: HTMLElement;
  private readonly elBoostFill: HTMLElement;
  private readonly elBoostStatus: HTMLElement;
  private readonly elElevationBadge: HTMLElement;
  private readonly elCameraLabel: HTMLElement;
  private readonly elCallout: HTMLElement;
  private readonly elCalloutTitle: HTMLElement;
  private readonly elCalloutSub: HTMLElement;
  private readonly elFinishModal: HTMLElement;
  private readonly elFinishTitle: HTMLElement;
  private readonly elFinishSub: HTMLElement;
  private readonly elFinishTotalTime: HTMLElement;
  private readonly elFinishBestLap: HTMLElement;
  private readonly elFinishPropsHit: HTMLElement;

  private calloutTimeout: number | null = null;

  constructor(data: KitchenSceneData) {
    this.data = data;
    this.minimapCanvas = document.getElementById('minimap-canvas') as HTMLCanvasElement;
    this.minimapCtx = this.minimapCanvas.getContext('2d')!;

    this.elLap = document.getElementById('hud-lap')!;
    this.elPosition = document.getElementById('hud-position')!;
    this.elCheckpoint = document.getElementById('hud-checkpoint')!;
    this.elTimer = document.getElementById('hud-timer')!;
    this.elBestLap = document.getElementById('hud-best-lap')!;
    this.elLastLap = document.getElementById('hud-last-lap')!;
    this.elSectorName = document.getElementById('hud-sector-name')!;
    this.elSpeed = document.getElementById('hud-speed')!;
    this.elGear = document.getElementById('hud-gear')!;
    this.elRpmFill = document.getElementById('hud-rpm-fill')!;
    this.elBoostFill = document.getElementById('hud-boost-fill')!;
    this.elBoostStatus = document.getElementById('hud-boost-status')!;
    this.elElevationBadge = document.getElementById('hud-elevation-badge')!;
    this.elCameraLabel = document.getElementById('hud-camera-label')!;
    this.elCallout = document.getElementById('hud-callout')!;
    this.elCalloutTitle = document.getElementById('hud-callout-title')!;
    this.elCalloutSub = document.getElementById('hud-callout-sub')!;
    this.elFinishModal = document.getElementById('finish-modal')!;
    this.elFinishTitle = document.getElementById('finish-title')!;
    this.elFinishSub = document.getElementById('finish-subtitle')!;
    this.elFinishTotalTime = document.getElementById('finish-total-time')!;
    this.elFinishBestLap = document.getElementById('finish-best-lap')!;
    this.elFinishPropsHit = document.getElementById('finish-props-hit')!;
  }

  public static formatTime(ms: number): string {
    if (!Number.isFinite(ms) || ms <= 0) return '00:00.000';
    const totalSec = Math.floor(ms / 1000);
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    const millis = Math.floor(ms % 1000);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(millis).padStart(3, '0')}`;
  }

  public showCallout(title: string, subtitle: string): void {
    this.elCalloutTitle.textContent = title;
    this.elCalloutSub.textContent = subtitle;
    this.elCallout.classList.remove('hidden');

    if (this.calloutTimeout !== null) {
      window.clearTimeout(this.calloutTimeout);
    }
    this.calloutTimeout = window.setTimeout(() => {
      this.elCallout.classList.add('hidden');
    }, 1850);
  }

  public setCameraLabel(label: string): void {
    this.elCameraLabel.textContent = label;
  }

  public setSectorName(name: string): void {
    this.elSectorName.textContent = name;
  }

  public hideFinishModal(): void {
    this.elFinishModal.classList.add('hidden');
  }

  public showFinishModal(
    rank: number,
    mode: GameMode,
    totalTimeMs: number,
    bestLapMs: number,
    propsHit: number
  ): void {
    const ordinals = ['1ST', '2ND', '3RD', '4TH'];
    const ord = ordinals[Math.min(3, Math.max(0, rank - 1))];
    this.elFinishTitle.textContent =
      mode === 'GP'
        ? `${ord} PLACE — KITCHEN GRAND PRIX!`
        : 'TIME TRIAL COMPLETE!';
    this.elFinishSub.textContent =
      rank === 1
        ? 'Victory across the Quartz Peninsula, Giant Lollipop & Hardwood Floor!'
        : 'Great racing through the messy kitchen circuit!';
    this.elFinishTotalTime.textContent = HUDController.formatTime(totalTimeMs);
    this.elFinishBestLap.textContent =
      bestLapMs > 0 ? HUDController.formatTime(bestLapMs) : HUDController.formatTime(totalTimeMs / 3);
    this.elFinishPropsHit.textContent = String(propsHit);
    this.elFinishModal.classList.remove('hidden');
  }

  public update(
    playerCar: F1Car,
    aiCars: F1Car[],
    mode: GameMode,
    raceTimeMs: number,
    bestLapMs: number,
    lastLapMs: number
  ): void {
    // 1. Lap, Checkpoint & Race Position
    this.elLap.textContent = `${playerCar.lap} / 3`;
    this.elCheckpoint.textContent = `${playerCar.currentCheckpointIndex + 1} / ${this.data.checkpoints.length}`;

    const rank = this.computePlayerRank(playerCar, aiCars, mode);
    if (mode === 'GP') {
      const suffixes = ['1st', '2nd', '3rd', '4th'];
      this.elPosition.textContent = `${suffixes[rank - 1] || '1st'} / 4`;
    } else {
      this.elPosition.textContent = 'SOLO TT';
    }

    // 2. Stopwatch Timers
    this.elTimer.textContent = HUDController.formatTime(raceTimeMs);
    this.elBestLap.textContent = bestLapMs > 0 ? HUDController.formatTime(bestLapMs) : '--:--.---';
    this.elLastLap.textContent = lastLapMs > 0 ? HUDController.formatTime(lastLapMs) : '--:--.---';

    // 3. Scale Speedometer (1 world unit/sec ~ 9.6 scale km/h)
    const scaleKmh = Math.round(Math.abs(playerCar.speed) * 9.6);
    this.elSpeed.textContent = String(scaleKmh);

    // 6-Speed F1 Gearbox Indicator
    let gearStr = '1';
    if (playerCar.speed < -0.5) {
      gearStr = 'R';
    } else if (scaleKmh > 235) {
      gearStr = '6';
    } else if (scaleKmh > 185) {
      gearStr = '5';
    } else if (scaleKmh > 135) {
      gearStr = '4';
    } else if (scaleKmh > 85) {
      gearStr = '3';
    } else if (scaleKmh > 38) {
      gearStr = '2';
    }
    this.elGear.textContent = gearStr;

    const rpmPercent = Math.min(100, Math.max(8, (scaleKmh / 290) * 100));
    this.elRpmFill.style.width = `${rpmPercent}%`;

    // 4. 3-Tier Drift Boost Bar
    const chargePct = Math.round(playerCar.driftCharge * 100);
    this.elBoostFill.style.width = `${chargePct}%`;
    this.elBoostFill.className = 'boost-fill';
    if (playerCar.driftCharge >= 0.85) {
      this.elBoostFill.classList.add('tier-3');
      this.elBoostStatus.textContent = 'ULTRA TURBO [E]';
    } else if (playerCar.driftCharge >= 0.55) {
      this.elBoostFill.classList.add('tier-2');
      this.elBoostStatus.textContent = 'SUPER BOOST [E]';
    } else if (playerCar.driftCharge >= 0.3) {
      this.elBoostFill.classList.add('tier-1');
      this.elBoostStatus.textContent = 'READY [E]';
    } else {
      this.elBoostFill.classList.add('tier-0');
      this.elBoostStatus.textContent = 'DRIFT TO CHARGE';
    }

    // 5. Elevation Badge
    if (!playerCar.isGrounded && playerCar.airTime > 0.12) {
      this.elElevationBadge.textContent = `AIRBORNE +${playerCar.position.y.toFixed(1)}m`;
    } else if (playerCar.position.y > 6.5) {
      this.elElevationBadge.textContent = `COUNTER +${playerCar.position.y.toFixed(1)}m`;
    } else if (playerCar.position.y > 1.2) {
      this.elElevationBadge.textContent = `RAMP +${playerCar.position.y.toFixed(1)}m`;
    } else {
      this.elElevationBadge.textContent = 'FLOOR +0.0m';
    }

    // 6. Render 2D Minimap
    this.drawMinimap(playerCar, aiCars, mode);
  }

  public computePlayerRank(playerCar: F1Car, aiCars: F1Car[], mode: GameMode): number {
    if (mode === 'TIME_TRIAL') return 1;
    let rank = 1;
    for (const ai of aiCars) {
      if (!ai.root.visible) continue;
      if (ai.totalDistanceDriven > playerCar.totalDistanceDriven) {
        rank++;
      }
    }
    return rank;
  }

  private drawMinimap(playerCar: F1Car, aiCars: F1Car[], mode: GameMode): void {
    const ctx = this.minimapCtx;
    const w = this.minimapCanvas.width;
    const h = this.minimapCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // Map world X [-26..24] and Z [-25..28] to [14..w-14]
    const mapX = (wx: number) => ((wx + 25) / 50) * (w - 28) + 14;
    const mapY = (wz: number) => ((wz + 25) / 54) * (h - 28) + 14;

    // 1. Draw U-shaped Counter Slabs silhouette
    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    for (const slab of this.data.architecture.counterSlabs) {
      const sx = mapX(slab.center[0] - slab.size[0] / 2);
      const sy = mapY(slab.center[2] - slab.size[2] / 2);
      const sw = (slab.size[0] / 50) * (w - 28);
      const sh = (slab.size[2] / 54) * (h - 28);
      ctx.fillRect(sx, sy, sw, sh);
    }

    // 2. Draw Track Loop Path
    const wps = this.data.trackWaypoints;
    ctx.beginPath();
    wps.forEach((wp, idx) => {
      const px = mapX(wp.position[0]);
      const py = mapY(wp.position[2]);
      if (idx === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.closePath();
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.55)';
    ctx.lineWidth = 6;
    ctx.stroke();

    // 3. Highlight Ramps in Gold
    ctx.strokeStyle = '#ffd13b';
    ctx.lineWidth = 4;
    for (const ramp of this.data.ramps) {
      ctx.beginPath();
      ctx.moveTo(mapX(ramp.start[0]), mapY(ramp.start[2]));
      ctx.lineTo(mapX(ramp.end[0]), mapY(ramp.end[2]));
      ctx.stroke();
    }

    // 4. Draw Start/Finish Line Marker
    const sf = wps[0];
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(mapX(sf.position[0]) - 4, mapY(sf.position[2]) - 4, 8, 8);

    // 5. Draw AI Rival Dots
    if (mode === 'GP') {
      for (const ai of aiCars) {
        if (!ai.root.visible) continue;
        ctx.beginPath();
        ctx.arc(mapX(ai.position.x), mapY(ai.position.z), 4.2, 0, Math.PI * 2);
        ctx.fillStyle = '#00e5ff';
        ctx.fill();
      }
    }

    // 6. Draw Player Directional Arrow
    const px = mapX(playerCar.position.x);
    const py = mapY(playerCar.position.z);
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(-playerCar.heading + Math.PI);
    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(5.5, 5.5);
    ctx.lineTo(0, 3);
    ctx.lineTo(-5.5, 5.5);
    ctx.closePath();
    ctx.fillStyle = '#ff2a3c';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();
  }
}
