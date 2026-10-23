import * as THREE from 'three';

export interface F1CarConfig {
  id: string;
  name: string;
  primaryColor: string;
  accentColor: string;
  helmetColor: string;
  isPlayer: boolean;
}

export class F1Car {
  public readonly id: string;
  public readonly name: string;
  public readonly isPlayer: boolean;
  public readonly root: THREE.Group;
  public readonly chassisGroup: THREE.Group;

  private frontLeftPivot: THREE.Group;
  private frontRightPivot: THREE.Group;
  private wheelMeshes: THREE.Object3D[] = [];
  private leftFlame: THREE.Mesh;
  private rightFlame: THREE.Mesh;
  private flameMat: THREE.MeshBasicMaterial;
  private brakeLightMat: THREE.MeshBasicMaterial;
  private driftSparks: THREE.Points;
  private sparkPositions: Float32Array;

  // Physics & Race state
  public position = new THREE.Vector3();
  public velocity = new THREE.Vector3();
  public speed = 0; // units/sec (1 unit/sec ~ 9.5 scale km/h)
  public heading = 0; // radians around Y axis; 0 = +Z, -PI/2 = -X
  public pitch = 0;
  public roll = 0;
  public verticalVelocity = 0;
  public groundY = 9.0;
  public isGrounded = true;
  public airTime = 0;

  // Drift & Boost state
  public isDrifting = false;
  public driftDirection = 0; // -1 or +1
  public driftCharge = 0.35; // 0..1 (3 tiers: 0.33, 0.66, 1.0)
  public boostTimer = 0;
  public boostStrength = 1.0;
  public hopOffset = 0;
  public hopVelocity = 0;

  // Track & Lap progression
  public currentWaypointIndex = 0;
  public currentCheckpointIndex = 0;
  public checkpointsPassed = new Set<number>([0]);
  public lap = 1;
  public totalDistanceDriven = 0;
  public finished = false;
  public finishTimeMs = 0;

