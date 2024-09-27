/**
 * @Date:   2020-11-06T22:46:24+07:00
 * @Last modified time: 2022-07-12T15:50:13+07:00
 */

import { Injectable } from '@angular/core';
// import { serializePath } from '@angular/router/src/url_tree';
import { NotifyService } from './../utilities/notify.service';
import { EnumSerialType } from '../standard/enums';
import * as DataParser from './../utilities/dataParser';
import * as _ from 'lodash';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { isNullOrUndefined } from 'util';
import { Subscription } from 'rxjs';
import { BLE } from '@ionic-native/ble/ngx';
import { HelperService } from 'src/app/services/helper.service';
import { AppState } from 'src/app/services/state/app.state';
@Injectable({
  providedIn: 'root',
})
export class ConnectivityService {
  private isOpenPort: boolean;
  private com_serial = null;
  private serial_type: EnumSerialType;
  private listdev: any[];
  private listBondeddev: any[];
  private cbbluetooth = null;
  private isDevConnected: boolean;
  private Productid = '0';
  private watchResponse: Subscription; // added by ngoclb
  constructor(
    private logger: NotifyService,
    private ble_serial: BluetoothSerial,
    private helper: HelperService,
    private ble: BLE
  ) {
    this.isOpenPort = false;
    this.Productid = '0';
    this.com_serial = ble_serial;
  }
  public blIsCheckOpenPort() {
    return this.isOpenPort;
  }
  public getSerialType() {
    return this.serial_type;
  }

  public async initialize(
    cbdatahandler = null,
    type: EnumSerialType
  ): Promise<boolean> {
    // ngoclb: only set this.serial_type after init success

    try {
      const com_serial = this.ble_serial;

      this.com_serial = com_serial;
      this.serial_type = type;
      return true;
    } catch (err) {
      this.com_serial = null;
      this.logger.log(err);
    }
    return false;
  }

  /**
   * interrupt device connection (soft)
   */
  cancel_process() {
    this.logger.log('cancel_process');
    this.isDevConnected = false;
  }

  /**
   * interrupt device connection (soft)
   */
  resume_process() {
    this.logger.log('resume_process');
    this.isDevConnected = true;
  }

  public async connectBlueToothDevice(
    add: string,
    cbdatahandler = null,
    cbresult = null
  ): Promise<Subscription> {
    // if(this.serial_type ==  EnumSerialType.Bluetooth)
    // {
    if (AppState.isOnAndroid) {
      return await this.ble_serial.connectInsecure(add).subscribe(
        (success) => {
          this.logger.log(`[BT] Device connect successfully ${add}`);
          this.isDevConnected = true;
          this.com_serial = this.ble_serial;
          this.watchResponse && this.watchResponse.unsubscribe();
          this.watchResponse = this.com_serial.subscribeRawData().subscribe(
            (data) => {
              var datau8array = new Uint8Array(data).map((xx) => {
                return xx;
              });
              this.logger.logComRx(DataParser.bytesToHexString(datau8array));
              cbdatahandler && cbdatahandler(datau8array);
            }
          );
          cbresult && cbresult(true);
        },
        async (error) => {
          this.logger.log(`[BT] Device connect unsuccessfully ${add}: ${error}`);
          await this.helper.sleep(3000);
          await this.ble_serial.connectInsecure(add).subscribe(success => {
            this.logger.log(`[BT] Device connect successfully ${add}`);
            this.isDevConnected = true;
            this.com_serial = this.ble_serial;
            this.watchResponse && this.watchResponse.unsubscribe();
            this.watchResponse = this.com_serial.subscribeRawData().subscribe(data => {
              var datau8array = (new Uint8Array(data)).map(xx => { return xx })
              this.logger.logComRx(DataParser.bytesToHexString(datau8array));
              cbdatahandler && cbdatahandler(datau8array)
            }
            )
            cbresult && cbresult(true);
          }, (err) => {
            cbresult && cbresult(false);
          });
        }
      );
    } else {
      return await this.ble_serial.connect(add).subscribe(
        (success) => {
          this.logger.log(`[BT] Device connect successfully ${add}`);
          this.isDevConnected = true;
          this.com_serial = this.ble_serial;
          this.watchResponse && this.watchResponse.unsubscribe();
          this.watchResponse = this.com_serial.subscribeRawData().subscribe(
            (data) => {
              var datau8array = new Uint8Array(data).map((xx) => {
                return xx;
              });
              this.logger.logComRx(DataParser.bytesToHexString(datau8array));
              cbdatahandler && cbdatahandler(datau8array);
            }
          );
          cbresult && cbresult(true);
        },
        (error) => {
          this.logger.log(`[BT] Device connect unsuccessfully ${add}: ${error}`);
          this.com_serial = this.ble_serial;
          cbresult && cbresult(false);
        }
      );
    }

    // }
    // return null;
  }

