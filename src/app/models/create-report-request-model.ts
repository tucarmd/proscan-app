import { ModuleItem } from './app.model';


export class CreateReportRequestModel {
    Vin: string;
    MonitorStatusRaw: string;
    FreezeFrameRaw: string;
    OriginalTirePressure: any;
    TirePressureUnit: any;
    LFTire: any;
    RFTire: any;
    LRTire: any;
    RRTire: any;
    OriginalBatteryVoltage: any;
    CurrentBatteryVoltage: number;
    OilLevel: any;
    OilLevelUnit: any;
    BrakePadLife: any;
    Modules: Array<ModuleItem>;
    ToolFirmware: string;
    Status: number;
    BatteryStatus: number;
    ECMDTCs: string;
    TCMDTCs: string;

    constructor() {
        this.Vin = "";
        this.MonitorStatusRaw = "";
        this.FreezeFrameRaw = "";
        this.OriginalTirePressure = undefined;
        this.TirePressureUnit = undefined;
        this.LFTire = undefined;
        this.RFTire = undefined;
        this.LRTire = undefined;
        this.RRTire = undefined;
        this.OriginalBatteryVoltage = undefined;
        this.CurrentBatteryVoltage = undefined;
        this.OilLevel = undefined;
        this.OilLevelUnit = undefined;
        this.BrakePadLife = undefined;
        this.Modules = [];
        this.ToolFirmware = "";
        this.Status = 0;
        this.BatteryStatus = -1;
        this.ECMDTCs = "";
        this.TCMDTCs = "";
    }
}