/**
 * @Author: quocdo-macbook
 * @Date:   2021-11-22T09:22:51+07:00
 * @Last modified by:   quocdo-macbook
 * @Last modified time: 2021-12-29T13:57:29+07:00
 */

/**
 * Innova VCI Service Wrapper
 * @author Ngoc LB <ngoclb@card.com>
 * @date July 08, 2019
 */
import {
  SLEEP_EACH_VCI_REQUEST,
  TIMEOUT_GET_VEH_SUMMARY,
} from 'src/app/configs/app.config';
import { Injectable } from '@angular/core';
import {
  OBDService,
  EnumNotify,
  Dataparser,
} from './innova-vci-service/src/obdservice.service';
import { bytesToString } from './innova-vci-service/src/utilities/dataParser';
import { ConnectivityService } from './innova-vci-service/src/connectivity/connectivity.service';
import { interval, Subject, Subscription } from 'rxjs';
import { mergeMap, takeWhile } from 'rxjs/operators';
import {
  enumInnovagroup,
  enumProtocol,
} from './innova-vci-service/src/standard/enums';
import {
  SLEEP_TIMEOUT,
  SUPPORTED_BLUETOOTH_DEVICE_NAMES,
  SLEEP_TIMEOUT_LONG,
  TIMEOUT_INIT_CONNECTION,
  AppConfig,
} from '../configs/app.config';
import {
  VCIResponseData,
  InnovaVCIEvent,
  Ofm_Item,
  InnovaToolFeatures,
  InnovaToolScreenType,
  Pid_ItemBase,
  InnovaToolLiveDataGroup,
  Oem_Item,
  InnovaToolModuleStatus,
} from './innova-tool-models';
import * as ENUMVCIs from './innova-vci-service/src/obd/vcistd';
import * as _ from 'lodash';
import { enumProtocolToString } from './innova-vci-service/src/obd/obdUtils';
import { BleData, InfoToolConnected } from '../models/app.model';
import {
  EnumAppDataKey,
  EnumAppEvent,
  ScanSettingItem,
} from '../models/app.enum';
import { ValidateMileage, ValidateMileageKm } from '../app.validators';
import { InnovaHelper } from './innova-helper.service';
import { AppData } from '../models/app.data';
import { HelperService } from './helper.service';
import { Events } from './events.service';
import { AppLogger, AppLoggerService } from './logger';
import { AppState } from './state/app.state';
import { BLE } from '@ionic-native/ble/ngx';
import { getManufactureByMake } from './innova-report-helper/innova-report-data-models';

export function bytesToBase64(bytes: any) {
  return btoa(String.fromCharCode.apply(null, bytes));
}

export function isEmptyResponse(bytes: number[]) {
  let count = (bytes || []).reduce(
    (total, x) => (x === 0x00 ? total + 1 : total),
    0
  );
  return (
    count === bytes.length || (bytes[0] === 0xaa && count === bytes.length - 1)
  );
}

const DEFAULT_LOG_LEVEL = [
  EnumNotify.NOTIFY_DEBUG_LOG,
  EnumNotify.NOTIFY_DEBUG_LOG_COM_TX,
  EnumNotify.NOTIFY_DEBUG_LOG_COM_RX,
  EnumNotify.NOTIFY_DEBUG_LOG_COM_RX_RX,
  EnumNotify.NOTIFY_VCI_DATA_RESPONSE,
  // EnumNotify.NOTIFY_VCI_COMMAND_REQUEST
];

export function includesAny(
  search: string,
  haystack: string[],
  matchCase = false
) {
  search = typeof search === 'string' ? search : '';
  return !!(haystack || []).find((str) =>
    matchCase
      ? search.includes(str)
      : search.toLowerCase().includes(str.toLowerCase())
  );
}

export const VCI_STATIC_TEXTS = {
  DtcStatus: {
    store: ['stored', 'almacenado'],
    pending: ['pending', 'pendiente'],
    permanent: ['permanent', 'permanente'],
  },
  UIProcess: {
    loading_symbols: ['…', '...'],
    service_reset: ['service reset', 'reinicio del servicio'],
    start_process: [
      'start process..',
      'iniciar proceso..',
      'démarrer le processus..',
    ],
    retry: ['retry', 'reintentar', 'réessayez'],
    exit: ['exit', 'salida', 'sortie'],
    back: ['back', 'atrás', 'arrière'],
    yes: ['yes'],
    no: ['no'],
    one_moment_please: [
      'one moment please',
      'espere un momento',
      'un instant',
      "s'il vous plaît",
    ],
    view_procedure: [
      'view procedure',
      'ver procedimiento',
      'voir la procédure',
    ],
    successful: ['successful', 'satisfactoriamente', 'succès'],
    complete: ['complete', 'completo', 'achevée'],
    completed: ['completed', 'terminado', 'terminé'],
    command_state: ['Commanded State:', 'Estado mandado:', 'État commandé:'],
    result: ['Result:', 'Resultado:', 'Résultat:'],
    is_not_supported: [
      'is not supported',
      'no es apoyado',
      "n'est pas pris en charge",
    ],
  },
};

export class InnovaScreenEventResp {
  private _type: string;
  private _body: any;
  constructor(respdataOrType?: any | string, respBody?: any[]) {
    if (typeof respdataOrType === 'string') {
      this._type = respdataOrType;
      this._body = respBody;
    } else if (typeof respdataOrType === 'object') {
      this._type = Object.keys(respdataOrType || {})[0];
      this._body = respdataOrType[this._type] || null;
    }
  }

  get type() {
    let currenttype = this._type;
    return {
      toString() {
        return currenttype;
      },
      isEquals(screentype: InnovaToolScreenType) {
        return currenttype === screentype;
      },
    };
  }

  get leftKey() {
    return this._body ? (this._body[0] || '').toString().trim() : null;
  }

  get rightKey() {
    return this._body ? (this._body[2] || '').toString().trim() : null;
  }

  get bodyText() {
    if (this._body) {
      if (this._body.str) return this._body.str[2];
      else if (this._body.hdr) return this._body.hdr[2] || this._body.hdr[4];
    }
    return '';
  }

  get body() {
    return this._body;
  }
}

@Injectable({
  providedIn: 'root',
})
export class InnovaVCIService {
  private _vciResponseData: VCIResponseData;
  private _isConnected: Subscription | boolean = null;
  private _isVehicleConnected: boolean = false;
  private _isWatchingConnection: boolean = true;
  private _connectedDevAddr: string;
  private _toolName: string;
  private _totalSleepTimeMs = 0;
  private supportLogTags = DEFAULT_LOG_LEVEL;
  private linkedProtocol: {
    protocolId: enumProtocol;
    isFullLink?: boolean;
    isReadFFDtc?: boolean;
  };
  private stoCheckConnection: number;
  private isScreenGuiInitialized: boolean = false;
  private isSetVciLocale: boolean = false;
  private logger: AppLogger;
  private _isToolReady: boolean;
  constructor(
    private obdService: OBDService,
    private eventService: Events,
    private helper: HelperService,
    private ble: BLE,
    private connService: ConnectivityService,
    appLoggerService: AppLoggerService
  ) {
    // this.initVCIResponseHandlers();
    this.logger = appLoggerService.getLogger('InnovaVCIService') ?? {};
  }

  get isConnected() {
    return this._isConnected;
  }

  get connectedDevAddr() {
    return this._connectedDevAddr;
  }

  get toolName() {
    return this._toolName;
  }

  get isVehicleConnected() {
    return this._isVehicleConnected;
  }

  get isWatchingConnection() {
    return this._isWatchingConnection;
  }

  // S16: Show notice for some special Make (BMW)
  get needCheckResetIgnition() {
    if (this._vciResponseData && this._vciResponseData.ymme) {
      let manufacturer = this._vciResponseData.ymme.manufacturer;
      if (!manufacturer) {
        manufacturer = getManufactureByMake(this._vciResponseData.ymme.make);
      }
      return ['BMW'].includes(manufacturer.toUpperCase());
    }
    return false;
  }

