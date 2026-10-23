import * as THREE from 'three';
import {
  KitchenSceneData,
  DynamicPropBody,
  VehicleInputState,
  TrackWaypointData,
} from '../types/SceneData';
import { F1Car } from '../vehicles/F1Car';
import { SoundEngine } from '../audio/SoundEngine';

export interface PhysicsCallbacks {
  onCheckpoint: (checkpointIndex: number, label: string) => void;
  onLapComplete: (newLap: number, lapTimeMs: number) => void;
  onRaceFinish: () => void;
  onCallout: (title: string, subtitle: string) => void;
}

export class PhysicsEngine {
  private readonly data: KitchenSceneData;
  private readonly dynamicBodies: DynamicPropBody[];
  private readonly sound: SoundEngine;
  private readonly callbacks: PhysicsCallbacks;

  public readonly maxBaseSpeed = 24.5; // ~235 scale km/h
  public readonly maxBoostSpeed = 33.5; // ~320 scale km/h
  public readonly totalLaps = 3;
  public totalPropsHit = 0;

  private calloutCooldown = 0;

  constructor(
    data: KitchenSceneData,
    dynamicBodies: DynamicPropBody[],
    sound: SoundEngine,
    callbacks: PhysicsCallbacks
  ) {
    this.data = data;
    this.dynamicBodies = dynamicBodies;
    this.sound = sound;
    this.callbacks = callbacks;
  }

  public resetVehiclesToGrid(cars: F1Car[], activeCount: number): void {
    const startWp = this.data.trackWaypoints[0];
    const forward = new THREE.Vector3(...startWp.forward).normalize();
    const right = new THREE.Vector3(...startWp.right).normalize();
    const baseHeading = Math.atan2(forward.x, forward.z);

    cars.forEach((car, idx) => {
      car.root.visible = idx < activeCount;
      const row = Math.floor(idx / 2);
      const col = idx % 2 === 0 ? -1 : 1;

      const startPos = new THREE.Vector3(...startWp.position)
        .addScaledVector(forward, -row * 2.4)
        .addScaledVector(right, idx === 0 ? 0 : col * 1.15);
      startPos.y = startWp.position[1];

      car.position.copy(startPos);
      car.velocity.set(0, 0, 0);
      car.speed = 0;
      car.heading = baseHeading;
      car.pitch = 0;
      car.roll = 0;
      car.verticalVelocity = 0;
      car.groundY = startPos.y;
      car.isGrounded = true;
      car.airTime = 0;
      car.isDrifting = false;
      car.driftCharge = idx === 0 ? 0.45 : 0.2;
      car.boostTimer = 0;
      car.hopOffset = 0;
      car.hopVelocity = 0;
      car.currentWaypointIndex = 0;
      car.currentCheckpointIndex = 0;
      car.checkpointsPassed = new Set<number>([0]);
      car.lap = 1;
      car.totalDistanceDriven = -idx * 1.5;
      car.finished = false;
      car.finishTimeMs = 0;
      car.updateVisuals(0.016, 0, false);
    });
  }

  public respawnCarAtWaypoint(car: F1Car): void {
    const wp = this.data.trackWaypoints[car.currentWaypointIndex];
    car.position.set(wp.position[0], wp.position[1] + 0.15, wp.position[2]);
    car.velocity.set(0, 0, 0);
    car.speed = 0;
    car.verticalVelocity = 0;
    car.heading = Math.atan2(wp.forward[0], wp.forward[2]);
    car.pitch = 0;
    car.roll = 0;
    car.isDrifting = false;
    car.boostTimer = 0;
  }

