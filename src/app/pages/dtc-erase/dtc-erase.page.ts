import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { SLEEP_EACH_VCI_REQUEST } from 'src/app/configs/app.config';
import { BaseController } from 'src/app/bases/base-controller';
import { HelperService } from 'src/app/services/helper.service';
import { InnovaVCIService } from 'src/app/services/innova-vci.service';
import { ReportServiceProvider } from 'src/app/services/report-service/report-service';

@Component({
  selector: 'app-dtc-erase',
  templateUrl: './dtc-erase.page.html',
  styleUrls: ['./dtc-erase.page.scss'],
})
export class DtcErasePage extends BaseController {
  public ReportId = '';
  public ModuleId = '';
  public System: number;
  public SubSystem: number;
  public IsEraseAll = false;
  public IsEraseOBDDTCs = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public reportService: ReportServiceProvider,
    public modal: ModalController,
    public helper: HelperService,
    private innovaVciService: InnovaVCIService
  ) {
    super('DtcErasePage');
  }

  ionViewWillEnter() {
    this.logger.debug(
      `ReportId: ${this.ReportId}, ModuleId: ${this.ModuleId}, System: ${this.System}, SubSystem: ${this.SubSystem}, isEraseAll: ${this.IsEraseAll}`
    );
  }

  ionViewDidEnter() {
    this.logger.debug('ionViewDidLoad DtcErasePage');
  }

  clearSuccess() {
    let ctx = this;
    ctx.reportService.deleteReport(this.ReportId);
    setTimeout(function () {
      ctx.backToReportPage(true);
    });
  }

  async eraseOBDDtcs() {
    if (this.innovaVciService.isConnected) {
      this.helper.showLoading();
      let result = await this.innovaVciService.eraseDtcsOBDII();
      this.logger.debug('Erase OBD DTCs', result);
      this.helper.hideLoading();
      this.clearSuccess();
    } else {
      this.helper.confirm(
        'Please verify connection and try again',
        'No Device Detected',
        () => {
          this.logger.debug('Retry clicked');
          this.eraseOBDDtcs();
        },
        () => {
          this.logger.debug('Cancel clicked');
          this.backToReportPage();
        },
        'Retry',
        'Cancel'
      );
    }
  }

  async eraseDtcs() {
    let ctx = this;
    if (ctx.innovaVciService.isConnected) {
      ctx.helper.showLoading();
      let report = await ctx.reportService.getReport(ctx.ReportId);
      if (report) {
        if (ctx.IsEraseAll) {
          const oemModules = report.modulesWithDTC;
          if(oemModules && oemModules.length){
            let index = 0;
            let total = oemModules.length;
            while (oemModules.length) {
              const oemModule = oemModules.shift();
              this.logger.debug(
                `Start erase DTCs for module [${++index}/${total}]`,
                oemModule
              );
              await this.helper.sleep(SLEEP_EACH_VCI_REQUEST);
              let result = await this.innovaVciService.eraseDTCs(
                {
                  System: parseInt(oemModule.system),
                  SubSystem: parseInt(oemModule.subSystem),
                },
                true
              );
              this.logger.debug(`Erase ${result}`, oemModule);
            }
            await this.helper.sleep(SLEEP_EACH_VCI_REQUEST);
          }
          
          let result = await this.innovaVciService.eraseDtcsOBDII();
          this.logger.debug('Erase OBD DTCs', result);
          this.helper.hideLoading();
          ctx.clearSuccess();
        } else {
          this.logger.debug(`Start erase DTCs for module ${this.ModuleId}`);
          await this.helper.sleep(SLEEP_EACH_VCI_REQUEST);
          let result = await this.innovaVciService.eraseDTCs(
            {
              System: this.System,
              SubSystem: this.SubSystem,
            },
            true
          );
          this.logger.debug(`Erase ${result}`, this.ModuleId);
          this.clearSuccess();
        }
        ctx.helper.hideLoading();
      } else {
        ctx.helper.hideLoading();
        ctx.backToReportPage();
      }
    } else {
      ctx.helper.confirm(
        'Please verify connection and try again',
        'No Device Detected',
        () => {
          this.logger.debug('Retry clicked');
          ctx.eraseDtcs();
        },
        () => {
          this.logger.debug('Cancel clicked');
          ctx.backToReportPage();
        },
        'Retry',
        'Cancel'
      );
    }
  }

  backToReportPage(isErased = false) {
    this.modal.dismiss({ isErased: isErased });
  }

  cancel() {
    this.modal.dismiss();
  }
}
