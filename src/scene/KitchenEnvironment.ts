import * as THREE from 'three';
import {
  KitchenSceneData,
  DynamicPropBody,
  StaticObstacleData,
  RampData,
} from '../types/SceneData';
import { ProceduralTextures } from './ProceduralTextures';

export class KitchenEnvironment {
  public readonly scene: THREE.Scene;
  public readonly data: KitchenSceneData;
  public readonly dynamicBodies: DynamicPropBody[] = [];
  public loadedTexturesCount = 0;
  public readonly totalTexturesToLoad = 6;

  private textures: Record<string, THREE.Texture> = {};
  private chevronTexture!: THREE.CanvasTexture;

  constructor(scene: THREE.Scene, data: KitchenSceneData, renderer: THREE.WebGLRenderer) {
    this.scene = scene;
    this.data = data;

    this.loadNanoBananaTextures(renderer.capabilities.getMaxAnisotropy());
    this.chevronTexture = ProceduralTextures.createBoostChevronTexture();

    this.setupLighting();
    this.buildRoomShell();
    this.buildArchitecture();
    this.buildRaceTrackRibbon();
    this.buildRampsAndBridges();
    this.buildStaticObstacles();
    this.buildDynamicProps();
  }

  private loadNanoBananaTextures(maxAnisotropy: number): void {
    const loader = new THREE.TextureLoader();
    const specs: Array<{ key: string; url: string; repeat: [number, number] }> = [
      { key: 'stone_benchtop', url: '/textures/stone_benchtop.png', repeat: [4, 4] },
      { key: 'hardwood_floor', url: '/textures/hardwood_floor.png', repeat: [10, 10] },
      { key: 'brushed_metal', url: '/textures/brushed_metal.png', repeat: [2, 2] },
      { key: 'cereal_box', url: '/textures/cereal_box.png', repeat: [1, 1] },
      { key: 'lollipop_swirl', url: '/textures/lollipop_swirl.png', repeat: [1, 1] },
      { key: 'bacon_strip', url: '/textures/bacon_strip.png', repeat: [2, 1] },
    ];

    for (const spec of specs) {
      const tex = loader.load(
        spec.url,
        () => {
          this.loadedTexturesCount++;
        },
        undefined,
        () => {
          // Even if offline fallback occurs, increment counter so QA knows loader completed
          this.loadedTexturesCount++;
        }
      );
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(spec.repeat[0], spec.repeat[1]);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = Math.min(8, maxAnisotropy || 4);
      this.textures[spec.key] = tex;
    }
  }