  public step(dt: number, playerCar: F1Car, aiCars: F1Car[], playerInput: VehicleInputState, raceTimeMs: number): void {
    if (this.calloutCooldown > 0) {
      this.calloutCooldown = Math.max(0, this.calloutCooldown - dt);
    }

    if (playerInput.respawn) {
      this.respawnCarAtWaypoint(playerCar);
      this.callbacks.onCallout('TRACK RESPAWN', 'BACK ON RACING LINE');
    }

    // 1. Update Player Vehicle
    this.updateVehiclePhysics(dt, playerCar, playerInput, true, raceTimeMs);

    // 2. Update AI Rival Vehicles (if visible / active in GP mode)
    aiCars.forEach((aiCar, idx) => {
      if (!aiCar.root.visible) return;
      const aiInput = this.computeAIInput(aiCar, idx, playerCar);
      this.updateVehiclePhysics(dt, aiCar, aiInput, false, raceTimeMs);
    });

    // 3. Resolve Car-to-Car Collisions
    const activeCars = [playerCar, ...aiCars.filter((c) => c.root.visible)];
    this.resolveCarToCarCollisions(activeCars);

    // 4. Update Dynamic Kitchen Props (Cups, Tissue Box, Napkin Holder, Slippers)
    this.updateDynamicProps(dt, activeCars);
  }

  private computeAIInput(aiCar: F1Car, rivalIndex: number, playerCar: F1Car): VehicleInputState {
    const wps = this.data.trackWaypoints;
    const lookaheadIndex = (aiCar.currentWaypointIndex + 4) % wps.length;
    const targetWp = wps[lookaheadIndex];

    // Add slight lateral lane offset per AI rival so they don't stack in single file
    const laneOffset = (rivalIndex - 1) * 0.85;
    const targetPos = new THREE.Vector3(...targetWp.position).addScaledVector(
      new THREE.Vector3(...targetWp.right),
      laneOffset
    );

    const toTarget = targetPos.sub(aiCar.position);
    toTarget.y = 0;
    const desiredHeading = Math.atan2(toTarget.x, toTarget.z);
    let angleDiff = desiredHeading - aiCar.heading;
    while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
    while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

    const steer = THREE.MathUtils.clamp(angleDiff * 2.1, -1, 1);
    const sharpTurn = Math.abs(angleDiff) > 0.48;

    // Subtle rubber-banding to keep GP races exciting
    const progressGap = playerCar.totalDistanceDriven - aiCar.totalDistanceDriven;
    const rubberBand = THREE.MathUtils.clamp(progressGap * 0.012, -0.1, 0.14);
    const skillFactor = 0.86 + rivalIndex * 0.03 + rubberBand;

    return {
      throttle: sharpTurn ? 0.68 : Math.min(1, skillFactor),
      brake: 0,
      steer,
      drift: sharpTurn && aiCar.speed > 14,
      boost: aiCar.driftCharge > 0.75 && Math.abs(angleDiff) < 0.2,
      respawn: false,
    };
  }

