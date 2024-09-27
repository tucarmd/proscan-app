import { PrintType, EnumMonitorStatus, EnumMessageOilLife, EnumMessageBrakeLife } from '../models/app.enum';
import { EnumLedStatus, SeverityLevel } from '../models/app.enum';
import { User } from '../models/app.model';
import { Ofm_Item, Oem_Item } from './innova-tool-models';

export class BaseApiModel {
  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  toString(): string {
    let body = Object.assign({}, this);
    if (body['message']) {
      delete body['message'];
    }
    return JSON.stringify(body);
  }
}

export class BaseApiResponse extends BaseApiModel {
  success?: boolean;
  code?: number;
  description?: string;
}

export class ApiDataResponse extends BaseApiResponse {
  message?: BaseApiResponse;
}
export class FixPartItem {
  link: string;
  name: string;
  price: string;
  amount: string;
  image: string;
  largeImage: string;
  keyword: string;
  partNumber: string;
  asin: string;
  quantity: string;
  id: string;
}

export class MostLikelyFixFixesItem {
  fixId: string;
  name: string;
  errorCode: string;
  fixNameId: string;
  description: string;
  fixRating: number;
  laborString: string;
  laborRateString: string;
  laborCostString: string;
  additionalCostString: string;
  estimatedPartsCostString: string;
  estimatedTotalCostString: string;
  estimatedTotalLaborCostString: string;
  buyAllPartItemsUrl: string;
  fixParts: FixPartItem[];
  relatedArticles: [];
}
export class ApiGetList extends ApiDataResponse {
  years?: number[];
  makes?: string[];
  models?: string[];
}
export class InfoModalVehicle {
  year: number;
  make: string;
  model: string;
}
export class ApiDecodeVinResponse extends ApiDataResponse {
  vehicleId: string;
  vin: string;
  photo: string;
  make: string;
  year: number | string;
  model: string;
  engineType: string;
  transmissionType: string;
  mileage: number;
  supportedModules?: Oem_Item[]

