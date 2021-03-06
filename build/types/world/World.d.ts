import * as THREE from 'three';
import * as CANNON from 'cannon';
import { CameraOperator } from '../core/CameraOperator';
import { Stats } from '../../lib/utils/Stats';
import { CannonDebugRenderer } from '../../lib/cannon/CannonDebugRenderer';
import { InputManager } from '../core/InputManager';
import { LoadingManager } from '../core/LoadingManager';
import { InfoStack } from '../core/InfoStack';
import { IWorldEntity } from '../interfaces/IWorldEntity';
import { IUpdatable } from '../interfaces/IUpdatable';
import { Character } from '../characters/Character';
import { Path } from './Path';
import { Vehicle } from '../vehicles/Vehicle';
import { DynamicObject } from './DynamicObject';
import { Scenario } from './Scenario';
import { Sky } from './Sky';
export declare class World {
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    composer: any;
    stats: Stats;
    graphicsWorld: THREE.Scene;
    sky: Sky;
    physicsWorld: CANNON.World;
    parallelPairs: any[];
    physicsFrameRate: number;
    physicsFrameTime: number;
    physicsMaxPrediction: number;
    clock: THREE.Clock;
    renderDelta: number;
    logicDelta: number;
    requestDelta: number;
    sinceLastFrame: number;
    justRendered: boolean;
    params: any;
    inputManager: InputManager;
    cameraOperator: CameraOperator;
    timeScaleTarget: number;
    console: InfoStack;
    cannonDebugRenderer: CannonDebugRenderer;
    scenarios: Scenario[];
    characters: Character[];
    vehicles: Vehicle[];
    dynamics: DynamicObject[];
    paths: Path[];
    scenarioGUIFolder: any;
    updatables: IUpdatable[];
    fuelPump: THREE.Object3D;
    mechZone: THREE.Object3D;
    clothingStorePoint: THREE.Object3D;
    vendingMachine: THREE.Object3D;
    private lastScenarioID;
    dispatched: boolean;
    policeSiren: any;
    target1: THREE.Object3D;
    target2: THREE.Object3D;
    target3: THREE.Object3D;
    target4: THREE.Object3D;
    target5: THREE.Object3D;
    target6: THREE.Object3D;
    target7: THREE.Object3D;
    target8: THREE.Object3D;
    target9: THREE.Object3D;
    target10: THREE.Object3D;
    target11: THREE.Object3D;
    target12: THREE.Object3D;
    target13: THREE.Object3D;
    target14: THREE.Object3D;
    target15: THREE.Object3D;
    pathCity1: THREE.Object3D;
    pathCity2: THREE.Object3D;
    pathCity3: THREE.Object3D;
    pathCity4: THREE.Object3D;
    pathCity5: THREE.Object3D;
    pathCity6: THREE.Object3D;
    pathCity7: THREE.Object3D;
    pathCity8: THREE.Object3D;
    pathCity9: THREE.Object3D;
    pathCity10: THREE.Object3D;
    pathCity11: THREE.Object3D;
    pathCity12: THREE.Object3D;
    pathCity13: THREE.Object3D;
    pathCity14: THREE.Object3D;
    pathCity15: THREE.Object3D;
    pathCity16: THREE.Object3D;
    pathCity17: THREE.Object3D;
    pathCity18: THREE.Object3D;
    pathCity19: THREE.Object3D;
    pathCity20: THREE.Object3D;
    pathCity21: THREE.Object3D;
    pathCity22: THREE.Object3D;
    pathCity23: THREE.Object3D;
    pathCity24: THREE.Object3D;
    pathOutback1: THREE.Object3D;
    pathOutback2: THREE.Object3D;
    pathOutback3: THREE.Object3D;
    pathOutback4: THREE.Object3D;
    pathOutback5: THREE.Object3D;
    pathOutback6: THREE.Object3D;
    pathOutback7: THREE.Object3D;
    pathOutback8: THREE.Object3D;
    pathOutback9: THREE.Object3D;
    pathOutback10: THREE.Object3D;
    pathOutback11: THREE.Object3D;
    pathOutback12: THREE.Object3D;
    pathOutback13: THREE.Object3D;
    pathOutback14: THREE.Object3D;
    pathOutback15: THREE.Object3D;
    pathOutback16: THREE.Object3D;
    pathOutback17: THREE.Object3D;
    pathOutback18: THREE.Object3D;
    pathOutback19: THREE.Object3D;
    pathOutback20: THREE.Object3D;
    pathOutback21: THREE.Object3D;
    pathOutback22: THREE.Object3D;
    pathOutback23: THREE.Object3D;
    pathOutback24: THREE.Object3D;
    pathOutback25: THREE.Object3D;
    pathOutback26: THREE.Object3D;
    pathOutback27: THREE.Object3D;
    pathOutback28: THREE.Object3D;
    pathOutback29: THREE.Object3D;
    pathOutback30: THREE.Object3D;
    pathOutback31: THREE.Object3D;
    pathOutback32: THREE.Object3D;
    pathOutback33: THREE.Object3D;
    pathOutback34: THREE.Object3D;
    pathOutback35: THREE.Object3D;
    pathOutback36: THREE.Object3D;
    pathOutback37: THREE.Object3D;
    cityStop1: THREE.Object3D;
    train: THREE.Object3D;
    missionGiver: THREE.Object3D;
    missionObjective: THREE.Object3D;
    otherPlayers: any[];
    otherOnline: {};
    otherVehicles: any[];
    socket: import("socket.io-client").Socket<import("socket.io-client/build/typed-events").DefaultEventsMap, import("socket.io-client/build/typed-events").DefaultEventsMap>;
    audioSrc: any;
    shootEndAudio: any;
    reloadAudio: any;
    noAmmoAudio: any;
    glassBreak: any;
    heistAlarm: any;
    suspenseStart: any;
    suspenseLoop: any;
    img: any;
    jewelStore: THREE.Object3D;
    jewelryHeist: any;
    worldTime: number;
    pathsOutback: any[];
    blackjack: any;
    basketballHoop: any;
    treeArea: any;
    apartmentSpawn: any;
    windTurbine: THREE.Object3D;
    factoryMission: any[];
    particleGroup: any[];
    muzzle1: any;
    screenShake: any;
    zombieNPCs: any[];
    playerInControl: any;
    bloodParticles: THREE.Object3D;
    hitSmokeParticles: THREE.Object3D;
    muzzleParticles: THREE.Object3D;
    objectiveDeathCounter: number;
    bloodSplash: any;
    lootCrate: any;
    lootChute: any;
    lootParent: THREE.Object3D;
    sunObject: THREE.Object3D;
    zombiePrefab: Character;
    zombieDetonPrefab: Character;
    scenePath: string;
    constructor(worldScenePath?: any);
    shakeEverything(): void;
    spawnNewAI(npcType: any, npcRole: any): void;
    spawnOthers(id: any): void;
    spawnDetonation(xPos: any, yPos: any, zPos: any): void;
    snowingEffect(): void;
    hitSmokeEffect(xPos: any, yPos: any, zPos: any): void;
    bloodEffect(xPos: any, yPos: any, zPos: any): void;
    bloodShader(offset: number): void;
    muzzleEffect(xPos: any, yPos: any, zPos: any): void;
    spawnOtherVehicles(): void;
    playDispatch(): void;
    playDeath(): void;
    playCityAmbience(): void;
    playAudio(obj: any): void;
    initJewelHeist(): void;
    playBlackjackWin(): void;
    playBlackjackDeal(): void;
    playSuccess(): void;
    playVendingMachine(): void;
    playSkid(obj: any): void;
    initExplode(obj: any): void;
    playAmbienceSFX1(obj: any): void;
    playAmbienceSFX2(obj: any): void;
    playPlaneStart(obj: any): void;
    playPlaneLoop(obj: any): void;
    playPlaneEnd(obj: any): void;
    playRadio(obj: any): void;
    playStartup(obj: any): void;
    initHeliSFX(obj: any): void;
    initDriveSFX(obj: any): void;
    playHeli(obj: any): void;
    playEquip(): void;
    playMission(): void;
    playOpenCar(): void;
    playCloseCar(): void;
    playCarIdle(obj: any): void;
    updateWorldTime(): void;
    playShootEnd(): void;
    update(timeStep: number, unscaledTimeStep: number): void;
    updatePhysics(timeStep: number): void;
    isOutOfBounds(position: CANNON.Vec3): boolean;
    outOfBoundsRespawn(body: CANNON.Body, position?: CANNON.Vec3): void;
    updateSocket(): void;
    /**
     * Rendering loop.
     * Implements fps limiter and frame-skipping
     * Calls world's "update" function before rendering.
     * @param {World} world
     */
    render(world: World): void;
    setTimeScale(value: number): void;
    add(worldEntity: IWorldEntity): void;
    registerUpdatable(registree: IUpdatable): void;
    remove(worldEntity: IWorldEntity): void;
    unregisterUpdatable(registree: IUpdatable): void;
    loadScene(loadingManager: LoadingManager, gltf: any): void;
    launchScenario(scenarioID: string, loadingManager?: LoadingManager): void;
    restartScenario(): void;
    clearEntities(): void;
    scrollTheTimeScale(scrollAmount: number): void;
    updateControls(controls: any): void;
    private generateHTML;
    getTerrainPixelData(img: any, scale: any): any;
    loadRealHeight(world: World): void;
    spawnTrees(world: World): void;
    loadHeight(world: World): void;
    loadHeightOnceMore(world: World): void;
    loadHeightmap(world: World): void;
    startMission(mission_id: any): void;
    private createParamsGUI;
}