  public async BluetoothIsConnected(): Promise<boolean> {
    await this.ble_serial.isConnected().then(
      (success) => {
        this.logger.log('Device Connected!!');
        this.isDevConnected = true;
      },
      (error) => {
        this.logger.log('Device is not Connected');
        this.isDevConnected = false;
      }
    );
    return this.isDevConnected;
  }
  public async disconnectBluetoothDevices(): Promise<boolean> {
    try {
      let isDisconnect = await this.ble_serial.disconnect().catch(() => {
        this.logger.log('[BT] Device disconnect unsuccessfully!');
      });
      if (!isDisconnect) {
        this.logger.log('[BT] Device disconnect unsuccessfully!');
      }
      return true;
    } catch (err) {
      this.logger.log(err);
      return this.isDevConnected;
    }
  }
  public async listBonnedBluetoothDevices(): Promise<object> {
    // if(this.serial_type ===  EnumSerialType.Bluetooth)
    // {
    try {
      if (this.helper.isIOs()) {
        /*
          await this.ble.connectedPeripheralsWithServices([]).then(list => {
            this.logger.log('device list: ' + list);
            if(!isNullOrUndefined(list))
              this.listBondeddev = list;
          }, error => {
            this.logger.log('Bluetooth is not yet enabled');
            //return null;
          })*/
      } else {
        let result = await this.ble.bondedDevices().then(
          (list) => {
            console.log('list: ', list);
            this.logger.log('device list: ' + list);
            if (!isNullOrUndefined(list)) this.listBondeddev = list;
          },
          (error) => {
            console.log('error: ', error);
            this.logger.log('Bluetooth is not yet enabled');
            //return null;
          }
        );
        console.log('result: ', result);

      }

      return this.listBondeddev;
    } catch (err) {
      //alert(err)
      this.logger.log(err);
    }
    // }
  }

  public stopScan() {
    // if(this.serial_type ===  EnumSerialType.Bluetooth)
    // {
    setTimeout(() => {
      console.log('Call this.ble.stopScan');
      this.ble.stopScan();
    }, 500);
    // }
    // return null;
  }

  public async discoverBluetoothDevices2() {
    return this.ble_serial.list();
  }

  public async listBluetoothDevices(): Promise<object> {
    // if(this.serial_type ===  EnumSerialType.Bluetooth)
    // {
    //let listdev=null;
    try {
      // await this.com_serial.setDeviceDiscoveredListener(function (device) {
      //   this.logger.log('Found: ' + device.name);
      // });
      await this.ble_serial.discoverUnpaired().then(
        (list) => {
          if (!isNullOrUndefined(list)) this.listdev = list;
          this.logger.log('device list: ' + list);
        },
        (error) => {
          this.logger.log('Bluetooth is not yet enabled');
          //return null;
        }
      );
      return this.listdev;
      //return listdev;
    } catch (err) {
      // alert(err)
      this.logger.log(err);
    }

    // }
    // else
    // {
    //   return null;
    // }
  }
  private async writeString(data: string): Promise<number> {
    try {
      if (!(this.isOpenPort && this.isDevConnected)) return -1;

      await this.com_serial.write(data);

      return data.length;
    } catch (error) {
      this.logger.log(`writeString() ${error}`);
      return -2;
    }
  }

  // modified by ngoclb
  private __delayTimeGuard(ms = 50) {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(true);
      }, ms);
    });
  }

  public async writeHex(arraydata): Promise<any> {
    try {
      if (!this.isDevConnected) {
        throw new Error('process was interrupted');
      }
      const __writeHex = async (listdata) => {
        if (_.isEmpty(listdata)) {
          return true;
        }

        var data = listdata.shift();
        let txdata = DataParser.bytesToHexString(data);

        this.logger.logComTx(`${txdata} [${data.length} bytes]`);
        if (this.serial_type == EnumSerialType.Serial_USB) {
          if (this.isOpenPort) {
            await this.com_serial.writeHex(txdata);
          } else {
            throw new Error('Write on a closed port.');
          }
        } else {
          await this.com_serial.write(data);
        }

        return await __writeHex(listdata);
      };

      const chunkdatas = _.chunk(arraydata, 20);
      await __writeHex(chunkdatas);
      return true;
    } catch (Err) {
      throw new Error('[writeHex error] ' + Err);
      // return false
    }
  }

  public async CloseConnection(): Promise<boolean> {
    try {
      this.logger.log('Close connection via bluetooth');
      this.disconnectBluetoothDevices();
    } catch (err) {
      this.logger.log('Close Connection Error!!' + err);
      return false;
    }
  }
  // changed by ngoclb
  public async testWrite(): Promise<number> {
    try {
      return this.writeString('\r\n');
    } catch (error) {
      return 0;
    }
  }

  public get isPortOpen() {
    return this.isOpenPort;
  }

  public async closePort() {
    this.watchResponse && this.watchResponse.unsubscribe();
    this.isOpenPort = false;
    this.isDevConnected = false;
    return true;
  }
}

export interface pairdList {
  class: number;
  id: string;
  address: string;
  name: string;
}