  private updateVehiclePhysics(
    dt: number,
    car: F1Car,
    input: VehicleInputState,
    isPlayer: boolean,
    raceTimeMs: number
  ): void {
    // Boost activation on 'E' key or sufficient charge
    if (input.boost && car.driftCharge >= 0.3 && car.boostTimer <= 0) {
      const tier = car.driftCharge >= 0.85 ? 3 : car.driftCharge >= 0.55 ? 2 : 1;
      car.boostTimer = 0.9 + tier * 0.45;
      car.boostStrength = 1.18 + tier * 0.08;
      car.driftCharge = Math.max(0, car.driftCharge - 0.45);
      if (isPlayer) {
        this.sound.playBoostWhoosh();
        if (this.calloutCooldown <= 0) {
          this.callbacks.onCallout(
            tier === 3 ? 'PURPLE ULTRA TURBO!' : 'F1 DRS TURBO BOOST!',
            `TIER ${tier} NITRO ENGAGED`
          );
          this.calloutCooldown = 1.4;
        }
      }
    }

    if (car.boostTimer > 0) {
      car.boostTimer = Math.max(0, car.boostTimer - dt);
    }

    // Acceleration, Braking & Reverse
    const topSpeed = car.boostTimer > 0 ? this.maxBoostSpeed : this.maxBaseSpeed;
    const accelRate = car.boostTimer > 0 ? 34.0 : 21.5;
    const brakeRate = 28.0;
    const dragRate = 4.2;

    if (input.throttle > 0) {
      car.speed += input.throttle * accelRate * dt;
    } else if (input.brake > 0) {
      if (car.speed > 0.5) {
        car.speed -= input.brake * brakeRate * dt;
      } else {
        // Reverse gear
        car.speed -= input.brake * 12.0 * dt;
      }
    } else {
      // Natural rolling resistance
      if (Math.abs(car.speed) > 0.2) {
        car.speed -= Math.sign(car.speed) * dragRate * dt;
      } else {
        car.speed = 0;
      }
    }

    car.speed = THREE.MathUtils.clamp(car.speed, -9.5, topSpeed);

    // Drift Hop & Power-slide Logic
    if (input.drift && car.isGrounded && Math.abs(car.speed) > 8.5) {
      if (!car.isDrifting) {
        car.isDrifting = true;
        car.driftDirection = input.steer !== 0 ? Math.sign(input.steer) : 1;
        car.hopVelocity = 2.6; // Mini arcade hop
      }
      // Charge the 3-tier boost bar while drifting around kitchen corners
      car.driftCharge = Math.min(1.0, car.driftCharge + dt * (0.28 + Math.abs(input.steer) * 0.22));
    } else if (car.isDrifting) {
      // Release drift -> grant mini-turbo if charged
      if (car.driftCharge >= 0.55 && car.boostTimer <= 0) {
        car.boostTimer = 0.75;
        if (isPlayer) {
          this.sound.playBoostWhoosh();
        }
      }
      car.isDrifting = false;
      car.driftDirection = 0;
    } else {
      // Passive trickle recharge so players can always test boost with [E]
      car.driftCharge = Math.min(1.0, car.driftCharge + dt * 0.045);
    }

    // Hop spring animation
    if (car.hopOffset > 0 || car.hopVelocity !== 0) {
      car.hopOffset += car.hopVelocity * dt;
      car.hopVelocity -= 18.0 * dt;
      if (car.hopOffset <= 0) {
        car.hopOffset = 0;
        car.hopVelocity = 0;
      }
    }

    // Steering angular velocity
    const speedFactor = Math.min(1.0, Math.abs(car.speed) / 6.0);
    const reverseSign = car.speed < -0.1 ? -1 : 1;
    const baseTurnRate = car.isDrifting ? 2.65 : 2.15;
    const steerDelta =
      (input.steer * baseTurnRate + (car.isDrifting ? car.driftDirection * 0.45 : 0)) *
      speedFactor *
      reverseSign *
      dt;
    car.heading += steerDelta;

    // Compute horizontal velocity vector (blend forward + lateral slip when drifting)
    const forwardX = Math.sin(car.heading);
    const forwardZ = Math.cos(car.heading);
    const targetVx = forwardX * car.speed;
    const targetVz = forwardZ * car.speed;

    const gripLerp = car.isDrifting ? Math.min(1, dt * 4.5) : Math.min(1, dt * 12.0);
    car.velocity.x = THREE.MathUtils.lerp(car.velocity.x, targetVx, gripLerp);
    car.velocity.z = THREE.MathUtils.lerp(car.velocity.z, targetVz, gripLerp);

    const prevPos = car.position.clone();
    car.position.x += car.velocity.x * dt;
    car.position.z += car.velocity.z * dt;

    // Find closest track waypoint & evaluate surface height / ramp launch
    this.updateTrackAndSurfaceElevation(dt, car, prevPos, isPlayer);

    // Resolve collisions against static kitchen obstacles
    this.resolveStaticObstacleCollisions(car, isPlayer);

    // Check checkpoints & lap counter
    this.updateCheckpointsAndLaps(car, isPlayer, raceTimeMs);

    // Update visuals
    car.updateVisuals(dt, input.steer, input.brake > 0 && car.speed > 0);
  }