  // T7R-85 Toyota, Lexus, Scion Pop-Up
  get needUpdateMoreVehicleInfo() {
    if (this._vciResponseData && this._vciResponseData.ymme) {
      const ymme = this._vciResponseData.ymme;
      let manufacturer = ymme.manufacturer;
      if (!manufacturer) {
        manufacturer = getManufactureByMake(ymme.make);
      }
      return ['TOYOTA'].includes(manufacturer.toUpperCase());
    }
    return false;
  }

  startWatchingConnection() {
    this._isWatchingConnection = true;
    this.resumeProcess();
  }

  stopWatchingConnection() {
    this._isWatchingConnection = false;
    clearTimeout(this.stoCheckConnection);
    this.stoCheckConnection = 0;
  }

  skipWatchingConnection(isSkip: boolean) {
    this.stoCheckConnection = isSkip ? -1 : 0;
  }

  get isToolReady() {
    return this._isToolReady;
  }

  async waitToolReady(timeout = 5000) {
    if (this.isConnected) {
      const ms = 500;
      await this.helper.sleep(ms);
      this.logger.debug(`isToolReady=${this._isToolReady}, timeout=${timeout}`);
      timeout -= ms;
      if (!this._isToolReady && timeout > 0) {
        return this.waitToolReady(timeout);
      }
    }
    return this._isToolReady;
  }
  /**
   * Cancel function by Innova
   */
  async cancelProcess(timeoutMs = TIMEOUT_GET_VEH_SUMMARY) {
    return new Promise(async (resolve) => {
      const sto = setTimeout(() => {
        this.logger.debug('cancelProcess timed out');
        resolve(false);
      }, timeoutMs);
      this.obdService.stopQuery();
      try {
        await this.screenAction.deinitGUIProc();
        await this.obdService.cancel_process();
      } catch (err) {
        this.logger.debug('cancelProcess failed', err);
      }
      this.connService.cancel_process();
      this.linkedProtocol = null;
      this.eventService.publish(InnovaVCIEvent.INTERRUPT_PROCESS);
      await this.waitToolReady();
      clearTimeout(sto);
      this.resumeProcess();
      resolve(true);
    });
  }

  // async proc_keepalive() {
  //   return await this.obdService.gui_keep_alive();
  // }

  /**
   * Resume process still has connection
   */
  async resumeProcess() {
    this.connService.resume_process();
    this._isToolReady = true;
  }

  /**
   * Disconnect with tool
   * @param closePort true: disconnect and close port | false: just unscribe event, keep connection with tool
   */
  async disconnect(closePort = false, deviceId: string = null) {
    await this.cancelProcess();
    if (closePort) {
      await this.connService
        .closePort()
        // .then(this.logger.debug.bind(null, 'closePort OK'))
        .catch(this.logger.debug.bind(null, 'closePort failed'));
    }
    this._isConnected = false;
    this._connectedDevAddr = null;
    this._toolName = null;
    this.linkedProtocol = null;
    this.resetVciLocale();
    if (deviceId) {
      await this.disconnectBT(deviceId);
    }

    return true;
  }

  async disconnectBT(deviceId: string = null) {
    if (this.isConnected) {
      this._isConnected = false;
    }
    if (deviceId) {
      await this.obdService
        .disconnectBluetoothDevices()
        .catch(
          this.logger.debug.bind(null, 'disconnectBluetoothDevices failed')
        );
    }
    return true;
  }

