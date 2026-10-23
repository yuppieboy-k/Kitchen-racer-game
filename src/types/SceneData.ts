import * as THREE from 'three';

export type Vec3Tuple = [number, number, number];

export interface CounterSlabData {
  id: string;
  name: string;
  center: Vec3Tuple;
  size: Vec3Tuple;
  topY: number;
  color: string;
}

export interface BaseCabinetData {
  id: string;
  center: Vec3Tuple;
  size: Vec3Tuple;
  color: string;
}

export interface UpperCabinetData {
  id: string;
  name: string;
  center: Vec3Tuple;
  size: Vec3Tuple;
  color: string;
  frostedGlassColor: string;
  hasChineseKnot?: boolean;
  chineseKnotPosition?: Vec3Tuple;
}

export interface PantryWallData {
  id: string;
  name: string;
  center: Vec3Tuple;
  size: Vec3Tuple;
  color: string;
  calendarPosition?: Vec3Tuple;
  chartPosition?: Vec3Tuple;
}

export interface TrackWaypointData {
  index: number;
  position: Vec3Tuple;
  forward: Vec3Tuple;
  right: Vec3Tuple;
  up: Vec3Tuple;
  width: number;
  banking: number;
  surfaceType: string;
  distanceFromStart: number;
}

export interface CheckpointData {
  index: number;
  id: string;
  label: string;
  waypointIndex: number;
  position: Vec3Tuple;
  forward: Vec3Tuple;
  width: number;
  surfaceType: string;
}

export interface RampData {
  id: string;
  name: string;
  type: string;
  start: Vec3Tuple;
  apex: Vec3Tuple;
  end: Vec3Tuple;
  width: number;
  slopeNormal: Vec3Tuple;
  boostMultiplier: number;
  description: string;
}

export interface StaticObstacleData {
  id: string;
  name: string;
  type: string;
  colliderType: 'box' | 'cylinder' | 'sphere';
  position: Vec3Tuple;
  size: Vec3Tuple;
  radius?: number;
  rotationY: number;
  color: string;
  secondaryColor?: string;
  stickStart?: Vec3Tuple;
  stickEnd?: Vec3Tuple;
  description?: string;
}

export interface DynamicPropData {
  id: string;
  name: string;
  type: string;
  colliderType: 'box' | 'sphere';
  position: Vec3Tuple;
  size: Vec3Tuple;
  radius: number;
  mass: number;
  rotationY: number;
  color: string;
}

export interface KitchenSceneData {
  metadata: {
    title: string;
    version: string;
    coordinateSystem: string;
    counterHeight: number;
    floorHeight: number;
    totalTrackLength: number;
    waypointCount: number;
    checkpointCount: number;
  };
  startGrid: {
    position: Vec3Tuple;
    forward: Vec3Tuple;
    rotationY: number;
    rowSpacing: number;
    lateralSpacing: number;
  };
  architecture: {
    counterSlabs: CounterSlabData[];
    baseCabinets: BaseCabinetData[];
    upperCabinets: UpperCabinetData[];
    pantryAndWalls: PantryWallData[];
  };
  trackWaypoints: TrackWaypointData[];
  checkpoints: CheckpointData[];
  ramps: RampData[];
  staticObstacles: StaticObstacleData[];
  dynamicProps: DynamicPropData[];
}

export interface DynamicPropBody {
  data: DynamicPropData;
  mesh: THREE.Object3D;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  angularVelocity: THREE.Vector3;
  rotation: THREE.Euler;
  restY: number;
  hitCount: number;
}

export type CameraMode = 'CHASE' | 'OVERHEAD' | 'COCKPIT' | 'OVERVIEW';
export type GameMode = 'GP' | 'TIME_TRIAL';

export interface VehicleInputState {
  throttle: number; // 0..1
  brake: number; // 0..1
  steer: number; // -1..1 (left is +1 in Three.js yaw, right is -1)
  drift: boolean;
  boost: boolean;
  respawn: boolean;
}
