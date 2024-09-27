import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { ModalController, ModalOptions, Platform } from '@ionic/angular';
import {
  AppConfig,
  AppStrings,
  MAX_MILEAGE_VALUE,
} from 'src/app/configs/app.config';
import {
  BleData,
  InfoToolConnected,
  VehicleModel,
} from 'src/app/models/app.model';
import { InnovaVCIService } from 'src/app/services/innova-vci.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { RoutePath } from 'src/app/app-routing.module';
import {
  EnumAppEvent,
  EnumAppDataKey,
  EnumLocalStorage,
} from 'src/app/models/app.enum';
import {
  InnovaVCIEvent,
  VCIResponseData,
} from 'src/app/services/innova-tool-models';
import { ApiDecodeVinResponse } from 'src/app/services/api.models';
import { AppData } from 'src/app/models/app.data';
import _ from 'lodash';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { EnterVinPage } from '../enter-vin/enter-vin.page';
import { ReportSession, ReportStatus } from 'src/app/models/report-session';
import { ReportServiceProvider } from 'src/app/services/report-service/report-service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { VehicleServiceProvider } from 'src/app/services/vehicle-service/vehicle-service';
import { BLE } from '@ionic-native/ble/ngx';
import { Events } from 'src/app/services/events.service';
import { HelperService } from 'src/app/services/helper.service';
import { BaseController } from 'src/app/bases/base-controller';
import { StorageKeys } from 'src/app/models/app.constant';
import { AppState } from 'src/app/services/state/app.state';
import { ConnectivityService } from 'src/app/services/innova-vci-service/src/connectivity/connectivity.service';
import { VehicleSelectionPage } from '../../modals/vehicle-selection/vehicle-selection.page';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';

@Component({
  selector: 'app-vehicle-linking',
  templateUrl: './vehicle-linking.page.html',
  styleUrls: ['./vehicle-linking.page.scss'],
})
export class VehicleLinkingPage extends BaseController {
  title = 'Scanning devices';
  isRescan = false;
  statusText: string;
  resultText: string;
  isScanning = true;
  hasMultipleDevices = false;
  retry = 0;
  timer: any;
  retryingCreateReport = false;
  percent = 0;
  isScanningVIN = false;
  isScanningModules = false;
  found = false;
  result = 'Starting scan';
  private isRetried = false;
  isCancelling = false;
  creatingReport = false;
  deviceId = '';
  toolName = '';
  reportSession: ReportSession;
  devices: BleData[];
  createReportErrorMessage = '';
  vciRepsonse: VCIResponseData;
  reportStatus: ReportStatus;
  private isLeaveScanningPage = false;
  public toolInfo: InfoToolConnected;
  private connectedVehicle: ApiDecodeVinResponse;
  private scanningTimeout = null;
  #vehicleData: VehicleModel;
  multipleDevicesInterval = null;
  constructor(
    private modalController: ModalController,
    private innovaVciService: InnovaVCIService,
    private helper: HelperService,
    private navigationService: NavigationService,
    private connService: ConnectivityService,
    private platform: Platform,
    private insomnia: Insomnia,
    private zone: NgZone,
    private diagnostic: Diagnostic,
    private openNativeSettings: OpenNativeSettings,
    private reportService: ReportServiceProvider,
    private eventService: Events,
    private barcodeScanner: BarcodeScanner,
    private changeDetector: ChangeDetectorRef,
    private vehicleService: VehicleServiceProvider,
    private ble: BLE
  ) {
    super('VehicleLinkingPage');
  }

  setStatus(result, status = '') {
    console.log('🚀 ~ VehicleLinkingPage ~ setStatus ~ result:', result)
    this.zone.run(() => {
      if (result != null) {
        this.resultText = result;
        this.logger.debug(this.resultText + ' - ' + status);
      }
      this.statusText = status;
    });
  }

  selectDevice(device: BleData) {
    console.log('🚀 ~ VehicleLinkingPage ~ selectDevice ~ device:', device)
    this.eventService.publish(InnovaVCIEvent.DEVICE_SELECTED, device);
    this.isScanning = false;
    this.hasMultipleDevices = false;
    // this.title = 'Loading...';
    this.helper.refreshLayout(this.changeDetector);
  }