  private updateTrackAndSurfaceElevation(
    dt: number,
    car: F1Car,
    prevPos: THREE.Vector3,
    isPlayer: boolean
  ): void {
    const wps = this.data.trackWaypoints;
    const n = wps.length;

    // Local search around currentWaypointIndex first, fallback to full scan
    let bestIdx = car.currentWaypointIndex;
    let bestDistSq = Infinity;

    for (let offset = -12; offset <= 18; offset++) {
      const idx = (car.currentWaypointIndex + offset + n) % n;
      const wp = wps[idx];
      const dx = car.position.x - wp.position[0];
      const dz = car.position.z - wp.position[2];
      const dSq = dx * dx + dz * dz;
      if (dSq < bestDistSq) {
        bestDistSq = dSq;
        bestIdx = idx;
      }
    }

    if (bestDistSq > 36) {
      for (let i = 0; i < n; i++) {
        const wp = wps[i];
        const dx = car.position.x - wp.position[0];
        const dz = car.position.z - wp.position[2];
        const dSq = dx * dx + dz * dz;
        if (dSq < bestDistSq) {
          bestDistSq = dSq;
          bestIdx = i;
        }
      }
    }

    // Track forward progress distance
    let idxDelta = bestIdx - car.currentWaypointIndex;
    if (idxDelta < -n / 2) idxDelta += n;
    if (idxDelta > n / 2) idxDelta -= n;
    if (idxDelta > 0 && idxDelta < 15) {
      car.totalDistanceDriven += prevPos.distanceTo(car.position);
    }
    car.currentWaypointIndex = bestIdx;

    const currWp: TrackWaypointData = wps[bestIdx];
    const nextWp: TrackWaypointData = wps[(bestIdx + 1) % n];

    // Interpolate along segment [currWp -> nextWp] for smooth surface Y & pitch
    const segVec = new THREE.Vector3(
      nextWp.position[0] - currWp.position[0],
      0,
      nextWp.position[2] - currWp.position[2]
    );
    const segLen = Math.max(0.001, segVec.length());
    const segDir = segVec.divideScalar(segLen);
    const relPos = new THREE.Vector3(
      car.position.x - currWp.position[0],
      0,
      car.position.z - currWp.position[2]
    );
    const t = THREE.MathUtils.clamp(relPos.dot(segDir) / segLen, 0, 1);

    let surfaceY = THREE.MathUtils.lerp(currWp.position[1], nextWp.position[1], t);
    const dy = nextWp.position[1] - currWp.position[1];
    let targetPitch = -Math.atan2(dy, segLen);

    // Check if the car is on the Giant Lollipop Jump Ramp or Counter-to-Floor Launch Ramp
    for (const ramp of this.data.ramps) {
      const rStart = new THREE.Vector3(...ramp.start);
      const rEnd = new THREE.Vector3(...ramp.end);
      const rMid = rStart.clone().add(rEnd).multiplyScalar(0.5);
      const distXZ = Math.hypot(car.position.x - rMid.x, car.position.z - rMid.z);
      if (distXZ < 4.5 && ramp.id === 'lollipop_jump_ramp') {
        // Extra tabletop launch height over the Giant Lollipop
        const rampProgress = 1 - Math.min(1, distXZ / 4.5);
        surfaceY = Math.max(surfaceY, 9.0 + rampProgress * 1.55);
        if (car.speed > 14 && car.isGrounded && car.position.z < 12.2 && car.position.z > 10.2) {
          car.verticalVelocity = Math.max(car.verticalVelocity, car.speed * 0.34);
          car.isGrounded = false;
          car.boostTimer = Math.max(car.boostTimer, 0.85);
          if (isPlayer && this.calloutCooldown <= 0) {
            this.sound.playBoostWhoosh();
            this.callbacks.onCallout('LOLLIPOP AIR BONUS!', 'CLEARED THE GIANT RAINBOW CANDY!');
            this.calloutCooldown = 2.0;
          }
        }
      }
    }

    // Forgiving arcade track corridor containment (bounces car gently off outer curb rails)
    const wpCenter = new THREE.Vector3(
      THREE.MathUtils.lerp(currWp.position[0], nextWp.position[0], t),
      surfaceY,
      THREE.MathUtils.lerp(currWp.position[2], nextWp.position[2], t)
    );
    const rightVec = new THREE.Vector3(...currWp.right).normalize();
    const lateralOffset = new THREE.Vector3()
      .subVectors(car.position, wpCenter)
      .dot(rightVec);
    const maxOffset = currWp.width * 0.62;

    if (Math.abs(lateralOffset) > maxOffset) {
      const excess = lateralOffset - Math.sign(lateralOffset) * maxOffset;
      car.position.addScaledVector(rightVec, -excess * 0.92);
      car.speed *= 0.94;
    }

    // Vertical Gravity & Landing Solver
    car.groundY = surfaceY;
    if (!car.isGrounded || car.position.y > surfaceY + 0.08) {
      car.isGrounded = false;
      car.airTime += dt;
      car.verticalVelocity -= 26.0 * dt; // Arcade gravity
      car.position.y += car.verticalVelocity * dt;
      targetPitch = THREE.MathUtils.clamp(-car.verticalVelocity * 0.04, -0.35, 0.35);

      if (car.position.y <= surfaceY) {
        car.position.y = surfaceY;
        car.verticalVelocity = 0;
        car.isGrounded = true;
        if (isPlayer && car.airTime > 0.45 && this.calloutCooldown <= 0) {
          this.callbacks.onCallout('SMOOTH TOUCHDOWN!', `AIR TIME ${(car.airTime).toFixed(2)}s`);
          this.calloutCooldown = 1.5;
        }
        car.airTime = 0;
      }
    } else {
      car.position.y = surfaceY;
      car.verticalVelocity = 0;
      car.isGrounded = true;
      car.airTime = 0;
    }

    car.pitch = THREE.MathUtils.lerp(car.pitch, targetPitch, Math.min(1, dt * 10));
  }