  get vehicleName() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

export interface OemModuleItem {
  ModuleName: string;
  SubSystem: number;
  System: number;
  Group: number;
  InvalidDTC: number;
  Dtcs: { Code; Def; Type }[];
}

export class TirePressureItem implements Ofm_Item {
}

export class ApiCreateReportRequest {
  Imei: string;
  WorkOrderNumber: string;
  Status: number;
  VinProfileRaw: string;
  MonitorStatusEcmRaw: string;
  MonitorStatusTcmRaw: string;
  FreezeFrameEcmRaw: string;
  FreezeFrameTcmRaw: string;
  DtcsEcmRaw: string;
  DtcsTcmRaw: string;
  SpecialTestRaw: string;
  VehicleInfoEcmRaw: string;
  VehicleInfoTcmRaw: string;
  OemModuleRaw: string;
  Vin: string;
  DongleId: string;
  Mileage: number;
  RawDataVersion: number = 5;
  UsbProductId: number = 720;
  // OEM
  BatteryLife?: number | string;
  OilLife?: string;
  brakePadLife?: { value: string; status: string };;
  OilLevel?: number | string;
  CoolantLevel?: any;
  Modules: OemModuleItem[];
  TirePressures: TirePressureItem[];
  scanningType?: PrintType;
  DriveCycles: DriveCycleMonitorItem[];
  Retailer: string;
  ReportNumber: string;
  frontbrakePadLife?: { value: string; status: string };
  rearbrakePadLife?: { value: string; status: string };
  CustomScanModules: any;
  Language: string;
  additionalInfo: {
    caliDs: string[];
    cvNs: string[];
    ipTs: any[];
    modules?: string[];
  };
  warningLightStatus: any[];
  RegionalUnit: string;
  freezeFrames: { pid, code, value }[];
  constructor(obj?: ApiCreateReportRequest) {
    Object.assign(this, obj);
  }
}
export class ApiUpdateReportRequest {
  ReportId: string;
  BatteryLife?: number;
  OilLife?: string;
  BrakePadLife?: string;
  OilLevel?: number;
  CoolantLevel?: number;
  LeftFrontTirePressure?: number;
  LeftRearTirePressure?: number;
  RightFrontTirePressure?: number;
  RightRearTirePressure?: number;
  Modules: OemModuleItem[];
}

export class VehicleInfo {
  engineType: string;
  isActive?: boolean;
  make: string;
  manufacturer?: string;
  mileage?: number;
  model: string;
  nickName?: string;
  transmission?: string;
  transmissionType?: string;
  vehicleId?: string;
  vin: string;
  year: number;
  photo?: string;
}
export interface CustomerInfo {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  updatedDateTime: any;
}

export interface VehicleAdditionalInfo {
  caliDs: string[];
  cvNs: string[];
  ipTs: any[];
  modules?: string[];
  protocol?: string;
}

interface ReportModule {
  milStatus: string;
  numberOfDTCs: number;
  primaryDTC: {
    code;
    description;
    laymansTermSeverityLevel?;
    laymansTermSeverityLevelDefinition?;
    numberOfTSBs?;
    conditions?
  };
  storedDTCs: {
    code;
    description;
    laymansTermSeverityLevel?;
    laymansTermSeverityLevelDefinition?;
    numberOfTSBs?;
    conditions?;
  }[];
  pendingDTCs: {
    code;
    description;
    laymansTermSeverityLevel?;
    laymansTermSeverityLevelDefinition?;
    numberOfTSBs?;
    conditions?;
  }[];
  permanentDTCs: {
    code;
    description;
    laymansTermSeverityLevel?;
    laymansTermSeverityLevelDefinition?;
    numberOfTSBs?;
    conditions?;
  }[];
  mostLikelyFixes?: {
    code;
    description;
    laymansTermSeverityLevel?;
    laymansTermSeverityLevelDefinition?;
    fixParts: any[];
    numberOfTSBs?;
    name?;
    additionalCostString?;
    buyAllPartItemsUrl?;
    errorCode?;
    estimatedPartsCostString?;
    estimatedTotalCostString?;
    estimatedTotalLaborCostString?;
    fixId?;
    fixNameId?;
    fixRating?;
    laborCostString?;
    laborRateString?;
    laborString?;
    relatedArticles?: any[];
  }[];
}

export class ApiCreateReportResponse extends ApiDataResponse {
  reportId: string;
  reportType: number; // not use
  scanningType: number;
  reportNumber: any;
  createdDateTime: string;
  vin: string;
  ledStatus?: EnumLedStatus;
  totalDtc: number;
  timeRequested: number;
  totalFixesApproved: number;
  totalModulesWithDTC: number;
  totalModulesWithoutDTC: number;
  mostLikelyFixFixes: MostLikelyFixFixesItem[];
  driveCycles: DriveCycleMonitorItem[];
  monitors: { name; shortName; description; status: EnumMonitorStatus }[];
  freezeFrames: { pid; code; value }[];
  troubleCodes: {
    milDtc: { code; description };
    storedDTCs: { code; description }[];
    pendingDTCs: { code; description }[];
    permanentDTCs: { code; description }[];
  };
  delayTime?: number;
  // constructor(obj?: any) {
  //   super(obj);
  //   // if (this.mostLikelyFixFixes) {
  //   //   this.mostLikelyFixFixes = this.mostLikelyFixFixes.map(e => e as any);
  //   // }
  // }
  vehicle?: VehicleInfo;
  customerInfo?: CustomerInfo;
  additionalInfo?: VehicleAdditionalInfo;
  overview?: {
    numberOfFailedModules: number;
    numberOfPassedModules: number;
    numberOfMaintenances: number;
    nextMileage: number;
    numberOfPredictedFailures: number;
    numberOfRecalls: number;
    numberOfTSBs: number;
    ledStatus: number;
    batteryLife?: { value: string; status: string };
    oilLife?: { value: string; status: string };
    brakePadLife?: { value: string; status: string };
    frontbrakePadLife?: { value: string; status: string };
    rearbrakePadLife?: { value: string; status: string };
    oilLevel?: string;
    coolantLevel: string;
    warrantyStatus: string;
    tirePressure: {
      leftFrontTirePressure: any;
      leftRearTirePressure: any;
      rightFrontTirePressure: any;
      rightRearTirePressure: any;
    };
  };

  powertrainModule: ReportModule;
  absModule: any;
  srsModule: any;
  otherModules: {
    numberOfModules: number;
    modules: {
      group: string;
      moduleName: string;
      subSystem: string;
      system: string;
      numberOfDTCs: number;
      dtCs: { code; def; type; }[];
    }[];
  }
  passedModules: {
    numberOfModules?: number;
    modules?: any[];
    monitors?: MonitorItem[];
  };
  availableModules?: {
    numberOfModules?: number;
    modules?: any[];
  };

