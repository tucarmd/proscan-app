import {
  InnovaToolModuleStatus,
  Oem_Item,
} from 'src/app/services/innova-tool-models';
import {
  ApiCreateReportResponse,
  ApiCreateReportRequest,
  OemModuleItem,
} from '../services/api.models';
import { UuidV4 } from '../services/uuid-v4';
import { ScanSettingItem } from './app.enum';
import { NewLiveDataRecordEntry } from '../services/innova-tool-models';

export class ApiModel {
  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class User extends ApiModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  businessId: string;
  businessName: string;
  timeZone: string;
  authorizationKey: string;
}

export class ApiMessage extends ApiModel {
  code: number;
  message: string;
  version: string;
  method: string;
  action: string;
}

export class ApiResponseData extends ApiModel {
  message: ApiMessage;

  get success() {
    return this.message && this.message.code === 0;
  }
}

export class ApiUserResponse extends ApiResponseData {
  data: User;
}

export class ApiBooleanResponse extends ApiResponseData {
  data: boolean;
}

export class VehicleModel extends ApiModel {
  id: string;
  nickname: string;
  vin: string;
  engineType: string;
  make: string;
  year: number;
  model: string;
  transmistion: string;
  mileage: number;
  trimLevel: string;
}

export class DlcLocationModel extends ApiModel {
  reportId: string;
  vin: string;
  engineType: string;
  make: string;
  year: number;
  model: string;
  locationNumber: number;
  access: string;
  comments: string;
  imageFileName: string;
  imageFileUrl: string;
  imageFileUrlSmall: string;
}

export class ReportModel extends ApiModel {
  id: string;
  reportNumber: number;
  workOrderNumber: string;
  createdDate: string;
  createdTime: string;
  vin: string;
  ymm: string;
  ymme: string;
  engine: string;
  mileage: number;
  timeAgo: string;
  primaryErrorCode: string;
  modulesScannedCount: number;
  totalErrorCodeCount: number;
  oilLevel?: number;
  brakePadLife?: number;
  batteryStatus: number;
  originalTirePressure?: number;
  lfTire?: number;
  rfTire?: number;
  lrTire?: number;
  rrTire?: number;
  tirePressureUnit?: string;
  totalDTCCount: number;
  modulesWithDTC: ModuleDtcModel[];
  modulesWithoutDTC: ModuleDtcModel[];
  modulesSkipped: ModuleDtcModel[];
  status: any;
  checkEngineLightStatus: number;
  urgencyOfRepairStatus: number;
  batteryVoltageStatus: number;
  powertrainCodes: PowertrainCodes;
}

export class PowertrainCodes {
  primaryCode: DtcItem;
  pendingCodes: DtcItem[];
  storedCodes: DtcItem[];
  permanentCodes: DtcItem[];
  otherCodeCount: number;
}

export class DtcItem {
  code: string;
  definition: string;
}

export class ReportHistoryItem {
  id: string;
  reportNumber: number;
  workOrderNumber: string;
  createdDateTimeUtc: string;
  createdDateTime: string;
  createdDate: string;
  createdTime: string;
  vin: string;
  ymm: string;
  ymme: string;
  engine: string;
  mileage: number;
  timeAgo: string;
  status: any;
}

export class ReportHistoryModel extends ApiModel {
  currentPage: number;
  pageSize: number;
  pageCount: number;
  rowCount: number;
  reportHistories: Array<ReportHistoryItem>;
}

export class ModuleDtcModel {
  id: string;
  fullName: string;
  name: string;
  shortName: string;
  system: string;
  subSystem: string;
  innovaGroup: string;
  dtcCount: number;
  dtcs: DtcModel[];
  index: number;
}

export class DtcModel {
  code: string;
  definition: string;
  type: any;
}

export class ApiVehicleResponse extends ApiResponseData {
  data: VehicleModel;
}

export class ApiMakesResponse extends ApiResponseData {
  data: Array<string>;
}

export class ApiModelsResponse extends ApiResponseData {
  data: Array<string>;
}

export class ApiYearsResponse extends ApiResponseData {
  data: Array<number>;
}

export class ApiDlcLocationResponse extends ApiResponseData {
  data: DlcLocationModel;
}

export class ApiReportResponse extends ApiResponseData {
  data: ReportModel;
}

