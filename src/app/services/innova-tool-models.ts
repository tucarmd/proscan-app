import { enumInnovagroup } from './innova-vci-service/src/standard/enums';
import { UNIT_ID, GUI_LANGUAGE_ID } from './innova-vci-service/src/obd/vcistd';

export interface Ofm_Item {
  id?: number;
  name?: string;
  value?: string;
  unit?: string;
}

export interface Oem_Item {
  System: number;
  SubSystem: number;
  ModuleName: string;
  InnovaGroup: number;
  groupName: string;
  Dtcs?: any[];
  Status: InnovaToolModuleStatus;
  Skipped: boolean;
}

export interface Pid_ItemBase {
  id: number;
  name: string;
  desc?: string;
  value?: any;
  min?: number;
  max?: number;
  unit?: string;
  range: string;
}

export class PidBase {
  id: number;
  value: any;
  constructor(id: number = null, value: any = null) {
    this.id = id;
    this.value = value;
  }
}

// export class Pid_Item extends PidBase {
//   name: string;
//   unit: string;
//   size: number;
//   createdAt: number;
//   minValue: number;
//   maxValue: number;

//   constructor(
//     id: number = null,
//     value: any = null,
//     name: string = null,
//     size: number = null,
//     unit: string = null,
//     createdAt: number = null,
//     minValue: number = null,
//     maxValue: number = null
//   ) {
//     super(id, value);
//     this.name = name;
//     this.size = size;
//     this.unit = unit;
//     this.createdAt = createdAt ? createdAt : new Date().getTime();
//     this.minValue = minValue;
//     this.maxValue = maxValue;
//   }
// }

export interface VCIResponseData {
  vin: string;
  mileage?: number;
  dongleId: string;
  usbProductId: number;
  bootloaderVersion: string;
  firmwareVersion: string;
  databaseVersion: string;
  unitId: typeof UNIT_ID[keyof typeof UNIT_ID];
  langId: typeof GUI_LANGUAGE_ID[keyof typeof GUI_LANGUAGE_ID];

  emissionReadinessMonitor: string; // MIL status
  failedModules: number;
  driveCircle: any;
  // Optional
  batteryVoltage: any;
  oilLife: any;
  brakePadLife: any;
  frontbrakePadLife: any;
  rearbrakePadLife: any;
  oilLevel: any;
  coolantLevel: any;
  warningLightStatus: any;
  // OBD2
  vinProfile: string;
  freezeFrameEcm: string;
  freezeFrameTcm: string;
  freezeFrameDTCData: string[]; // [ "Code", "Status", "Def"]
  freezeFrameLDData: any;
  monitorEcm: string;
  monitorTcm: string;
  monitorData: {
    Complete: string[];
    Incomplete: string[];
    MIL: string;
  };
  milStatus: string;
  dtcEcm: string;
  dtcTcm: string;
  dtcInfoData: {
    Dtcs: string[][]; // [ "Code", "Status", "Def"]
    InvalidDTC: number;
    ModuleName: string;
  }[];
  vehicleInfoEcm: string;
  vehicleInfoTcm: string;
  vehicleInfoData: any;
  ymme: {
    engine: string;
    make: string;
    year: string;
    model: string;
    manufacturer?: string;
  };
  obdTest: any;
  // OEM Modules
  oemModules: {
    system;
    subsystem;
    modulename;
    group;
    Dtcs: { code; type; definition }[];
    Status?;
    InvalidDTC?;
    Skipped: boolean;
  }[];
  allSupportedModules: Oem_Item[];
  // tpms
  tirePressures: Ofm_Item[];
}


export enum InnovaVCIEvent {
  LINK_PROTOCOL = 'LINK_PROTOCOL',
  CONNECTED = 'CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
  USER_GUI_INFO = 'user:gui_info',
  INTERRUPT_PROCESS = "INTERRUPT_PROCESS",
  SCAN_STATUS = 'SCAN_STATUS',
  DEVICE_FOUND = 'DEVICE_FOUND',
  DEVICE_SELECTED = "DEVICE_SELECTED"
}

export enum InnovaToolFeatures {
  SpecialTest = 'Special Test',
  ActuatorTest = 'Actuator Test',
  OilReset = 'Oil Reset',
  BatteryReset = 'Battery Reset',
  SASCalib = 'Steering Angle Sensor',
  EPB = 'Electric Pad Brake',
  ABS_Bleeding = 'ABS Bleeding',
  DPF_Reset = 'DPF Reset',
  TPMS_Reset = "TPMS Relearn",
  Battery_Health_Check = "Battery/Alternator Test",
  Service_Reset = 'Service Reset',
}

export enum InnovaToolScreenType {
  MenuForm = 'menuform',
  TextForm = 'textform',
  InputForm = 'inputtextform',
  InfoValueForm = 'infovalform',
  Softkey = 'softkeyform',
  InfoMenuForm = 'infomenuform',
  Progressbar = 'progressbar',
  Finish = 'Finish',
  KeepAlive = 'KeepAlive'
}

export enum InnovaToolModuleStatus {
  Valid = 'Valid',
  Available = 'Available',
  NotSupported = 'Fail',
  Unknown = 'Unknown'
}

export enum InnovaToolLiveDataGroup {
  OBD2 = enumInnovagroup.einnovagroup_GROUP_OBDII,
  PCM = enumInnovagroup.einnovagroup_GROUP_ENH_PCM,
  ECM = enumInnovagroup.einnovagroup_GROUP_ENH_ECM,
  ABS = enumInnovagroup.einnovagroup_GROUP_ABS,
  SRS = enumInnovagroup.einnovagroup_GROUP_SRS
}

export interface LiveDataRecordEntry {
  createdAt: number;
  selectedPids?: Pid_ItemBase[];
  pids: Pid_ItemBase[];
  data: { id; value; unit: any; }[][];
  vehicleName?: string;
  vin: string;
}

export interface NewLiveDataRecordEntry {
  id?: number;
  createdAt: number;
  pids: Pid_ItemBase[];
  data: { id; value; unit: any; }[][];
  vehicleName?: string;
  vin: string;
}