  // tsbAndRecalls: {
  //   vehicle: VehicleInfo;
  //   numberOfSafetyRecalls: number;
  //   numberOfTSBCategory: number;
  //   safetyRecalls: tsbRecallModel[];
  //   tsbCategories?: TsbCategoryModel[];
  // }

  /** Other properties for parsing data on view */
  get isMILOn() {
    const status_On = 'ON';
    if (this.powertrainModule) {
      if (typeof this.powertrainModule.milStatus === 'string') {
        return this.powertrainModule.milStatus.toUpperCase() === status_On;
      }
      return !!(this.powertrainModule.primaryDTC && this.powertrainModule.primaryDTC.code);
    }
    return true;
  }

  get isLedOff() {
    return this.ledStatus === EnumLedStatus.Off;
  }

  get isLedGreen() {
    return this.ledStatus === EnumLedStatus.Green;
  }

  get isLedYellow() {
    return this.ledStatus === EnumLedStatus.Yellow;
  }

  get isLedRed() {
    return this.ledStatus === EnumLedStatus.Red;
  }

  get hasDtc() {
    return this.powertrainModule ? this.powertrainModule.numberOfDTCs > 0 : (this.totalDtc ? this.totalDtc > 0 : false);
  }

  get hasFixes() {
    return this.mostLikelyFixFixes && this.mostLikelyFixFixes.length > 0;
  }

  get hasMonitors() {
    return this.monitors && this.monitors.length > 0;
  }

  get primaryDtc() {
    return this.troubleCodes && this.troubleCodes.milDtc
      ? this.troubleCodes.milDtc
      : null;
  }

  get verifiedFixes() {
    return this.mostLikelyFixFixes
      ? this.mostLikelyFixFixes.map(f => f as VehicleFix)
      : [];
  }

