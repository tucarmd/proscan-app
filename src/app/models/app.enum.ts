import { enumInnovagroup } from '../services/innova-vci-service/src/standard/enums';

export enum EnumConnectionEnternet {
    CONNECTED = 'connected',
    DISCONNECTED = 'disconnected',
}

export const EnumGroupQuickScan = {
  General: 'General Information',
  Enhanced: 'Enhanced Information',
  Service: 'Service Information'
};

export enum EnumAppDataKey {
  Mileage = 'Mileage',
  InternetConnectionType = 'InternetConnectionType',
  IsFirstTime = 'IsFirstTime',
  QuickScanSettings = 'QuickScanSettings',
  ReportDetails = 'ReportDetails',
  ReportId = 'ReportId',
  ScanningType = 'ScanningType',
  SelectedDiagnosticsModule = 'SelectedDiagnosticsModule',
  SpecialTestIntruction = 'SpecialTestIntruction',
  SupportedLiveDataPIDs = 'SupportedLiveDataPIDs',
  SelectedLiveDataPIDs = 'SelectedLiveDataPIDs',
  LiveDataRecordsList = 'LiveDataRecordsList',
  LiveDataRecordEntry = 'LiveDataRecordEntry',
  InfoVehicleConnected = 'InfoVehicleConnected',
  InfoToolConnected = 'InfoToolConnected',
  Reports = 'Reports',
  HistoryReport = 'HistoryReport',
  ListMake = 'ListMake',
  UpgradeMeta = 'UpgradeMeta',
  UpdateAvailable = 'UpdateAvailable',
  UpdateVCIAvailable = 'UpdateVCIAvailable',
  CheckUpdate = 'CheckUpdate',
  SupportedModulesData = 'SupportedModulesData',
  AppRegional = 'AppRegional',
  AppLanguage = 'AppLanguage',
  BatteryStatus = 'BatteryStatus',
  SkipDeviceAddresses = 'SkipDeviceAddresses',
  TimeAwake = 'TimeAwake',
  TimeShutdown = 'TimeShutdown',
  IsEnableWifi = 'IsEnableWifi',
  CurrentRoutePath = 'CurrentRoutePath',
  DelayTimeReport = 'DelayTimeReport',
}

export const EnumQuickScan = {
  Full: 'Full Network Scan',
  Powertrain: 'Powertrain DTCs',
  ABS: 'ABS Results',
  SRS: 'SRS Results',
  Odometer: 'Odometer',
  BatteryVoltage: 'Battery Voltage',
  WarningLightStatus: 'Warning Light Status',
  EnhancedDTCResults: 'Enhanced DTC Results',
  TPMSReading: 'TPMS Reading',
  OilLevel: 'Oil Level',
  OilLife: 'Oil Life',
  CoolantLevel: 'Coolant Level',
  BrakePadLife: 'Brake Pad Life',
  ScheduledMaintenance: 'Scheduled Maintenance',
  PredictedFailures: 'Predicted Failures',
  VehicleRecalls: 'Vehicle Recalls',
  TSBs: 'TSBs',
  VIN: 'VIN and Vehicle Information',
  IMReadiness: 'I/M Readiness',
  CodeSeverity: 'Code Severity',
  DiagnosticRoutine: 'Diagnostic Routine',
  VerifiedFix: 'Verified Fix',
  FreezeFrame: 'Freeze Frame',
  ServiceMaintenance: 'Service Maintenance',
  Warranty: 'Warranty',
};