  private setupLighting(): void {
    this.scene.background = new THREE.Color('#1a1e26');
    this.scene.fog = new THREE.FogExp2('#1a1e26', 0.0045);

    // Warm indoor ambient bounce light
    const hemiLight = new THREE.HemisphereLight('#fff8eb', '#382e28', 1.15);
    hemiLight.position.set(0, 28, 0);
    this.scene.add(hemiLight);

    // Warm morning sunlight streaming through the left kitchen window
    const sunLight = new THREE.DirectionalLight('#fff3db', 2.2);
    sunLight.position.set(-28, 26, -6);
    sunLight.target.position.set(0, 6, 4);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.set(2048, 2048);
    sunLight.shadow.camera.near = 2;
    sunLight.shadow.camera.far = 75;
    const d = 32;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    sunLight.shadow.bias = -0.0005;
    this.scene.add(sunLight);
    this.scene.add(sunLight.target);

    // Recessed warm ceiling downlights matching the photo
    const downlightCoords: Array<[number, number, number]> = [
      [-10, 22.5, 14],
      [-12, 22.5, -8],
      [6, 22.5, -14],
      [10, 22.5, 12],
    ];

    for (const [x, y, z] of downlightCoords) {
      const pt = new THREE.PointLight('#ffe8bf', 65, 38, 1.5);
      pt.position.set(x, y, z);
      this.scene.add(pt);

      // Visible recessed ceiling fixture ring
      const bulbGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.15, 16);
      const bulbMat = new THREE.MeshBasicMaterial({ color: '#fff9e6' });
      const bulb = new THREE.Mesh(bulbGeo, bulbMat);
      bulb.position.set(x, 23.85, z);
      this.scene.add(bulb);
    }
  }

  private buildRoomShell(): void {
    // 1. Hardwood Timber Floor (Y = 0.0)
    const floorGeo = new THREE.PlaneGeometry(76, 76);
    const floorMat = new THREE.MeshStandardMaterial({
      map: this.textures['hardwood_floor'],
      color: '#d4a373',
      roughness: 0.38,
      metalness: 0.05,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.set(0, 0, 2);
    floorMesh.receiveShadow = true;
    this.scene.add(floorMesh);

    // 2. Kitchen Walls (Left Wall, Back Wall, Right Wall, Ceiling)
    const wallMat = new THREE.MeshStandardMaterial({
      color: '#eae6df',
      roughness: 0.85,
      metalness: 0.02,
    });

    // Back wall behind stove
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(72, 26, 1.2), wallMat);
    backWall.position.set(0, 13, -24.6);
    backWall.receiveShadow = true;
    this.scene.add(backWall);

    // Left wall behind sink & window
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(1.2, 26, 64), wallMat);
    leftWall.position.set(-24.6, 13, 2);
    leftWall.receiveShadow = true;
    this.scene.add(leftWall);

    // Right wall behind pantry & hallway
    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(1.2, 26, 64), wallMat);
    rightWall.position.set(28.5, 13, 2);
    rightWall.receiveShadow = true;
    this.scene.add(rightWall);

    // Ceiling
    const ceiling = new THREE.Mesh(
      new THREE.PlaneGeometry(76, 76),
      new THREE.MeshStandardMaterial({ color: '#f5f3ef', roughness: 0.9 })
    );
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.set(0, 24, 2);
    this.scene.add(ceiling);

    // Subtle tile backsplash along left & back walls
    const backsplashMat = new THREE.MeshStandardMaterial({
      color: '#dce1e5',
      roughness: 0.25,
      metalness: 0.1,
    });
    const backSplash1 = new THREE.Mesh(new THREE.BoxGeometry(44, 6.2, 0.3), backsplashMat);
    backSplash1.position.set(2, 12.1, -23.9);
    this.scene.add(backSplash1);

    const backSplash2 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 6.2, 36), backsplashMat);
    backSplash2.position.set(-23.9, 12.1, -6);
    this.scene.add(backSplash2);
  }

  private buildArchitecture(): void {
    const { counterSlabs, baseCabinets, upperCabinets, pantryAndWalls } = this.data.architecture;

    // 1. White Quartz Countertop Slabs
    const quartzMat = new THREE.MeshStandardMaterial({
      map: this.textures['stone_benchtop'],
      color: '#f7f5f0',
      roughness: 0.22,
      metalness: 0.05,
    });

    for (const slab of counterSlabs) {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(slab.size[0], slab.size[1], slab.size[2]),
        quartzMat
      );
      mesh.position.set(slab.center[0], slab.center[1], slab.center[2]);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
    }

    // Waterfall quartz side panel on right side of foreground peninsula (seen in photo)
    const waterfallMesh = new THREE.Mesh(new THREE.BoxGeometry(0.65, 9.0, 12.0), quartzMat);
    waterfallMesh.position.set(3.7, 4.5, 16.0);
    waterfallMesh.castShadow = true;
    waterfallMesh.receiveShadow = true;
    this.scene.add(waterfallMesh);

    // Double Stainless Steel Kitchen Sink Basin & Gooseneck Faucet (on Left Counter around Z = -10)
    this.buildDoubleSinkAndFaucet();

    // 2. Dark Walnut Base Cabinets
    for (const cab of baseCabinets) {
      const cabMat = new THREE.MeshStandardMaterial({
        color: cab.color,
        roughness: 0.55,
        metalness: 0.08,
      });
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(cab.size[0], cab.size[1], cab.size[2]),
        cabMat
      );
      mesh.position.set(cab.center[0], cab.center[1], cab.center[2]);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
    }

    // 3. Frosted Glass Upper Cabinets + Red Chinese Knot Ornament
    for (const uCab of upperCabinets) {
      const group = new THREE.Group();
      group.position.set(uCab.center[0], uCab.center[1], uCab.center[2]);

      const bodyMat = new THREE.MeshStandardMaterial({
        color: uCab.color,
        roughness: 0.5,
      });
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(uCab.size[0], uCab.size[1], uCab.size[2]),
        bodyMat
      );
      body.castShadow = true;
      group.add(body);

      // Frosted glass front panel
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: uCab.frostedGlassColor,
        roughness: 0.35,
        transmission: 0.35,
        transparent: true,
        opacity: 0.85,
      });
      const isLeftWall = uCab.size[2] > uCab.size[0];
      const glassGeo = isLeftWall
        ? new THREE.BoxGeometry(0.18, uCab.size[1] - 0.8, uCab.size[2] - 0.8)
        : new THREE.BoxGeometry(uCab.size[0] - 0.8, uCab.size[1] - 0.8, 0.18);
      const glassMesh = new THREE.Mesh(glassGeo, glassMat);
      if (isLeftWall) {
        glassMesh.position.set(uCab.size[0] / 2 + 0.05, 0, 0);
      } else {
        glassMesh.position.set(0, 0, uCab.size[2] / 2 + 0.05);
      }
      group.add(glassMesh);
      this.scene.add(group);

      // Red Chinese Knot Ornament hanging from the upper cabinet handle (signature photo detail!)
      if (uCab.hasChineseKnot && uCab.chineseKnotPosition) {
        this.buildChineseKnotOrnament(uCab.chineseKnotPosition);
      }
    }

    // 4. Pantry, Multiplication Pillar & Window with Venetian Blinds
    for (const item of pantryAndWalls) {
      const mat = new THREE.MeshStandardMaterial({
        color: item.color,
        roughness: 0.6,
      });
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(item.size[0], item.size[1], item.size[2]),
        mat
      );
      mesh.position.set(item.center[0], item.center[1], item.center[2]);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);

      // Red Wall Calendar on Dark Wood Pantry
      if (item.calendarPosition) {
        const calTex = ProceduralTextures.createRedCalendarTexture();
        const calMesh = new THREE.Mesh(
          new THREE.PlaneGeometry(3.2, 4.8),
          new THREE.MeshStandardMaterial({ map: calTex, roughness: 0.5 })
        );
        calMesh.position.set(
          item.calendarPosition[0],
          item.calendarPosition[1],
          item.calendarPosition[2] + 0.08
        );
        this.scene.add(calMesh);
      }

      // 1x-12x Multiplication Chart Poster on Right Foreground Pillar
      if (item.chartPosition) {
        const chartTex = ProceduralTextures.createMultiplicationChartTexture();
        const chartMesh = new THREE.Mesh(
          new THREE.PlaneGeometry(4.2, 5.4),
          new THREE.MeshStandardMaterial({ map: chartTex, roughness: 0.45 })
        );
        chartMesh.rotation.y = -Math.PI / 2;
        chartMesh.position.set(
          item.chartPosition[0] - 0.08,
          item.chartPosition[1],
          item.chartPosition[2]
        );
        this.scene.add(chartMesh);
      }

      // Venetian Blinds slats on the Sink Window
      if (item.id === 'sink_window_with_blinds') {
        this.buildWindowBlinds(item.center, item.size);
      }
    }

    // Stainless Steel Range Hood above the 6-Burner Stove on the back wall
    const hoodGroup = new THREE.Group();
    hoodGroup.position.set(6.5, 17.5, -21.5);
    const metalMat = new THREE.MeshStandardMaterial({
      map: this.textures['brushed_metal'],
      color: '#d0d7de',
      metalness: 0.75,
      roughness: 0.28,
    });
    const hoodCanopy = new THREE.Mesh(new THREE.BoxGeometry(11.2, 1.2, 4.4), metalMat);
    hoodCanopy.position.set(0, -2.2, 0);
    hoodGroup.add(hoodCanopy);
    const hoodChimney = new THREE.Mesh(new THREE.BoxGeometry(3.6, 5.5, 2.8), metalMat);
    hoodChimney.position.set(0, 1.1, -0.5);
    hoodGroup.add(hoodChimney);
    this.scene.add(hoodGroup);
  }

  private buildDoubleSinkAndFaucet(): void {
    const sinkGroup = new THREE.Group();
    sinkGroup.position.set(-15.2, 8.95, -10.0);

    const metalMat = new THREE.MeshStandardMaterial({
      map: this.textures['brushed_metal'],
      color: '#cfd8dc',
      metalness: 0.82,
      roughness: 0.24,
    });

    // Outer stainless sink rim
    const rim = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.14, 7.8), metalMat);
    sinkGroup.add(rim);

    // Dark recessed inner basins
    const basinMat = new THREE.MeshStandardMaterial({
      color: '#37474f',
      metalness: 0.65,
      roughness: 0.35,
    });
    const basin1 = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.16, 3.3), basinMat);
    basin1.position.set(0, 0.02, -1.85);
    sinkGroup.add(basin1);

    const basin2 = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.16, 3.3), basinMat);
    basin2.position.set(0, 0.02, 1.85);
    sinkGroup.add(basin2);

    // Tall Chrome Gooseneck Faucet on the left side of the sink
    const faucetBase = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 2.2, 16), metalMat);
    faucetBase.position.set(-2.4, 1.1, 0);
    sinkGroup.add(faucetBase);

    const faucetArc = new THREE.Mesh(
      new THREE.TorusGeometry(0.95, 0.16, 12, 24, Math.PI),
      metalMat
    );
    faucetArc.position.set(-1.45, 2.2, 0);
    sinkGroup.add(faucetArc);

    this.scene.add(sinkGroup);
  }

  private buildChineseKnotOrnament(pos: [number, number, number]): void {
    const group = new THREE.Group();
    group.position.set(pos[0], pos[1], pos[2]);

    const redMat = new THREE.MeshStandardMaterial({
      color: '#d50000',
      roughness: 0.4,
      emissive: '#3a0000',
    });
    const goldMat = new THREE.MeshStandardMaterial({
      color: '#ffd700',
      metalness: 0.7,
      roughness: 0.3,
    });

    // Diamond knot body
    const diamond = new THREE.Mesh(new THREE.OctahedronGeometry(0.65, 0), redMat);
    diamond.scale.set(0.4, 1.0, 1.0);
    group.add(diamond);

    // Gold ring
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.05, 8, 16), goldMat);
    ring.position.set(0, 0.8, 0);
    ring.rotation.y = Math.PI / 2;
    group.add(ring);

    // Hanging red silk tassel
    const tassel = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.22, 1.4, 12), redMat);
    tassel.position.set(0, -1.1, 0);
    group.add(tassel);

    this.scene.add(group);
  }

  private buildWindowBlinds(center: [number, number, number], size: [number, number, number]): void {
    const group = new THREE.Group();
    group.position.set(center[0], center[1], center[2]);

    // Glowing sunlit glass pane behind blinds
    const skyGlass = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, size[1] - 0.6, size[2] - 0.6),
      new THREE.MeshBasicMaterial({ color: '#fff9e6' })
    );
    group.add(skyGlass);

    // Horizontal Venetian blind slats
    const slatMat = new THREE.MeshStandardMaterial({ color: '#e6d7c3', roughness: 0.5 });
    const slatCount = 16;
    for (let i = 0; i < slatCount; i++) {
      const y = -size[1] / 2 + 0.5 + (i / slatCount) * (size[1] - 1.0);
      const slat = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.12, size[2] - 0.8), slatMat);
      slat.position.set(0.15, y, 0);
      slat.rotation.z = 0.25;
      group.add(slat);
    }

    this.scene.add(group);
  }

  /**
   * Builds the visible miniature F1 race track ribbon, red/white curbs, and Start/Finish gantry
   * following the 160 waypoints in kitchen_scene_data.json.
   */
  private buildRaceTrackRibbon(): void {
    const wps = this.data.trackWaypoints;
    const n = wps.length;

    const positions: number[] = [];
    const uvs: number[] = [];
    const indices: number[] = [];

    const curbPositions: number[] = [];
    const curbColors: number[] = [];
    const curbIndices: number[] = [];

    const upOffset = 0.04; // Sit slightly above counter/floor surfaces to prevent z-fighting
    const curbWidth = 0.42;

    for (let i = 0; i <= n; i++) {
      const wp = wps[i % n];
      const pos = new THREE.Vector3(...wp.position);
      const right = new THREE.Vector3(...wp.right).normalize();
      const halfW = wp.width * 0.48;

      const leftPt = pos.clone().addScaledVector(right, -halfW);
      const rightPt = pos.clone().addScaledVector(right, halfW);

      positions.push(leftPt.x, leftPt.y + upOffset, leftPt.z);
      positions.push(rightPt.x, rightPt.y + upOffset, rightPt.z);

      const v = i * 0.25;
      uvs.push(0, v, 1, v);

      // Left & Right Red/White Rumble Curbs
      const leftOuter = leftPt.clone().addScaledVector(right, -curbWidth);
      const rightOuter = rightPt.clone().addScaledVector(right, curbWidth);

      const isRed = i % 2 === 0;
      const cR = isRed ? 0.92 : 0.96;
      const cG = isRed ? 0.15 : 0.96;
      const cB = isRed ? 0.2 : 0.96;

      // Left curb vertices (2 per step) + Right curb vertices (2 per step)
      curbPositions.push(
        leftOuter.x,
        leftOuter.y + upOffset + 0.02,
        leftOuter.z,
        leftPt.x,
        leftPt.y + upOffset + 0.02,
        leftPt.z,
        rightPt.x,
        rightPt.y + upOffset + 0.02,
        rightPt.z,
        rightOuter.x,
        rightOuter.y + upOffset + 0.02,
        rightOuter.z
      );

      for (let k = 0; k < 4; k++) {
        curbColors.push(cR, cG, cB);
      }

      if (i < n) {
        const base = i * 2;
        indices.push(base, base + 1, base + 2);
        indices.push(base + 1, base + 3, base + 2);

        const cBase = i * 4;
        // Left curb quad
        curbIndices.push(cBase, cBase + 1, cBase + 4);
        curbIndices.push(cBase + 1, cBase + 5, cBase + 4);
        // Right curb quad
        curbIndices.push(cBase + 2, cBase + 3, cBase + 6);
        curbIndices.push(cBase + 3, cBase + 7, cBase + 6);
      }
    }

    // Track rubberized racing ribbon mesh
    const trackGeo = new THREE.BufferGeometry();
    trackGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    trackGeo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    trackGeo.setIndex(indices);
    trackGeo.computeVertexNormals();

    const trackMat = new THREE.MeshStandardMaterial({
      color: '#2b303a',
      roughness: 0.65,
      metalness: 0.1,
      transparent: true,
      opacity: 0.82,
      side: THREE.DoubleSide,
    });
    const trackMesh = new THREE.Mesh(trackGeo, trackMat);
    trackMesh.receiveShadow = true;
    this.scene.add(trackMesh);

    // Red & White F1 Curbs mesh
    const curbGeo = new THREE.BufferGeometry();
    curbGeo.setAttribute('position', new THREE.Float32BufferAttribute(curbPositions, 3));
    curbGeo.setAttribute('color', new THREE.Float32BufferAttribute(curbColors, 3));
    curbGeo.setIndex(curbIndices);
    curbGeo.computeVertexNormals();

    const curbMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.45,
      side: THREE.DoubleSide,
    });
    const curbMesh = new THREE.Mesh(curbGeo, curbMat);
    curbMesh.receiveShadow = true;
    this.scene.add(curbMesh);

    // Start / Finish Checkered Line & F1 Starting Gantry at Waypoint 0
    this.buildStartFinishGantry();
  }

  private buildStartFinishGantry(): void {
    const startWp = this.data.trackWaypoints[0];
    const group = new THREE.Group();
    group.position.set(startWp.position[0], startWp.position[1], startWp.position[2]);
    // Start forward is [-1, 0, 0] (West along Peninsula)
    group.rotation.y = this.data.startGrid.rotationY;

    const checkerTex = ProceduralTextures.createCheckeredTexture(12, 2);
    const startLine = new THREE.Mesh(
      new THREE.PlaneGeometry(startWp.width, 1.2),
      new THREE.MeshBasicMaterial({ map: checkerTex, side: THREE.DoubleSide })
    );
    startLine.rotation.x = -Math.PI / 2;
    startLine.position.set(0, 0.07, 0);
    group.add(startLine);

    // Overhead F1 Gantry Truss
    const pillarMat = new THREE.MeshStandardMaterial({
      color: '#1e293b',
      metalness: 0.7,
      roughness: 0.3,
    });
    const halfSpan = startWp.width * 0.56;
    const leftPillar = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 3.6, 12), pillarMat);
    leftPillar.position.set(-halfSpan, 1.8, 0);
    group.add(leftPillar);

    const rightPillar = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 3.6, 12), pillarMat);
    rightPillar.position.set(halfSpan, 1.8, 0);
    group.add(rightPillar);

    const topBeam = new THREE.Mesh(
      new THREE.BoxGeometry(halfSpan * 2 + 0.5, 0.65, 0.45),
      pillarMat
    );
    topBeam.position.set(0, 3.5, 0);
    group.add(topBeam);

    // 5 Red/Green F1 Starting Lights on Gantry
    for (let i = -2; i <= 2; i++) {
      const lightBulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 12, 12),
        new THREE.MeshBasicMaterial({ color: '#ff1744' })
      );
      lightBulb.position.set(i * 0.75, 3.5, 0.26);
      group.add(lightBulb);
    }

    this.scene.add(group);
  }

  private buildRampsAndBridges(): void {
    for (const ramp of this.data.ramps) {
      this.buildSingleRamp(ramp);
    }
  }

  private buildSingleRamp(ramp: RampData): void {
    const start = new THREE.Vector3(...ramp.start);
    const apex = new THREE.Vector3(...ramp.apex);
    const end = new THREE.Vector3(...ramp.end);

    if (ramp.id === 'lollipop_jump_ramp') {
      // Tabletop jump ramp launching over the Giant Lollipop
      this.createRampSegment(start, apex, ramp.width, this.chevronTexture, '#f59e0b', true);
      this.createRampSegment(apex, end, ramp.width, this.textures['hardwood_floor'], '#d97706', false);
    } else if (ramp.id === 'sink_cutting_board_bridge') {
      // Wooden cutting board & stainless wire dish-rack bridge across the sink
      this.createRampSegment(
        start,
        end,
        ramp.width,
        this.textures['hardwood_floor'],
        '#deb887',
        false,
        0.28
      );
    } else if (ramp.id === 'bacon_strip_chicane_bridge') {
      // Crispy wavy bacon bridge across the back-left corner
      this.createRampSegment(
        start,
        end,
        ramp.width,
        this.textures['bacon_strip'],
        '#c0564b',
        false,
        0.24
      );
    } else {
      // Counter-to-Floor Launch Ramp & Floor-to-Counter Return Ramp
      this.createRampSegment(start, end, ramp.width, this.chevronTexture, '#eab308', true, 0.35);
    }
  }

  private createRampSegment(
    p1: THREE.Vector3,
    p2: THREE.Vector3,
    width: number,
    texture: THREE.Texture,
    railColor: string,
    hasSideRails = true,
    thickness = 0.25
  ): void {
    const delta = new THREE.Vector3().subVectors(p2, p1);
    const length = delta.length();
    const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);

    const group = new THREE.Group();
    group.position.copy(mid);

    const forward = delta.clone().normalize();
    const worldUp = new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3().crossVectors(worldUp, forward).normalize();
    const normalUp = new THREE.Vector3().crossVectors(forward, right).normalize();
    const rotMat = new THREE.Matrix4().makeBasis(right, normalUp, forward);
    group.quaternion.setFromRotationMatrix(rotMat);

    const deckMat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.4,
      metalness: 0.15,
    });
    const deck = new THREE.Mesh(new THREE.BoxGeometry(width, thickness, length), deckMat);
    deck.castShadow = true;
    deck.receiveShadow = true;
    group.add(deck);

    if (hasSideRails) {
      const railMat = new THREE.MeshStandardMaterial({
        color: railColor,
        roughness: 0.3,
        emissive: railColor,
        emissiveIntensity: 0.2,
      });
      const leftRail = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 0.42, length),
        railMat
      );
      leftRail.position.set(-width / 2 + 0.11, 0.22, 0);
      group.add(leftRail);

      const rightRail = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 0.42, length),
        railMat
      );
      rightRail.position.set(width / 2 - 0.11, 0.22, 0);
      group.add(rightRail);
    }

    this.scene.add(group);
  }

  private buildStaticObstacles(): void {
    for (const obs of this.data.staticObstacles) {
      const mesh = this.createStaticObstacleMesh(obs);
      this.scene.add(mesh);
    }
  }

  private createStaticObstacleMesh(obs: StaticObstacleData): THREE.Object3D {
    const group = new THREE.Group();
    group.position.set(obs.position[0], obs.position[1], obs.position[2]);
    group.rotation.y = obs.rotationY || 0;

    switch (obs.type) {
      case 'giant_lollipop': {
        // Giant Rainbow Swirl Lollipop Candy Disc + White Stick
        const r = obs.radius || 1.6;
        const candyGeo = new THREE.CylinderGeometry(r, r, 0.65, 32);
        const candyMat = new THREE.MeshStandardMaterial({
          map: this.textures['lollipop_swirl'],
          roughness: 0.15,
          metalness: 0.05,
        });
        const candyDisc = new THREE.Mesh(candyGeo, candyMat);
        candyDisc.rotation.z = Math.PI / 2;
        candyDisc.castShadow = true;
        group.add(candyDisc);

        // White plastic lollipop stick extending beneath the ramp
        if (obs.stickStart && obs.stickEnd) {
          const s1 = new THREE.Vector3(...obs.stickStart);
          const s2 = new THREE.Vector3(...obs.stickEnd);
          const stickLen = s1.distanceTo(s2);
          const stickMid = s1.clone().add(s2).multiplyScalar(0.5);
          const stickMesh = new THREE.Mesh(
            new THREE.CylinderGeometry(0.14, 0.14, stickLen, 12),
            new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.3 })
          );
          stickMesh.position.copy(stickMid);
          stickMesh.rotation.z = Math.PI / 2;
          stickMesh.castShadow = true;
          this.scene.add(stickMesh);
        }
        break;
      }

      case 'cereal_box': {
        const boxGeo = new THREE.BoxGeometry(obs.size[0], obs.size[1], obs.size[2]);
        const boxMat = new THREE.MeshStandardMaterial({
          map: this.textures['cereal_box'],
          color: obs.color,
          roughness: 0.42,
        });
        const mesh = new THREE.Mesh(boxGeo, boxMat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);
        break;
      }

      case 'ceramic_bowl': {
        const r = obs.radius || 1.1;
        const h = obs.size[1];
        const bowlGeo = new THREE.CylinderGeometry(r, r * 0.68, h, 24);
        const bowlMat = new THREE.MeshStandardMaterial({
          color: obs.color,
          roughness: 0.18,
          metalness: 0.05,
        });
        const bowl = new THREE.Mesh(bowlGeo, bowlMat);
        bowl.castShadow = true;
        group.add(bowl);

        // Inner milk/fruit fill
        const inner = new THREE.Mesh(
          new THREE.CylinderGeometry(r * 0.88, r * 0.88, 0.1, 20),
          new THREE.MeshStandardMaterial({
            color: obs.secondaryColor || '#fff8e1',
            roughness: 0.3,
          })
        );
        inner.position.y = h * 0.35;
        group.add(inner);
        break;
      }

      case 'cutlery_knife':
      case 'cutlery_fork':
      case 'cutlery_spoon': {
        const metalMat = new THREE.MeshStandardMaterial({
          map: this.textures['brushed_metal'],
          color: '#e2e8f0',
          metalness: 0.88,
          roughness: 0.18,
        });
        const handleMat = new THREE.MeshStandardMaterial({
          color: obs.secondaryColor || '#1e272e',
          roughness: 0.5,
        });

        const isZLong = obs.size[2] > obs.size[0];
        const length = Math.max(obs.size[0], obs.size[2]);
        const width = Math.min(obs.size[0], obs.size[2]);

        const innerGroup = new THREE.Group();
        if (!isZLong) {
          innerGroup.rotation.y = Math.PI / 2;
        }

        // Handle
        const handle = new THREE.Mesh(
          new THREE.BoxGeometry(width * 0.65, obs.size[1], length * 0.42),
          handleMat
        );
        handle.position.set(0, 0, -length * 0.28);
        handle.castShadow = true;
        innerGroup.add(handle);

        if (obs.type === 'cutlery_knife') {
          const blade = new THREE.Mesh(
            new THREE.BoxGeometry(width * 0.25, obs.size[1] * 0.9, length * 0.58),
            metalMat
          );
          blade.position.set(0, 0, length * 0.2);
          blade.castShadow = true;
          innerGroup.add(blade);
        } else if (obs.type === 'cutlery_fork') {
          for (let t = -1.5; t <= 1.5; t += 1) {
            const tine = new THREE.Mesh(
              new THREE.BoxGeometry(width * 0.12, obs.size[1] * 0.5, length * 0.45),
              metalMat
            );
            tine.position.set(t * width * 0.2, 0, length * 0.22);
            innerGroup.add(tine);
          }
        } else {
          const spoonBowl = new THREE.Mesh(
            new THREE.SphereGeometry(width * 0.55, 16, 12),
            metalMat
          );
          spoonBowl.scale.set(1.0, 0.35, 1.5);
          spoonBowl.position.set(0, 0, length * 0.25);
          innerGroup.add(spoonBowl);
        }

        group.add(innerGroup);
        break;
      }

      case 'bacon_strip': {
        const baconMat = new THREE.MeshStandardMaterial({
          map: this.textures['bacon_strip'],
          color: '#b83b2b',
          roughness: 0.45,
        });
        const mesh = new THREE.Mesh(
          new THREE.BoxGeometry(obs.size[0], obs.size[1], obs.size[2]),
          baconMat
        );
        mesh.castShadow = true;
        group.add(mesh);
        break;
      }

      case 'appliance_stove': {
        // 6-Burner Stainless Gas Range with Cast-Iron Grates & Blue Flame Rings
        const baseMat = new THREE.MeshStandardMaterial({
          map: this.textures['brushed_metal'],
          color: '#cfd8dc',
          metalness: 0.8,
          roughness: 0.25,
        });
        const base = new THREE.Mesh(
          new THREE.BoxGeometry(obs.size[0], obs.size[1], obs.size[2]),
          baseMat
        );
        base.castShadow = true;
        group.add(base);

        const grateMat = new THREE.MeshStandardMaterial({
          color: '#1e2229',
          roughness: 0.7,
          metalness: 0.4,
        });
        const flameMat = new THREE.MeshBasicMaterial({ color: '#00e5ff' });

        for (let bx = -1; bx <= 1; bx++) {
          const grate = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.22, 2.2), grateMat);
          grate.position.set(bx * 3.6, obs.size[1] * 0.55, 0);
          group.add(grate);

          const burnerRing = new THREE.Mesh(
            new THREE.TorusGeometry(0.55, 0.06, 8, 20),
            flameMat
          );
          burnerRing.rotation.x = Math.PI / 2;
          burnerRing.position.set(bx * 3.6, obs.size[1] * 0.58, 0);
          group.add(burnerRing);
        }
        break;
      }

      case 'barstool': {
        // Curved Walnut & Black Leather Barstools on the Floor
        const r = obs.radius || 2.1;
        const h = obs.size[1];
        const woodMat = new THREE.MeshStandardMaterial({ color: '#3e2723', roughness: 0.45 });
        const leatherMat = new THREE.MeshStandardMaterial({ color: '#18191c', roughness: 0.35 });
        const chromeMat = new THREE.MeshStandardMaterial({
          color: '#cfd8dc',
          metalness: 0.85,
          roughness: 0.2,
        });

        // 4 splayed wooden legs (visual; collider covers cylinder radius)
        for (let c = 0; c < 4; c++) {
          const angle = (c * Math.PI) / 2 + Math.PI / 4;
          const leg = new THREE.Mesh(
            new THREE.CylinderGeometry(0.18, 0.12, h * 0.75, 10),
            woodMat
          );
          leg.position.set(Math.cos(angle) * (r * 0.55), -h * 0.12, Math.sin(angle) * (r * 0.55));
          leg.castShadow = true;
          group.add(leg);
        }

        // Chrome footrest ring
        const footRing = new THREE.Mesh(new THREE.TorusGeometry(r * 0.56, 0.1, 10, 24), chromeMat);
        footRing.rotation.x = Math.PI / 2;
        footRing.position.y = -h * 0.2;
        group.add(footRing);

        // Seat cushion + curved walnut backrest
        const seat = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.75, r * 0.7, 0.65, 24), leatherMat);
        seat.position.y = h * 0.26;
        seat.castShadow = true;
        group.add(seat);

        const backrest = new THREE.Mesh(
          new THREE.CylinderGeometry(r * 0.76, r * 0.76, h * 0.22, 20, 1, true, 0, Math.PI),
          woodMat
        );
        backrest.position.y = h * 0.38;
        group.add(backrest);
        break;
      }

      default: {
        // Appliances (Toaster Oven, SodaStream, Smart Display, Espresso Machine, Trash Bin)
        const isMetal =
          obs.id.includes('toaster') ||
          obs.id.includes('espresso') ||
          obs.id.includes('trash');
        const bodyMat = new THREE.MeshStandardMaterial({
          map: isMetal ? this.textures['brushed_metal'] : null,
          color: obs.color,
          metalness: isMetal ? 0.72 : 0.2,
          roughness: isMetal ? 0.28 : 0.4,
        });
        const body = new THREE.Mesh(
          new THREE.BoxGeometry(obs.size[0], obs.size[1], obs.size[2]),
          bodyMat
        );
        body.castShadow = true;
        body.receiveShadow = true;
        group.add(body);

        if (obs.id === 'appliance_smart_display') {
          const screenTex = ProceduralTextures.createSmartDisplayTexture();
          const screen = new THREE.Mesh(
            new THREE.PlaneGeometry(obs.size[0] * 0.88, obs.size[1] * 0.82),
            new THREE.MeshBasicMaterial({ map: screenTex })
          );
          screen.position.set(0, 0, obs.size[2] / 2 + 0.04);
          group.add(screen);
        } else if (obs.id === 'appliance_toaster_oven') {
          // Toaster glass window with warm glow
          const win = new THREE.Mesh(
            new THREE.BoxGeometry(0.1, obs.size[1] * 0.6, obs.size[2] * 0.68),
            new THREE.MeshStandardMaterial({
              color: '#263238',
              emissive: '#ff6d00',
              emissiveIntensity: 0.35,
              roughness: 0.2,
            })
          );
          win.position.set(obs.size[0] / 2 + 0.03, 0, -0.3);
          group.add(win);
        }
        break;
      }
    }

    return group;
  }

  private buildDynamicProps(): void {
    for (const prop of this.data.dynamicProps) {
      const group = new THREE.Group();
      group.position.set(prop.position[0], prop.position[1], prop.position[2]);
      group.rotation.y = prop.rotationY || 0;

      if (prop.type === 'coffee_cup' || prop.type === 'spice_jar') {
        const r = prop.size[0] * 0.48;
        const h = prop.size[1];
        const cupMat = new THREE.MeshStandardMaterial({
          color: prop.color,
          roughness: 0.2,
          metalness: 0.05,
        });
        const cyl = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.85, h, 18), cupMat);
        cyl.castShadow = true;
        group.add(cyl);

        if (prop.type === 'coffee_cup') {
          // Mug handle
          const handle = new THREE.Mesh(
            new THREE.TorusGeometry(h * 0.28, 0.08, 8, 16, Math.PI),
            cupMat
          );
          handle.rotation.z = -Math.PI / 2;
          handle.position.set(r, 0, 0);
          group.add(handle);

          // Dark coffee liquid top
          const coffee = new THREE.Mesh(
            new THREE.CylinderGeometry(r * 0.88, r * 0.88, 0.05, 16),
            new THREE.MeshStandardMaterial({ color: '#3e2723', roughness: 0.15 })
          );
          coffee.position.y = h * 0.44;
          group.add(coffee);
        }
      } else if (prop.type === 'tissue_box') {
        const box = new THREE.Mesh(
          new THREE.BoxGeometry(prop.size[0], prop.size[1], prop.size[2]),
          new THREE.MeshStandardMaterial({ color: prop.color, roughness: 0.45 })
        );
        box.castShadow = true;
        group.add(box);

        // White tissue puff sticking out the top
        const tissue = new THREE.Mesh(
          new THREE.ConeGeometry(0.45, 0.65, 8),
          new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.6 })
        );
        tissue.position.y = prop.size[1] * 0.5 + 0.25;
        group.add(tissue);
      } else {
        // Napkin holder, Blue shopping bag, White slippers
        const mesh = new THREE.Mesh(
          new THREE.BoxGeometry(prop.size[0], prop.size[1], prop.size[2]),
          new THREE.MeshStandardMaterial({ color: prop.color, roughness: 0.5 })
        );
        mesh.castShadow = true;
        group.add(mesh);
      }

      this.scene.add(group);

      this.dynamicBodies.push({
        data: prop,
        mesh: group,
        position: new THREE.Vector3(...prop.position),
        velocity: new THREE.Vector3(),
        angularVelocity: new THREE.Vector3(),
        rotation: new THREE.Euler(0, prop.rotationY || 0, 0),
        restY: prop.position[1],
        hitCount: 0,
      });
    }
  }
}
