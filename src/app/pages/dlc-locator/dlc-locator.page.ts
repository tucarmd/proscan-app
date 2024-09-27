import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { RoutePath } from 'src/app/app-routing.module';
import { AppStrings } from 'src/app/configs/app.config';
import { BaseController } from 'src/app/bases/base-controller';
import { ReportSession } from 'src/app/models/report-session';
import { HelperService } from 'src/app/services/helper.service';
import { ReportServiceProvider } from 'src/app/services/report-service/report-service';
import { ToolServiceProvider } from 'src/app/services/tool-service/tool-service';
import { VehicleServiceProvider } from 'src/app/services/vehicle-service/vehicle-service';
import { DlcLocatorDetailsPage } from '../dlc-locator-details/dlc-locator-details.page';
import { EnterVinPage } from '../enter-vin/enter-vin.page';
import { AppState } from 'src/app/services/state/app.state';

@Component({
  selector: 'app-dlc-locator',
  templateUrl: './dlc-locator.page.html',
  styleUrls: ['./dlc-locator.page.scss'],
})
export class DlcLocatorPage extends BaseController implements OnInit {
  watchSub: Subscription;
  DlcLocatorDetailsPage = DlcLocatorDetailsPage;
  makes: Array<string> = [];
  years: Array<number> = [];
  models: Array<string> = [];
  make = "";
  year = "";
  model = "";
  reportSession: ReportSession;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public vehicleService: VehicleServiceProvider,
    public reportService: ReportServiceProvider,
    public barcodeScanner: BarcodeScanner,
    public modalCtrl: ModalController,
    public toolService: ToolServiceProvider,
    public helper: HelperService) {
      super('DlcLocatorPage');
  }

  async ngOnInit() {
    await this.helper.showLoading();
    let data = await this.vehicleService.getMakes();
    if (data.success) {
      this.makes = data.data;
    } else {
      this.helper.alert(AppStrings.MSG_SERVER_ERROR_TRY_LATER, AppStrings.ERROR);
    };
    await this.helper.hideLoading();
  }

  ionViewWillEnter(){
    this.reportSession = this.reportService.getReportSession();
  }

  async loadYears(selectedValue: any) {
    this.logger.debug('🚀 ~ file: dlc-locator.page.ts ~ line 55 ~ DlcLocatorPage ~ loadYears ~ selectedValue', selectedValue)
    if (selectedValue) {
      await this.helper.showLoading();
      this.make = selectedValue.detail.value;
      let ctx = this;
      this.logger.debug('load years', this.make);
      let data = await ctx.vehicleService.getYears(this.make);
      await ctx.helper.hideLoading();
      if (data.success) {
        ctx.years = data.data;
        ctx.year = '';
        ctx.model = '';
      } else {
        ctx.helper.alert(AppStrings.MSG_SERVER_ERROR_TRY_LATER, AppStrings.ERROR);
      }
    }
  }

  async loadModels(selectedValue: any) {
    if (selectedValue) {
      let ctx = this;
      ctx.year = selectedValue.detail.value;
      if(ctx.year){
        this.helper.showLoading();
        let data = await ctx.vehicleService.getModels(ctx.make, ctx.year);
        ctx.helper.hideLoading();
        if (data.success) {
          ctx.models = data.data;
          ctx.model = '';
        } else {
          ctx.helper.alert(AppStrings.MSG_SERVER_ERROR_TRY_LATER, AppStrings.ERROR);
        };
      }
    }
  }

  setModel(selectedValue: any) {
    if (selectedValue)
      this.model = selectedValue.detail.value;
  }

  async getDlcLocation() {
    if(this.year === '' || this.make === '' || this.model === ''){
      this.helper.alert("Please select Year, Make, and Model to view DLC location.", AppStrings.ERROR);
      return;
    }
    this.helper.showLoading();
    let data = await this.vehicleService.getDlcLocation(this.make, this.year, this.model);
    this.helper.hideLoading();
    if (data.success) {
      let reportSession = this.reportService.getReportSession();
      reportSession.hasDlc = true;
      reportSession.dlcModel = data.data;
      this.reportService.saveReportSession(reportSession);
      this.helper.goTo(RoutePath.DlcLocatorDetails);
    } else {
      this.helper.alert("Unable to get DLC location for this vehicle. Please try again.", AppStrings.ERROR);
    };
  }

  async getDlcLocationByVin(vin: string) {
    this.helper.showLoading();
    let data = await this.vehicleService.getDlcLocationByVin(vin);
    this.helper.hideLoading();
    if (data.success) {
      let reportSession = this.reportService.getReportSession();
      reportSession.dlcModel = data.data;
      this.reportService.saveReportSession(reportSession);
      this.helper.goTo(RoutePath.DlcLocatorDetails);
    } else {
      this.helper.alert('Invalid VIN. Either this VIN is too new for our system, or our system cannot decode this VIN, or this VIN is invalid. Please enter a different VIN.', AppStrings.ERROR);
    }
  }

  scanVin() {
    let ctx = this;
    if (AppState.isOnDevice) {
      try {
        ctx.barcodeScanner.scan({ orientation: "portrait", prompt: "" }).then((barcodeData) => {
          if (barcodeData.cancelled) {
            if (barcodeData.text && barcodeData.text === 'enterVin') {
              this.enterVinManually();
            }
          }
          else if (barcodeData) {
            let vin = barcodeData.text;
            if (barcodeData.format === 'CODE_39' || (vin != '' && vin.length >= 17)) {
              if (vin.length > 17) {
                vin = vin.substring(1);
              }
              ctx.getDlcLocationByVin(vin);
            }
            else {
              ctx.toolService.wait(10).then(() => {
                ctx.scanVin();
              });
            }
          }
        }, (err) => {
          this.logger.debug(err);
          ctx.toolService.wait(10).then(() => {
            ctx.scanVin();
          });
        });
      } catch (error){
        this.helper.alert(error);
      }
      
    }
    else {
      this.enterVinManually();
    }
  }

  async enterVinManually() {
    this.logger.debug('enterVinManually');
    let modal = await this.modalCtrl.create({
      component: EnterVinPage
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      let reportSession = this.reportService.getReportSession();
      reportSession.dlcModel = data.data;
      this.reportService.saveReportSession(reportSession);
      this.helper.goTo(RoutePath.DlcLocatorDetails);
      // this.getDlcLocationByVin(data.vin);
    }
  }
  cancel(){
    this.helper.goBack();
  }
}
