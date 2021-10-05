import * as CANNON from 'cannon';
import * as THREE from 'three';
import { Vehicle } from './Vehicle';
import { IControllable } from '../interfaces/IControllable';
import { EntityType } from '../enums/EntityType';
export declare class Car extends Vehicle implements IControllable {
    entityType: EntityType;
    drive: string;
    get speed(): number;
    private _speed;
    private fuel;
    private steeringWheel;
    private airSpinTimer;
    private steeringSimulator;
    private gear;
    private brakeForce;
    private shiftTimer;
    private timeToShift;
    private canTiltForwards;
    private characterWantsToExit;
    carObject: THREE.Object3D;
    inMechShop: boolean;
    private handbrakeUsed;
    sound: any;
    private rpm;
    private shiftReducer;
    initiated: boolean;
    updated: boolean;
    audioSrc: any;
    skidSrc: any;
    hornSrc: any;
    shiftSrc: any;
    crashSrc: any;
    crashTempSrc: any;
    hasStarted: boolean;
    spoilerPart: any;
    intakePart: any;
    frontBumperPart: any;
    backBumperPart: any;
    sideBumperPartL: any;
    sideBumperPartR: any;
    bodyPart: any;
    doorLeftPart: any;
    doorRightPart: any;
    seatsPart: any;
    isCustomizable: boolean;
    noAccel: boolean;
    shiftDecall: boolean;
    shiftRandomizer: number;
    shiftTotal: number;
    taillights: THREE.Object3D;
    redFlat: any;
    blueFlat: any;
    light1: any;
    light2: any;
    light3: any;
    sirenList: any[];
    sirenDelay: number;
    animateSiren: boolean;
    headLight: any;
    headLightTarget: any;
    headLightPos: THREE.Object3D;
    driftTimer: number;
    skidLine: THREE.Object3D;
    constructor(gltf: any);
    collisionSFX(e: any): void;
    noDirectionPressed(): boolean;
    findAudioSource(): void;
    toggleLight(): void;
    toggleBars(event: any): void;
    toggleSideBars(event: any): void;
    toggleIntakes(event: any): void;
    toggleSpoiler(event: any): void;
    toggleNeon(event: any): void;
    changeColor(): void;
    audioDriver(clip: any): void;
    createSkidMarks(forward: any): void;
    update(timeStep: number): void;
    shiftUp(): void;
    shiftDown(): void;
    physicsPreStep(body: CANNON.Body, car: Car): void;
    hornManager(shouldPlay: any): void;
    engineBreak(): void;
    controlLights(shouldUse: boolean): void;
    controlSiren(isOn: boolean): void;
    onInputChange(): void;
    inputReceiverInit(): void;
    fuelUpVehicle(): void;
    readCarData(gltf: any): void;
}