  async ionViewWillEnter() {
    this.hasMultipleDevices = false;
    this.isScanning = false;
    this.isCancelling = false;
    this.creatingReport = false;
    this.isLeaveScanningPage = false;
    this.createReportErrorMessage = '';
    this.vciRepsonse = null;
    this.reportStatus = ReportStatus.Incomplete;
    this.reportSession = this.reportService.getReportSession();
    this.connectedVehicle = AppData.get(EnumAppDataKey.InfoVehicleConnected);
    this.isRescan = this.helper.coerceBooleanProperty(
      this.navigationService.getQueryParam('isRescan')
    );
    if (this.isRescan) {
      this.title = 'Rescanning modules';
      this.result = '';
    } else {
      this.isScanning = true;
      this.title = 'Scanning devices';
      this.result = 'Starting scan';
      this.eventService.subscribe(
        InnovaVCIEvent.CONNECTED,
        (device: BleData) => {
          this.logger.debug('Connected: ', device);
          this.deviceId = device.id;
          this.toolName = device.name;
          this.title = 'Loading';
          this.setStatus(
            device.name + ' has been connected',
            'Linking to vehicle...'
          );
          this.isScanning = false;
          if (this.scanningTimeout) {
            clearTimeout(this.scanningTimeout);
            this.scanningTimeout = null;
          }
          if (this.multipleDevicesInterval) {
            clearInterval(this.multipleDevicesInterval);
            this.multipleDevicesInterval = null;
          }
          this.startScan();
        }
      );
      let ctx = this;
      ctx.devices = [];
      this.eventService.subscribe(
        InnovaVCIEvent.DEVICE_FOUND,
        (device: BleData) => {
          if (!ctx.devices) {
            ctx.devices = [];
          }
          if (ctx.devices.findIndex((d) => d.id === device.id) < 0) {
            ctx.devices.push(device);
          }
        }
      );
      ctx.multipleDevicesInterval = setInterval(() => {
        if (ctx.isScanning) {
          if (ctx.devices.length > 0) {
            if (this.multipleDevicesInterval) {
              clearInterval(this.multipleDevicesInterval);
              this.multipleDevicesInterval = null;
            }
            ctx.eventService.unsubscribe(InnovaVCIEvent.DEVICE_FOUND);
            ctx.isScanning = false;
            clearTimeout(ctx.scanningTimeout);
            ctx.scanningTimeout = null;
            if (AppState.isOnAndroid) {
              console.log('Call this.ble.stopScan');
              ctx.connService.stopScan();
            }
            if (ctx.devices.length > 1) {
              ctx.hasMultipleDevices = true;
            } else {
              ctx.selectDevice(ctx.devices[0]);
            }
            ctx.helper.refreshLayout(ctx.changeDetector);
          }
        } else {
          clearInterval(ctx.multipleDevicesInterval);
          ctx.multipleDevicesInterval = null;
        }
      }, AppConfig.scanningDevicesInterval);

      this.isScanningModules = false;
      this.eventService.subscribe(
        EnumAppEvent.InfoToolConnected,
        async (toolInfo) => {
          this.eventService.unsubscribe(EnumAppEvent.InfoToolConnected);
          this.logger.debug(toolInfo);
          this.toolInfo = toolInfo;
          if (this.toolInfo) {
            localStorage.setItem(
              StorageKeys.FIRMWARE_VERSION,
              this.toolInfo.main
            );
          }
        }
      );

      this.scanningTimeout = setTimeout(async () => {
        if (!this.isConnected) {
          this.navigationService
            .goTo(RoutePath.ConnectionFailed)
            .then(async () => {
              if (AppState.isOnAndroid) {
                console.log('Call this.ble.stopScan');
                this.ble.stopScan();
              }
              await this.innovaVciService.disconnect(true, this.deviceId);
            })
        }
      }, AppConfig.scanningDevicesTimeout);
    }
    console.log('🚀 ~ VehicleLinkingPage ~ ionViewWillEnter ~ DONE ionViewWillEnter:');
  }