  get localCreateReportTime() {
    return new Date(this.createdDateTime + ' UTC').toString();
  }
  get ledDTC() {
    switch (this.ledStatus) {
      case EnumLedStatus.Green: {
        return { class: 'line-success', src: '/assets/svg/inv-tbl-green.svg', text: 'Ready' }
      }
      case EnumLedStatus.Yellow: {
        return { class: 'line-warning', src: '/assets/svg/inv-tbl-yellow.svg', text: 'Not Ready' }
      }
      case EnumLedStatus.Red: {
        return { class: 'line-danger', src: '/assets/svg/inv-tbl-red.svg', text: 'Not Complete' }
      }
      default: {
        return { class: 'line-danger', src: '/assets/svg/inv-tbl-red.svg', text: 'Not Complete' }
      }
    }
  }
  get battery() {
    if (this.overview.batteryLife) {
      switch (this.overview.batteryLife.status) {
        case 'Good': {
          return { class: 'line-success', src: '/assets/svg/inv-battery-life-green.svg', text: 'Good' }
        }
        case 'Replace Battery': {
          return { class: 'line-danger', src: '/assets/svg/inv-battery-life-red.svg', text: 'Replace Battery' }
        }
        default: {
          return { class: 'line-danger', src: '/assets/svg/inv-battery-life-red.svg', text: 'Replace Battery' }
        }
      }
    }
  }
  get severityLevel() {
    if (this.powertrainModule.primaryDTC) {
      switch (this.powertrainModule.primaryDTC.laymansTermSeverityLevel) {
        case SeverityLevel.low: {
          return 'Low Severity';
        }
        case SeverityLevel.medium: {
          return 'Medium Severity';
        }
        case SeverityLevel.high: {
          return 'High Severity';
        }
        default: { return ''; }
      }
    }
  }
  get highlightWidgetTirePressure() {
    if (
      this.overview.tirePressure && this.overview.tirePressure.leftFrontTirePressure && this.overview.tirePressure.leftFrontTirePressure.status == EnumStatusTirePressure.Low ||
      this.overview.tirePressure && this.overview.tirePressure.leftRearTirePressure && this.overview.tirePressure.leftRearTirePressure.status == EnumStatusTirePressure.Low ||
      this.overview.tirePressure && this.overview.tirePressure.rightFrontTirePressure && this.overview.tirePressure.rightFrontTirePressure.status == EnumStatusTirePressure.Low ||
      this.overview.tirePressure && this.overview.tirePressure.rightRearTirePressure && this.overview.tirePressure.rightRearTirePressure.status == EnumStatusTirePressure.Low
    ) {
      return 'line-danger';
    }
    else {
      return 'line-success';
    }
  }
  get localUpdateDateTime() {
    return new Date(this.customerInfo.updatedDateTime + ' UTC').toString();
  }
  get isExpiredWarranty() {
    return this.overview.warrantyStatus === 'Expired';
  }
  get isPassedOilLife() {
    return this.overview.oilLife && this.overview.oilLife.status ? this.overview.oilLife.status === EnumMessageOilLife.SUCCESS : false;
  }
  get isGoodConditionBrakePadLife() {
    return this.overview.brakePadLife && this.overview.brakePadLife.status ? this.overview.brakePadLife.status === EnumMessageBrakeLife.SUCCESS : false;
  }
  get isGoodConditionFrontBrakePadLife() {
    return this.overview.frontbrakePadLife && this.overview.frontbrakePadLife.status ? this.overview.frontbrakePadLife.status === EnumMessageBrakeLife.SUCCESS : false;
  }
  get isGoodConditionRearBrakePadLife() {
    return this.overview.rearbrakePadLife && this.overview.rearbrakePadLife.status ? this.overview.rearbrakePadLife.status === EnumMessageBrakeLife.SUCCESS : false;
  }
}

// export class ReportSummary {
//   id;
//   reportNumber: number;
//   mileage;
//   createdDate;
//   createdTime;
//   vin;
//   vehicleName;
//   customerName;
//   customerPhone;
//   customerEmail;
//   totalDtcs: number;
//   totalModules: number;
//   scanningType: PrintType;
// }

// export class ApiGetReportsResponse extends ApiDataResponse {
//   currentPage?: number;
//   pageSize?: number;
//   totalPages?: number;
//   totalRecords?: number;
//   data: ReportSummary[];
// }

class VehicleFix {
  fixId: string;
  name: string;
  errorCode: string;
  fixNameId: string;
  description: string;
  fixRating: number;
  laborString: string;
  laborRateString: string;
  laborCostString: string;
  additionalCostString: string;
  estimatedPartsCostString: string;
  estimatedTotalCostString: string;
  estimatedTotalLaborCostString: string;
}
export class MonitorItem {
  name: string;
  shortName: string;
  description: string;
  status: EnumMonitorStatus;
}
export class DataUpdateInfo {
  ReportId: string;
  FirstName: string;
  LastName: string;
  Phone: string;
  email: string;
  updatedDateTime: number;
  constructor(
    ReportId: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    updatedDateTime?: any
  ) {
    this.ReportId = ReportId;
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Phone = phone;
    this.email = email;
    this.updatedDateTime = updatedDateTime || new Date().getTime();
  }
}
export class ApiReportPrimaryTSBs extends ApiDataResponse {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
  data: TsbModel[];
}

export class ApiReportTSBs extends ApiDataResponse {
  vehicle: VehicleInfo;
  numberOfSafetyRecalls: number;
  numberOfTSBCategory: string;
  tsbCategories: TsbCategoryModel[];
}
// new
export class ApiTsbsAndRecall extends ApiDataResponse {
  vehicle: VehicleInfo;
  numberOfSafetyRecalls: number;
  numberOfTSBCategory: number;
  safetyRecalls: tsbRecallModel[];
  tsbCategories?: TsbCategoryModel[];
}

export class ApiReportSearchTSBs {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
  data: TsbCategoryModel[];
}

export class TsbCategoryModel {
  id: number;
  description: string;
  tsbCount: number;
  totalPages?: number;
  currentPage?: number;
  tsbs: TsbModel[];
  constructor(obj) {
    Object.assign(this, obj)
  }
}

export class TsbModel {
  tsbId: number;
  autoSystem: string;
  description: string;
  issueDate: string;
  issueDateString: string;
  fileNamePDF: string;
  manufacturerNumber: string;
  tsbTypes: string[];
  tsbUrl: string;
}
export class tsbRecallModel {
  campaignNumber: string;
  defectConsequence: string;
  defectCorrectiveAction: string;
  defectDescription: string;
  recallDate: string;
  recallDateString: string;
  recordNumber: number;
  recallDateFormat: string;
}
export class ApiReportTsbRecall {
  currentPage?: number;
  pageSize?: number;
  totalPages?: number;
  totalRecords?: number;
  data?: tsbRecallModel[];
}
export class ApiReportFailedModules extends ApiDataResponse {
  reportId: string;
  ledStatus: EnumLedStatus;
  driveCycles: DriveCycleMonitorItem[];
  monitors: MonitorItem[];
  freezeFrames: { pid; code; name; value }[];
  powertrainModule: {
    numberOfDTCs: number;
    primaryDTC: {
      code;
      description;
      laymansTermSeverityLevel;
      laymansTermSeverityLevelDefinition;
      numberOfTSBs?;
    };
    storedDTCs: {
      code;
      description;
      laymansTermSeverityLevel;
      laymansTermSeverityLevelDefinition;
      numberOfTSBs?;
    }[];
    pendingDTCs: {
      code;
      description;
      laymansTermSeverityLevel;
      laymansTermSeverityLevelDefinition;
      numberOfTSBs?;
    }[];
    permanentDTCs: {
      code;
      description;
      laymansTermSeverityLevel;
      laymansTermSeverityLevelDefinition;
      numberOfTSBs?;
    }[];
    mostLikelyFixes: {
      code;
      description;
      laymansTermSeverityLevel;
      laymansTermSeverityLevelDefinition;
      fixParts: any[];
      numberOfTSBs?;
    }[];
  };
  absModule: {
    numberOfDTCs: number;
    dtCsNoFix: any[];
    dtCsWithFix: any[];
  };
  srsModule: {
    numberOfDTCs: number;
    dtCsNoFix: any[];
    dtCsWithFix: any[];
  };
  otherModules: {
    numberOfModules: number;
    modules: {
      group: string;
      moduleName: string;
      subSystem: string;
      system: string;
      numberOfDTCs: number;
      dtCs: { code; def; type; }[];
    }[];
  };
  vehicle: VehicleInfo;
  customerInfo: CustomerInfo;
  additionalInfo?: {
    caliDs: string[];
    cvNs: string[];
    ipTs: any[];
    modules?: string[]
  };
  get hasDTC() {
    return this.powertrainModule && this.powertrainModule.numberOfDTCs > 0;
  }

}
export enum EnumStatusTirePressure {
  NotReady = 'Not Ready',
  Ok = 'Ok',
  High = 'High',
  Low = 'Low'
}
export class ApiReportOverview extends ApiDataResponse {
  reportId: string;
  reportNumber: number;
  createdDateTime: string;
  ledStatus: EnumLedStatus;
  vehicle: VehicleInfo;
  customerInfo: CustomerInfo;
  additionalInfo?: {
    caliDs: string[];
    cvNs: string[];
    ipTs: string[];
    modules: any[];
  };
  driveCycles: DriveCycleMonitorItem[];
  overview: {
    numberOfFailedModules: number;
    numberOfPassedModules: number;
    numberOfMaintenances: number;
    nextMileage: number;
    numberOfPredictedFailures: number;
    numberOfRecalls: number;
    numberOfTSBs: number;
    ledStatus: EnumLedStatus;
    batteryLife?: { value?: string; status?: string };
    oilLife?: { value?: string; status?: string };
    brakePadLife?: { value?: string; status?: string };
    oilLevel?: string;
    coolantLevel: string;
    warrantyStatus: string;
    tirePressure?: {
      leftFrontTirePressure?: { value: number; status: EnumStatusTirePressure; thresholdValue?; standardValue?; };
      leftRearTirePressure?: { value: number; status: EnumStatusTirePressure; thresholdValue?; standardValue?; };
      rightFrontTirePressure?: { value: number; status: EnumStatusTirePressure; thresholdValue?; standardValue?; };
      rightRearTirePressure?: { value: number; status: EnumStatusTirePressure; thresholdValue?; standardValue?; };
    };
  };
  monitors: { name, shortName, description, status: EnumLedStatus }[];
  freezeFrames: { pid, code, value }[];
  get localCreateReportTime() {
    return new Date(this.createdDateTime + ' UTC').toString();
  }
  get localUpdateDateTime() {
    return new Date(this.customerInfo.updatedDateTime + ' UTC').toString();
  }
  get isExpiredWarranty() {
    return this.overview.warrantyStatus == 'Expired';
  };
  get isGoodConditionBrakePadLife() {
    return this.overview.brakePadLife && this.overview.brakePadLife.status ? this.overview.brakePadLife.status == 'Good Condition' : false;
  }
  get ledDTC() {
    switch (this.ledStatus) {
      case EnumLedStatus.Green: {
        return { class: 'line-success', src: '/assets/svg/inv-tbl-green.svg', text: 'Ready' }
      }
      case EnumLedStatus.Yellow: {
        return { class: 'line-warning', src: '/assets/svg/inv-tbl-yellow.svg', text: 'Not Ready' }
      }
      case EnumLedStatus.Red: {
        return { class: 'line-danger', src: '/assets/svg/inv-tbl-red.svg', text: 'Not Complete' }
      }
      default: {
        return { class: 'line-danger', src: '/assets/svg/inv-tbl-red.svg', text: 'Not Complete' }
      }
    }
  }
  get battery() {
    if (this.overview.batteryLife) {
      switch (this.overview.batteryLife.status) {
        case 'Good': {
          return { class: 'line-success', src: '/assets/svg/inv-battery-life-green.svg', text: 'Good' }
        }
        case 'Replace Battery': {
          return { class: 'line-danger', src: '/assets/svg/inv-battery-life-red.svg', text: 'Replace Battery' }
        }
        default: {
          return { class: 'line-danger', src: '/assets/svg/inv-battery-life-red.svg', text: 'Replace Battery' }
        }
      }
    }
  }
  // getCaseTPMS() {
  //   if (this.overview.tirePressure) {
  //     if (this.overview.tirePressure.leftFrontTirePressure &&
  //       this.overview.tirePressure.leftRearTirePressure &&
  //       this.overview.tirePressure.rightFrontTirePressure &&
  //       this.overview.tirePressure.rightRearTirePressure) {

