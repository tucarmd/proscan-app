import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import {
  AppConfig,
  AppStrings,
  SUPPORTED_BLUETOOTH_DEVICE_NAMES,
} from 'src/app/configs/app.config';
import { BleData } from 'src/app/models/app.model';
import { NavigationService } from 'src/app/services/navigation.service';
import { RoutePath } from 'src/app/app-routing.module';
import _ from 'lodash';
import { BLE } from '@ionic-native/ble/ngx';
import { HelperService } from 'src/app/services/helper.service';
import { BaseController } from 'src/app/bases/base-controller';
import { AppState } from 'src/app/services/state/app.state';
import { ConnectivityService } from 'src/app/services/innova-vci-service/src/connectivity/connectivity.service';
import { CarMDUtils } from 'src/app/services/utility/carmd.utils';
import { MultipleToolsFoundModalPage } from 'src/app/modals/multiple-tools-found-modal/multiple-tools-found-modal.page';
import { ChangeToolNameModalPage } from 'src/app/modals/change-tool-name-modal/change-tool-name-modal.page';

@Component({
  selector: 'app-change-tool-name',
  templateUrl: './change-tool-name.page.html',
  styleUrls: ['./change-tool-name.page.scss'],
})
export class ChangeToolNamePage extends BaseController {
  title = 'Scanning devices';
  statusText: string;
  resultText: string;
  isScanning = true;
  retry = 0;
  timer: any;
  found = false;
  result = 'Starting scan';
  isCancelling = false;
  deviceId = '';
  toolName = '';
  devices: BleData[];
  #scanningTimeout = null;
  #hasMultipleDevices = false;
  #multipleToolsFoundPopupVisible = false;
  constructor(
    private helper: HelperService,
    private modalController: ModalController,
    private navigationService: NavigationService,
    private connService: ConnectivityService,
    private platform: Platform,
    private zone: NgZone,
    private changeDetector: ChangeDetectorRef,
    private ble: BLE
  ) {
    super('ChangeToolNamePage');
  }

  setStatus(result, status = '') {
    this.zone.run(() => {
      if (result != null) {
        this.resultText = result;
        this.logger.debug(this.resultText + ' - ' + status);
      }
      this.statusText = status;
    });
  }

  async selectDevice(device: BleData) {
    if(AppState.isOnAndroid){
      console.log('Call this.ble.stopScan');
      await this.ble.stopScan();
    }
    const modal = await this.modalController.create({
      component: ChangeToolNameModalPage,
      componentProps: {
        toolId: device.id,
        toolName: device.displayName
      },
      cssClass: 'app-modal-dialog-2 px-2 keyboard-active',
      showBackdrop: true,
      backdropDismiss: false
    });
    await modal.present();
    const data = await modal.onDidDismiss();
    if(data && data.data && data.data.newName){
      localStorage.setItem(device.id, data.data.newName);
      return this.navigationService.popToRoot(RoutePath.Home);
    }
  }

  async ionViewWillEnter() {
    this.isScanning = false;
    this.isCancelling = false;
    this.isScanning = true;
    this.title = 'Scanning devices';
    this.result = 'Starting scan';
    let ctx = this;
    ctx.devices = [];
    this.#scanningTimeout = setTimeout(async () => {
      if (!this.devices || this.devices.length === 0) {
        this.navigationService
          .goTo(RoutePath.ConnectionFailed, {
            queryParams: {
              sourcePage: RoutePath.ChangeToolName,
            },
          })
          .then(async () => {
            if (AppState.isOnAndroid) {
              console.log('Call this.ble.stopScan');
              this.ble.stopScan();
            }
          });
      }
    }, AppConfig.scanningDevicesTimeout);
  }

  async ionViewDidEnter() {
    this.isScanning = true;
    await this.#startScanDevices();
  }

  async #startScanDevices() {
    if (AppState.isOnAndroid) {
      this.ble.stopScan().then(() => {
        this.ble.startScan([]).subscribe((btDevice) => {
          if (btDevice['name'] && btDevice['name'].length > 0) {
            if (
              _.includes(SUPPORTED_BLUETOOTH_DEVICE_NAMES, btDevice['name'])
            ) {
              this.logger.debug('Device found', btDevice);
              const index = this.devices.findIndex(
                (d) => d.id === btDevice['id']
              );
              if (index < 0) {
                this.#addDevice(btDevice['id'], btDevice['name']);
                this.isScanning = false;
                CarMDUtils.refreshUI(this.changeDetector);
              }
              this.#hasMultipleDevices = this.devices.length > 1;
              if (this.#hasMultipleDevices) {
                this.#displayMultipleToolsFoundPopup().then();
              }
            }
          }
        });
      });
    } else {
      let devices = await this.connService.discoverBluetoothDevices2();
      if (devices && devices.length > 0) {
        while (devices.length) {
          let device = devices.shift();
          this.logger.debug('Found Pro15 device', device);
          this.#addDevice(device['id'], device['name']);
          this.isScanning = false;
          CarMDUtils.refreshUI(this.changeDetector);
        }
        this.#hasMultipleDevices = this.devices.length > 1;
        if (this.#hasMultipleDevices) {
          await this.#displayMultipleToolsFoundPopup();
        }
      }
    }
  }

  #addDevice(id: string, name: string){
    const localName = localStorage.getItem(id);
    if(localName){
      this.devices.push(new BleData(id, localName, true));
    } else {
      this.devices.push(new BleData(id, name));
    }
  }

  async #displayMultipleToolsFoundPopup() {
    if (!this.#multipleToolsFoundPopupVisible) {
      this.#multipleToolsFoundPopupVisible = true;
      const modal = await this.modalController.create({
        component: MultipleToolsFoundModalPage,
        showBackdrop: true,
        backdropDismiss: false,
        cssClass: 'app-modal-dialog-3 px-2',
      });
      await modal.present();
      await modal.onDidDismiss();
    }
  }

  async doCancelScanning() {
    this.isCancelling = true;
    this.resultText = '';
    this.statusText = 'One moment please...';
    return this.helper.popToRoot(RoutePath.Home).then(async () => {
      if (AppState.isOnAndroid) {
        this.ble.stopScan();
      }
    });
  }

  ionViewDidLeave() {
    if (this.#scanningTimeout) {
      clearTimeout(this.#scanningTimeout);
      this.#scanningTimeout = null;
    }

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

  async cancel(confirm = true) {
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
            this.isCancelling = false;
          }
        );
      } else {
        this.doCancelScanning();
      }
    }
  }
}
