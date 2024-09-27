import { CreateReportRequestModel } from "./create-report-request-model";
import { DlcLocationModel } from "./app.model";
import { ApiCreateReportRequest } from "../services/api.models";

export enum ReportStatus {
    Complete = 0,
    Incomplete = 1
}

export class ReportSession {
    workOrderNumber: string;
    mileage: number;
    vin: string;
    dlcModel: DlcLocationModel;
    hasDlc: boolean;
    toolName: string;
    deviceId: string;
    reportId: string;
    reportNumber: string;
    reportStatus: ReportStatus;
    constructor() {
        this.workOrderNumber = "";
        this.mileage = 0;
        this.vin = "";
        this.hasDlc = false;
        this.toolName = "";
        this.reportId = "";
        this.reportNumber = "";
        this.dlcModel = new DlcLocationModel();
        this.reportStatus = ReportStatus.Complete;
    }
}