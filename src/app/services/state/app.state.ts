/* eslint-disable @typescript-eslint/member-ordering */
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Network } from '@ionic-native/network/ngx';
import { ServiceInjector } from 'src/app/modules/service-injector.module';
import { AppLogger, AppLoggerService } from '../logger';
declare const cordova: any;
/**
 * Application state management
 *
 * @export
 * @class AppState
 */
export class AppState {
  /**
   * Get the current app version
   *
   * @static
   * @memberof AppState
   */
  static get appVersion() {
    return this.#appVersion;
  }

  /**
   * Is running on the iOS device or not
   *
   * @static
   * @memberof AppState
   */
  static get isOnIOs() {
    return this.#isOnIOs;
  }

  /**
   * Is running on the Android device or not
   *
   * @static
   * @memberof AppState
   */
  static get isOnAndroid() {
    return this.#isOnAndroid;
  }

  /**
   * Is running on the Android 12 device or not
   *
   * @static
   * @memberof AppState
   */
   static get isOnAndroid12() {
    return this.#isOnAndroid12;
  }
  static get isOnAndroid13OrNewer() {
    return this.#isOnAndroid13OrNewer;
  }

  /**
   * Is running on the Pixel device or not
   *
   * @static
   * @memberof AppState
   */
   static get isOnPixel() {
    return this.#isOnPixel;
  }

  /**
   * Is connecting to internet or not
   *
   * @static
   * @memberof AppState
   */
  static get isOffline() {
    return this.#isOffline;
  }

  /**
   * Is bluetooth turned ON or OFF
   *
   * @static
   * @memberof AppState
   */
  static get isBluetoothTurnedOn() {
    return this.#isBTTurnedOn;
  }

  /**
   * Set bluetooth state is turned ON or OFF
   *
   * @param isTurnedOn
   */
  static setBluetoothState(isTurnedOn: boolean) {
    this.#isBTTurnedOn = isTurnedOn;
  }

  /**
   * Is bluetooth in LOW mode or not
   *
   * @static
   * @memberof AppState
   */
  static get isBluetoothLowMode() {
    return this.#isBTLowMode;
  }

  /**
   * Set bluetooth is LOW mode or not
   *
   * @param isLowMode
   * @static
   * @memberof AppState
   */
  static set isBluetoothLowMode(isLowMode: boolean) {
    this.#isBTLowMode = isLowMode;
  }

  /**
   * Is running on the Android device or not
   *
   * @static
   * @memberof AppState
   */
  static get isOnIOs10() {
    return this.#isOnIOs10;
  }
  /**
   * Is on lower version of IOS 15.4 device or not
   *
   * @static
   * @memberof AppState
   */
  static get isLowerVersionIOs154() {
    return this.#isLowerVersionIOs154;
  }
  /**
   * Is on Desktop Chrome.
   *
   * @static
   * @memberof AppState
   */
  static get isOnDesktopChrome() {
    return this.#isOnDesktopChrome;
  }
  /**
   * Get the current storage version
   *
   * @static
   * @memberof AppState
   */
  static get storageVersion() {
    return this.#storageVersion;
  }

  static #isInitialled = false;

  static #deviceVersion: string;
  static #deviceModel: string;
  static #devicePlatform: string;
  static #deviceManufacturer: string;

  static #cordovaVersion: string;

  static #appVersion = 'N/A';
  static #isOnIOs = false;
  static #isOnIOs10 = false;
  static #isLowerVersionIOs154 = false;
  static #isOnDesktopChrome = false;
  static #isOnAndroid = false;
  static #isOnAndroid12 = false;
  static #isOnAndroid13OrNewer = false;
  static #isOnPixel = false;
  static #storageVersion = '1.0.0';
  static #isOffline = false;
  static #isBTTurnedOn = false;
  static #isBTLowMode = false;
  static async init() {
    const regexChrome = new RegExp(/(plt-mobileweb)/g);
    this.#isOnDesktopChrome = regexChrome.test(
      document.querySelector('html').className
    );
    if (typeof cordova === 'undefined' || this.#isInitialled) {
      return;
    }
    const serviceInjector = ServiceInjector;
    const logger: AppLogger = serviceInjector
      ?.get(AppLoggerService)
      ?.getLogger('AppState');

    const device: Device = serviceInjector?.get(Device);

    if (device) {
      this.#devicePlatform = device.platform;
      this.#isOnIOs = this.#devicePlatform?.toUpperCase() === 'IOS';
      this.#isOnAndroid = this.#devicePlatform?.toUpperCase() === 'ANDROID';
      this.#isOnAndroid12 = this.#isOnAndroid && device.version && device.version.startsWith('12');
      this.#isOnAndroid13OrNewer =
        (this.isOnAndroid && device.version != null && (Number.parseFloat(device.version) >= 13));
      this.#isOnIOs10 = device.version && device.version.indexOf('10.') === 0;
      this.#isLowerVersionIOs154 =
        device.version && (device.version < '15.4');
      this.#deviceVersion = device.version;
      this.#deviceModel = device.model;
      this.#isOnPixel = device.model.startsWith('Pixel');
      this.#cordovaVersion = device.cordova;
      this.#deviceManufacturer = device.manufacturer;
      logger?.info(
        'DEVICE:',
        'platform',
        this.#devicePlatform,
        'version',
        this.#deviceVersion,
        'model',
        this.#deviceModel
      );
    } else {
      logger?.info('device is null');
    } /** */
    if (this.isOnDevice) {
      const appVersion: AppVersion = serviceInjector?.get(AppVersion);
      if (appVersion) {
        this.#appVersion = await appVersion.getVersionNumber();
        const versionParts = this.#appVersion.split('.');
        if(versionParts.length > 2){
          this.#appVersion = `V${versionParts[0].padStart(2, '0')}.${versionParts[1].padStart(2, '0')}.${versionParts[2].padStart(2, '0')}`
        }
      }
    }

