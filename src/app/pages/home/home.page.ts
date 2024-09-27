import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Network } from '@ionic-native/network/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { RoutePath } from 'src/app/app-routing.module';
import { AppConfig, AppStrings } from 'src/app/configs/app.config';
import { ReportSession } from 'src/app/models/report-session';
import { HelperService } from 'src/app/services/helper.service';
import { AuthServiceProvider } from 'src/app/services/auth-service/auth-service';
import { ToolServiceProvider } from 'src/app/services/tool-service/tool-service';
import { ReportServiceProvider } from 'src/app/services/report-service/report-service';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { BaseController } from 'src/app/bases/base-controller';
import { StorageKeys } from 'src/app/models/app.constant';
import { AppState } from 'src/app/services/state/app.state';
import { User } from 'src/app/models/app.model';
import { UserState } from 'src/app/services/state/user.state';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BaseController implements OnInit {
  watchSub: Subscription;
  homeForm: FormGroup;
  formSubmitted: boolean = false;
  currentUser: User;
  softwareVersion: string;
  firmwareVersion: string;
  isKeyboardShow = false;
  isLoading = false;
  devices: Array<any> = [];
  // Property used to store the callback of the event handler to unsubscribe to it when leaving this page
  public unregisterBackButtonAction: any;
  reportSession: ReportSession;
  isTesting = AppConfig.isDevMode;
  constructor(
    private platform: Platform,
    private authService: AuthServiceProvider,
    private helper: HelperService,
    private formBuilder: FormBuilder,
    private toolService: ToolServiceProvider,
    private reportService: ReportServiceProvider,
    private alertCtrl: AlertController,
    private network: Network,
    private openNativeSettings: OpenNativeSettings,
    private navigationService: NavigationService,
    private diagnostic: Diagnostic,
    private keyboard: Keyboard
  ) {
    super('HomePage');
  }

  ngOnInit() {
    this.homeForm = this.formBuilder.group({
      workOrderNo: ['', Validators.compose([Validators.maxLength(10)])],
      mileage: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(9),
        ]),
      ],
    });
  }

  async ionViewWillEnter() {
    if (!UserState.isAuth) {
      this.navigationService.popToRoot(RoutePath.Login);
      return false;
    }
  }

  async ionViewDidEnter() {
    this.platform.ready().then(async () => {
      this.isLoading = false;
      if (UserState.isAuth) {
        this.reportSession = this.reportService.getReportSession();
        this.softwareVersion = AppState.isOnDevice ? AppState.appVersion : null;
        this.keyboard.onKeyboardWillHide().subscribe(() => {
          this.isKeyboardShow = false;
        });
        this.keyboard.onKeyboardWillShow().subscribe(() => {
          this.isKeyboardShow = true;
        });
        this.currentUser = UserState.user;
        this.firmwareVersion = localStorage.getItem(
          StorageKeys.FIRMWARE_VERSION
        );
        this.helper.checkBluetoothPermissions();
      } else {
        this.authService.logout();
        this.navigationService.popToRoot(RoutePath.Login);
      }
    });
  }
  viewTutorial() {
    this.formSubmitted = false;
    this.navigationService.goTo(RoutePath.Tutorial);
  }

  async doScanVehicle(event) {
    let ctx = this;
    if (ctx.formSubmitted) {
      this.isLoading = true;
      if (AppState.isOnDevice) {
        if (ctx.network.type === 'none') {
          let confirm = ctx.alertCtrl.create({
            header: 'No Internet Connection',
            message:
              'Make sure Wi-Fi or cellular data is turned on, then try again.',
            buttons: [
              {
                text: AppStrings.CANCEL,
                role: 'cancel',
                handler: () => {
                  this.isLoading = false;
                  this.logger.debug('Cancel clicked');
                },
              },
              {
                text: 'Retry',
                handler: () => {
                  this.logger.debug('Retry clicked');
                  ctx.toolService.wait(100).then(() => {
                    ctx.doScanVehicle(null);
                  });
                },
              },
            ],
          });
          await (await confirm).present();
        } else {
          this.reportSession.workOrderNumber = this.homeForm.value.workOrderNo;
          this.reportSession.mileage = this.homeForm.value.mileage;
          this.reportService.saveReportSession(this.reportSession);
          ctx.formSubmitted = false;
          this.logger.debug(
            'Work Order Number:',
            this.reportSession.workOrderNumber
          );
          this.logger.debug('Mileage:', this.reportSession.mileage);
          // Check Bluetooth Permission
          let isBtEnabled = await this.helper.checkBluetoothPermissions();
          if(!isBtEnabled){
            if(AppState.isOnAndroid && !AppState.isOnAtLeastVersion(13)){
              this.helper.confirm('In order to detect and pair to your scan tool, please turn Bluetooth ON.', 'Bluetooth is turned OFF', async () =>{
                isBtEnabled = await this.diagnostic.setBluetoothState(true);
                this.logger.debug('Is BT Enabled', isBtEnabled);
                if(isBtEnabled){
                  setTimeout(() => {
                    this.navigationService
                      .goTo(RoutePath.VehicleLinking)
                      .then(() => {
                        ctx.isLoading = false;
                        ctx.homeForm.reset();
                      });
                  }, 1_500);
                } else {
                  this.helper.goBack();
                }
              }, () => {
                this.helper.goBack();
              }, 'Turn Bluetooth ON', 'Cancel');
            } else {
              this.helper.confirm('In order to detect and pair to your scan tool, turn Bluetooth ON from your device’s settings.', 'Bluetooth is turned OFF', async () =>{
                this.isLoading = false;
                if(AppState.isOnAndroid){
                  this.diagnostic.switchToBluetoothSettings();
                } else {
                  this.openNativeSettings.open('settings').catch((ex) => {
                    this.logger?.info('openSettings>openNativeSettings>Error', ex);
                  });
                }
              }, () => {
                this.helper.goBack();
              }, 'Go to settings', 'Cancel');
            }
          } else {
            setTimeout(() => {
              this.navigationService
                .goTo(RoutePath.VehicleLinking)
                .then(() => {
                  ctx.isLoading = false;
                  ctx.homeForm.reset();
                });
            }, 500);
          }
        }
      }
    }
  }

  doLogout() {
    this.helper.confirm(
      AppStrings.MSG_CONFIRM_LOGOUT,
      AppStrings.CONFIRM,
      () => {
        this.authService.logout();
        localStorage.removeItem(StorageKeys.USER_ID);
        localStorage.removeItem(StorageKeys.ACCESS_KEY);
        localStorage.removeItem(StorageKeys.USER_INFO);
        localStorage.removeItem(StorageKeys.USER_SETTINGS);
        localStorage.removeItem(StorageKeys.REPORT_SESSION);
        this.helper.popToRoot(RoutePath.Login);
      }
    );
  }

  ionViewWillLeave() {
    // Unregister the custom back button action for this page
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }
  viewPastReports() {
    this.formSubmitted = false;
    this.navigationService.goTo(RoutePath.ReportHistory);
  }

  async viewLogs() {
    this.formSubmitted = false;
    this.navigationService.goTo(RoutePath.ViewLogs);
  }

  lookupDlc() {
    this.formSubmitted = false;
    this.navigationService.goTo(RoutePath.DlcLocator);
  }

  changeToolName() {
    this.formSubmitted = false;
    this.navigationService.goTo(RoutePath.ChangeToolName);
  }
}
