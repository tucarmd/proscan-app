import { Component, OnInit } from '@angular/core';
import { ReportSession } from 'src/app/models/report-session';
import { HelperService } from 'src/app/services/helper.service';
import { ReportServiceProvider } from 'src/app/services/report-service/report-service';
import { VehicleServiceProvider } from 'src/app/services/vehicle-service/vehicle-service';
import { ActivatedRoute } from '@angular/router';
import { RoutePath } from 'src/app/app-routing.module';
import { NavigationService } from 'src/app/services/navigation.service';
import { BaseController } from 'src/app/bases/base-controller';
import { AppState } from 'src/app/services/state/app.state';
@Component({
  selector: 'app-connection-failed',
  templateUrl: './connection-failed.page.html',
  styleUrls: ['./connection-failed.page.scss'],
})
export class ConnectionFailedPage extends BaseController implements OnInit {
  locationImageUrl: any;
  isRetry = false;
  isCanceled = false;
  Mileage = 0;
  WorkOrderNumber = '';
  hasDlcInfo = false;
  deviceId = '';
  toolName = '';
  reportSession: ReportSession;
  sourcePage: string;
  public unregisterBackButtonAction: any;

  constructor(
    private navigationService: NavigationService,
    private reportService: ReportServiceProvider,
    private vehicleService: VehicleServiceProvider,
    private helper: HelperService,
    private route: ActivatedRoute
  ) {
    super('ConnectionFailedPage');
  }
  ionViewWillEnter() {
    this.deviceId = this.route.snapshot.queryParamMap.get('deviceId');
    this.toolName = this.route.snapshot.queryParamMap.get('toolName');
    this.sourcePage = this.route.snapshot.queryParamMap.get('sourcePage');
  }

  ngOnInit() {}
  ionViewDidEnter() {
    this.reportSession = this.reportService.getReportSession();
  }

  ionViewWillLeave() {
    // Unregister the custom back button action for this page
    this.navigationService.restoreHardwareBack();
  }

  // public initializeBackButtonCustomHandler(): void {
  //   this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
  //     this.customHandleBackButton();
  //   }, 10);
  // }

  // private customHandleBackButton(): void {
  //   this.goHome();
  // }

  tryAgain() {
    console.log('tryAgain click');
    this.navigationService.goTo(
      this.sourcePage ? this.sourcePage : RoutePath.VehicleLinking,
      { queryParams: { deviceId: this.deviceId, toolName: this.toolName } }
    );
  }

  locateDlc() {
    let ctx = this;
    if (ctx.reportSession.hasDlc) {
      this.navigationService.goTo(RoutePath.DlcLocatorDetails);
    } else {
      if (this.reportSession.vin && this.reportSession.vin.length === 17) {
        ctx.helper.showLoading();
        ctx.vehicleService
          .getDlcLocationByVin(this.reportSession.vin)
          .then((result) => {
            ctx.helper.hideLoading();
            this.reportSession.hasDlc = true;
            this.reportSession.dlcModel = result.data;
            this.reportService.saveReportSession(this.reportSession);
            this.navigationService.goTo(RoutePath.DlcLocatorDetails);
          })
          .catch((err) => {
            ctx.helper.hideLoading();
            this.reportSession.hasDlc = false;
            this.reportService.saveReportSession(this.reportSession);
            this.navigationService.goTo(RoutePath.DlcLocatorDetails);
          });
      } else {
        this.navigationService.goTo(RoutePath.DlcLocator);
      }
    }
  }

  goHome() {
    this.reportService.deleteReportSession();
    this.helper.popToRoot(RoutePath.Home);
  }
}