  async ionViewDidEnter() {
    this.eventService.subscribe(InnovaVCIEvent.SCAN_STATUS, (res) => {
      let name = _.get(res, 'name');
      let result = _.get(res, 'result');
      this.setStatus(result, name);
    });
    // Check Bluetooth Permission
    //bao check temp
    let isBtEnabled = await this.helper.checkBluetoothPermissions();
    if (!isBtEnabled) {
      if (AppState.isOnAndroid && !AppState.isOnAtLeastVersion(13)) {
        this.helper.confirm(
          'In order to detect and pair to your scan tool, please turn Bluetooth ON.',
          'Bluetooth is turned OFF',
          async () => {
            isBtEnabled = await this.diagnostic.setBluetoothState(true);
            this.logger.debug('Is BT Enabled', isBtEnabled);
            if (isBtEnabled) {
              this.startScanNow();
            } else {
              this.helper.goBack();
            }
          },
          () => {
            this.helper.goBack();
          },
          'Turn Bluetooth ON',
          'Cancel'
        );
      } else {
        this.helper.confirm(
          'In order to detect and pair to your scan tool, turn Bluetooth ON from your device’s settings.',
          'Bluetooth is turned OFF',
          async () => {
            if (AppState.isOnAndroid) {
              this.diagnostic.switchToBluetoothSettings();
            } else {
              this.openNativeSettings.open('settings').catch((ex) => {
                this.logger?.info('openSettings>openNativeSettings>Error', ex);
              });
            }
          },
          () => {
            this.helper.goBack();
          },
          'Go to settings',
          'Cancel'
        );
      }
    } else {
      this.startScanNow();
    }
  }

  async startScanNow() {
    console.log('this.isRescan: ', this.isRescan);
    if (this.isRescan) {
      this.isScanningModules = true;
      this.setStatus('', 'Read supported modules...');
      return await this.scanOEMModules(
        this.innovaVciService.vciResponseData.vin
      );
    } else {
      return await this.#startScanTools();
    }
  }

