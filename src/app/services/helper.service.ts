import { ChangeDetectorRef, EventEmitter, Injectable } from '@angular/core';
import {
  AlertButton,
  AlertController,
  LoadingController,
  MenuController,
  ModalController,
  NavController,
  Platform,
} from '@ionic/angular';
import { AppConfig, AppStrings } from '../configs/app.config';
import { Device } from '@ionic-native/device/ngx';
import { UrlTree } from '@angular/router';
import { NavigationOptions } from '@ionic/angular/providers/nav-controller';
import { Network } from '@ionic-native/network/ngx';
import { interval, Subscription } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';
import { QuickScanSetting, PrintType, ScanningType } from '../models/app.enum';
import { Storage } from '@ionic/storage-angular';
import { AppState } from './state/app.state';
import { BLE } from '@ionic-native/ble/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';

@Injectable()
export class HelperService {
  private loadingInstance: HTMLIonLoadingElement;
  private alertInstance: HTMLIonAlertElement;
  private _isLoadingPresented = false;
  private backButtonSubscriptions: Subscription[] = [];
  private _eraseMenuItem: EventEmitter<any> = new EventEmitter();
  private _showMenuItem: EventEmitter<any> = new EventEmitter();
  constructor(
    private modal: ModalController,
    private platform: Platform,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private alertCtrl: AlertController,
    private device: Device,
    private storage: Storage,
    private menuController: MenuController,
    private navController: NavController,
    private network: Network,
    private diagnostic: Diagnostic,
    private ble: BLE
  ) {}

  async checkBluetoothPermissions(): Promise<boolean> {
    if (AppState.isOnIOs) {
      try {
        await this.ble.isEnabled();
        return true;
      } catch (error) {
        return false;
      }
    } else {
      //if(AppState.isOnAndroid)
      if (AppState.isOnAndroid && (AppState.isOnAndroid12 || AppState.isOnAndroid13OrNewer)){
        console.log('RUN: await this.diagnostic.requestRuntimePermissions');
        await this.diagnostic.requestRuntimePermissions([
          this.diagnostic.permission.ACCESS_FINE_LOCATION,
          this.diagnostic.permission.ACCESS_COARSE_LOCATION,
          'BLUETOOTH_CONNECT',
          'BLUETOOTH_SCAN',
        ]);
      }else{
        await this.diagnostic.requestRuntimePermissions([
          this.diagnostic.permission.ACCESS_FINE_LOCATION,
          this.diagnostic.permission.ACCESS_COARSE_LOCATION
        ]);
      }
      
      try {
        await this.ble.isEnabled();
        return true;
      } catch (error) {
        return false;
      }
    }
  }

  newGuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      s4() +
      s4()
    );
  }

  async prompt(
    message: string,
    title?: string,
    inputs?: any[],
    confirmCallback?: any,
    cancelCallback?: any
  ) {
    let prompt = await this.alertCtrl.create({
      header: title,
      message: message,
      inputs: inputs,
      buttons: [
        {
          text: AppStrings.CANCEL,
          role: 'cancel',
          handler: cancelCallback,
        },
        {
          text: AppStrings.OK,
          handler: confirmCallback,
        },
      ],
    });
    prompt.present();
    return prompt;
  }

  toHexString(byteArray) {
    return Array.from(byteArray, function (mbyte: any) {
      return ('0' + (mbyte & 0xff).toString(16)).slice(-2);
    }).join('');
  }

  public wait(ms) {
    return new Promise<any>(function (resolve, reject) {
      setTimeout(resolve, ms);
    });
  }

  goTo(path: string | any[] | UrlTree, opts?: NavigationOptions) {
    return this.navController.navigateForward(path, opts);
  }

  goBack(path?: string | any[] | UrlTree, opts?: any) {
    return path
      ? this.navController.navigateBack(path, opts)
      : this.sleep(10).then(() => {
          this.navController.back();
        });
  }

  coerceBooleanProperty(value: any): boolean {
    if (value === 'true') {
      return true;
    }

    if (value === true) {
      return true;
    }
    return false;
  }

  get storageDriver() {
    return this.storage.driver;
  }

  setStorage(label: string, value: any) {
    return this.storage
      .set(label, value)
      .catch(console.error.bind(null, 'setStorage failed'));
  }

  async getStorage(label: string, defaultValue = null) {
    let value = await this.storage
      .get(label)
      .catch(console.error.bind(null, 'getStorage failed'));
    return value !== null ? value : defaultValue;
  }

  removeStorage(label: string) {
    return this.storage
      .remove(label)
      .catch(console.error.bind(null, 'removeStorage failed'));
  }

  getAllScanItems() {
    let scanItems = [...QuickScanSetting];
    return scanItems.reduce((items, item) => {
      if (item.data.length) {
        return [...items, ...item.data];
      }
      return items.map((i) => {
        i.enable = true;
      });
    }, []);
  }

  async enableMenuGlobal() {
    await this.menuController.close('home');
    this.menuController.enable(true, 'global');
  }
  async enableMenuHome() {
    await this.menuController.close('global');
    await this.menuController.enable(true, 'home');
  }
  async enableMenuLiveData() {
    this.menuController.enable(true, 'live-data');
  }
  async disableMenuLiveData() {
    this.menuController.enable(false, 'live-data');
  }
  displayEraseMenuItem({ isShow, isEnable, groups }) {
    this._eraseMenuItem.emit({ isShow, isEnable, groups });
  }

  async alert(
    message: string,
    header: string = 'Message',
    customButtons?: AlertButton[]
  ) {
    await this.hideLoading(); // hide loading if any
    const alert = await this.alertController.create({
      header,
      message,
      backdropDismiss: false,
      buttons: customButtons
        ? customButtons
        : [
            {
              text: 'OK',
            },
          ],
    });
    await alert.present();
    this.alertInstance = alert;
    return alert;
  }

  async dismissAlert() {
    if (this.alertInstance) {
      await this.alertInstance.dismiss();
      this.alertInstance = null;
    }
  }

  get eraseMenuItemEmittedValue() {
    return this._eraseMenuItem;
  }
  displayMenuItem({ isShowLive, isShowEmail }) {
    this._showMenuItem.emit({ isShowLive, isShowEmail });
  }

  get menuItemEmittedValue() {
    return this._showMenuItem;
  }

  public isIOs10() {
    return (
      this.device &&
      this.device.version &&
      this.device.version.indexOf('10.') === 0
    );
  }

  public isIOs() {
    return this.device && this.device.platform === 'iOS';
  }

  get hasInternetConnection() {
    if (AppState.isOnDevice)
      return this.network.type !== this.network.Connection.NONE;
    return true;
  }

  async showLoading(
    message?: string,
    duration = AppConfig.durationTimeoutInMs
  ) {
    message = message || 'Please wait...';
    const loading = await this.loadingController.create({
      message,
      duration,
      animated: false,
      spinner: 'circles',
    });
    await loading.present();
    this.loadingInstance = loading;
    return loading;
  }
  async hideLoading() {
    if (this.loadingInstance) {
      await this.loadingInstance.dismiss();
      this.loadingInstance = null;
    } else {
      await this.loadingController.dismiss().catch((err) => {
        // this.logger.warn.bind(err, 'Dismiss loading error')
      });
    }
  }

  get isLoading() {
    return this._isLoadingPresented;
  }

  // async dismissAll() {
  //     if (this._isAlertPresented) {
  //         await this.alertController.dismiss();
  //         this._isAlertPresented = false;
  //     }
  // }

  async dismissAll() {
    let top;
    do {
      if (top) {
        await top.dismiss();
      }
      top = await this.modal.getTop();
    } while (top);
  }

  sleep(ms: number) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(ms);
      }, Math.abs(ms))
    );
  }

  async confirm(
    message: string,
    title?: string,
    confirmCallback?: any,
    cancelCallback?: any,
    okText = AppStrings.OK,
    cancelText = AppStrings.CANCEL
  ) {
    let confirm = this.alertController.create({
      header: title,
      message: message,
      buttons: [
        {
          text: cancelText,
          role: 'cancel',
          handler: cancelCallback,
        },
        {
          text: okText,
          handler: confirmCallback,
        },
      ],
    });
    (await confirm).present();
    return confirm;
  }

  popToRoot(path: string = '/') {
    return this.navController.navigateRoot(path);
  }

  overrideHardwareBack(callableFunction: Function, description?: string) {
    let desc = description ? description : `${callableFunction}`;
    let priority = 99999999 + this.backButtonSubscriptions.length;
    let subs = this.platform.backButton.subscribeWithPriority(priority, () => {
      // callableFunction.bind(context);
      callableFunction();
    });
    subs.add(() => {
      console.log(`Remove back action ${desc}`);
    });
    console.log(`Overide back action with "${desc}"`);
    this.backButtonSubscriptions.push(subs);
  }

  restoreHardwareBack() {
    if (this.backButtonSubscriptions.length) {
      let subs = this.backButtonSubscriptions.shift();
      subs.unsubscribe();
    }
  }

  public refreshLayout(changeDetectorRef: ChangeDetectorRef) {
    try {
      changeDetectorRef != null && changeDetectorRef.detectChanges();
    } catch {}
  }
  /* No need this function anymore
    async convertForSetupQuickScan(allScan: SettingItem[]) {
        let quickScan: ScanSettingItem[] = QuickScanDefaultSettings;
        quickScan[0].enabled = allScan[1].data[3].enabled;
        quickScan[1].enabled = allScan[0].data[3].enabled;
        quickScan[2].enabled = allScan[1].data[1].enabled;
        quickScan[3].enabled = allScan[1].data[2].enabled;
        quickScan[4].enabled = allScan[0].data[1].enabled;
        quickScan[5].enabled = allScan[0].data[6].enabled;
        quickScan[6].enabled = allScan[0].data[9].enabled;
        quickScan[7].enabled = allScan[1].data[2].enabled;
        quickScan[8].enabled = allScan[1].data[4].enabled;
        quickScan[9].enabled = allScan[2].data[4].enabled;
        quickScan[10].enabled = allScan[1].data[5].enabled;
        quickScan[11].enabled = allScan[1].data[6].enabled;
        quickScan[12].enabled = allScan[1].data[7].enabled;
        quickScan[13].enabled = allScan[2].data[0].enabled;
        quickScan[14].enabled = allScan[2].data[1].enabled;
        quickScan[15].enabled = allScan[2].data[2].enabled;
        quickScan[16].enabled = allScan[2].data[3].enabled;
        return quickScan;
    } */

  createMockupPercentProcess(
    avgSleepTimeMs: number,
    maxLoadingTimeMs = 150000,
    updateIntervalMs = 800
  ) {
    let percent = 0,
      isPaused = false,
      isTimedOut = false;
    const _startTimeout = () => {
      let id = setTimeout(() => {
        isTimedOut = true;
        // console.log('time out', id, `percent=${percent}`);
      }, maxLoadingTimeMs);
      // console.log('start time out', id);
      return id;
    };
    const _startTick = () => {
      if (percent < 99) {
        let sleepInMs =
          Math.floor(Math.random() * 10 + 1) * Math.floor(avgSleepTimeMs / 10);
        if (percent < 40) {
          sleepInMs *= 1;
        } else if (percent < 65) {
          sleepInMs *= 3;
        } else if (percent < 80) {
          sleepInMs *= 6;
        } else if (percent < 90) {
          sleepInMs *= 9;
        } else {
          sleepInMs *= 15;
        }
        !isPaused && percent++;
        return setTimeout(_startTick, sleepInMs);
      }
    };
    const _stopTick = () => {
      // console.log('stop time out', timeout);
      timeout && clearTimeout(timeout);
      percent = 100;
    };
    const _pauseTick = () => {
      isPaused = true;
      // console.log('pause (stop) time out', timeout);
      timeout && clearTimeout(timeout);
    };
    const _resumeTick = () => {
      if (isPaused) {
        isPaused = false;
        timeout = _startTimeout();
      }
    };
    let id = _startTick(),
      timeout = _startTimeout(),
      _tick = interval(updateIntervalMs).pipe(
        takeWhile((n) => percent < 100),
        map((n) => {
          if (isTimedOut) {
            percent = 100;
            throw new Error('Timed out.');
          }
          return percent;
        })
      );
    const proc = {
      subscribe: (...args) => {
        return _tick.subscribe(...args);
      },
      pause: _pauseTick,
      resume: _resumeTick,
      stop: _stopTick,
    };
    return proc;
  }
  // get Image battery
  getImgBattery(level, isPlugged) {
    if (isPlugged) {
      return '/assets/svg/battery/inv-battery-recharge.svg';
    } else {
      return `/assets/svg/battery/inv-battery${
        level < 20 ? '' : `-${Math.round(level / 20) * 20}`
      }.svg`;
    }
  }

  getScanningTypeText(numScanType: number) {
    let scan = '';
    if (numScanType === PrintType.GlobalOBD) {
      return (scan = ScanningType.GlobalOBD);
    }
    if (numScanType === PrintType.QuickScan) {
      return (scan = ScanningType.QuickScan);
    }
    return (scan = ScanningType.NetworkScan);
  }
}
