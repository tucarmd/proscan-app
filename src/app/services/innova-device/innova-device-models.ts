/*
 * Created by Truyen Nguyen.
 * Email: truyenn@carmd.com.
 * Date: 7/17/2018 (m/d/y).
 * Time: 11:0:54.
 * Copyright (c) 2018, CARMD.COM CORP, (http://carmd.com). All rights reserved.
 */

//region BLE
import {InnovaHelper} from "./innova-helper";
import {InnovaDeviceHelper} from "./innova-device-helper";

export enum BLEHeaderEnum {
    Request = 0xAD,
    PositiveResponse = 0xDA,
    NegativeResponse = 0xDD
}

export enum ServiceUUID {
    Write = "FFE5",
    Read = "FFE0",
    CharacteristicWrite = "FFE9",
    CharacteristicRead = "FFE4"
}

export enum BLECommandEnum {
    ClearDiscoverVehicle = 0x47,
    StartDiscoverVehicle = 0x48,
    GetProductId = 0xE7,
    GetDeviceGUID = 0xE5,
    WriteDeviceGUID = 0xE6,
    GetToolSetting = 0xE1,
    GetVehicleData = 0x01,
    VCI = 0x80,
    GetDTC = 0x3F,
    ClearODB2DTC = 0x3E,
    SetJsonMode = 0x49,
    GetFreezeFrame = 0x03,
    GetIMReadiness = 0x4B,

    ReadSupportPidList = 0x41,
    RegisterPidList = 0x42,
    UnRegisterPidList = 0x43,
    StreamingPidData = 0x46,
    GetBatteryData = 0x3c
}

export enum VCICommandEnum {
    GetVehicleInfoBufferPart1 = 1,
    GetVehicleInfoBufferPart2 = 2,
    GetVin = 333,
    GetVinProfile = 3,
    GetEcmDTCs = 4,
    GetTcmDTCs = 5,
    GetFFHeader = 6,
    GetFFDtc = 7,
    GetFFNames = 8,
    GetFFUnits = 9,
    GetFFValues = 10,
    GetMonitorPart1 = 11,
    GetMonitorPart2 = 12,
    GetSpecialTest = 13,
    GetOEMModule = 14,
    GetOEMDTCModule = 140,
    GetLDHeader = 15,
    GetLDNames = 16,
    GetLDUnits = 17,
    GetLDValues = 18,
    EnableJsonSupport = 19,
    CheckProtocol = 20,
    LinkProtocol = 21,
    StartQuery = 22,
    GetDTCs = 23,
    GetDTCsSupport = 24,
    CheckMonitorIconSupport = 25,
    CheckFreezeFrameSupport = 26,
    GetReportFreezeFrame = 27,
    SetVIN = 28,
    ClearOEMModuleDTCs = 29,
    GetBatteryVoltage = 30,
    GetBatteryStatus = 31
}

export class VCICommandRequestConsts {
    static CheckProtocolBufferLength = 0x0d;
    static StartQueryBufferLength = 0x0b;
    static EnableJsonSupportBufferLength = 0x0b;
    static GetDTCsSupportBufferLength = 0x10;
    static GetReportDTCsBufferLength = 0x10;
    static GetECMDTCsBufferLength = 0x10;
    static GetBatteryVoltageBufferLength = 0x01;
    static GetBatteryStatusBufferLength = 0x01;
    static CheckMonitorIconSupportBufferLength = 0x10;
    static GetMonitorBufferLength = 0x10;
    static CheckFreezeFrameSupportBufferLength = 0x10;
    static GetFreezeFrameHeaderLength = 0x10;
    static GetFreezeFrameDtcLength = 0x10;
    static GetFreezeFrameNamesLength = 0x10;
    static GetFreezeFrameUnitsLength = 0x10;
    static GetFreezeFrameValuesLength = 0x10;
    static GetSupportedOEMModuleLength = 0x0b;
    static GetOEMModuleDTCsLength = 0x0f;
    static SetVINBufferLength = 0x1e;
    static GetVINProfileLength = 0x10;
}

export enum BLERequestStatus {
    ACK = 0xC1,
    Error = 0xC2,
    BusyOrProcessing = 0xC3,
    WaitingNextRequest = 0xC4
}

export enum BLEErrorCode {
    NO_PROTOCOL = 0,
    NO_VEHICLE_DATA = 2,
    INVALID_PARAMETER = 3,
    MSG_NOT_SUPPORTED = 4,
    GENERAL = 5,
    PROCESS_NOT_READY = 6,
    UPGRADE_WRITE_FAIL = 7
}

export class BLEEnum {
    static Header = BLEHeaderEnum;
    static CommandId = BLECommandEnum;
    static VCICommandId = VCICommandEnum;
    static RequestStatus = BLERequestStatus;
    static ErrorCode = BLEErrorCode;
    static ServiceUUID = ServiceUUID;
}

