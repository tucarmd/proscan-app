import { Injectable } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { ApiReportResponse, ApiReportHistoryResponse, ReportModel, ApiBooleanResponse } from 'src/app/models/app.model';
import { map, catchError, timeout } from 'rxjs/operators';
import { of } from 'rxjs';
import { ReportSession, ReportStatus } from 'src/app/models/report-session';
import { OemModuleItem } from '../api.models';
import { VCIResponseData } from '../innova-tool-models';
import { AppConfig } from 'src/app/configs/app.config';
import { StorageKeys } from 'src/app/models/app.constant';
import { AppLogger, AppLoggerService } from '../logger';


const API_REPORT = '/shops/reports';
const API_REPORT_HISTORY = '/shops/reports?pageSize=10000';
const API_ERASE_MODULE_DTCS = '/shops/reports/eraseModuleDtcs';
/*
  Generated class for the VehicleServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ReportServiceProvider {
  #logger: AppLogger;
  constructor(private apiRestService: ApiRestService,
    private loggerService: AppLoggerService) {
      this.#logger = loggerService.getLogger('ReportServiceProvider');
  }

  saveReport(reportData: ReportModel) {
    if(reportData && reportData.modulesWithDTC && reportData.modulesWithDTC.length > 0){
      let index = 0;
      reportData.modulesWithDTC.forEach(item => {
        item.index = index++;
      });
    }
    localStorage.setItem(StorageKeys.REPORT_DETAILS + reportData.id, JSON.stringify(reportData));
  };

  getReport = (reportId: any): Promise<ReportModel> => {
    return new Promise<ReportModel>(async (resolve, reject) => {
      let reportData = localStorage.getItem(StorageKeys.REPORT_DETAILS + reportId);
      if (reportData) {
        this.#logger.debug('local report');
        resolve(JSON.parse(reportData));
      } else {
        this.#logger.debug('online report');
        const report = await this.getReportDetails(reportId);
        if(report && report.success && report.data){
          this.saveReport(report.data);
          resolve(report.data);
        } else {
          resolve(null);
        }
      }
    });
  };

  deleteReport(reportId: any) {
    localStorage.removeItem(StorageKeys.REPORT_DETAILS + reportId);
  }

  async eraseModuleDtcs(reportId, moduleId, eraseAll = false): Promise<ApiBooleanResponse> {
    let data = {
      ReportId: reportId,
      ModuleId: moduleId,
      ClearAll: eraseAll
    };
    return this.apiRestService
      .post(API_ERASE_MODULE_DTCS, data)
      .pipe(
        timeout(AppConfig.shortHttpRequestTimeoutInMs),
        map(res => new ApiBooleanResponse(res)),
        catchError((error: any) =>
          of(new ApiBooleanResponse(error))
        )
      )
      .toPromise();
  }

  async createReport(workOrderNumber, vciResponseData: VCIResponseData, status: ReportStatus): Promise<ApiReportResponse> {
      // let req = new ApiCreateReportRequest();
      let req = {
        workOrderNumber: workOrderNumber,
        status: status,
        vin: vciResponseData.vin,
        mileage: vciResponseData.mileage,
        dongleId: vciResponseData.dongleId,
        usbProductId: vciResponseData.usbProductId || 720,
        vinProfileRaw: vciResponseData.vinProfile,
        monitorStatusEcmRaw: vciResponseData.monitorEcm,
        monitorStatusTcmRaw: vciResponseData.monitorTcm,
        dtcsEcmRaw: vciResponseData.dtcEcm,
        dtcsTcmRaw: vciResponseData.dtcTcm,
        freezeFrameEcmRaw: vciResponseData.freezeFrameEcm,
        freezeFrameTcmRaw: vciResponseData.freezeFrameTcm,
        vehicleInfoEcmRaw: vciResponseData.vehicleInfoEcm,
        vehicleInfoTcmRaw: vciResponseData.vehicleInfoTcm,
        rawDataVersion: 5,
        batteryLife: vciResponseData.batteryVoltage ?? '0',
        // BatteryLife: vciResponseData..value,
        brakePadLife: vciResponseData.brakePadLife,
        oilLevel: vciResponseData.oilLevel,
        oilLife: vciResponseData.oilLife,
        coolantLevel: vciResponseData.coolantLevel,
        tirePressures: vciResponseData.tirePressures,
        // scanningType: this.scanningType,
        // DriveCycles: this.driveCycles,
        // Retailer: addInfo.retailer,
        // ReportNumber: this.reportNumber,
        frontbrakePadLife: vciResponseData.frontbrakePadLife,
        rearbrakePadLife: vciResponseData.rearbrakePadLife,
        // CustomScanModules: this.QuickScanSettings,
        // Language: addInfo.lang,
        // additionalInfo: this.additionalInfo,
        warningLightStatus: vciResponseData.warningLightStatus,
        // RegionalUnit: addInfo.regional,
        // freezeFrames: this.freezeFrames
        modules: null
      };
      if (vciResponseData.oemModules) {
        req.modules = vciResponseData.oemModules
        .map(m => {
          return {
            System: m.system,
            SubSystem: m.subsystem,
            ModuleName: m.modulename,
            Group: m.group,
            InvalidDTC: m.InvalidDTC,
            Status: m.Status,
            Skipped: m.Skipped,
            Dtcs: (m.Dtcs || []).map(d => {
              return {
                Code: d.code,
                Type: d.type,
                Def: d.definition
              } as any;
            })
          } as OemModuleItem;
        });
      }
    this.#logger.debug('Create Report Request Data', req);
    return this.apiRestService
      .post(API_REPORT, req)
      .pipe(
        timeout(AppConfig.createReportRequestTimeoutInMs),
        map(res => new ApiReportResponse(res)),
        catchError((error: any) =>{
          this.#logger.debug(error);
          return of(new ApiReportResponse(error));
          }
        )
      )
      .toPromise();
  }

  async getReportHistory(): Promise<ApiReportHistoryResponse> {
    return this.apiRestService
      .get(API_REPORT_HISTORY)
      .pipe(
        timeout(AppConfig.shortHttpRequestTimeoutInMs),
        map(res => new ApiReportHistoryResponse(res)),
        catchError((error: any) =>
          of(new ApiReportHistoryResponse(error))
        )
      )
      .toPromise();
  }

  async getReportDetails(id: string): Promise<ApiReportResponse> {
    return this.apiRestService
      .get(API_REPORT + '/' + id)
      .pipe(
        timeout(AppConfig.shortHttpRequestTimeoutInMs),
        map(res => new ApiReportResponse(res)),
        catchError((error: any) =>
          of(new ApiReportResponse(error))
        )
      )
      .toPromise();
  }

  getReportSession(): ReportSession {
    let reportSession = JSON.parse(localStorage.getItem(StorageKeys.REPORT_SESSION)) as ReportSession;
    if (!reportSession) {
      reportSession = new ReportSession();
    }
    return reportSession;
  }

  saveReportSession(reportSession) {
    localStorage.setItem(StorageKeys.REPORT_SESSION, JSON.stringify(reportSession));
  }

  deleteReportSession() {
    localStorage.removeItem(StorageKeys.REPORT_SESSION);
  }
}