  //     }
  //   }
  //   return;
  // }
  get highlightWidgetTirePressure() {
    if (
      this.overview.tirePressure && this.overview.tirePressure.leftFrontTirePressure && this.overview.tirePressure.leftFrontTirePressure.status == EnumStatusTirePressure.Low ||
      this.overview.tirePressure && this.overview.tirePressure.leftRearTirePressure && this.overview.tirePressure.leftRearTirePressure.status == EnumStatusTirePressure.Low ||
      this.overview.tirePressure && this.overview.tirePressure.rightFrontTirePressure && this.overview.tirePressure.rightFrontTirePressure.status == EnumStatusTirePressure.Low ||
      this.overview.tirePressure && this.overview.tirePressure.rightRearTirePressure && this.overview.tirePressure.rightRearTirePressure.status == EnumStatusTirePressure.Low
    ) {
      return 'line-danger';
    }
    else {
      return 'line-success';
    }
  }

}

export class ApiReportPassed extends ApiDataResponse {
  reportId: string;
  ledStatus: EnumLedStatus;
  monitors: { name; shortName; description; status: EnumLedStatus }[];
  numberOfModules: number;
  modules: string[];
}

export class ApiReportMaintenance extends ApiDataResponse {
  vehicle: VehicleInfo;
  nextMileage?: number;
  numberOfItems: number;
  totalEstimatedServiceCost?: number;

