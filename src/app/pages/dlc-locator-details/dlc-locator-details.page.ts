import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
//import { ImageLoaderConfig } from 'ionic-image-loader';
import { Subscription } from 'rxjs';
import { AppStrings } from 'src/app/configs/app.config';
import { BaseController } from 'src/app/bases/base-controller';
import { DlcLocationModel } from 'src/app/models/app.model';
import { ReportSession } from 'src/app/models/report-session';
import { HelperService } from 'src/app/services/helper.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ReportServiceProvider } from 'src/app/services/report-service/report-service';
import { VehicleLinkingPage } from '../vehicle-linking/vehicle-linking.page';

@Component({
  selector: 'app-dlc-locator-details',
  templateUrl: './dlc-locator-details.page.html',
  styleUrls: ['./dlc-locator-details.page.scss'],
})
export class DlcLocatorDetailsPage extends BaseController implements OnInit {
  watchSub: Subscription;
  locationImageUrl: any;
  connectToolLoadingText = "Searching for device...";
  isRetry = false;
  dlcLocationModel: DlcLocationModel = new DlcLocationModel();;

  isCanceled = false;
  VehicleLinkingPage = VehicleLinkingPage;
  hasDlcInfo = false;
  reportSession: ReportSession = new ReportSession();;
  isLoadingImage = true;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public reportService: ReportServiceProvider,
    private navigationService: NavigationService,
    private helper: HelperService) {
      super('DlcLocatorDetailsPage');
  }
  ngOnInit() {
    //this.image.setFileTransferOptions({ trustAllHosts: true });
  }
  ionViewWillEnter() {
    this.isLoadingImage = true;
  }
  
  async ionViewDidEnter() {
    this.reportSession = this.reportService.getReportSession();
    this.dlcLocationModel = this.reportSession.dlcModel;
    if (this.dlcLocationModel && this.dlcLocationModel.locationNumber && this.dlcLocationModel.locationNumber > 0 && this.dlcLocationModel.locationNumber < 10) {
      this.locationImageUrl = "assets/img/dlc_locator/" + this.dlcLocationModel.locationNumber + ".png";
    } else {
      this.locationImageUrl = "assets/img/dlc_locator/generic.png";
    }
    this.hasDlcInfo = this.reportSession.hasDlc;
    /*
    try {
      this.logger.debug(this.dlcLocationModel.imageFileUrlSmall);
      this.http.get(this.dlcLocationModel.imageFileUrlSmall)
      .catch(error => {
        this.logger.debug(this.dlcLocationModel.imageFileUrlSmall);
        this.dlcLocationModel.imageFileUrlSmall = null;
        this.reportSession.dlcModel.imageFileUrlSmall = null;
        this.reportService.saveReportSession(this.reportSession);
        this.isLoadingImage = false;
        return '';
      });
      setTimeout(() => {
        this.logger.debug(this.dlcLocationModel.imageFileUrlSmall);
        this.isLoadingImage = false;
      }, 5000);
    } catch (error) {
      this.dlcLocationModel.imageFileUrlSmall = null;
      this.reportSession.dlcModel.imageFileUrlSmall = null;
      this.reportService.saveReportSession(this.reportSession);
    }*/
    this.logger.debug(this.hasDlcInfo);
  }

  confirmCancel() {
    let ctx = this;
    this.helper.confirm(
      "Are you sure?",
      AppStrings.CONFIRM,
      () => {
        ctx.cancel(true);
      }
    );
  }

  async cancel(goHome = false) {
    if (goHome) {
      this.isCanceled = true;
      await this.navigationService.goBack();
    }
  }

  async closeClick(){
    await this.navigationService.goBack();
  }
}