export const QuickScanSetting: Array<SettingItem> = [
  {
    id: 0,
    name: EnumGroupQuickScan.Enhanced,
    data: [
      { id: 0, name: EnumQuickScan.VIN, enabled: true },
      { id: 1, name: EnumQuickScan.Odometer, enabled: true, ofmPid: 1027 },
      { id: 2, name: EnumQuickScan.IMReadiness, enabled: true },
      {
        id: 3,
        name: EnumQuickScan.Powertrain,
        enabled: true,
        group: enumInnovagroup.einnovagroup_GROUP_ENH_PCM,
      },
      // { id: 4, name: EnumQuickScan.CodeSeverity , enabled: true },
      { id: 4, name: EnumQuickScan.DiagnosticRoutine, enabled: true },
      { id: 5, name: EnumQuickScan.BatteryVoltage, enabled: false },
      { id: 6, name: EnumQuickScan.VerifiedFix, enabled: false },
      { id: 7, name: EnumQuickScan.FreezeFrame, enabled: true },
      {
        id: 8,
        name: EnumQuickScan.WarningLightStatus,
        enabled: true,
        ofmPid: 1132,
      },
    ],
  },
  {
    id: 1,
    name: EnumGroupQuickScan.General,
    data: [
      {
        id: 0,
        name: EnumQuickScan.EnhancedDTCResults,
        enabled: false,
        group: [
          enumInnovagroup.einnovagroup_GROUP_ENH_ECM,
          enumInnovagroup.einnovagroup_GROUP_ENH_TCM,
        ],
      },
      {
        id: 1,
        name: EnumQuickScan.ABS,
        enabled: true,
        group: enumInnovagroup.einnovagroup_GROUP_ABS,
      },
      {
        id: 2,
        name: EnumQuickScan.SRS,
        enabled: true,
        group: enumInnovagroup.einnovagroup_GROUP_SRS,
      },
      { id: 3, name: EnumQuickScan.Full, enabled: false },
      { id: 4, name: EnumQuickScan.TPMSReading, enabled: false },
      { id: 5, name: EnumQuickScan.OilLife, enabled: false, ofmPid: 1053 },
      { id: 6, name: EnumQuickScan.CoolantLevel, enabled: false, ofmPid: 1131 },
      { id: 7, name: EnumQuickScan.BrakePadLife, enabled: false, ofmPid: 1049 },
    ],
  },
  {
    id: 2,
    name: EnumGroupQuickScan.Service,
    data: [
      { id: 0, name: EnumQuickScan.ServiceMaintenance, enabled: false },
      { id: 1, name: EnumQuickScan.PredictedFailures, enabled: false },
      { id: 2, name: EnumQuickScan.VehicleRecalls, enabled: false },
      { id: 3, name: EnumQuickScan.TSBs, enabled: false },
      { id: 4, name: EnumQuickScan.OilLevel, enabled: false, ofmPid: 1079 },
      { id: 5, name: EnumQuickScan.Warranty, enabled: false },
    ],
  },
];
export enum EnumLocalStorage {
  TokenKey = 'TokenKey',
  UserInfo = 'UserInfo',
  LastLogInTime = 'LastLogInTime',
  UsbProductId = 'UsbProductId',
  ScanSetting = 'ScanSetting',
  Retailer = 'Retailer',
  ScanningType = 'ScanningType',
  DriveCycles = 'DriveCycles',
  FormatDate = 'FormatDate',
  FormatTime = 'FormatTime',
  EmailSupport = 'EmailSupport',
  RecentVINScanned = 'RecentVINScanned',
  RecentMileage = 'RecentMileage',
  AgreePolicies = 'AgreePolicies',
  SkipToolUpdatingAt = 'SkipToolUpdatingAt',
  FirstDateOff = 'FirstDateOff',
  VCIResponse = 'VCIResponse',
  SupportedModulesData = 'SupportedModulesData',
  AppRegional = 'AppRegional',
  AppLanguage = 'AppLanguage',
  DateSetting = 'DateSetting',
  TimeSetting = 'TimeSetting',
  TimeAwake = 'TimeAwake',
  SkipUpdateNotice = 'SkipUpdateNotice',
  TimeShutdown = 'TimeShutdown',
  IsEnableWifi = 'IsEnableWifi',
  PhoneNumberSupport = 'PhoneNumberSupport',
  Brightness = 'Brightness',
  LightTheme = 'LightTheme',
}