export class ApiReportHistoryResponse extends ApiResponseData {
  data: ReportHistoryModel;
}
export class ModuleItem {
  ModuleName: string;
  System: number;
  SubSystem: number;
  InnovaGroup?: number;
  Dtcs: Array<any>;
  Skipped: number;
}

export class Report extends ApiCreateReportResponse {
  constructor(obj?: any) {
    super(obj);
    this.customerInfo = this.customerInfo || ({} as any);
    this.additionalInfo = this.additionalInfo || ({} as any);
  }

  id: number;
  createdAt: number;
  synchronizedAt: number;

  RawData?: {
    VinProfileRaw: string;
    MonitorStatusEcmRaw: string;
    MonitorStatusTcmRaw: string;
    FreezeFrameEcmRaw: string;
    FreezeFrameTcmRaw: string;
    DtcsEcmRaw: string;
    DtcsTcmRaw: string;
    VehicleInfoEcmRaw: string;
    VehicleInfoTcmRaw: string;
    OemModulesRaw?: any[];
    TirePressuresRaw?: any[];
  };
  scanItems: ScanSettingItem[];

  mileage?: number;
  toolInfo?: {
    dongleId?: string;
    usbProductId?: number;
    unitId?: number;
    languageId?: number;
  };

  // customerInfo;
  isCustomerInfoSynced?: boolean;

  obdTest: any;

  scheduledMaintenances: {
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
  };
  predictedFailures: {
    numberOfItems: number;
    items: MaintenanceItem[];
    totalEstimatedServiceCost?: number;
    retailer?: string;
  };
  totalDtc: number;
  isSentReport: number;
  tsbAndRecalls: {
    vehicle?: VehicleInfo;
    numberOfSafetyRecalls: number;
    numberOfTSBCategory: number;
    safetyRecalls: {
      campaignNumber: string;
      defectConsequence: string;
      defectCorrectiveAction: string;
      defectDescription: string;
      recallDate: string;
      recallDateString: string;
      recordNumber: number;
      recallDateFormat: string;
    }[];
    tsbCategories: {
      id: number;
      description: string;
      tsbCount: number;
      totalPages?: number;
      currentPage?: number;
      tsbs: {
        tsbId: number;
        autoSystem: string;
        description: string;
        issueDate: string;
        issueDateString: string;
        fileNamePDF: string;
        manufacturerNumber: string;
        tsbTypes: string[];
        tsbUrl: string;
      }[];
    }[];
  };
  warningLightStatus: {
    id?: number;
    name?: string;
    unit?: string;
    value?: string;
  }[];
  retailer?: string;

  get hasAdditionalInfo() {
    return (
      this.additionalInfo &&
      this.additionalInfo.caliDs &&
      this.additionalInfo.cvNs &&
      this.additionalInfo.ipTs
    );
  }

  get isGeneratedOffline() {
    return !UuidV4.isValid(this.reportId); // because offline report ID was generated from timestamp
  }