  private resolveStaticObstacleCollisions(car: F1Car, isPlayer: boolean): void {
    const carRadius = 0.72;

    for (const obs of this.data.staticObstacles) {
      // Skip vertical collision if car is jumping cleanly high over the Giant Lollipop!
      const dy = Math.abs(car.position.y - obs.position[1]);
      if (dy > obs.size[1] * 0.65 + 0.5) continue;

      if (obs.colliderType === 'cylinder' || obs.colliderType === 'sphere') {
        const obsRadius = (obs.radius || obs.size[0] * 0.5) * 0.85;
        const dx = car.position.x - obs.position[0];
        const dz = car.position.z - obs.position[2];
        const dist = Math.hypot(dx, dz);
        const minDist = carRadius + obsRadius;

        if (dist < minDist && dist > 0.001) {
          const nx = dx / dist;
          const nz = dz / dist;
          const overlap = minDist - dist;
          car.position.x += nx * overlap;
          car.position.z += nz * overlap;
          car.speed *= 0.72;
          if (isPlayer) {
            this.sound.playCollisionClatter(false);
          }
        }
      } else {
        // Oriented 2D Box collision in XZ plane
        const dx = car.position.x - obs.position[0];
        const dz = car.position.z - obs.position[2];
        const cos = Math.cos(-(obs.rotationY || 0));
        const sin = Math.sin(-(obs.rotationY || 0));

        const localX = dx * cos - dz * sin;
        const localZ = dx * sin + dz * cos;

        const halfW = obs.size[0] * 0.45 + carRadius;
        const halfD = obs.size[2] * 0.45 + carRadius;

        if (Math.abs(localX) < halfW && Math.abs(localZ) < halfD) {
          const penX = halfW - Math.abs(localX);
          const penZ = halfD - Math.abs(localZ);

          let pushLocalX = 0;
          let pushLocalZ = 0;
          if (penX < penZ) {
            pushLocalX = Math.sign(localX || 1) * penX;
          } else {
            pushLocalZ = Math.sign(localZ || 1) * penZ;
          }

          const invCos = Math.cos(obs.rotationY || 0);
          const invSin = Math.sin(obs.rotationY || 0);
          car.position.x += pushLocalX * invCos - pushLocalZ * invSin;
          car.position.z += pushLocalX * invSin + pushLocalZ * invCos;
          car.speed *= 0.75;

          if (isPlayer) {
            const isMetallic = obs.type.includes('cutlery') || obs.type.includes('appliance');
            this.sound.playCollisionClatter(isMetallic);
          }
        }
      }
    }
  }