export enum EnumAppEvent {
  LOGGER = 'Logger',
  UpdateLiveDataSnapshot = 'UpdateLiveDataSnapshot',
  UpdateAvailable = 'UpdateAvailable',
  SidebarName = 'SidebarName',
  ReportDetailsIsUpdated = 'ReportDetailsIsUpdated',
  ShowUpdateNotice = 'ShowUpdateNotice',
  ShowModalReminder = 'ShowModalReminder',
  CheckVCIUpdate = 'CheckVCIUpdate',
  UpdateVCIAvailable = 'UpdateVCIAvailable',
  ShowUpdateVCINotice = 'ShowUpdateVCINotice',
  InfoVehicleConnected = 'InfoVehicleConnected',
  WatchVCIConnection = 'WatchVCIConnection',
  InfoToolConnected = 'InfoToolConnected',
  ForceVCIUpdate = 'ForceVCIUpdate',
  CheckIfNeedResetIgnition = 'CheckIfNeedResetIgnition',
  CheckIfNeedResetIgnitionDone = 'CheckIfNeedResetIgnitionDone',
  ScreenOnOff = 'ScreenOnOff',
  IsWifiEnabled = 'IsWifiEnabled',
  IsInternetConnected = 'IsInternetConnected',
  DeviceWakeUp = 'DeviceWakeUp',
  ReadVciLog = 'ReadVciLog',
  LightTheme = 'LightTheme',
  GotVIN = 'GotVIN'
}

export enum SideBarScan {
  QUICKSCAN = 'Custom Scan',
  GLOBALOBD = 'OBD2 Diagnostics',
  VEHICLEDIANOSTICS = 'Vehicle Diagnostics',
}

export enum EnumLedStatus {
  Off = 0, // Not Supported
  Green = 1, //  Completed
  Yellow = 2, //  Not Supported
  Red = 3, // Not Completed
}

export enum EnumMonitorStatus {
  NotSupported = 1,
  Incompleted = 2,
  Completed = 3,
}


export enum ScanningType {
  QuickScan = 'quick-scan',
  GlobalOBD = 'global-obd',
  VehicleDiagnostics = 'vehicle-diagnostics',
  NetworkScan = 'network-scan',
  ServiceReset = 'ServiceReset',
}

// handle all route path in app --

export class ScanSettingItem {
  id: number;
  name: string;
  enabled: boolean;
  //
  ofmPid?: number;
  group?: enumInnovagroup | enumInnovagroup[];
  groupName?: string;
  //
  part?: number;
  partName?: string;
}

export class SettingItem {
  id: number;
  name: string;
  data: ScanSettingItem[];
}

export enum ModuleReportFailed {
  powertrain = 0,
  srs = 1,
  abs = 2,
  other = 3,
}
export enum SeverityLevel {
  low = 0,
  medium = 1,
  high = 2,
}
export enum EnumEraseSetting {
  AllDTCs = 'All DTCs',
  Powertrain = 'Powertrain',
  ABS = 'ABS',
  SRS = 'SRS',
  Trunk = 'Trunk',
}
export const EraseSetting = [
  { name: EnumEraseSetting.AllDTCs, selected: false },
  { name: EnumEraseSetting.Powertrain, selected: false },
  { name: EnumEraseSetting.ABS, selected: false },
  { name: EnumEraseSetting.SRS, selected: false },
  { name: EnumEraseSetting.Trunk, selected: false },
];

export enum Status {
  Success = 1,
  Fail = 0,
}