  retailer?: string;
  items: {
    id: string;
    mileage: number;
    name: string;
    description: string;
    laborCost: string;
    laborHour: string;
    laborRate: string;
    partsCost: string;
    additionalCost: string;
    totalCost: string;
    fixRating: number;
    buyAllPartItemsUrl: string;
    percentInMileage?: number;
    parts: {
      name?: string;
      partNumber?: string;
      keyword?: string;
      link?: string;
      image?: string;
      largeImage?: string;
      price?: string;
      amount?: number;
      asin: string;
      quantity: number;
      id: string;
    }[];
  }[];
}

export class ApiGetDtcDetailsResponse extends ApiDataResponse {
  dtcs: {
    code: string,
    conditions: string,
    description: string,
    possibleCauses: string,
    laymansTermSeverityLevel: number,
    laymansTermSeverityLevelDefinition: string,
    laymansTermsConditions: string,
    laymansTermsTitle: string,
    laymansTermDescription: string,
    numberOfTSBs: string,
  }[];
}
export class ApiDLCLocationResponse extends ApiDataResponse {
  year: number;
  make: string;
  model: string;
  locationNumber: number;
  access: string;
  comments: string;
  imageFileName: string;
  imageFileUrl: string;
  imageFileUrlSmall: string;
}
export class DriveCycleMonitorItem {
  id: number;
  name: string;
  status: EnumMonitorStatus;
  value: string;
  option: string[];
  note: string[];
  condition: string[];
  procedure: string[];
  constructor() {
    this.name = '';
    this.value = '';
    this.option = [];
    this.note = [];
    this.condition = [];
    this.procedure = [];
  }
}

export class ToolInfoSendDataLog {
  Vin: string;
  VehicleNickname?: string;
  Firmware: string;
  Bootloader: string;
  Database: string;
  dongleId?: string;
  UsbProductId?: number;
}
export const EnumScreenType = {
  MenuForm: 'menuform',
  TextForm: 'textform',
  InputForm: 'inputtextform',
  InfoValueForm: 'infovalform',
  Softkey: 'softkeyform',
  InfoMenuForm: 'infomenuform',
  Finish: 'FinishProcess',
  GotScreenEventData: 'GotScreenEventData',
  IncreaseLoadingPercent: 'IncreaseLoadingPercent',
  UpdateTextInModal: 'UpdateTextInModal'
}
export class CreateUser {
  EmailAddress: string;
  Password: string;
  ZipCode: number;
  ShopName?: string;
  FirstName?: string;
  LastName?: string;
  Address1?: string;
  Address2?: string;
  City?: string;
  State?: string;
}
export class ToolUser {
  id: string;
  status: number;
  usbProductId: string;
}
export class LoginUser {
  EmailAddress: string;
  Password: string;
  ZipCode: number;
  ShopName?: string;
  FirstName?: string;
  LastName?: string;
  Address1?: string;
  Address2?: string;
  City?: string;
  State?: string;
  tools: ToolUser;
}

export class LoginModel {
  UserName: string;
  Password: string;
}

export class ApiUserResponse extends ApiDataResponse {
  user: User;
  ticket: string;
  tools?: ToolUser;
}

export class ApiTokenResponse extends ApiDataResponse {
  ticket: string;
}

export class ApiRegisterDeviceResponse extends ApiDataResponse {
  user: User;
  ticket: string;
}

export class ApiDeviceInfoResponse extends ApiDataResponse {
  id: string;
  chipId: string;
  usbProductId: string;
  status: number;
  userId: string;
  transferCount: number;
  createdDateTime: string;
  buyFrom: string;
}

export class ApiEmailReportResponse extends ApiDataResponse {
  pdfUrl: string;
}
export class Retailer {
  id: string;
  name: string;
  website: string;
  spellings: string[];
}

export class ApiRetailers extends ApiDataResponse {
  numberOfItems: number;
  items: Retailer[];
}
export class ApiRetailerPartsForAdvanceAutoPart extends ApiDataResponse {
  imageUrl: string;
}
export class Battery {
  level: number;
  isPlugged: boolean;
  imgSrc: string;
}

export class DisplayToolBar {
  time: any;
  wifi: any;
  battery: Battery;
}

export class Product {
  id: string;
  sku: string;
  name: string;
  price: number;
  currency: string;
  priceString: string;
  unitOfMeasure: string;
}

export class ApiProducts extends ApiDataResponse {
  numberOfItems: number;
  items: Product[];
}

export class OrderInfo {
  CardNumber: string;
  CVN: string;
  ExpirationMonth: number;
  ExpirationYear: number;
  FirstName: string;
  LastName: string;
  Address1: string;
  Address2: string;
  City: string;
  Country: string;
  State: string;
  ZipCode: string;
  Products: OrderDetail[];
}

export class OrderDetail {
  constructor(sku: string, quantity: number) {
    this.SKU = sku;
    this.Quantity = quantity;
  }
  SKU: string;
  Quantity: number;
}

export class ApiOrderResponse extends ApiDataResponse {
  ticket: string;
  user: User;
}

export class ApiCheckUpgradeFirmwareResponse extends ApiDataResponse {
  firmwareVersion: string;
  bootloaderVersion: string;
  databaseVersion: string;
  releaseNotes: string;
  url: string;
  newFirmwareAvailable: boolean;
  newDatabaseAvailable: boolean;
  newBootloaderAvailable: boolean;
  newUpdateAvailable: boolean;
}