  async #startScanTools() {
    this.eventService.publish(InnovaVCIEvent.INTERRUPT_PROCESS);
    return await this.innovaVciService.initializeBT();
  }

  async saveAndCreateReport(
    vciRepsonse: VCIResponseData,
    reportStatus: ReportStatus
  ) {
    this.setStatus('', 'Creating report...');
    let ctx = this;
    if (ctx.isCancelling) {
      return;
    }
    ctx.reportService.saveReportSession(ctx.reportSession);

    ctx.creatingReport = true;
    await ctx.helper.sleep(1000);
    await ctx.createReport(vciRepsonse, reportStatus);
  }

  createReportFailed() {
    this.retryingCreateReport = true;
    this.creatingReport = false;
    this.isCancelling = true;
    this.helper.confirm(
      this.createReportErrorMessage,
      '',
      async () => {
        this.isCancelling = false;
        await this.createReport(this.vciRepsonse, this.reportStatus);
      },
      () => {
        this.cancel(true, true);
      },
      'Try Again',
      'Cancel'
    );
  }

  async createReport(vciRepsonse: VCIResponseData, reportStatus: ReportStatus) {
    let ctx = this;
    try {
      ctx.creatingReport = true;
      ctx.isScanningModules = false;
      this.logger.debug('Creating report');
      if (!vciRepsonse.mileage) {
        vciRepsonse.mileage = ctx.reportSession.mileage;
      }
      let result = await ctx.reportService.createReport(
        ctx.reportSession.workOrderNumber,
        vciRepsonse,
        reportStatus
      );
      if (result.success) {
        this.logger.debug('Report Created Success');
        ctx.reportSession.reportId = result.data.id;
        ctx.reportSession.reportNumber = result.data.reportNumber + '';
        ctx.reportService.saveReportSession(ctx.reportSession);
        ctx.retryingCreateReport = false;
        ctx.reportService.saveReport(result.data);
        ctx.resultText = '';
        ctx.statusText = '';
        ctx.navigationService.goTo(RoutePath.ScanComplete, {
          queryParams: {
            deviceId: ctx.deviceId,
            reportId: result.data.id
          },
        });
      } else {
        this.logger.debug('Unable to create report', result);
        if (result.message && result.message.message != undefined) {
          ctx.createReportErrorMessage =
            'Create report failed: ' +
            result.message.message +
            ' Please try again.';
        } else {
          ctx.createReportErrorMessage =
            'Unable to create report. Please check your internet connection and try again.';
        }
        ctx.reportStatus = reportStatus;
        ctx.vciRepsonse = vciRepsonse;
        ctx.createReportFailed();
      }
    } catch (error) {
      this.logger.debug('Unable to create report', error);
      ctx.createReportErrorMessage =
        'Unable to create report. Please try again.';
      ctx.reportStatus = reportStatus;
      ctx.vciRepsonse = vciRepsonse;
      ctx.createReportFailed();
    }
  }

  async gotVIN(needSetVIN: boolean, vin: string) {
    if (needSetVIN) {
      this.innovaVciService.vciResponseData.vin = vin;
      this.logger.debug('Writing VIN: ', vin);
      await this.innovaVciService.setVin(vin, true);
      await this.helper.sleep(2_000);
    }

    if (this.innovaVciService.needUpdateMoreVehicleInfo) {
      let result = (await this.innovaVciService
        .ymme_get(254)
        .catch((err) => null)) as any;
      if (result && result.field !== 'Done') {
        this.logger.debug(
          'vciResponseData ymme',
          this.innovaVciService.vciResponseData.ymme
        );
        this.logger.debug(
          'ymme_get 254 result',
          result
        );
        const isVehicleInfoOk = await this.setVehicleInfoFromUser({
          year: this.innovaVciService.vciResponseData.ymme?.year,
          make: this.innovaVciService.vciResponseData.ymme?.make,
          model: this.innovaVciService.vciResponseData.ymme?.model,
          engine: this.innovaVciService.vciResponseData.ymme?.engine,
          options1: result.options,
        });
        if (!isVehicleInfoOk) {
          return await this.helper
            .alert('T7R-85 Toyota, Lexus, Scion Pop-Up: Could not auto confirm')
            .then(() => {
              this.cancel(false);
            });
        }
      }
    }
    return await this.scanOEMModules(vin);
  }

  private async startScan() {
    this.logger.debug('start scan');
    console.log('start scan');
    let ctx = this;
    ctx.isCancelling = false;
    ctx.#vehicleData = null;
    if (ctx.retryingCreateReport === true) {
      ctx.retryingCreateReport = false;
      await ctx.helper.sleep(1000);
      ctx.createReport(this.innovaVciService.vciResponseData, 0);
      return;
    }
    ctx.isRetried = false;
    this.percent = 0;
    try {
      let res;
      await this.insomnia.keepAwake().catch(this.logger.debug.bind(null));
      const startMs = new Date().getTime();
      this.innovaVciService.enableReportSleepTime(true);
      res = await this.innovaVciService.connectAndRequestData();
      if (!res) {
        throw new Error('Could not query data.');
      }
      let vin = this.innovaVciService.vciResponseData.vin;
      if (vin === undefined || vin === null || vin === '') {
        this.setStatus(
          'No VIN Detected',
          'Starting scan VIN or Enter Manually'
        );
        await this.scanVin();
      } else {
        await this.decodeVIN(vin, false);
      }
    } catch (e) {
      this.logger.debug(
        'Scan failed',
        e,
        'isLeaveScanningPage',
        this.isLeaveScanningPage
      );
      if (this.isLeaveScanningPage) {
        return this.onScanDone();
      }
      this.isRetried = true; // Disable Retry when scan failed
      if (this.isRetried) {
        this.percent = 0;
        return this.showFailureDialog();
      } else {
        this.isRetried = true;
        await this.innovaVciService.disconnect(true, this.deviceId);
        return this.startScan();
      }
    }
  }

  private async getDataFromModal(modalOptions: ModalOptions) {
    const modal = await this.modalController.create(modalOptions);
    await this.helper.hideLoading();
    modal.present().then(() => {
      // this.currentModal = modal;
    });
    // modal.onDidDismiss().then(() => {
    //   this.currentModal = null;
    // });
    return modal.onDidDismiss();
  }

  private async setVehicleInfoFromUser(ymme: {
    year: string;
    make: string;
    model: string;
    engine: string;
    options1: string[];
  }) {
    const { data } = await this.getDataFromModal({
      component: VehicleSelectionPage,
      componentProps: {
        ymme: ymme,
      },
      showBackdrop: true,
      backdropDismiss: false,
    });
    return data && data.confirm;
  }

  private async scanOEMModules(vin) {
    if (this.isCancelling) {
      return;
    }
    this.isScanningModules = true;
    this.isLeaveScanningPage = false;
    this.isCancelling = false;
    const startMs = new Date().getTime();
    this.innovaVciService.enableReportSleepTime(true);
    let res = await this.innovaVciService.scanModules(vin);
    this.isScanningModules = false;
    const sleepMs = this.innovaVciService.totalSleepTime;
    const endMs = new Date().getTime();
    this.logger.debug(
      `[*Done] Scan time: ${
        Math.round(((endMs - startMs) / 1000) * 100) / 100
      } seconds. Sleep time: ${
        Math.round((sleepMs / 1000) * 100) / 100
      } seconds`
    );
    this.insomnia.allowSleepAgain().catch(this.logger.debug.bind(null));

    this.logger.debug('result', res);
    await this.onScanDone();
  }

  private async showFailureDialog(msg = '', title = '') {
    if (this.isLeaveScanningPage) return;
    this.isLeaveScanningPage = true;
    await this.helper.alert(
      msg ||
        `Please verify the tool is connected to the vehicle’s OBD-II port and try again`,
      title || 'Scan Failed'
    );

    this.isLeaveScanningPage = false;
  }

  async doCancelScanning() {
    this.isCancelling = true;
    this.resultText = '';
    this.statusText = 'One moment please...';
    this.isLeaveScanningPage = true;
    return this.helper.popToRoot(RoutePath.Home).then(async () => {
      if (AppState.isOnAndroid) {
        console.log('Call this.ble.stopScan');
        this.ble.stopScan();
      }
      await this.innovaVciService.disconnect(true, this.deviceId);
    });
  }

  get isConnected() {
    if (AppState.isOnDevice) {
      return this.innovaVciService.isConnected;
    }
    return true;
  }

  async scanVin() {
    let ctx = this;
    if (ctx.isCancelling) {
      return;
    }
    if (AppState.isOnDevice) {
      ctx.barcodeScanner.scan({ orientation: 'portrait', prompt: '' }).then(
        async (barcodeData) => {
          if (barcodeData.cancelled) {
            if (barcodeData.text && barcodeData.text === 'enterVin') {
              await this.getVinFromUser();
            } else {
              this.cancel(false);
            }
          } else if (barcodeData) {
            let vin = barcodeData.text;
            if (
              barcodeData.format === 'CODE_39' ||
              (vin != '' && vin.length >= 17)
            ) {
              if (vin.length > 17) {
                vin = vin.substring(1);
              }
              await this.decodeVIN(vin, true);
            } else {
              await ctx.helper.sleep(1000);
              await ctx.scanVin();
            }
          }
        },
        async (err) => {
          this.logger.debug(err);
          await ctx.helper.sleep(1000);
          await ctx.scanVin();
        }
      );
    } else {
      await this.getVinFromUser();
    }
  }

  async decodeVIN(vin: string, needSetVIN = true) {
    this.setStatus('', 'Decoding VIN: ' + vin);
    this.#vehicleData = null;
    let result = await this.vehicleService.decodeVin(vin);
    if (result.success && result.data) {
      if (needSetVIN) {
        this.setStatus('', 'Writing VIN: ' + vin);
      }
      this.#vehicleData = result.data;
      return await this.gotVIN(needSetVIN, vin);
    } else {
      if (result.message && result.message.code != -1) {
        this.helper.alert(
          result.message.code === 5006
            ? `VIN ${vin} is invalid.`
            : result.message.message,
          'Error',
          [
            {
              text: 'OK',
              handler: () => {
                this.cancel(false);
              },
            },
          ]
        );
      } else {
        const message =
          'Unable to decode VIN: ' +
          vin +
          '. Please check your internet connection and try again.';
        this.helper.confirm(
          message,
          'Error',
          () => {
            this.decodeVIN(vin, needSetVIN);
          },
          () => {
            this.cancel();
          },
          'Retry',
          'Cancel'
        );
      }
    }
  }

  private async getVinFromUser() {
    // if (this.isLeaveScanningPage) return;
    const modal = await this.modalController.create({
      component: EnterVinPage,
      componentProps: {
        isModal: true,
      },
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    this.setStatus('', 'Writing VIN: ' + data.vin);
    this.#vehicleData = data.data;
    return await this.gotVIN(true, data.vin);
  }

  private async onScanDone() {
    if (this.isCancelling) {
      this.logger.debug('isCancelling', this.isCancelling);
      return;
    }
    let vciResponse = this.innovaVciService.vciResponseData;
    this.logger.debug('vciResponseData', vciResponse);
    let recentVin = localStorage.getItem(EnumLocalStorage.RecentVINScanned);
    let recentMileage = 0;
    if (
      isNaN(vciResponse.mileage) ||
      vciResponse.mileage <= 0 ||
      vciResponse.mileage > MAX_MILEAGE_VALUE
    ) {
      if (recentVin && recentVin === vciResponse.vin) {
        recentMileage = this.reportSession.mileage;
      }
      if (recentMileage && recentMileage > 0) {
        vciResponse.mileage = recentMileage;
        this.logger.debug(
          'auto set mileage from recent user input',
          recentMileage
        );
      }
    }
    if (this.connectedVehicle) {
      this.connectedVehicle.vin = vciResponse.vin;
      if (vciResponse.ymme) {
        this.connectedVehicle.make = vciResponse.ymme.make;
        this.connectedVehicle.year = vciResponse.ymme.year;
        this.connectedVehicle.model = vciResponse.ymme.model;
      }
      this.connectedVehicle.mileage = vciResponse.mileage;
      AppData.set(EnumAppDataKey.InfoVehicleConnected, this.connectedVehicle);
    }
    this.percent = 100;
    await this.saveAndCreateReport(vciResponse, ReportStatus.Complete);
  }

  ionViewDidLeave() {
    this.eventService.unsubscribe(InnovaVCIEvent.CONNECTED);
    this.eventService.unsubscribe(InnovaVCIEvent.DEVICE_FOUND);
    this.eventService.unsubscribe(InnovaVCIEvent.DEVICE_SELECTED);
    this.eventService.unsubscribe(InnovaVCIEvent.SCAN_STATUS);
    this.eventService.unsubscribe(InnovaVCIEvent.INTERRUPT_PROCESS);
    this.eventService.unsubscribe(InnovaVCIEvent.USER_GUI_INFO);
    if (this.multipleDevicesInterval) {
      clearInterval(this.multipleDevicesInterval);
      this.multipleDevicesInterval = null;
    }
    if (this.scanningTimeout) {
      clearTimeout(this.scanningTimeout);
      this.scanningTimeout = null;
    }

    this.isLeaveScanningPage = true;
    // Unregister the custom back button action for this page
    document.removeEventListener('backbutton', () => {
      this.logger.debug('unregister back button event');
    });
  }

  public initializeBackButtonCustomHandler(): void {
    this.platform.ready().then(() => {
      document.addEventListener('backbutton', () => {
        this.customHandleBackButton();
      });
    });
  }

  private customHandleBackButton(): void {
    this.cancel();
  }

  async cancel(confirm = true, reportFailed = false) {
    if (AppState.isOnDevice) {
      this.isCancelling = true;
      if (confirm) {
        this.helper.confirm(
          'Are you sure?',
          AppStrings.CONFIRM,
          async () => {
            this.doCancelScanning();
          },
          () => {
            if (reportFailed) {
              this.createReportFailed();
            } else {
              this.isCancelling = false;
            }
          }
        );
      } else {
        this.doCancelScanning();
      }
    }
  }
}