  constructor(config: F1CarConfig) {
    this.id = config.id;
    this.name = config.name;
    this.isPlayer = config.isPlayer;

    this.root = new THREE.Group();
    this.chassisGroup = new THREE.Group();
    this.root.add(this.chassisGroup);

    this.frontLeftPivot = new THREE.Group();
    this.frontRightPivot = new THREE.Group();

    this.flameMat = new THREE.MeshBasicMaterial({
      color: '#00e5ff',
      transparent: true,
      opacity: 0.0,
    });
    this.brakeLightMat = new THREE.MeshBasicMaterial({ color: '#ff1744' });

    this.leftFlame = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.75, 10), this.flameMat);
    this.rightFlame = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.75, 10), this.flameMat);

    // Drift & Boost Particle Sparks
    const sparkCount = 28;
    this.sparkPositions = new Float32Array(sparkCount * 3);
    const sparkGeo = new THREE.BufferGeometry();
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(this.sparkPositions, 3));
    const sparkMat = new THREE.PointsMaterial({
      color: '#ffab00',
      size: 0.16,
      transparent: true,
      opacity: 0.85,
    });
    this.driftSparks = new THREE.Points(sparkGeo, sparkMat);
    this.driftSparks.visible = false;
    this.root.add(this.driftSparks);

    this.buildF1Mesh(config);
  }

  private buildF1Mesh(config: F1CarConfig): void {
    // Note: Local +Z is forward, +Y is up, +X is left/right
    const bodyMat = new THREE.MeshStandardMaterial({
      color: config.primaryColor,
      roughness: 0.22,
      metalness: 0.35,
    });
    const accentMat = new THREE.MeshStandardMaterial({
      color: config.accentColor,
      roughness: 0.28,
      metalness: 0.25,
    });
    const carbonMat = new THREE.MeshStandardMaterial({
      color: '#181b22',
      roughness: 0.45,
      metalness: 0.4,
    });

    // 1. Carbon Floor Plank / Underbody Diffuser
    const floorPlank = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.06, 2.15), carbonMat);
    floorPlank.position.set(0, 0.14, -0.05);
    floorPlank.castShadow = true;
    this.chassisGroup.add(floorPlank);

    // 2. Central Monocoque Fuselage
    const tub = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.26, 1.35), bodyMat);
    tub.position.set(0, 0.28, -0.1);
    tub.castShadow = true;
    this.chassisGroup.add(tub);

    // 3. Sleek Sloped Nose Cone (+Z forward)
    const noseGeo = new THREE.ConeGeometry(0.24, 0.95, 4);
    noseGeo.rotateY(Math.PI / 4);
    noseGeo.rotateX(Math.PI / 2);
    const nose = new THREE.Mesh(noseGeo, bodyMat);
    nose.scale.set(1.0, 0.58, 1.0);
    nose.position.set(0, 0.23, 0.92);
    nose.castShadow = true;
    this.chassisGroup.add(nose);

    // 4. Multi-Element Front Wing + Endplates
    const frontWingMain = new THREE.Mesh(new THREE.BoxGeometry(1.22, 0.045, 0.28), carbonMat);
    frontWingMain.position.set(0, 0.14, 1.28);
    frontWingMain.castShadow = true;
    this.chassisGroup.add(frontWingMain);

    const frontWingFlap = new THREE.Mesh(new THREE.BoxGeometry(1.18, 0.035, 0.16), accentMat);
    frontWingFlap.position.set(0, 0.18, 1.22);
    frontWingFlap.rotation.x = -0.18;
    this.chassisGroup.add(frontWingFlap);

    for (const side of [-1, 1]) {
      const endplate = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.2, 0.36), bodyMat);
      endplate.position.set(side * 0.61, 0.2, 1.26);
      this.chassisGroup.add(endplate);
    }

    // 5. Aerodynamic Sidepods (Left & Right)
    for (const side of [-1, 1]) {
      const sidepod = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.22, 0.92), bodyMat);
      sidepod.position.set(side * 0.34, 0.25, -0.15);
      sidepod.castShadow = true;
      this.chassisGroup.add(sidepod);

      // Sidepod racing stripe
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.29, 0.06, 0.86), accentMat);
      stripe.position.set(side * 0.34, 0.28, -0.14);
      this.chassisGroup.add(stripe);
    }

    // 6. Engine Cover Fin & Roll Hoop Intake
    const airbox = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.32, 0.68), bodyMat);
    airbox.position.set(0, 0.48, -0.38);
    airbox.castShadow = true;
    this.chassisGroup.add(airbox);

    const sharkFin = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.26, 0.62), accentMat);
    sharkFin.position.set(0, 0.56, -0.58);
    this.chassisGroup.add(sharkFin);

    // 7. Driver Helmet & Visor inside Cockpit
    const helmetMat = new THREE.MeshStandardMaterial({
      color: config.helmetColor,
      roughness: 0.15,
      metalness: 0.2,
    });
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 16), helmetMat);
    helmet.position.set(0, 0.48, 0.06);
    this.chassisGroup.add(helmet);

    const visor = new THREE.Mesh(
      new THREE.CylinderGeometry(0.165, 0.165, 0.09, 16, 1, false, -Math.PI / 3, (2 * Math.PI) / 3),
      new THREE.MeshStandardMaterial({ color: '#11151c', metalness: 0.9, roughness: 0.1 })
    );
    visor.position.set(0, 0.49, 0.07);
    this.chassisGroup.add(visor);

    // 8. Titanium Halo Cockpit Safety Bar
    const haloRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.22, 0.028, 8, 20, Math.PI),
      carbonMat
    );
    haloRing.rotation.x = Math.PI / 2 - 0.15;
    haloRing.position.set(0, 0.53, 0.05);
    this.chassisGroup.add(haloRing);

    const haloPillar = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.18, 8), carbonMat);
    haloPillar.position.set(0, 0.45, 0.26);
    haloPillar.rotation.x = -0.25;
    this.chassisGroup.add(haloPillar);

    // 9. High Rear Wing + DRS Flap + Endplates
    const rearWingMain = new THREE.Mesh(new THREE.BoxGeometry(0.96, 0.05, 0.26), carbonMat);
    rearWingMain.position.set(0, 0.62, -0.98);
    rearWingMain.castShadow = true;
    this.chassisGroup.add(rearWingMain);

    const rearWingDRS = new THREE.Mesh(new THREE.BoxGeometry(0.94, 0.04, 0.16), accentMat);
    rearWingDRS.position.set(0, 0.7, -1.02);
    rearWingDRS.rotation.x = 0.25;
    this.chassisGroup.add(rearWingDRS);

    for (const side of [-1, 1]) {
      const rEndplate = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.42, 0.36), bodyMat);
      rEndplate.position.set(side * 0.48, 0.54, -0.98);
      this.chassisGroup.add(rEndplate);
    }

    // FIA Rear Rain / Brake Light
    const brakeLight = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.05), this.brakeLightMat);
    brakeLight.position.set(0, 0.26, -1.12);
    this.chassisGroup.add(brakeLight);

    // 10. Twin Exhaust Boost Flames
    this.leftFlame.rotation.x = -Math.PI / 2;
    this.leftFlame.position.set(-0.12, 0.32, -1.35);
    this.chassisGroup.add(this.leftFlame);

    this.rightFlame.rotation.x = -Math.PI / 2;
    this.rightFlame.position.set(0.12, 0.32, -1.35);
    this.chassisGroup.add(this.rightFlame);

    // 11. Four Open-Wheel F1 Slick Tires
    const flWheel = this.createWheel(0.24, 0.22, config.accentColor);
    this.frontLeftPivot.position.set(0.56, 0.24, 0.72);
    this.frontLeftPivot.add(flWheel);
    this.chassisGroup.add(this.frontLeftPivot);

    const frWheel = this.createWheel(0.24, 0.22, config.accentColor);
    this.frontRightPivot.position.set(-0.56, 0.24, 0.72);
    this.frontRightPivot.add(frWheel);
    this.chassisGroup.add(this.frontRightPivot);

    const rlWheel = this.createWheel(0.27, 0.28, config.accentColor);
    rlWheel.position.set(0.58, 0.27, -0.72);
    this.chassisGroup.add(rlWheel);

    const rrWheel = this.createWheel(0.27, 0.28, config.accentColor);
    rrWheel.position.set(-0.58, 0.27, -0.72);
    this.chassisGroup.add(rrWheel);

    this.wheelMeshes.push(flWheel, frWheel, rlWheel, rrWheel);
  }

  private createWheel(radius: number, width: number, stripeColor: string): THREE.Group {
    const wheelGroup = new THREE.Group();

    const tireMat = new THREE.MeshStandardMaterial({
      color: '#141619',
      roughness: 0.75,
      metalness: 0.1,
    });
    const tire = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, width, 20), tireMat);
    tire.rotation.z = Math.PI / 2;
    tire.castShadow = true;
    wheelGroup.add(tire);

    // Wheel rim & spokes
    const rimMat = new THREE.MeshStandardMaterial({
      color: '#e2e8f0',
      metalness: 0.8,
      roughness: 0.25,
    });
    const rim = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 0.56, radius * 0.56, width + 0.02, 12),
      rimMat
    );
    rim.rotation.z = Math.PI / 2;
    wheelGroup.add(rim);

    // Colored F1 compound sidewall stripe
    const stripeMat = new THREE.MeshBasicMaterial({ color: stripeColor });
    for (const side of [-1, 1]) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius * 0.78, 0.02, 6, 20),
        stripeMat
      );
      ring.rotation.y = Math.PI / 2;
      ring.position.x = side * (width * 0.5 + 0.005);
      wheelGroup.add(ring);
    }

    return wheelGroup;
  }

  public updateVisuals(dt: number, steerInput: number, isBraking: boolean): void {
    // Position & Orientation
    this.root.position.set(this.position.x, this.position.y + this.hopOffset, this.position.z);
    this.root.rotation.order = 'YXZ';
    this.root.rotation.y = this.heading;
    this.root.rotation.x = this.pitch;

    // Chassis suspension roll during cornering / drifting
    const targetRoll = -steerInput * Math.min(1, Math.abs(this.speed) / 18) * 0.14 +
      (this.isDrifting ? -this.driftDirection * 0.1 : 0);
    this.roll = THREE.MathUtils.lerp(this.roll, targetRoll, Math.min(1, dt * 12));
    this.chassisGroup.rotation.z = this.roll;
    this.chassisGroup.rotation.y = this.isDrifting ? this.driftDirection * 0.24 : 0;

    // Steer front wheels
    const maxSteerAngle = 0.42;
    this.frontLeftPivot.rotation.y = steerInput * maxSteerAngle;
    this.frontRightPivot.rotation.y = steerInput * maxSteerAngle;

    // Spin all 4 wheels proportional to forward velocity
    const spinDelta = (this.speed * dt) / 0.25;
    for (const w of this.wheelMeshes) {
      w.rotation.x += spinDelta;
    }

    // Brake light glow
    this.brakeLightMat.color.setHex(isBraking ? 0xff1744 : 0x550011);

    // Twin Exhaust Boost / Drift Charge Flames
    if (this.boostTimer > 0 || (this.isDrifting && this.driftCharge > 0.2)) {
      this.flameMat.opacity = 0.88;
      if (this.boostTimer > 0) {
        this.flameMat.color.setHex(0x00e5ff);
      } else if (this.driftCharge >= 0.85) {
        this.flameMat.color.setHex(0xd500f9); // Tier 3 Purple
      } else if (this.driftCharge >= 0.5) {
        this.flameMat.color.setHex(0xff9100); // Tier 2 Orange
      } else {
        this.flameMat.color.setHex(0x00e5ff); // Tier 1 Blue
      }
      const flicker = 0.85 + Math.random() * 0.45;
      this.leftFlame.scale.set(1, flicker, 1);
      this.rightFlame.scale.set(1, flicker, 1);
    } else {
      this.flameMat.opacity = 0.0;
    }

    // Update drift/boost sparks behind rear tires
    if ((this.isDrifting || this.boostTimer > 0) && Math.abs(this.speed) > 5) {
      this.driftSparks.visible = true;
      for (let i = 0; i < this.sparkPositions.length; i += 3) {
        const side = (i / 3) % 2 === 0 ? -0.55 : 0.55;
        this.sparkPositions[i] = side + (Math.random() - 0.5) * 0.35;
        this.sparkPositions[i + 1] = 0.1 + Math.random() * 0.35;
        this.sparkPositions[i + 2] = -0.85 - Math.random() * 1.1;
      }
      this.driftSparks.geometry.attributes.position.needsUpdate = true;
    } else {
      this.driftSparks.visible = false;
    }
  }
}