  private resolveCarToCarCollisions(cars: F1Car[]): void {
    const minDist = 1.25;
    for (let i = 0; i < cars.length; i++) {
      for (let j = i + 1; j < cars.length; j++) {
        const a = cars[i];
        const b = cars[j];
        if (Math.abs(a.position.y - b.position.y) > 1.5) continue;

        const dx = b.position.x - a.position.x;
        const dz = b.position.z - a.position.z;
        const dist = Math.hypot(dx, dz);
        if (dist < minDist && dist > 0.001) {
          const overlap = (minDist - dist) * 0.5;
          const nx = dx / dist;
          const nz = dz / dist;
          a.position.x -= nx * overlap;
          a.position.z -= nz * overlap;
          b.position.x += nx * overlap;
          b.position.z += nz * overlap;
        }
      }
    }
  }

  private updateDynamicProps(dt: number, cars: F1Car[]): void {
    for (const body of this.dynamicBodies) {
      // Check impact against all active cars
      for (const car of cars) {
        if (Math.abs(car.position.y - body.position.y) > 1.8) continue;
        const dx = body.position.x - car.position.x;
        const dz = body.position.z - car.position.z;
        const dist = Math.hypot(dx, dz);
        const minDist = body.data.radius + 0.75;

        if (dist < minDist && dist > 0.001) {
          const nx = dx / dist;
          const nz = dz / dist;
          const impactSpeed = Math.max(8, Math.abs(car.speed) * 1.15);
          body.velocity.x = nx * impactSpeed;
          body.velocity.z = nz * impactSpeed;
          body.velocity.y = 4.5 + Math.random() * 3.0;
          body.angularVelocity.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          );
          body.position.x += nx * (minDist - dist + 0.1);
          body.position.z += nz * (minDist - dist + 0.1);

          if (car.isPlayer) {
            body.hitCount++;
            this.totalPropsHit++;
            this.sound.playCollisionClatter(body.data.type === 'coffee_cup');
          }
        }
      }

      // Integrate prop velocity & gravity
      if (body.velocity.lengthSq() > 0.01 || body.position.y > body.restY + 0.02) {
        body.position.addScaledVector(body.velocity, dt);
        body.velocity.y -= 22.0 * dt;
        body.velocity.x *= Math.pow(0.25, dt);
        body.velocity.z *= Math.pow(0.25, dt);

        body.rotation.x += body.angularVelocity.x * dt;
        body.rotation.y += body.angularVelocity.y * dt;
        body.rotation.z += body.angularVelocity.z * dt;

        if (body.position.y <= body.restY) {
          body.position.y = body.restY;
          if (Math.abs(body.velocity.y) > 1.5) {
            body.velocity.y = -body.velocity.y * 0.35;
          } else {
            body.velocity.y = 0;
            body.angularVelocity.multiplyScalar(0.5);
          }
        }

        body.mesh.position.copy(body.position);
        body.mesh.rotation.copy(body.rotation);
      }
    }
  }

  private updateCheckpointsAndLaps(car: F1Car, isPlayer: boolean, raceTimeMs: number): void {
    const cps = this.data.checkpoints;
    const nextCpIndex = (car.currentCheckpointIndex + 1) % cps.length;
    const nextCp = cps[nextCpIndex];

    const dx = car.position.x - nextCp.position[0];
    const dz = car.position.z - nextCp.position[2];
    const distXZ = Math.hypot(dx, dz);

    if (distXZ < nextCp.width * 1.15) {
      car.currentCheckpointIndex = nextCpIndex;
      car.checkpointsPassed.add(nextCpIndex);

      if (nextCpIndex === 0 && car.checkpointsPassed.size >= Math.floor(cps.length * 0.6)) {
        // Completed a full lap!
        car.checkpointsPassed.clear();
        car.checkpointsPassed.add(0);

        if (car.lap < this.totalLaps) {
          car.lap++;
          if (isPlayer) {
            this.sound.playChime(true);
            this.callbacks.onLapComplete(car.lap, raceTimeMs);
          }
        } else if (!car.finished) {
          car.finished = true;
          car.finishTimeMs = raceTimeMs;
          if (isPlayer) {
            this.sound.playChime(true);
            this.callbacks.onRaceFinish();
          }
        }
      } else if (isPlayer && nextCpIndex !== 0) {
        this.sound.playChime(false);
        this.callbacks.onCheckpoint(nextCpIndex, nextCp.label);
      }
    }
  }
}
