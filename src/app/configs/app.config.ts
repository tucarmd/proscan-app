import { environment } from 'src/environments/environment';
import { StorageKeys } from '../models/app.constant';

export const TIMEOUT_GET_VEH_SUMMARY = 30_000;
export const TIMEOUT_INIT_CONNECTION = 2_000;
export const SLEEP_EACH_VCI_REQUEST = 100;
export const SLEEP_TIMEOUT = 200;
export const MS_ONE_SECOND = 1000;
export const SLEEP_TIMEOUT_LONG = 2_000;
export const SUPPORTED_BLUETOOTH_DEVICE_NAMES = ['PROSCAN', 'PROSCANLE'];
export const MILE_TO_KM_RATE = 1.60934;
export const MAX_MILEAGE_VALUE = 999999;
export const MAX_MILEAGE_VALUE_KM = MAX_MILEAGE_VALUE * MILE_TO_KM_RATE;

export class AppConfig {
  /**
   * API Endpoint
   *
   * @readonly
   * @static
   * @type {string}
   * @memberof AppConfig
   */
  static get apiEndpoint(): string {
    return environment.appEndpoint;
  }

  /**
   * Default HTTP Request Timeout in Milliseconds
   *
   * @static
   * @memberof AppConfig
   */
  static durationTimeoutInMs = 30_000;
  static shortHttpRequestTimeoutInMs = 60_000;
  static defaultHttpRequestTimeoutInMs = 90_000;
  static longHttpRequestTimeoutInMs = 300_000;
  static createReportRequestTimeoutInMs = 180_000;

  static scanningDevicesInterval = 10_000;
  //static scanningDevicesTimeout = 60_000;
  static scanningDevicesTimeout = 180_000;

  //#region Dev Configs
  static isDevMode = !environment.production;
  static enableToSendDevLog = true;
  static IS_RELEASE = true;
  static IS_LIVE = true;
  static KEYBOARD_HIDE_ACCESSORY_BAR = true;
  static KEYBOARD_DISABLE_SCROLL = false;

  static SLEEP_TIMEOUT = 200;
  static SCAN_OEM_MODULE_TIMEOUT = 30000; // 30s

  private static isEnabledLogger = false;

  static LOGGER_EMAIL = 'lien.nguyen@carmd.com';
  static LOGGER_CC_EMAIL = 'vieth@carmd.com';

  static get IS_ENABLED_LOGGER() {
    return AppConfig.isEnabledLogger;
  }
}

export class AppSettings {
  isEnableNotification: boolean;
  isEnableLocation: boolean;

  constructor() {
    let _settings = JSON.parse(localStorage.getItem(StorageKeys.USER_SETTINGS));
    if (_settings) {
      this.isEnableLocation = _settings.isEnableLocation;
      this.isEnableNotification = _settings.isEnableNotification;
    }
  }

  save() {
    localStorage.setItem(StorageKeys.USER_SETTINGS, JSON.stringify(this));
  }
}

export class AppStrings {
  static LOADING_TEXT = 'Please wait...';
  static APP_NAME = 'Pro Scan';
  static CONFIRM = 'Confirm';
  static SUCCESS = 'Success';
  static ERROR = 'Error';
  static OK = 'OK';
  static CANCEL = 'Cancel';

  static MSG_REQUEST_TIMEOUT = 'Request timed out.';
  static MSG_SERVER_ERROR = 'Cannot connect to server';
  static MSG_SERVER_ERROR_TRY_LATER =
    'Cannot connect to server. Please try again later.';

  // Login
  static MSG_UNKNOWN_ERROR = 'Internal Server Error.';
  static MSG_LOGIN_ERROR = 'Invalid User and/or Password !';

  // Forgot Password
  static MSG_RESET_PASSWORD_ERROR = 'Email not found.';
  static MSG_RESET_PASSWORD_SUCCESS =
    'Email sent. Please check your email for resetting your password.';

  // Settings
  static MSG_CONFIRM_LOGOUT = 'Do you want to logout?';
  static CHANGE_USERNAME = 'Change User Name';
  static MSG_CHANGE_USERNAME_PROMPT = 'Enter your new user name';
  static MSG_CHANGE_USERNAME_SUCCESS = 'Your user name has been changed.';
  static MSG_CHANGE_USERNAME_ERROR =
    'Can not change your user name at this time.';

  static CHANGE_PHONENUMBER = 'Change Phone Number';
  static MSG_CHANGE_PHONENUM_PROMPT = 'Enter your new phone number';
  static MSG_CHANGE_PHONENUM_SUCCESS = 'Your phone number has been changed.';
  static MSG_CHANGE_PHONENUM_ERROR_INVALID = 'Invalid phone number!';
  static MSG_CHANGE_PHONENUM_ERROR =
    'Can not change your phone number at this time.';

  static MSG_UNABLE_SCAN_VIN = 'Cannot find the VIN. Please scan VIN again.';

  static MSG_UNABLE_DECODE_VIN = 'Cannot decode your VIN. Please try again.';
  static MSG_INVALID_VIN = 'Invalid VIN';
}