    const network: Network = serviceInjector?.get(Network);
    logger?.info('Network Type:', network?.type);
    this.#isOffline = network?.type === network?.Connection.NONE;
    network?.onDisconnect().subscribe(() => {
      logger?.info('NETWORK WAS DISCONNECTED');
      this.#isOffline = true;
    });
    network?.onConnect().subscribe(() => {
      /*We just got a connection but we need to wait briefly
        before we determine the connection type. Might need to wait.
        prior to doing any api requests as well.*/
      setTimeout(() => {
        logger?.info('NETWORK CONNECTED', network?.type);
        if (network?.type === network?.Connection.NONE) {
          this.#isOffline = true;
        } else {
          this.#isOffline = false;
        }
      }, 3_000);
    });
    this.#isInitialled = true;
    logger?.info('AppState was initialled successfully');
  }

  /**
   * Is running on mobile devices (iOS or Android) or not
   *
   * @readonly
   * @static
   * @memberof AppState
   */
  public static get isOnDevice() {
    return this.isOnIOs || this.isOnAndroid;
  }

  /**
   * Is running on web browser or not
   *
   * @readonly
   * @static
   * @memberof AppState
   */
  public static get isOnBrowser() {
    return !this.isOnDevice;
  }

  /**
   * Get current device version. Ex: 14.6.1
   *
   * @readonly
   * @static
   * @memberof AppState
   */
  public static get deviceVersion() {
    return this.#deviceVersion;
  }

  /**
   * Get current device platform. Ex: Android
   *
   * @readonly
   * @static
   * @memberof AppState
   */
  public static get devicePlatform() {
    return this.#devicePlatform;
  }

  /**
   * Get current device manufacturer. Ex: Apple, Samsung
   *
   * @readonly
   * @static
   * @memberof AppState
   */
  public static get deviceManufacturer() {
    return this.#deviceManufacturer;
  }

  /**
   * Get current major device version. Ex: 14.6.1 => 14
   *
   * @readonly
   * @static
   * @type {number}
   * @memberof AppState
   */
  public static get majorDeviceVersion(): number {
    if (this.#deviceVersion) {
      const aV = this.#deviceVersion.split('.');
      if (aV.length > 0 && aV[0]) {
        return Number.parseInt(aV[0], 10);
      }
    }
    return null;
  }

  /**
   * Get current minor device version. Ex: 14.6.1 => 6
   *
   * @readonly
   * @static
   * @type {number}
   * @memberof AppState
   */
  public static get minorDeviceVersion(): number {
    if (this.#deviceVersion) {
      const aV = this.#deviceVersion.split('.');
      if (aV.length > 1 && aV[1]) {
        return Number.parseInt(aV[1], 10);
      }
    }
    return null;
  }

  /**
   * Compare major device version
   *
   * @param majorVersion The major version to compare. Ex: 14
   * @returns boolean
   */
  public static isOnIOsVersion(majorVersion: number) {
    return this.isOnIOs && this.majorDeviceVersion === majorVersion;
  }

  /**
   * Check At Least major & minor ios device version. Ex: >= 14.0
   *
   * @param majorVersion The major version to compare. Ex: 14
   * @param minorVersion The minor version to compare. Ex: 0
   * @returns boolean
   */
  public static isOnAtLeastIOsVersion(
    majorVersion: number,
    minorVersion: number = 0
  ) {
    return (
      (this.isOnIOs && this.majorDeviceVersion > majorVersion) ||
      (this.majorDeviceVersion === majorVersion &&
        this.minorDeviceVersion >= minorVersion)
    );
  }

  /**
   * Check At Least major & minor device version. Ex: >= 14.0
   *
   * @param majorVersion The major version to compare. Ex: 14
   * @param minorVersion The minor version to compare. Ex: 0
   * @returns boolean
   */
   public static isOnAtLeastVersion(
    majorVersion: number,
    minorVersion: number = 0
  ) {
    return (
      this.majorDeviceVersion > majorVersion ||
      (this.majorDeviceVersion === majorVersion &&
        this.minorDeviceVersion >= minorVersion)
    );
  }

  /**
   * Get current device model
   *
   * @readonly
   * @static
   * @memberof AppState
   */
  public static get deviceModel() {
    return this.#deviceModel;
  }

  /**
   * Get current Cordova version
   *
   * @readonly
   * @static
   * @memberof AppState
   */
  public static get cordovaVersion() {
    return this.#cordovaVersion;
  }
}