  toApiRequestFormat(addInfo: AddingInfo): ApiCreateReportRequest {
    // let req = new ApiCreateReportRequest();
    let req = new ApiCreateReportRequest({
      Vin: this.vin,
      Mileage: this.mileage,
      DongleId: this.toolInfo.dongleId,
      UsbProductId: this.toolInfo.usbProductId || 720,
      VinProfileRaw: this.RawData.VinProfileRaw,
      MonitorStatusEcmRaw: this.RawData.MonitorStatusEcmRaw,
      MonitorStatusTcmRaw: this.RawData.MonitorStatusTcmRaw,
      DtcsEcmRaw: this.RawData.DtcsEcmRaw,
      DtcsTcmRaw: this.RawData.DtcsTcmRaw,
      FreezeFrameEcmRaw: this.RawData.FreezeFrameEcmRaw,
      FreezeFrameTcmRaw: this.RawData.FreezeFrameTcmRaw,
      VehicleInfoEcmRaw: this.RawData.VehicleInfoEcmRaw,
      VehicleInfoTcmRaw: this.RawData.VehicleInfoTcmRaw,
      RawDataVersion: 5,
      BatteryLife: this.overview.batteryLife.value,
      brakePadLife: this.overview.brakePadLife,
      OilLevel: this.overview.oilLevel,
      OilLife: this.overview.oilLife.value,
      CoolantLevel: this.overview.coolantLevel,
      TirePressures: this.RawData.TirePressuresRaw,
      scanningType: this.scanningType,
      DriveCycles: this.driveCycles,
      Retailer: addInfo.retailer,
      ReportNumber: this.reportNumber,
      frontbrakePadLife: this.overview.frontbrakePadLife,
      rearbrakePadLife: this.overview.rearbrakePadLife,
      Language: addInfo.lang,
      additionalInfo: this.additionalInfo,
      warningLightStatus: this.warningLightStatus,
      RegionalUnit: addInfo.regional,
      freezeFrames: this.freezeFrames,
    } as ApiCreateReportRequest);
    if (this.RawData.OemModulesRaw) {
      req.Modules = this.RawData.OemModulesRaw.filter((m) =>
        [
          InnovaToolModuleStatus.Valid,
          InnovaToolModuleStatus.Available,
          undefined,
        ].includes(m.Status)
      ).map((m) => {
        return {
          System: m.system,
          SubSystem: m.subsystem,
          ModuleName: m.modulename,
          Group: m.group,
          InvalidDTC: m.InvalidDTC,
          Status: m.Status,
          Dtcs: (m.Dtcs || []).map((d) => {
            return {
              Code: d.code,
              Type: d.type,
              Def: d.definition,
            } as any;
          }),
        } as OemModuleItem;
      });
    }
    return req;
  }
}
class VehicleInfo {
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

export class ReportItem {
  id: number;
  reportId: string;
  reportNumber: number;
  createdAt: string;
  customerName: string;
  vehicle: string;
  dtcs: number;
  phone: string;
  email: string;
  isSentReport: number;
  scanningType: number;
  reportDetails: Report;
}

export class SettingData {
  id: number;
  tokenKey: string;
  userInfo: string;
  lastLogInTime: number;
  usbProductId: number;
  scanSetting: string;
  retailer: string;
  scanningType: number;
  driveCycles: string;
  formatDate: string;
  formatTime: string;
  emailSupport: string;
  recentVINScanned: string[];
  recentMileage: number;
  agreePolicies: number;
  skipToolUpdatingAt: number;
  firstDateOff: number;
  vCIResponse: string;
  supportedModulesData: string;
  appRegional: string;
  appLanguage: string;
  recentVins: string[];
}

export class ItemSupportedModules {
  en: Oem_Item[];
  es: Oem_Item[];
}

export class CacheData {
  id: number;
  vin: string;
  data: ItemSupportedModules;
  createdAt: string;
}

export class LiveDataReportItem {
  id: number;
  createdAt: string;
  vehicle: string;
  reportDetails: NewLiveDataRecordEntry;
}

export class MaintenanceItem {
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
}

export class AddingInfo {
  lang: string;
  retailer: string;
  regional: string;
}

export interface InfoToolConnected {
  main: string;
  boot: string;
  db: string;
  guid: string;
  productid: number;
}

export class BleData {
  id: string;
  name: string;
  displayName: string;
  advertising: any;
  rssi: number;
  services: Array<string>;
  characteristics: Array<CharacteristicData>;

  constructor(id: string, name: string, isLocalName = false) {
    this.id = id;
    this.name = name;
    if (isLocalName) {
      this.displayName = name;
    } else {
      if (id && id.length > 5) {
        if (id.indexOf(':') > -1) {
          const subString = id.substring(id.length - 7, id.length);
          this.displayName = this.name + '_' + subString.replace(/:/g, '');
        } else {
          this.displayName =
            this.name + '_' + id.substring(id.length - 5, id.length);
        }
      } else {
        this.displayName = this.name + '_' + this.id;
      }
    }
  }
}

export class CharacteristicData {
  service: string;
  characteristic: string;
  properties: any;
  isNotifying: boolean;
  value: ArrayBuffer;
}

export class OptionInformationModel {
  option: string;
  hasDetails: boolean;
  description: string;
  image: string;
  constructor(
    option: string,
    description: string = null,
    image: string = null,
    hasDetails: boolean = false
  ) {
    this.option = option;
    this.description = description;
    this.image = image;
    this.hasDetails = hasDetails;
  }
}
