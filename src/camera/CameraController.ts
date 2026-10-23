import * as THREE from 'three';
import { CameraMode } from '../types/SceneData';
import { F1Car } from '../vehicles/F1Car';

export class CameraController {
  public readonly camera: THREE.PerspectiveCamera;
  public mode: CameraMode = 'CHASE';
  private readonly modes: CameraMode[] = ['CHASE', 'OVERHEAD', 'COCKPIT', 'OVERVIEW'];

  private currentPos = new THREE.Vector3(-0.5, 11.5, 16.5);
  private currentLookAt = new THREE.Vector3(-8.0, 9.5, 15.5);

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(62, aspect, 0.15, 180);
    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(this.currentLookAt);
  }

  public cycleMode(): CameraMode {
    const idx = this.modes.indexOf(this.mode);
    this.mode = this.modes[(idx + 1) % this.modes.length];
    return this.mode;
  }

  public setMode(mode: CameraMode): void {
    this.mode = mode;
  }

  public getModeLabel(): string {
    switch (this.mode) {
      case 'CHASE':
        return 'CHASE CAM';
      case 'OVERHEAD':
        return 'OVERHEAD CAM';
      case 'COCKPIT':
        return 'HOOD CAM';
      case 'OVERVIEW':
        return 'KITCHEN CAM';
    }
  }

  public snapToCar(car: F1Car): void {
    const forward = new THREE.Vector3(Math.sin(car.heading), 0, Math.cos(car.heading));
    this.currentPos
      .copy(car.position)
      .addScaledVector(forward, -4.4)
      .add(new THREE.Vector3(0, 2.15, 0));
    this.currentLookAt
      .copy(car.position)
      .addScaledVector(forward, 3.2)
      .add(new THREE.Vector3(0, 0.65, 0));
    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(this.currentLookAt);
  }

  public update(dt: number, car: F1Car): void {
    const forward = new THREE.Vector3(Math.sin(car.heading), 0, Math.cos(car.heading));
    const right = new THREE.Vector3(forward.z, 0, -forward.x);

    const desiredPos = new THREE.Vector3();
    const desiredLook = new THREE.Vector3();
    let desiredFov = 62;

    if (this.mode === 'CHASE') {
      const boostDist = car.boostTimer > 0 ? 0.55 : 0;
      const driftShift = car.isDrifting ? car.driftDirection * 0.65 : 0;
      desiredPos
        .copy(car.position)
        .addScaledVector(forward, -(4.2 + boostDist))
        .addScaledVector(right, driftShift)
        .add(new THREE.Vector3(0, 2.05, 0));

      desiredLook
        .copy(car.position)
        .addScaledVector(forward, 3.6)
        .add(new THREE.Vector3(0, 0.55 - car.pitch * 1.4, 0));

      desiredFov = 60 + Math.min(14, Math.abs(car.speed) * 0.35) + (car.boostTimer > 0 ? 7 : 0);

      const lerpAlpha = Math.min(1, dt * 11);
      this.currentPos.lerp(desiredPos, lerpAlpha);
      this.currentLookAt.lerp(desiredLook, Math.min(1, dt * 15));
    } else if (this.mode === 'OVERHEAD') {
      // Classic Micro-Machines Isometric Overhead Cam (offset slightly toward room interior to clear upper cabinets)
      const interiorOffsetX = car.position.x < -10 ? 5.5 : 2.5;
      desiredPos.copy(car.position).add(new THREE.Vector3(interiorOffsetX, 15.5, 9.5));
      desiredLook.copy(car.position).addScaledVector(forward, 1.8);
      desiredFov = 52;

      this.currentPos.lerp(desiredPos, Math.min(1, dt * 8));
      this.currentLookAt.lerp(desiredLook, Math.min(1, dt * 12));
    } else if (this.mode === 'COCKPIT') {
      // Low-Angle Hood / Nose Cam right above the Halo & Front Wing
      desiredPos
        .copy(car.position)
        .addScaledVector(forward, 0.32)
        .add(new THREE.Vector3(0, 0.72 + car.hopOffset, 0));
      desiredLook
        .copy(car.position)
        .addScaledVector(forward, 8.0)
        .add(new THREE.Vector3(0, 0.55 - Math.sin(car.pitch) * 6.0, 0));
      desiredFov = 72 + (car.boostTimer > 0 ? 8 : 0);

      this.currentPos.copy(desiredPos);
      this.currentLookAt.lerp(desiredLook, Math.min(1, dt * 22));
    } else {
      // OVERVIEW: Matches the reference kitchen photo perspective!
      desiredPos.set(6.5, 16.5, 29.5);
      desiredLook.copy(car.position).lerp(new THREE.Vector3(-6, 8.5, 2), 0.55);
      desiredFov = 55;

      this.currentPos.lerp(desiredPos, Math.min(1, dt * 5));
      this.currentLookAt.lerp(desiredLook, Math.min(1, dt * 8));
    }

    this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, desiredFov, Math.min(1, dt * 10));
    this.camera.updateProjectionMatrix();
    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(this.currentLookAt);
  }
}