export class SettingModalStatus {
  type: Status;
  imgSrc: string;
  headerText: string;
  statusText: string;
  colorImg: string;
  txtBtnFirst: string;
  txtBtnSecond?: string;
}
export enum TypeSearchDLC {
  ymm = 'YMM',
  vin = 'VIN',
}
export enum PrintType {
  'QuickScan' = 1,
  'GlobalOBD' = 2,
  'VehicleDisagnostics' = 3,
  'NetworkScan' = 4,
}
export enum DateFormat {
  MMDDYY = 'MM/dd/yy',
  DDMMYY = 'dd/MM/yy',
}
export enum TimeFormat {
  TimeOne = 'h:mm a',
  TimeTwo = 'H:MM',
}
export class DateTimeFormat {
  date: DateFormat;
  time: TimeFormat;
}
export enum EnumWarningLightStartus {
  ON = 'ON',
  OFF = 'OFF',
}
export enum EnumConnectionWifi {
  ONLINE = 'online',
  OFFLINE = 'offline',
}
export enum EnumMessageBrakeLife { // (Display exact result by Status)
  SUCCESS = 'Good Condition',
  FAIL = 'Inspect',
}
export enum EnumMessageOilLife { // (Display exact result by Status)
  SUCCESS = 'Passed',
  FAIL = 'Needs Attention',
}
export enum warningLightIndex {
  ABS = 1035,
  SRS = 1036,
  TMPS = 1132,
}
export enum LanguageApp {
  ENGLISH = 'en',
  SPANISH = 'es',
}
export const StatesUSA = [
  {
    name: 'Alabama',
    abbreviation: 'AL',
  },
  {
    name: 'Alaska',
    abbreviation: 'AK',
  },
  {
    name: 'American Samoa',
    abbreviation: 'AS',
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ',
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR',
  },
  {
    name: 'California',
    abbreviation: 'CA',
  },
  {
    name: 'Colorado',
    abbreviation: 'CO',
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT',
  },
  {
    name: 'Delaware',
    abbreviation: 'DE',
  },
  {
    name: 'District Of Columbia',
    abbreviation: 'DC',
  },
  {
    name: 'Federated States Of Micronesia',
    abbreviation: 'FM',
  },
  {
    name: 'Florida',
    abbreviation: 'FL',
  },
  {
    name: 'Georgia',
    abbreviation: 'GA',
  },
  {
    name: 'Guam',
    abbreviation: 'GU',
  },
  {
    name: 'Hawaii',
    abbreviation: 'HI',
  },
  {
    name: 'Idaho',
    abbreviation: 'ID',
  },
  {
    name: 'Illinois',
    abbreviation: 'IL',
  },
  {
    name: 'Indiana',
    abbreviation: 'IN',
  },
  {
    name: 'Iowa',
    abbreviation: 'IA',
  },
  {
    name: 'Kansas',
    abbreviation: 'KS',
  },
  {
    name: 'Kentucky',
    abbreviation: 'KY',
  },
  {
    name: 'Louisiana',
    abbreviation: 'LA',
  },
  {
    name: 'Maine',
    abbreviation: 'ME',
  },
  {
    name: 'Marshall Islands',
    abbreviation: 'MH',
  },
  {
    name: 'Maryland',
    abbreviation: 'MD',
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA',
  },
  {
    name: 'Michigan',
    abbreviation: 'MI',
  },
  {
    name: 'Minnesota',
    abbreviation: 'MN',
  },
  {
    name: 'Mississippi',
    abbreviation: 'MS',
  },
  {
    name: 'Missouri',
    abbreviation: 'MO',
  },
  {
    name: 'Montana',
    abbreviation: 'MT',
  },
  {
    name: 'Nebraska',
    abbreviation: 'NE',
  },
  {
    name: 'Nevada',
    abbreviation: 'NV',
  },
  {
    name: 'New Hampshire',
    abbreviation: 'NH',
  },
  {
    name: 'New Jersey',
    abbreviation: 'NJ',
  },
  {
    name: 'New Mexico',
    abbreviation: 'NM',
  },
  {
    name: 'New York',
    abbreviation: 'NY',
  },
  {
    name: 'North Carolina',
    abbreviation: 'NC',
  },
  {
    name: 'North Dakota',
    abbreviation: 'ND',
  },
  {
    name: 'Northern Mariana Islands',
    abbreviation: 'MP',
  },
  {
    name: 'Ohio',
    abbreviation: 'OH',
  },
  {
    name: 'Oklahoma',
    abbreviation: 'OK',
  },
  {
    name: 'Oregon',
    abbreviation: 'OR',
  },
  {
    name: 'Palau',
    abbreviation: 'PW',
  },
  {
    name: 'Pennsylvania',
    abbreviation: 'PA',
  },
  {
    name: 'Puerto Rico',
    abbreviation: 'PR',
  },
  {
    name: 'Rhode Island',
    abbreviation: 'RI',
  },
  {
    name: 'South Carolina',
    abbreviation: 'SC',
  },
  {
    name: 'South Dakota',
    abbreviation: 'SD',
  },
  {
    name: 'Tennessee',
    abbreviation: 'TN',
  },
  {
    name: 'Texas',
    abbreviation: 'TX',
  },
  {
    name: 'Utah',
    abbreviation: 'UT',
  },
  {
    name: 'Vermont',
    abbreviation: 'VT',
  },
  {
    name: 'Virgin Islands',
    abbreviation: 'VI',
  },
  {
    name: 'Virginia',
    abbreviation: 'VA',
  },
  {
    name: 'Washington',
    abbreviation: 'WA',
  },
  {
    name: 'West Virginia',
    abbreviation: 'WV',
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI',
  },
  {
    name: 'Wyoming',
    abbreviation: 'WY',
  },
];

