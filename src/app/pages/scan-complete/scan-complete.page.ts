import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { RoutePath } from 'src/app/app-routing.module';
import { BaseController } from 'src/app/bases/base-controller';
import { HelperService } from 'src/app/services/helper.service';
import { InnovaVCIService } from 'src/app/services/innova-vci.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ReportServiceProvider } from 'src/app/services/report-service/report-service';
import { DtcDetailsPage } from '../dtc-details/dtc-details.page';
import { DtcErasePage } from '../dtc-erase/dtc-erase.page';
import { AppState } from 'src/app/services/state/app.state';
import { DtcItem, PowertrainCodes, ReportModel } from 'src/app/models/app.model';

@Component({
  selector: 'app-scan-complete',
  templateUrl: './scan-complete.page.html',
  styleUrls: ['./scan-complete.page.scss'],
})
export class ScanCompletePage extends BaseController implements OnInit {
  @ViewChild('content') content: any;
  WorkOrderNumber = '';
  ReportId = '';
  ReportNumber: number;
  ModulesWithDTC: Array<any>;
  ModulesWithoutDTC: Array<any>;
  PowertrainCodes: PowertrainCodes;
  ModulesScannedCount = 0;
  VehicleName = '';
  VIN = '';
  Mileage = 0;
  TotalDTCCount = 0;
  fromHistoryPage = false;
  isViewModulesWithoutDTC = false;
  showButtonEraseDtcs = true;
  btnViewModulesText = 'Click to view good modules';
  incompleteReport = '';
  isErased = false;
  isErasedOBDDtcs = false;
  erasedModuleIds = [];
  deviceId = '';
  totalOBDCodes = 0;
  public unregisterBackButtonAction: any;
  report: ReportModel;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private helper: HelperService,
    public modalCtrl: ModalController,
    private reportService: ReportServiceProvider,
    private innovaVciService: InnovaVCIService,
    private navigationService: NavigationService
  ) {
    super('ScanCompletePage');
  }
  ngOnInit() {}

  ionViewWillEnter() {
    this.erasedModuleIds = [];
    this.deviceId = this.navigationService.getQueryParam('deviceId');
    this.ReportId = this.navigationService.getQueryParam('reportId');
    this.fromHistoryPage = this.helper.coerceBooleanProperty(this.navigationService.getQueryParam('fromHistory'));
    if (this.fromHistoryPage) {
      this.showButtonEraseDtcs = false;
    } else {
      this.showButtonEraseDtcs = true;
    }
  }
  async ionViewDidEnter() {
    this.isErased = false;
    await this.loadReport();
  }

  async loadReport() {
    let ctx = this;
    await ctx.helper.showLoading();
    this.report = await ctx.reportService.getReport(ctx.ReportId);
    if (this.report) {
      this.WorkOrderNumber = this.report.workOrderNumber;
      this.ReportNumber = this.report.reportNumber;
      if(this.report.powertrainCodes){
        this.PowertrainCodes = this.report.powertrainCodes;
        this.totalOBDCodes = this.PowertrainCodes.otherCodeCount;
      }
      if (this.report.modulesWithDTC) {
        ctx.ModulesWithDTC = this.report.modulesWithDTC.sort((d) => d.index);
        ctx.ModulesWithDTC.forEach((item) => {
          if (ctx.erasedModuleIds.findIndex((e) => e.id === item.id) > -1)
            item.isErased = true;
        });
      }
      if (this.report.modulesWithoutDTC) {
        ctx.ModulesWithoutDTC = this.report.modulesWithoutDTC;
      }

      if (this.report.status === 1) {
        ctx.incompleteReport = 'Incomplete ';
      } else {
        ctx.incompleteReport = '';
      }
      ctx.VehicleName = this.report.ymme ? this.report.ymme : '';
      ctx.VIN = this.report.vin ? this.report.vin : '';
      ctx.Mileage = this.report.mileage;
      ctx.TotalDTCCount = this.report.totalErrorCodeCount ? this.report.totalErrorCodeCount : 0;
      ctx.ModulesScannedCount = this.report.modulesScannedCount
        ? this.report.modulesScannedCount
        : 0;

      if (ctx.TotalDTCCount === 0) {
        ctx.showButtonEraseDtcs = false;
        if (!ctx.fromHistoryPage) {
          await ctx.helper.hideLoading();
          ctx.disconnectTool();
        }
      }
    }
    await ctx.helper.hideLoading();
  }

  async viewDtcDetails(moduleId) {
    let modal = await this.modalCtrl.create({
      component: DtcDetailsPage,
      componentProps: { ReportModel: this.report, ModuleId: moduleId },
    });
    modal.present();
  }

  async viewObdDtcs(){
    const modal = await this.modalCtrl.create({
      component: DtcDetailsPage,
      componentProps: { DisplayOBDCodes: true, StoredCodes: this.PowertrainCodes.storedCodes, PendingCodes: this.PowertrainCodes.pendingCodes, PermanentCodes: this.PowertrainCodes.permanentCodes  },
    });
    modal.present();
  }

  async viewMilDtc(milDtc: DtcItem) {
    let modal = await this.modalCtrl.create({
      component: DtcDetailsPage,
      componentProps: { MilDTC: milDtc },
    });
    modal.present();
  }

  public viewModulesWithoutDTC(): void {
    this.isViewModulesWithoutDTC = !this.isViewModulesWithoutDTC;
    if (this.isViewModulesWithoutDTC) {
      this.btnViewModulesText = 'Click to hide good modules';
    } else this.btnViewModulesText = 'Click to view good modules';
  }

  async eraseDtcs(moduleId, moduleName, system, subSystem, isEraseOBDDTCs) {
    this.logger.debug(`erase dtcs ${moduleId} ${moduleName} ${system} ${subSystem}`);
    let modal = await this.modalCtrl.create({
      component: DtcErasePage,
      componentProps: {
        ReportId: this.ReportId,
        ModuleId: moduleId,
        ModuleName: moduleName,
        System: system,
        SubSystem: subSystem,
        IsEraseAll: false,
        IsEraseOBDDTCs: isEraseOBDDTCs
      },
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      if(isEraseOBDDTCs){
        if (data.isErased) {
          this.isErasedOBDDtcs = data.isErased;
        } else {
          this.helper.alert(
            'Unable to erase OBD DTC Codes. Please try again.'
          );
        }
      } else {
        if (data.isErased) {
          this.isErased = data.isErased;
          this.ModulesWithDTC.forEach((item) => {
            if (item.id === moduleId) item.isErased = true;
          });
        } else {
          this.helper.alert(
            'Unable to erase dtcs of module: ' +
              moduleName +
              '. Please try again.'
          );
        }
      }
    }
  }

  async eraseAllDtcs() {
    let modal = await this.modalCtrl.create({
      component: DtcErasePage,
      componentProps: { ReportId: this.ReportId, IsEraseAll: true },
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      if (data.isErased) {
        this.isErased = data.isErased;
        this.isErasedOBDDtcs = data.isErased;
        if(this.ModulesWithDTC && this.ModulesWithDTC.length){
          this.ModulesWithDTC.forEach((item) => {
            item.isErased = true;
          });
        }
      } else {
        this.helper.alert('Unable to erase all dtcs. Please try again.');
      }
    }
  }

  backToPastReport() {
    this.helper.goTo(RoutePath.ReportHistory);
  }

  async goHome() {
    this.reportService.deleteReportSession();
    return this.helper.popToRoot(RoutePath.Home).then(async () =>{
      await this.innovaVciService.disconnect(true, this.deviceId);
    });
  }

  async rescan() {
    this.navigationService.goTo(RoutePath.VehicleLinking, {
      queryParams: { isRescan: 'true' },
    });
  }

  disconnectTool(goHome = false) {
    let ctx = this;
    if (AppState.isOnDevice) {
      ctx.helper.hideLoading();
      if (goHome) {
        ctx.reportService.deleteReportSession();
        this.helper.popToRoot(RoutePath.Home);
      }
    }
  }

  done() {
    if (this.fromHistoryPage) {
      this.backToPastReport();
    } else {
      this.goHome();
    }
  }
}