export class CharacteristicData {
    service: string;
    characteristic: string;
    properties: any;
    isNotifying: boolean;
    value: ArrayBuffer;
}

//endregion

export class BLEDevice {
    id: string;
    name: string;
    advertising: any;
    rssi: number;
    services: Array<string>;
    characteristics: Array<CharacteristicData>;
}

export class BLEConfig {
    //static SupportedToolNames = ["Dongle", "Dongle02"];
    static SupportedBleServiceUuids = [];//["FFF0", "FFB0"];
    static DelayQueue = 500;
}

export enum InnovaDeviceEvent {
    TimedOut = "TimedOut",
    Scanning = "Scanning",
    Scanned = "Scanned",
    Connecting = "Connecting",
    Connected = "Connected",
    Reconnecting = "Reconnecting",
    Reconnected = "Reconnected",
    Disconnecting = "Disconnecting",
    Disconnected = "Disconnected",
    ClearingDiscoverVehicle = "ClearingDiscoverVehicle",
    ClearedDiscoverVehicle = "ClearedDiscoverVehicle",
    DiscoveringVehicle = "DiscoveringVehicle",
    DiscoveredVehicle = "DiscoveredVehicle",
    GettingProductId = "GettingProductId",
    GotProductId = "GotProductId",
    GettingDeviceId = 'GettingDeviceId',
    GotDeviceId = "GotDeviceId",
    WritingDeviceId = 'WritingDeviceId',
    WroteDeviceId = "WroteDeviceId",
    GettingToolSetting = "GettingToolSetting",
    GotToolSetting = "GotToolSetting",
    GettingVIN = "GettingVIN",
    GotVIN = "GotVIN",
    GettingVehicleData = 'GettingVehicleData',
    GotVehicleData = "GotVehicleData",
    GettingDTC = 'GettingDTC',
    GotDTC = "GotDTC",
    SettingJsonMode = 'SettingJsonMode',
    SetJsonMode = "SetJsonMode",
    GettingFreezeFrame = "GettingFreezeFrame",
    GotFreezeFrame = "GotFreezeFrame",
    GettingMonitorPart1 = "GettingMonitorPart1",
    GotMonitorPart1 = "GotMonitorPart1",
    GettingMonitorPart2 = "GettingMonitorPart2",
    GotMonitorPart2 = "GotMonitorPart2",
    CheckProtocol = "CheckProtocol",
    CheckedProtocol = "CheckedProtocol",
    CheckToolConnected = "CheckToolConnected",
    CheckedToolConnected = "CheckedToolConnected",
    StartQuery = "StartQuery",
    StartedQuery = "StartedQuery",
    LinkToProtocol = "LinkToProtocol",
    LinkedToProtocol = "LinkedToProtocol",
    EnableJsonSupport = "EnableJsonSupport",
    EnabledJsonSupport = "EnabledJsonSupport",
    GetDTCsSupport = "GetDTCsSupport",
    GotDTCsSupport = "GotDTCsSupport",
    GetReportDTCs = "GetReportDTCs",
    GotReportDTCs = "GotReportDTCs",
    GetECMDTCs = "GetECMDTCs",
    GotECMDTCs = "GotECMDTCs",
    GetTCMDTCs = "GetTCMDTCs",
    GotTCMDTCs = "GotTCMDTCs",
    GetBatteryVoltage = "GetBatteryVoltage",
    GotBatteryVoltage = "GotBatteryVoltage",
    GetBatteryStatus = "GetBatteryStatus",
    GotBatteryStatus = "GotBatteryStatus",
    CheckMonitorIcon = "CheckMonitorIcon",
    CheckedMonitorIcon = "CheckedMonitorIcon",
    CheckFreezeFrameSupport = "CheckFreezeFrameSupport",
    CheckedFreezeFrameSupport = "CheckedFreezeFrameSupport",
    GettingReportFreezeFrame = "GettingReportFreezeFrame",
    GotReportFreezeFrame = "GotReportFreezeFrame",
    GettingFreezeFrameHeader = "GettingFreezeFrameHeader",
    GotFreezeFrameHeader = "GotFreezeFrameHeader",
    GettingFreezeFrameDtc = "GettingFreezeFrameDtc",
    GotFreezeFrameDtc = "GotFreezeFrameDtc",
    GettingFreezeFrameNames = "GettingFreezeFrameNames",
    GotFreezeFrameNames = "GotFreezeFrameNames",
    GettingFreezeFrameUnits = "GettingFreezeFrameUnits",
    GotFreezeFrameUnits = "GotFreezeFrameUnits",
    GettingFreezeFrameValues = "GettingFreezeFrameValues",
    GotFreezeFrameValues = "GotFreezeFrameValues",
    GettingSupportedOEMModules = "GettingSupportedOEMModules",
    GotSupportedOEMModules = "GotSupportedOEMModules",
    GettingOEMModuleDTCs = "GettingOEMModuleDTCs",
    GotOEMModuleDTCs = "GotOEMModuleDTCs",
    WritingVIN = "WritingVIN",
    WroteVIN = "WroteVIN",
    ClearingOEMModuleDTCs = "ClearingOEMModuleDTCs",
    ClearedOEMModuleDTCs = "ClearedOEMModuleDTCs",
    GettingVINProfile = "GettingVINProfile",
    GotVINProfile = "GotVINProfile"
}