export const EnumRetailers = [
  {
    id: '9765f96d-5cc1-4cfb-83a9-94c8c197ab58',
    name: 'Advance auto parts',
    website: 'https://shop.advanceautoparts.com',
    spellings: [
      'Avants Autopart',
      'Atvance Ato Parts ',
      'Auto Parts ',
      'Advance Auto Prts',
      'Advance Parts ',
      'Advane Auto Parts ',
      'At Vance Auto Parts ',
      'Abanse Auto Parts',
      'Ad bans Auto',
      'Vance Auto Parts ',
      'Avanse Auto Parts',
      'Atvance Auto Parts ',
      'Advanse Auto Partes',
      'adbans Auto Parts ',
      'AAP',
      'Atvance Atuo parts ',
      'Avanse Autoparts',
      'Advans Auto Parts',
      'Alvance Auto Parts ',
      'Alvance Autoparts ',
      'Ad vance Auto Parts ',
      'Avans Auto Parts',
      'Avanse Auto Pars ',
      'Advance Auto',
      'Advants Auto Part',
      'Abans Auto Part',
      'Ad vance Auto',
      'Avance Autoparts',
      'Advance atuo pats',
      'Advance Ato Parts ',
      'Adbans auto',
      'Advance Autoparts',
      'Abanse Autoparts ',
      'Avants Auto Parts',
      'Advnce Auto Parts ',
      'Atvance Atuo prts',
      'Arvanse Auto Parts',
      'Advance auto Perts ',
      'Avans Outo Part',
      'Advance atuo parts ',
      'Advance Auto pts',
      'Advance Parts Auto ',
    ],
  },
  {
    id: '563976c6-28b8-448b-a1d2-88fca8f2f6c1',
    name: 'Amazon',
    website: 'http://www.amazon.com/automotive',
    spellings: [
      'Amazzon',
      'Amazeon',
      'Amasson',
      'Ammazzon',
      'azon',
      'Aazon',
      'Amazonn',
      'Ammasson',
      'Ameson',
      'Ammazon',
      'Ahmason',
      'Amazn',
      'Hamazon',
      'mazon ',
      'Amizon ',
      'Amazo',
      'Amezon',
      'Imason',
      'Ammason',
      'Emizon',
      'AMZ',
      'Aamazon',
      'Amaazon',
      'Amaazzon',
      'Omozon',
      'Almazon',
      'Emazon',
      'Amason',
      'Amazoon',
      'AMZN',
      'Almason',
    ],
  },
  {
    id: '08dafed3-d11a-4dbb-bcaa-823eabc3d704',
    name: 'AutoZone',
    website: 'https://m.autozone.com',
    spellings: [],
  },
  {
    id: '69ad0114-50df-4c65-9f99-555d73866911',
    name: "O'Reilly",
    website: 'https://www.oreillyauto.com',
    spellings: ['O’', 'Or'],
  },
  {
    id: 'b206ec2d-f596-4b82-9af3-8c30a5cc2558',
    name: 'Canadian Tire',
    website: 'https://www.canadiantire.ca',
    spellings: [],
  },
  {
    id: '00d0cc01-4400-4c5f-8df0-604abec80d01',
    name: 'Napa',
    website: 'https://www.napaonline.com',
    spellings: [],
  },
];