  async initializeBT(timeout = 15000) {
    if (this.isConnected) return true;
    console.log('this.isConnected: ', this.isConnected);
    this.logger.debug('Start scanning PROSCAN/PROSCANLE tools...');
    const _onDone = (msg = '') => {
      this.logger.debug('initializeBT result: ', msg);
    };
    const isBleEnabled = await this.obdService
      .initialize_bt()
      .catch(this.logger.error.bind(null, 'initialize_bt failed'));
    console.log('isBleEnabled: ', isBleEnabled);

    if (isBleEnabled) {
      let _btDevices: BleData[] = [],
        _isStartBtConnect = false;
      const _connectBT = async (selectedDevice: BleData = null) => {
        console.log('selectedDevice: ', selectedDevice);
        if (selectedDevice) {
          _btDevices = [];
          _btDevices.push(selectedDevice);
        }
        if (this.isConnected || _btDevices.length === 0) {
          return _onDone(
            `done: isConnected=${this.isConnected} btDevices length=${_btDevices.length}`
          );
        }
        let device = _btDevices.pop();
        console.log('device: ', device);
        this.logger.debug('Connecting...', device);
        try {
          this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
            name: 'Connecting to device...',
            result: device.name + ' found',
          });
          // init log
          // await this.obdService.initialize_bt(this.handleResponse.bind(this));
          let isBTConnected = await this.obdService.connectBlueToothDevice(
            device.id
          );
          console.log('isBTConnected: ', isBTConnected);

          if (isBTConnected) {
            if (_scanBtProc) {
              _scanBtProc.unsubscribe();
            }

            _btDevices = [];
            // init log
            await this.obdService.initialize_bt(this.handleResponse.bind(this));
            this._isConnected = this.obdService.BluetoothIsConnected();
            if (this.isConnected) {
              this.linkedProtocol = null;
              this.resetVciReponseData();
              this.resetVciLocale();
              this._connectedDevAddr = device.id;
              this._toolName = device.name;
              this._isToolReady = true;
              this.eventService.publish(InnovaVCIEvent.CONNECTED, device);
              return _onDone(`connected to ${device.id}`);
            }
            // return _connectBT(device);
          } else {
            this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
              name: 'Unable to connect device',
              result: '',
            });
            return _onDone(`Unable to connect device`);
          }
        } catch (e) {
          return _onDone(`error catched ${e}`);
        }
      };
      let pairedDevices: any[] =
        await this.obdService.get_list_bt_bondeddevices();
      console.log('*** pairedDevices: ', pairedDevices);
      if (!_.isEmpty(pairedDevices)) {
        this.logger.debug('pairedDevices', pairedDevices);
        _btDevices = pairedDevices
          .filter((btDevice) =>
            _.includes(SUPPORTED_BLUETOOTH_DEVICE_NAMES, btDevice['name'])
          )
          .reverse();
      }
      let _scanBtProc: Subscription = null;
      if (_btDevices && _btDevices.length > 0) {
        console.log('_btDevices: ', _btDevices);
        let btDevice = _btDevices[0];
        this.logger.debug('Found bluetooth device', btDevice);
        if (!_isStartBtConnect) {
          _connectBT();
          _isStartBtConnect = true;
        }
      } else {
        if (AppState.isOnAndroid) {
          console.log('Call this.ble.stopScan');
          this.ble.stopScan().then(async () => {
            console.log('**** Start this.ble.scan');
              _scanBtProc = this.ble.startScan([]).subscribe((btDevice) => {
              console.log('btDevice: ', btDevice);
              if (btDevice['name'] && btDevice['name'].length > 0) {
                console.log('btDevice Name: ', btDevice['name']);
                if (
                  _.includes(SUPPORTED_BLUETOOTH_DEVICE_NAMES, btDevice['name'])
                ) {
                  this.logger.debug('Device found', btDevice);
                  console.log('Device found', btDevice);
                  const index = _btDevices.findIndex(
                    (d) => d.id === btDevice['id']
                  );
                  if (index < 0) {
                    let btName = btDevice['name'];
                    let isLocalName = false;
                    const localName = localStorage.getItem(btDevice['id']);
                    if (localName) {
                      btName = localName;
                      isLocalName = true;
                    }
                    const pro15Tool = new BleData(
                      btDevice['id'],
                      btName,
                      isLocalName
                    );
                    this.eventService.publish(
                      InnovaVCIEvent.DEVICE_FOUND,
                      pro15Tool
                    );
                    _btDevices.push(pro15Tool);
                  }
                }
              }
            });
          });

          this.eventService.subscribe(
            InnovaVCIEvent.DEVICE_SELECTED,
            (device: BleData) => {
              console.log('this.eventService.subscribe device: ', device);
              this.eventService.unsubscribe(InnovaVCIEvent.DEVICE_SELECTED);
              if (!_isStartBtConnect) {
                _connectBT(device);
                _isStartBtConnect = true;
              }
            }
          );
        } else {
          //while(true){
          let devices = await this.connService.discoverBluetoothDevices2();
          if (devices && devices.length > 0) {
            this.eventService.subscribe(
              InnovaVCIEvent.DEVICE_SELECTED,
              (device: BleData) => {
                this.eventService.unsubscribe(InnovaVCIEvent.DEVICE_SELECTED);
                if (!_isStartBtConnect) {
                  _connectBT(device);
                  _isStartBtConnect = true;
                }
              }
            );
            while (devices.length) {
              let device = devices.shift();
              this.logger.debug('Found Pro15 device', device);
              let btName = device['name'];
              let isLocalName = false;
              const localName = localStorage.getItem(device['id']);
              if (localName) {
                btName = localName;
                isLocalName = true;
              }
              const pro15Tool = new BleData(device['id'], btName, isLocalName);
              this.eventService.publish(InnovaVCIEvent.DEVICE_FOUND, pro15Tool);
              _btDevices.push(pro15Tool);
            }
          }
        }
      }
    } else {
      _onDone('bluetooth is disabled');
    }
  }

  /**
   * Check if user connect with Vehicle or not
   * batteryVolt > 3.3: connected
   */
  async isConnectedVehicle() {
    return !!this.isConnected;
  }

  /**
   * Link protocol and prepare data
   */
  async linkProtocols() {
    if (!this.isConnected) {
      await this.initializeBT();
    }
    /** Since FW 43 (tool cached latest vehicle data), we need  to link protocol when start getting any data */
    // if (this.linkedProtocol) {
    //   this.logger.debug(`Already linked protocol ${this.linkedProtocol}, skip process`);
    //   return true;
    // };
    let callbackResult;
    // const isLinkedProtocol = await this.obdService.obd2AutoLink(info => {
    //     callbackResult = info;
    //     this.events.publish(InnovaVCIEvent.LINK_PROTOCOL, callbackResult);
    //     this.logger.debug(callbackResult);
    //   });
    const protocolId = await this.obdService.obd2Query(
      (info: { percent; index; total; message; isfinish }) => {
        callbackResult = info;
        this.logger.debug('callbackResult: ', callbackResult);
        if (callbackResult.total === 0) {
          this.disconnect(true, this._connectedDevAddr);
        } else if (
          [
            enumProtocolToString(enumProtocol.eprotocol_UNKNOWN),
            enumProtocolToString(undefined),
          ].includes(callbackResult.message)
        ) {
          this._isVehicleConnected = false;
        }
        // this.events.publish(InnovaVCIEvent.LINK_PROTOCOL, callbackResult);
      },
      false
    );

    // if (!protocolId && !callbackResult.isfinish) {
    if (!protocolId) {
      throw new Error(
        `Link protocols failed: ${JSON.stringify(callbackResult)}`
      );
    }
    this.linkedProtocol = {
      protocolId,
    };
    this.resetVciLocale();
    if (this.isEmptyVciData) {
      this.resetVciReponseData();
    }
    await this.sleep(SLEEP_EACH_VCI_REQUEST);
    const startMs = new Date().getTime();
    // await this.obdService.obd2RetriveData(); /*
    await this.obdService.obd2QuickRetriveData(); // */
    const endMs = new Date().getTime();
    this.logger.debug(
      `obd2QuickRetrieveData duration: ${
        Math.round(((endMs - startMs) / 1000) * 100) / 100
      }s`
    );
    return true;
  }

  get protocolName() {
    const protocolName = enumProtocolToString(this.linkedProtocol.protocolId);
    return protocolName.replace('Protocol ', '');
  }

  /**
   * Sleep and check connection
   */
  private async sleep(ms, checkVehConn = false) {
    await this.helper.sleep(ms);
    if (this.isConnected) {
      if (checkVehConn) {
        this._isVehicleConnected = await this.isConnectedVehicle();
        if (this.isVehicleConnected) {
          return ms;
        } else {
          throw new Error('Vehicle is disconnected.');
        }
      }
      if (this._totalSleepTimeMs >= 0) {
        this._totalSleepTimeMs += ms;
      }
      return ms;
    }
    this.enableReportSleepTime(false);
    throw new Error('Disconnected.');
  }

  get totalSleepTime() {
    return this._totalSleepTimeMs;
  }

  enableReportSleepTime(isEnable: boolean) {
    if (isEnable) {
      this._totalSleepTimeMs = 0;
    } else {
      this._totalSleepTimeMs = -1;
    }
  }

  /**
   * Set Unit and Language for VCI
   */
  private async setVciLocale({ setUnit = true, setLang = true } = {}) {
    this.logger.debug(`setVciLocale setUnit=${setUnit}, setLang=${setLang}`);
    // Set unit
    if (setUnit) {
      let unit_name = AppData.get(EnumAppDataKey.AppRegional);
      if (unit_name) {
        const units = [
          {
            name: 'Standard',
            id: ENUMVCIs.UNIT_ID.Standard,
          },
          {
            name: 'Metric',
            id: ENUMVCIs.UNIT_ID.Metric,
          },
        ];

        let selected_unit = units.find((item) => item.name === unit_name);
        if (selected_unit) {
          let isOk = await this.obdService.setting_unittype(selected_unit.id);
          await this.sleep(SLEEP_EACH_VCI_REQUEST);
          if (isOk) {
            this._vciResponseData.unitId = selected_unit.id;
            this.logger.debug('setting_unittype OK', unit_name);
          }
        }
      }
    }
    // Set language
    if (setLang) {
      let lang = AppData.get(EnumAppDataKey.AppLanguage);
      if (lang) {
        const langs = [
          {
            name: 'English',
            code: 'en',
            id: ENUMVCIs.GUI_LANGUAGE_ID.GUI_LANG_ENGLISH,
          },
          {
            name: 'Spanish',
            code: 'es',
            id: ENUMVCIs.GUI_LANGUAGE_ID.GUI_LANG_SPANISH,
          },
          {
            name: 'French',
            code: 'fr',
            id: ENUMVCIs.GUI_LANGUAGE_ID.GUI_LANG_FRENCH,
          },
        ];
        let selected_lang = langs.find((item) => item.code === lang);
        if (selected_lang) {
          let isOk = await this.obdService.setting_language(selected_lang.id);
          await this.sleep(SLEEP_EACH_VCI_REQUEST);
          if (isOk) {
            this._vciResponseData.langId = selected_lang.id;
            this.logger.debug('setting_language OK', lang);
          }
        }
      }
    }
    return true;
  }

  resetVciLocale() {
    this.isSetVciLocale = false;
  }

  async connectAndGetToolInfo(sleepMs = 0) {
    try {
      if (!this.isConnected) {
        await this.initializeBT();
      }
      if (sleepMs) {
        await this.sleep(sleepMs);
      }
      let info = await this.obdService.getVersion();
      if (!info || !info.productid || !info.boot || !info.main) {
        throw new Error(
          `obdService.getVersion return invalid data ${JSON.stringify(info)}`
        );
      }
      // let toolGUID = InnovaHelper.generateGuid(); /*
      let toolGUID = await this.obdService.setting_getguid();
      if (InnovaHelper.isInvalidOrEmptyGUID(toolGUID)) {
        const guid = InnovaHelper.generateGuid();
        // this.logger.debug(`writeGUID ${randomGuid} rs: ${rs}`);
        const rs = await this.obdService.setting_setguid(guid);
        if (rs) {
          toolGUID = guid;
        }
      } // */
      if (_.isEmpty(this.vciResponseData)) {
        this.resetVciReponseData();
      }
      this._vciResponseData.usbProductId = info.productid;
      this._vciResponseData.bootloaderVersion = info.boot;
      this._vciResponseData.firmwareVersion = info.main;
      this._vciResponseData.databaseVersion = info.db;
      this._vciResponseData.dongleId = toolGUID;
      let toolInfo: InfoToolConnected = {
        db: '0.0.1',
        ...info,
        guid: toolGUID,
      };
      this._connectedDevAddr = toolGUID;
      this.logger.debug('connectAndGetToolInfo', toolInfo);
      AppData.set(EnumAppDataKey.InfoToolConnected, toolInfo);
      this.eventService.publish(EnumAppEvent.InfoToolConnected, toolInfo);
      return toolInfo;
    } catch (err) {
      this.logger.debug('connectAndGetToolInfo failed', err);
      return null;
    }
  }

  async connectAndRequestData() {
    try {
      let currentData = _.pick(this.vciResponseData, [
        'vin',
        'ymme',
        'vinProfile',
        'vehicleInfoEcm',
        'vehicleInfoTcm',
        'vehicleInfoData',
        'mileage',
        'dongleId',
        'usbProductId',
        'unitId',
        'langId',
        'bootloaderVersion',
        'firmwareVersion',
        'allSupportedModules',
      ]);
      this.setVciResponseData(currentData);
      let startMs, endMs;
      this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
        name: 'Linking to vehicle...',
        result: this._toolName + ' has been connected',
      });
      if (!this.linkedProtocol) {
        await this.linkProtocols();
      }
      //10-07-2020 15:21 Quoc Do changed here to fix Tab 470. Always retreiveData
      if (this.linkedProtocol) {
        this.logger.debug('Run obd2RetriveData...');
        startMs = new Date().getTime();
        this.linkedProtocol.isFullLink =
          await this.obdService.obd2RetriveData();
        endMs = new Date().getTime();
        this.logger.debug(
          `[*] obd2RetriveData time: ${
            Math.round(((endMs - startMs) / 1000) * 100) / 100
          } seconds`
        );
        await this.sleep(SLEEP_TIMEOUT_LONG);
      }
      if (!this.isSetVciLocale) {
        this.isSetVciLocale = await this.setVciLocale();
      }
      if (!this._vciResponseData.dongleId) {
        await this.connectAndGetToolInfo();
      }

      //#region Default scan
      this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
        name: 'Reading Battery Voltage...',
        result: this.toolName + ' already linked to vehicle.',
      });
      let voltage = await this.obdService.getBatteryVoltage();
      // console.log('getBatteryVoltage', voltage);
      if (voltage && typeof voltage === 'object') {
        this._vciResponseData.batteryVoltage =
          voltage.BatteryVoltage === undefined ? '0' : voltage.BatteryVoltage;
      }
      this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
        name: 'Reading Vehicle ECM & TCM...',
        result: 'Battery Voltage: ' + this._vciResponseData.batteryVoltage,
      });
      // 02. vehicle info
      await this.sleep(SLEEP_EACH_VCI_REQUEST);
      await this.getVehicleBufferAndInfo(
        !this._vciResponseData.vehicleInfoEcm,
        false // read vehicle info in other flow (T7R-15)
        // !this._vciResponseData.vehicleInfoData
      );
      this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
        name: 'Reading Freeze Frame...',
        result:
          'Vehicle ECM & TCM: ' +
          (this._vciResponseData.vehicleInfoEcm ? 'YES' : 'N/A'),
      });

      // 03. freeframe
      await this.sleep(SLEEP_EACH_VCI_REQUEST);
      const ff = await this.obdService.getVehReport_OBD2_FF_SID2_BUFF();
      this.logger.debug('getVehReport_OBD2_FF_SID2_BUFF', ff);
      if (ff.length > 0) {
        this._vciResponseData.freezeFrameEcm = bytesToBase64(ff[0].data);
        this._vciResponseData.freezeFrameTcm = bytesToBase64(
          ff[1] ? ff[1].data : ''
        );
        /*
        await this.sleep(SLEEP_EACH_VCI_REQUEST);
        const freezeFrameDtc = await this.obdService.getVehReport_FreezeFrameDTCInfo();
        if(freezeFrameDtc){
          this._vciResponseData.freezeFrameDTCData = freezeFrameDtc as any;
        } else {

        }
        await this.sleep(SLEEP_EACH_VCI_REQUEST);
        const freezeFrameLd = await this.obdService.getVehReport_FreezeFrameLDInfo();
        if(freezeFrameLd){
          this._vciResponseData.freezeFrameLDData = freezeFrameLd as any;
        } else {

        }
        */
        this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
          name: 'Reading Monitor Status...',
          result:
            'Freeze Frame: ' +
            (this._vciResponseData.freezeFrameEcm ? 'YES' : 'NO'),
        });
      } else {
        this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
          name: 'Reading Monitor Status...',
          result: 'Freeze Frame: N/A',
        });
      }

      // 04. monitor
      await this.sleep(SLEEP_EACH_VCI_REQUEST);
      const monitor = await this.obdService.getVehReport_OBD2_LD_SID1_BUFF();
      this.logger.debug('getVehReport_OBD2_LD_SID1_BUFF', monitor);
      if (monitor.length > 0) {
        this._vciResponseData.monitorEcm = bytesToBase64(monitor[0].data);
        this._vciResponseData.monitorTcm = bytesToBase64(
          monitor[1] ? monitor[1].data : ''
        );

        await this.sleep(SLEEP_EACH_VCI_REQUEST);
        let dtcs = await this.readDtcsOBDII();
        this.logger.debug('getVehReport_OBD2_DTC_Info readDtcsOBDII', dtcs);
        _.set(this._vciResponseData, 'dtcInfoData', dtcs);

        await this.sleep(SLEEP_EACH_VCI_REQUEST);
        const monitorData =
          await this.obdService.getVehReport_MonitorIconStatus();
        this._vciResponseData.monitorData = monitorData as any;
        this.logger.debug('getVehReport_MonitorIconStatus', monitorData);
        await this.sleep(SLEEP_EACH_VCI_REQUEST);
        let milStatus = await this.obdService.getVehReport_MIL_Status();
        this.logger.debug('getVehReport_MIL_Status', milStatus);
        if (milStatus && typeof milStatus !== 'string') {
          milStatus = milStatus.MilStatus || '';
        }
        this._vciResponseData.milStatus = milStatus as string;
        this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
          name: 'Reading ECM & TCM DTCs...',
          result:
            'Monitor Status: ' +
            (this._vciResponseData.monitorEcm ? 'YES' : 'NO'),
        });
      } else {
        this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
          name: 'Reading ECM & TCM DTCs...',
          result: 'Monitor Status: N/A',
        });
      }

      // 05. dtc
      await this.sleep(SLEEP_EACH_VCI_REQUEST);
      const dtc = await this.obdService.getVehReport_OBD2_DTC_SID37A_BUFF();
      this.logger.debug('getVehReport_OBD2_DTC_SID37A_BUFF', dtc);
      if (dtc.length > 0) {
        this._vciResponseData.dtcEcm = bytesToBase64(dtc[0].data);
        this._vciResponseData.dtcTcm = bytesToBase64(dtc[1] ? dtc[1].data : '');
        this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
          name: 'Reading VIN...',
          result:
            'ECM & TCM DTCs: ' + (this._vciResponseData.dtcEcm ? 'YES' : 'NO'),
        });
      } else {
        this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
          name: 'Reading VIN...',
          result: 'ECM & TCM DTCs: N/A',
        });
      }

      // 01. ymme
      if (!this._vciResponseData.vinProfile) {
        await this.sleep(SLEEP_EACH_VCI_REQUEST);
        await this.getYMME();
      }
    } catch (err) {
      // await this.connService.disconnectBluetoothDevices(false);
    }
    return true;
  }

  async scanModules(vin) {
    console.log('scanModules ßvin: ', vin);
    this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
      name: 'Reading Supported OEM Modules...',
      result:
        'VIN: ' + (this._vciResponseData.vin ? this._vciResponseData.vin : vin),
    });
    this._vciResponseData.oemModules = [];
    if (_.isEmpty(this._vciResponseData.allSupportedModules)) {
      await this.scanAllSupportedModules();
    }
    this.logger.debug(
      'All Supported Modules',
      this._vciResponseData.allSupportedModules
    );

    // Full Scan
    let allSupportedGroups = this._vciResponseData.allSupportedModules.map(
      (m) => m.InnovaGroup
    );
    this.logger.debug('All Supported Groups', allSupportedGroups);
    if (allSupportedGroups.length > 0) {
      this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
        name: 'Preparing to scan modules...',
        result: 'Total Modules: ' + allSupportedGroups.length,
      });
      let supportedModules = await this.readDtc(allSupportedGroups);
      this.logger.debug('Full network scan results', supportedModules);
      this._vciResponseData.oemModules = supportedModules.map((oemModule) => {
        return {
          system: oemModule.System,
          subsystem: oemModule.SubSystem,
          Dtcs: oemModule.Dtcs,
          group: oemModule['InnovaGroup'],
          modulename: oemModule.ModuleName,
          Status: oemModule.Status,
          Skipped: oemModule.Skipped,
          InvalidDTC: oemModule.Status === InnovaToolModuleStatus.Valid ? 0 : 1,
        };
      });
    }
    return true;
  }

  /**
   * Connect and YMME, Vin, ODO
   */
  async connectAndGetVehicleSummary(
    readOdo = false,
    readSupportedModules = false
  ) {
    if (!this.isConnected) {
      const isOK = await this.initializeBT();
      if (!isOK) {
        throw new Error('Init failed.');
      }
    }
    await this.linkProtocols();
    // await this.sleep(SLEEP_EACH_VCI_REQUEST);
    // await this.obdService.obd2RetriveData();
    await this.sleep(SLEEP_EACH_VCI_REQUEST, true);
    const { ymmeRaw, ymmeReadable } = await this.getYMME();
    let vin = this._vciResponseData.vin;
    if (ymmeReadable && vin) {
      // Check Make
      /*
      await new Promise((resolve) => {
        this.eventService.publish(
          EnumAppEvent.CheckIfNeedResetIgnition,
          ymmeReadable
        );
        this.disposeBag = new DisposeBag(this.eventService);
        this.disposeBag.add(
          EnumAppEvent.CheckIfNeedResetIgnitionDone,
          resolve.bind(null)
        );
      });
      this.disposeBag.unsubscribe();*/
      /* Read vehicle info (since S41): Tun off since Speed Improvement (04-01-2022) */
      // const { vehicleinfoStr } = await this.getVehicleBufferAndInfo(
      //   false,
      //   true
      // ).catch((err) => {
      //   this.logger.debug('getVehicleBufferAndInfo error', err);
      //   return {} as any;
      // });
      // if (!_.isEmpty(vehicleinfoStr)) {
      //   vehicleinfoStr['CalIDs'] = _.join(vehicleinfoStr['CalID'], ' | ');
      //   vehicleinfoStr['CVNs'] = _.join(vehicleinfoStr['CVN'], ' | ');
      //   vehicleinfoStr['Modules'] = _.join(vehicleinfoStr['Module'], ' | ');
      //   this._vciResponseData.vehicleInfoData = vehicleinfoStr;
      // }
      // Read odo
      if (readOdo) {
        await this.sleep(SLEEP_EACH_VCI_REQUEST, true);
        await this.readOdometer();
      }
      if (readSupportedModules) {
        await this.sleep(SLEEP_EACH_VCI_REQUEST, true);
        await this.scanAllSupportedModules();
      }
    }
  }

  private async getOfmItems(pidsupport: any): Promise<Ofm_Item[]> {
    let numPID = pidsupport.num_profile as number;
    let results = [];
    for (let index = 0; index < numPID; index++) {
      let itemid = pidsupport.list[index].ofm_item as number;
      let profile_id = pidsupport.list[index].profileid as number;
      const val = await this.obdService.getofmprofileid_value(profile_id);
      const objitem = JSON.parse(Dataparser.ObjtoStringBeauty(val));
      let itemname = await this.obdService.ofm_getitemname(itemid);
      let unit_str = objitem.unit as string;
      let value = objitem.value;
      results.push({
        id: itemid,
        name: itemname,
        value,
        unit: unit_str,
      });
    }
    return results;
  }

  async eraseDtcsOBDII() {
    if (!this.isConnected) {
      await this.initializeBT();
    }
    let eraseRs = await this.obdService.OBD2_erase_Dtcs();
    if (this.linkedProtocol) {
      this.linkedProtocol.isFullLink = false; // Force refresh data after erase
    }
    this.logger.debug('eraseDtcsOBDII result', eraseRs);
    return eraseRs ? eraseRs.result === 'OK' : false;
  }

  async eraseDTCs(
    oemModule: Oem_Item | { System?: number; SubSystem?: number },
    clearCache = true
  ) {
    if (!this.isConnected) {
      await this.initializeBT();
    }
    let eraseRs = await this.obdService.nwscan_eraseSystem({
      system: oemModule.System,
      subSystem: oemModule.SubSystem,
    });
    if (this.linkedProtocol) {
      this.linkedProtocol.isFullLink = false; // Force refresh data after erase
    }
    this.logger.debug('eraseDtcs result', oemModule, eraseRs);
    // if (clearCache) {
    //   this.currentVin && this.dbService.deleteCacheData(this.currentVin);
    // }
    return eraseRs ? eraseRs['Erase_Dtc'] === 'OK' : false;
  }

  async eraseDTCsByGroup(
    innovaGroupIds: enumInnovagroup | enumInnovagroup[],
    filter?: { System; SubSystem }
  ) {
    // this.obdService.nwscan_eraseSystem()
    if (!Array.isArray(innovaGroupIds)) {
      innovaGroupIds = [innovaGroupIds];
    }
    this.logger.debug('eraseDtc', innovaGroupIds);
    if (!this.isConnected) {
      await this.initializeBT();
    }
    let oemModules = _.get(
      this.vciResponseData,
      'allSupportedModules'
    ) as Oem_Item[];
    if (_.isEmpty(oemModules)) {
      return true;
    }
    let isErased = true,
      idx = 0;
    oemModules = oemModules.filter((m) => {
      let isValid = [InnovaToolModuleStatus.Valid, undefined].includes(
        m.Status
      );
      let isModuleInGroup = (innovaGroupIds as any).includes(m.InnovaGroup);
      if (isValid && isModuleInGroup) {
        if (filter) {
          return m.System == filter.System && m.SubSystem == filter.SubSystem;
        }
        return true;
      }
      return false;
    });
    while (idx < oemModules.length) {
      isErased = await this.eraseDTCs(oemModules[idx++], false);
      if (!isErased) {
        break;
      }
      await this.sleep(SLEEP_EACH_VCI_REQUEST);
    }
    // this.currentVin && this.dbService.deleteCacheData(this.currentVin);
    return isErased;
  }

  async readPrimaryDtc() {
    if (!this.linkedProtocol) {
      await this.linkProtocols();
    }
    await this.obdService.obd2QuickRetriveData(null, true);
    const freezeFrameDtc =
      await this.obdService.getVehReport_FreezeFrameDTCInfo();
    if (_.isEmpty(freezeFrameDtc)) {
      return [];
    } else {
      return [
        {
          InvalidDTC: 0,
          Dtcs: [freezeFrameDtc],
        },
      ];
    }
  }

  async readDtcsOBDII(): Promise<{ InvalidDTC: number; Dtcs: string[][] }[]> {
    if (!this.linkedProtocol) {
      await this.linkProtocols();
    }
    const dtcInfoData: any = await this.obdService.getVehReport_OBD2_DTC_Info();
    if (dtcInfoData.length) {
      let moduleIndex = 0;
      do {
        let moduleDtcs = dtcInfoData[moduleIndex].Dtcs;
        if (moduleDtcs) {
          let index = 0;
          do {
            await this.sleep(SLEEP_EACH_VCI_REQUEST);
            const dtcDef = await this.obdService
              .getVehReport_OBD2_DTC_Def(moduleIndex, index)
              .catch(this.logger.error);
            moduleDtcs[index] = dtcDef as any;
          } while (++index < moduleDtcs.length);
        }
      } while (++moduleIndex < dtcInfoData.length);
      return dtcInfoData;
    }
    return null;
  }

  async readDtc(
    innovaGroupIds: enumInnovagroup | enumInnovagroup[],
    filter?: { System; SubSystem }
  ) {
    // this.obdService.nwscan_eraseSystem()
    if (!this.isConnected) {
      return null;
    }
    let oemModules = this.vciResponseData.allSupportedModules;
    let total = oemModules.length;
    if (Array.isArray(oemModules)) {
      oemModules = oemModules.filter((m) => !!m.ModuleName);
    }
    if (filter) {
      oemModules = oemModules.filter(
        (m) => m.System === filter.System && m.SubSystem === filter.SubSystem
      );
    }
    let res = [],
      totalFiltered = oemModules.length,
      index = 0;
    if (!Array.isArray(innovaGroupIds)) {
      innovaGroupIds = [innovaGroupIds];
    }
    let result = '';
    while (oemModules.length) {
      const oemModule = oemModules.shift();
      if (innovaGroupIds.includes(oemModule.InnovaGroup)) {
        this.logger.debug(
          `Start reading module [${++index}/${totalFiltered}/${total}] DTCs`,
          oemModule
        );
        this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
          name:
            '(' +
            index +
            '/' +
            total +
            '): ' +
            oemModule.ModuleName +
            ' - Scanning...',
          result: result,
        });
        if (!this.linkedProtocol) {
          this.logger.debug('Try linkprotocol before readDtc');
          await this.linkProtocols();
        }
        await this.sleep(SLEEP_EACH_VCI_REQUEST);
        let oemItem = await this.obdService.nwscan_LinkSystem({
          system: oemModule.System,
          subSystem: oemModule.SubSystem,
        });
        this.logger.debug(
          'nwscan_LinkSystem details',
          oemItem,
          this.linkedProtocol
        );
        if (oemItem) {
          let _oemModule = oemModule;
          if (_.has(oemItem, 'data')) {
            let dtcs = _.get(oemItem, 'data.Dtcs', []);
            if (dtcs.length) {
              let dtcId = 0;
              while (dtcId < dtcs.length) {
                await this.sleep(SLEEP_EACH_VCI_REQUEST);
                let dtcinfo = await this.obdService.nwscan_getdtcdef({
                  system: oemModule.System,
                  subSystem: oemModule.SubSystem,
                  id: dtcId,
                });
                dtcinfo['def'] && (dtcs[dtcId]['definition'] = dtcinfo['def']);
                dtcId++;
              }

              result = _oemModule.ModuleName + ': ' + dtcs.length + ' DTCs';
            } else {
              result = _oemModule.ModuleName + ': Good';
            }
            _oemModule.Dtcs = dtcs;
            _oemModule.Skipped = false;
            if (oemItem['data']['IsInvalidDTC'] === 1) {
              _oemModule.Status = InnovaToolModuleStatus.Available;
            } else {
              _oemModule.Status = InnovaToolModuleStatus.Valid;
            }
          } else {
            _oemModule.Dtcs = [];
            _oemModule.Status =
              _.get(oemItem, 'error.Status') ===
              InnovaToolModuleStatus.NotSupported
                ? InnovaToolModuleStatus.NotSupported
                : InnovaToolModuleStatus.Unknown;
            result = _oemModule.ModuleName + ': Unresponsive';
            _oemModule.Skipped = true;
          }
          this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
            name:
              index < oemModules.length
                ? 'Finish! Preparing to scan next module...'
                : '',
            result: result,
          });
          res.push(_oemModule);
        } else {
          let _oemModule = oemModule;
          _oemModule.Dtcs = null;
          _oemModule.Status = InnovaToolModuleStatus.Unknown;
          _oemModule.Skipped = true;
          this.eventService.publish(InnovaVCIEvent.SCAN_STATUS, {
            name:
              index < oemModules.length
                ? 'Finish! Preparing to scan next module...'
                : '',
            result: result,
          });
          res.push(_oemModule);
        }
      }
    }
    return res;
  }

  async obdTest(mode: number) {
    if (!this.isConnected) {
      const isOK = await this.initializeBT();
      if (!isOK) {
        throw new Error('Init failed.');
      }
    }
    let result;
    switch (mode) {
      case 5:
        await this.obdService.linkVehReport_OBD2_SPECIALTEST_SID5();
        result =
          await this.obdService.getVehReport_OBD2_SPECIALTEST_SID5_BUFF();
        return JSON.parse(Dataparser.bytesToString(result[0].data));
      case 6:
        await this.obdService.linkVehReport_OBD2_SPECIALTEST_SID6();
        result =
          await this.obdService.getVehReport_OBD2_SPECIALTEST_SID6_BUFF();
        return result[0].data || result;
      case 8:
        result = await this.obdService.linkVehReport_OBD2_SPECIALTEST_SID8();
        // result = await this.obdService.getVehReport_OBD2_SPECIALTEST_SID8_BUFF();
        return result;
      default:
        throw new Error(`This mode test ${mode} is unsupported.`);
    }
  }

  async runToolFeature(feature: InnovaToolFeatures) {
    if (!this.linkedProtocol) {
      await this.linkProtocols();
    }
    await this.sleep(SLEEP_TIMEOUT);
    switch (feature) {
      case InnovaToolFeatures.SpecialTest:
        return this.obdService.spectest_enter_proc();
      case InnovaToolFeatures.ActuatorTest:
        return this.obdService.actuatortest_enter_proc();
      case InnovaToolFeatures.OilReset:
        return this.obdService.oil_reset_enter_proc();
      case InnovaToolFeatures.BatteryReset:
        return this.obdService.battery_reset_enter_proc();
      case InnovaToolFeatures.EPB:
        return this.obdService.epb_enter_proc();
      case InnovaToolFeatures.SASCalib:
        return this.obdService.sas_enter_proc();
      case InnovaToolFeatures.ABS_Bleeding:
        return this.obdService.ABS_bleeding_enter_proc();
      case InnovaToolFeatures.Battery_Health_Check:
        return this.obdService.battery_health_check_enter_proc();
      case InnovaToolFeatures.DPF_Reset:
        return this.obdService.dpf_enter_proc();
      case InnovaToolFeatures.TPMS_Reset:
        return this.obdService.tpms_reset_enter_proc();
      case InnovaToolFeatures.Service_Reset:
        return this.obdService.service_reset_proc_enter();
    }
  }

  private async initToolScreenGUI(): Promise<boolean> {
    if (this.isScreenGuiInitialized) return true;
    this.logger.debug('initToolScreenGUI OK');
    if (!this.isSetVciLocale) {
      this.isSetVciLocale = await this.setVciLocale();
    }
    this._screenEvents = new Subject();
    this.eventService.subscribe(InnovaVCIEvent.USER_GUI_INFO, (data) => {
      if (!data) return;
      this._screenEvents.next(new InnovaScreenEventResp(data));
    });
    this.isScreenGuiInitialized = true;
    let isOk = await this.sleep(200).catch(() => false);
    return isOk;
  }

  private _screenActions = {
    initGUIProc: async () => {
      await this.obdService.deinitGUIProc().catch((err) => {});
      try {
        await this.obdService.initGUIProc();
      } catch (err) {
        return false;
      }
      return this.initToolScreenGUI();
    },
    deinitGUIProc: (
      delayMs = SLEEP_TIMEOUT,
      timeoutMs = TIMEOUT_GET_VEH_SUMMARY
    ) => {
      if (this.isScreenGuiInitialized) {
        this.isScreenGuiInitialized = false;
        return new Promise(async (resolve) => {
          const sto = setTimeout(() => {
            this.logger.debug('deinitGUIProc timed out');
            resolve(false);
          }, timeoutMs);
          if (delayMs) {
            await this.sleep(delayMs);
          }
          await this.obdService
            .deinitGUIProc()
            .catch(this.logger.debug.bind(null, 'deinitGUIProc failed'));
          this.logger.debug('deinitGUIProc OK');
          clearTimeout(sto);
          resolve(true);
        });
      }
      return false;
    },
    back: () => {
      this.logger.debug('press left key');
      return this.obdService.gui_set_softkey('left');
    },
    next: () => {
      this.logger.debug('press right key');
      return this.obdService.gui_set_softkey('right');
    },
    selectOption: (option) => {
      this.logger.debug('press option key', option);
      return this.obdService.gui_set_key_option(option);
    },
    setInput: (value: string) => {
      this.logger.debug('set input value', value);
      return this.obdService.gui_set_input_val(value);
    },
  };

  get screenAction() {
    return this._screenActions;
  }

  private _screenEvents: Subject<InnovaScreenEventResp>;

  get screenEvents() {
    return this._screenEvents;
  }

  async getYMME(readableData = true) {
    // await this.linkProtocols();
    let ymmeRaw, ymmeReadable;
    ymmeRaw = await this.obdService.getVehReport_YMME_PROFILE();
    this.logger.debug('YMME Profile', ymmeRaw);
    if (ymmeRaw.length === 0) {
      throw new Error(
        'get ymme failed: ' + ymmeRaw[0].error
          ? ymmeRaw[0].error.message
          : 'data is empty'
      );
    }
    let isNoYmme = isEmptyResponse(ymmeRaw[0].data);
    if (isNoYmme) {
      this._vciResponseData.vin = null;
    } else {
      this._vciResponseData.vinProfile = bytesToBase64(ymmeRaw[0].data);
      let vin = bytesToString(ymmeRaw[0].data).replace(/[^0-9a-zA-Z]/g, '');
      if (vin && vin.length >= 17) {
        this._vciResponseData.vin = vin.substr(0, 17);
      }
      // readable data
      if (readableData) {
        const ymmeInfo = (await this.obdService
          .ymme_get(254)
          .catch((err) => null)) as any;
        this.logger.debug('ymme_get 254', ymmeInfo);
        ymmeReadable = await this.obdService.getVehReport_YMME_String();
        this.logger.debug('getVehReport_YMME_String', ymmeReadable);
        if (ymmeReadable && ymmeInfo && ymmeInfo['vehinfo']) {
          /*
           * Update 'year' if not matched (FW: 22)
           * https://iectech.atlassian.net/browse/ITRD-207
           */
          const vehinfo = ymmeInfo['vehinfo'] || '';
          const year = vehinfo.substr(0, vehinfo.indexOf(' '));
          if (ymmeReadable.year !== year) {
            ymmeReadable.year = year;
          }
        }
        this.setYmme(ymmeReadable);
      }
    }
    return { ymmeRaw, ymmeReadable };
  }

  async getVehicleBufferAndInfo(readBuffer = true, readInfo = true) {
    let vehicleinfoBuffer, vehicleinfoStr;
    if (!this.linkedProtocol) {
      await this.linkProtocols();
    }
    if (readBuffer) {
      vehicleinfoBuffer =
        await this.obdService.getVehReport_OBD2_VEHINFO_SID9_BUFF();
      this.logger.debug(
        'getVehReport_OBD2_VEHINFO_SID9_BUFF',
        vehicleinfoBuffer
      );
      if (vehicleinfoBuffer.length === 0) {
        throw new Error(
          'get vehicleinfo failed: ' + vehicleinfoBuffer[0].error
            ? vehicleinfoBuffer[0].error.message
            : 'data is empty'
        );
      }
      // It seems error if vehicleInfo empty
      if (isEmptyResponse(vehicleinfoBuffer[0].data)) {
        throw new Error('getVehReport_OBD2_VEHINFO_SID9_BUFF response empty');
      }
      this._vciResponseData.vehicleInfoEcm = bytesToBase64(
        vehicleinfoBuffer[0].data
      );
      this._vciResponseData.vehicleInfoTcm = bytesToBase64(
        vehicleinfoBuffer[1] ? vehicleinfoBuffer[1].data : ''
      );
    }
    if (readInfo) {
      vehicleinfoStr =
        await this.obdService.getVehReport_OBD2_VehicleInfo_SID9();
      this.logger.debug('getVehReport_OBD2_VehicleInfo_SID9', vehicleinfoStr);
      if (!_.isEmpty(vehicleinfoStr)) {
        this._vciResponseData.vehicleInfoData = vehicleinfoStr;
      }
    }

    return { vehicleinfoStr, vehicleinfoBuffer };
  }

  async readOdometer() {
    if (!this.isSetVciLocale) {
      await this.setVciLocale({ setUnit: true, setLang: false });
    }
    let odometer = await this.obdService.getodometer_pidsupport();
    if (odometer) {
      let ofmitem = await this.getOfmItems(odometer);
      if (ofmitem.length) {
        let odo = parseInt(ofmitem.shift().value, 10);
        // Onlyu set Mileage if it's valid
        let unitId = this.vciResponseData.unitId,
          isInvalid;
        if (unitId === ENUMVCIs.UNIT_ID.Standard) {
          isInvalid = ValidateMileageKm({ value: odo } as any);
        } else {
          isInvalid = ValidateMileage({ value: odo } as any);
        }
        if (isInvalid) {
          this.logger.debug(
            `Invalid mileage value: ${odo}, skip set to vciResponse`
          );
        } else {
          this._vciResponseData.mileage = odo;
        }
        return odo;
      }
    }
    return NaN;
  }

  //#region Live Data
  async getSupportedLiveDataPIDs(
    innovagroup?: InnovaToolLiveDataGroup
  ): Promise<Pid_ItemBase[]> {
    if (!this.linkedProtocol) {
      await this.linkProtocols();
    }
    if (!this.isSetVciLocale) {
      this.isSetVciLocale = await this.setVciLocale();
    }
    let getlistfunc;
    switch (innovagroup as InnovaToolLiveDataGroup) {
      case InnovaToolLiveDataGroup.ABS:
        getlistfunc = this.obdService.ld_abs_get_itemlist;
        break;
      case InnovaToolLiveDataGroup.SRS:
        getlistfunc = this.obdService.ld_srs_get_itemlist;
        break;
      case InnovaToolLiveDataGroup.ECM:
      case InnovaToolLiveDataGroup.PCM:
        getlistfunc = this.obdService.ld_ecm_get_itemlist;
        break;
      default:
        getlistfunc = this.obdService.ld_obd2_get_itemlist;
        break;
    }
    const data = await getlistfunc.call(this.obdService);
    this.logger.debug('getSupportedLiveDataPIDs data ', data);
    if (data) {
      let pids = data['ListItem'] || [];
      let res: Pid_ItemBase[] = [];
      while (pids.length) {
        let pidItemInfo = pids.shift();
        let pId = Number.parseInt(pidItemInfo[0]);
        let pIdHex = '0x' + ('00' + pId.toString(16).toUpperCase()).slice(-2);
        let pidItem = {
          id: pId,
          name: pidItemInfo[1],
          desc: `[${pIdHex}] ${pidItemInfo[1]}`,
          max: parseFloat(pidItemInfo[2]),
          min: parseFloat(pidItemInfo[3]),
          unit: pidItemInfo[4],
          range: 'N/A',
        } as Pid_ItemBase;
        if (!(isNaN(pidItem.min) || isNaN(pidItem.max))) {
          pidItem.range = `${pidItem.min} to ${pidItem.max}`;
        }
        // let iteminfo = await getinteminfofunc.call(this.obdService, pidItem.id).catch(() => null);
        // if (iteminfo) {
        //   pidItem = {
        //     ...pidItem, ...{
        //       min: parseInt(iteminfo['MinValue']),
        //       max: parseInt(iteminfo['MaxValue']),
        //       unit: iteminfo['Unit']
        //     }
        //   };
        // } /** Since v1.6, tool already responses iteminfo in getlist function */
        res.push(pidItem);
      }
      this.logger.debug('getSupportedLiveDataPIDs res ', res);
      return res;
    }
    return null;
  }

  async getLiveDataPIDsValue(
    pids: number[],
    innovagroup?: InnovaToolLiveDataGroup
  ) {
    const listPids = Array.from(pids || []);
    let getitemvalfunc;
    switch (innovagroup as InnovaToolLiveDataGroup) {
      case InnovaToolLiveDataGroup.ABS:
        getitemvalfunc = this.obdService.ld_abs_get_itemval;
        break;
      case InnovaToolLiveDataGroup.SRS:
        getitemvalfunc = this.obdService.ld_srs_get_itemval;
        break;
      case InnovaToolLiveDataGroup.ECM:
      case InnovaToolLiveDataGroup.PCM:
        getitemvalfunc = this.obdService.ld_ecm_get_itemval;
        break;
      default:
        getitemvalfunc = this.obdService.ld_obd2_get_itemval;
        break;
    }
    let pidsValues = [];
    while (listPids.length) {
      let pid = listPids.shift();
      const data = await getitemvalfunc.call(this.obdService, pid);
      if (data && data['ListValue']) {
        const val = data['ListValue'];
        let value = val[1] || '',
          unit = '',
          regex = /(.*) \((.*)\)/i,
          matches = value.match(regex);
        // this.logger.info('valListVal', data);
        if (matches) {
          value = matches[1];
          unit = matches[2];
        }
        pidsValues.push({
          id: val[0],
          value,
          unit,
        });
        this.logger.info('getLiveDataPIDsValue data', data, pidsValues);
      }
      await this.helper.sleep(pid);
    }
    return pidsValues;
  }

  async getLiveDataPIDsValueByRange(
    start: number,
    end: number,
    innovagroup?: InnovaToolLiveDataGroup
  ): Promise<{ id; value }[]> {
    let getitemvalfunc;
    switch (innovagroup as InnovaToolLiveDataGroup) {
      case InnovaToolLiveDataGroup.ABS:
        getitemvalfunc = this.obdService.ld_abs_get_ListItem_Val;
        break;
      case InnovaToolLiveDataGroup.SRS:
        getitemvalfunc = this.obdService.ld_srs_get_ListItem_Val;
        break;
      case InnovaToolLiveDataGroup.ECM:
      case InnovaToolLiveDataGroup.PCM:
        getitemvalfunc = this.obdService.ld_ecm_get_ListItem_Val;
        break;
      default:
        getitemvalfunc = this.obdService.ld_obd2_get_ListItem_Val;
        break;
    }
    let data = await getitemvalfunc.call(this.obdService, start, end);
    this.logger.info('getLiveDataPIDsValueByRange data', data);
    // data = {"Group":2,"ListValue":[[154,"1.8 (mph)"],[156,"28.7 (mph)"],[158,"114.9 (mph)"],[160,"217.3 (mph)"],[147,"Not Supported"]]};
    if (data && data['ListValue']) {
      return data['ListValue'].map((data) => {
        let value = data[1] || '',
          unit = '',
          regex = /(.*) \((.*)\)/i,
          matches = value.match(regex);
        if (matches) {
          value = matches[1];
          unit = matches[2];
        }
        return {
          id: data[0],
          value,
          unit,
        };
      });
    }
    return null;
  }
  //#endregion Live Data
  get vciResponseData() {
    let res = {};
    if (!_.isEmpty(this._vciResponseData)) {
      res = _.cloneDeep(this._vciResponseData);
    }
    return res as VCIResponseData;
  }

  get isEmptyVciData() {
    return _.isEmpty(this._vciResponseData);
  }

  setVciResponseData(data: VCIResponseData) {
    this._vciResponseData = data;
  }

  resetVciReponseData() {
    this.setVciResponseData({} as VCIResponseData);
  }

  /**
   * set vin from user input for box-novin
   * @param vin
   */
  async setVin(vin: string, force = false) {
    if (force || (this._vciResponseData && !this._vciResponseData.vin)) {
      this._vciResponseData.vin = vin;
      if (vin === '') {
        // In case user select vehicle
        return true;
      }
      let isOK = await this.obdService.setVINString(vin);
      await this.sleep(2000);
      await this.getYMME();
      return isOK;
    } else {
      this.logger.debug(
        'Cannot override VIN read from box.',
        this._vciResponseData.vin
      );
      return false;
    }
  }

  get currentVin() {
    return this._vciResponseData ? this._vciResponseData.vin : '';
  }

  setYmme(ymme: { make; year; model; engine }) {
    this._vciResponseData.ymme = {
      make: ymme.make || 'N/A',
      year: ymme.year || 'N/A',
      model: ymme.model || 'N/A',
      engine: ymme.engine || 'N/A',
    };
  }

  setMileage(mileage: number) {
    this._vciResponseData.mileage = mileage;
  }

  setSupportedModules(modules: Oem_Item[]) {
    if (_.isArray(modules)) {
      _.set(this._vciResponseData, 'allSupportedModules', modules);
    }
  }

  async getSupportedModules() {
    let modules = _.get(this.vciResponseData, 'allSupportedModules', []);
    if (!modules) {
      modules = await this.scanAllSupportedModules();
    }
    return modules;
  }

  removeSupportedModules() {
    _.unset(this._vciResponseData, 'allSupportedModules');
  }

  async scanAllSupportedModules(useCached = false, retry = 1) {
    // await this.dbService.deleteCacheData();
    // let loadSupportedModules;
    // if (this.dbService.dbState) {
    //   this.dbService.fetchCacheData().subscribe((caches) => {
    //     if (caches) loadSupportedModules = caches;
    //   });
    // }
    if (!this.isSetVciLocale) {
      this.isSetVciLocale = await this.setVciLocale();
    }
    let oemModules = await this.obdService
      .nwscan_getSupportSystem()
      .catch(this.logger.debug.bind(null, 'nwscan_getSupportSystem failed'));
    if (oemModules && _.isArray(oemModules['data'])) {
      this._vciResponseData.allSupportedModules = oemModules['data'].filter(
        (m) => m.groupName
      );
    } else if (retry > 0) {
      await this.sleep(SLEEP_TIMEOUT * 5);
      this.logger.debug(`Retry run nwscan_getSupportSystem`);
      return this.scanAllSupportedModules(useCached, retry - 1);
    } else {
      this._vciResponseData.allSupportedModules = [];
    }
    return this._vciResponseData.allSupportedModules;
  }

  /** YMME */
  async ymme_init(): Promise<{ vehinfo?; field: string; options: string[] }> {
    let resp = await this.obdService.ymme_init();
    return resp as any;
  }

  async ymme_get(
    selection_id
  ): Promise<{ vehinfo?; field: string; options: string[] }> {
    let resp = await this.obdService.ymme_get(selection_id);
    return resp as any;
  }

  async ymme_confirm(): Promise<boolean> {
    let resp = await this.obdService.ymme_confirm();
    return resp;
  }

  async ymme_back(): Promise<{ vehinfo?; field: string; options: string[] }> {
    let resp = await this.obdService.ymme_back();
    return resp as any;
  }

  /** Start VCI Data Log */
  private _isVciLog = false;
  async enableVciLog(isEnabled?: boolean) {
    if (!this.isConnected) {
      await this.initializeBT();
    }
    this._isVciLog = isEnabled;
    this.stoCheckConnection = -1;
    let rs = isEnabled
      ? await this.obdService.StartLog()
      : await this.obdService.StopLog();
    setTimeout(() => {
      this.stoCheckConnection = 0;
    }, TIMEOUT_INIT_CONNECTION / 2);
    return rs;
  }

  async readVciLog() {
    let logMessages = '';
    this.logger.debug('Start readVciLog...');
    this.stoCheckConnection = -1;
    try {
      if (this._isVciLog) {
        await this.obdService.StopLog();
        this._isVciLog = false;
        await this.sleep(SLEEP_TIMEOUT, false);
      }
      const logPayload = await this.obdService.GetLog();
      if (logPayload) {
        logMessages = Dataparser.getStringOfObj(logPayload);
        // for (let x of logPayload) {
        //   if (x.payload) {
        //     logMessages += Dataparser.bytesToString(x.payload);
        //   }
        // }
      }
    } catch (err) {
      this.logger.debug('readVciLog err', err);
    }
    setTimeout(() => {
      this.stoCheckConnection = 0;
    }, TIMEOUT_INIT_CONNECTION / 2);
    return logMessages;
  }
  /** End VCI Data Log */

  private handleResponse(response: { tag; data }) {
    try {
      let { tag, data } = response;
      if ((this.supportLogTags || []).includes(tag)) {
        // this.logger.debug(`[${new Date().toISOString()}] ${tag} ${data}`);
        if (!AppConfig.IS_ENABLED_LOGGER) {
          tag = `[${new Date().toISOString()}] ${tag}`;
        }
        this.logger.debug(`${tag} ${data}`);
      }
      // else {
      //   throw new Error(`Tag is not suppported: ${tag}`);
      // }
    } catch (e) {
      this.logger.error('Cannot handle this repsonse', response, e);
    }
  }
}