//region Tool Data

export class DataBuffer {
    private _byteArray: Uint8Array;

    constructor(byteArray: Uint8Array = null) {
        this._byteArray = byteArray;
    }

    get byteArray(): Uint8Array {
        return this._byteArray;
    }

    set byteArray(byteArray: Uint8Array) {
        this._byteArray = byteArray;
    }

    get hex(): string {
        return InnovaHelper.convertByteArrayToHexString(this._byteArray);
    }

    get base64(): string {
        return InnovaHelper.convertByteArrayToBase64String(this._byteArray);
    }

    get bodyBuffer(): Uint8Array {
        return InnovaDeviceHelper.getDataBufferBody(this.byteArray);
    }
}

export class BLEResponse extends DataBuffer {
    commandId: number;
    header: number;
    statusCode: number;
    errorCode: number;
    length: number;

    constructor(byteArray: Uint8Array = null) {
        super(byteArray);
        if (!this.byteArray) {
            this.byteArray = new Uint8Array(0);
        }
    }

    set buffer(buffer: Uint8Array) {
        this.byteArray = buffer;
    }

    get buffer(): Uint8Array {
        return this.byteArray;
    }

    /*
    get bodyBuffer():Uint8Array {
        if (this.buffer && this.buffer.length > 5) {
            return this.buffer.subarray(4, this.buffer.length - 1)
        }
        return null;
    }/**/

    get isPositiveResponse(): boolean {
        return this.header && this.header == BLEEnum.Header.PositiveResponse;
    }

    get isNegativeResponse(): boolean {
        return this.header && this.header == BLEEnum.Header.NegativeResponse;
    }
}

export class DeviceIdData extends DataBuffer {
    get uuid(): string {
        let _bodyBuffer = this.bodyBuffer;
        if (_bodyBuffer) {
            return InnovaHelper.convertByteArrayToUuid(_bodyBuffer);
        }
        return null;
    }

    get guid(): string {
        let _bodyBuffer = this.bodyBuffer;
        if (_bodyBuffer) {
            return InnovaHelper.convertByteArrayToGuid(_bodyBuffer);
        }
        return null;
    }

    get serialNumber(): string {
        let _bodyBuffer = this.bodyBuffer;
        if (_bodyBuffer) {
            return InnovaHelper.convertByteArrayToHexString(_bodyBuffer);
        }
        return null;
    }
}

export class ToolSetting extends DataBuffer {
    constructor(byteArray: Uint8Array = null) {
        super(byteArray);
    }

    get bootloader(): string {
        let _bodyBuffer = this.bodyBuffer;

        if (_bodyBuffer && _bodyBuffer.length >= 30) {
            let average = Math.floor(_bodyBuffer.length / 2);

            return InnovaHelper.removeNonAscii(InnovaHelper.convertHexToAscii(
                InnovaHelper.convertByteArrayToHexString(_bodyBuffer.subarray(0, average - 1))));
        }
    }

    get firmware(): string {
        let _bodyBuffer = this.bodyBuffer;
        if (_bodyBuffer && _bodyBuffer.length >= 30) {
            let average = Math.floor(_bodyBuffer.length / 2);

            return InnovaHelper.removeNonAscii(InnovaHelper.convertHexToAscii(
                InnovaHelper.convertByteArrayToHexString(_bodyBuffer.subarray(average, _bodyBuffer.length - 1))));
        }
    }
}

export class VehicleData extends DataBuffer {
}

export class VinData extends DataBuffer {
    get vin(): string {
        return InnovaHelper.formatVIN(
            InnovaHelper.convertHexToAscii(this.hex));
    }
}

export class JsonData extends DataBuffer {
    get json(): string {
        let body = this.byteArray;
        if (this.byteArray) {
            return InnovaHelper.convertHexToAscii(InnovaHelper.convertByteArrayToHexString(body));
        }
        return "";
    }
}

export class DTCData extends JsonData {
}

export class FreezeFrameData extends JsonData {
}

export class MonitorData extends JsonData {
}

export class DongleBData {
    vehicleData: VehicleData;
    vinData: VinData;
    dtcData: DTCData;
}

export class InnovaDevice {
    bleDevice: BLEDevice;
    productId: number;
    deviceId: DeviceIdData;
    toolSetting: ToolSetting;
}

export class DongleBDevice extends InnovaDevice {
    data: DongleBData;

    constructor() {
        super();
        this.data = new DongleBData();
    }
}

//endregion