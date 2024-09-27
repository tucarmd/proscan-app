import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AppConfig } from './configs/app.config';
import { HelperService } from './services/helper.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { DatabaseService } from './services/database.service';
import { Device } from '@ionic-native/device/ngx';
import { AppState } from './services/state/app.state';
import { AppLogger, AppLoggerService } from './services/logger';
import { Storage } from '@ionic/storage-angular';
import { NavigationService } from './services/navigation.service';
import { RoutePath } from './app-routing.module';
import { AppInitial } from './app.initial';
import { CarMDUtils } from './services/utility/carmd.utils';
import { UserState } from './services/state/user.state';
import { AuthServiceProvider } from './services/auth-service/auth-service';
import { StorageKeys } from './models/app.constant';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  logger: AppLogger;
  #defaultUrl: string;
  constructor(
    private loggerService: AppLoggerService,
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private appInitial: AppInitial,
    private nav: NavigationService,
    private helper: HelperService,
    private authService: AuthServiceProvider
  ) {
    /* Begin trick for live reload mode*/
    this.#defaultUrl = window.location.pathname;
    setTimeout(() => {
      if (this.#isLiveReloadMode()) {
        this.nav.goTo(RoutePath.Login);
      }
    }, 50);
    /* End trick for live reload mode*/

    this.platform.ready().then(async () => {
      try {
        this.logger = this.loggerService.getLogger('AppComponent');
        this.logger.info(
          'isDevMode:',
          AppConfig.isDevMode,
          'isLiveReloadMode:',
          this.#isLiveReloadMode(),
          'defaultUrl:',
          this.#defaultUrl
        );
        await this.appInitial.run(this);
        if (this.#isLiveReloadMode()) {
          this.logger.info('Ready for live reload => Go to', this.#defaultUrl);
          await this.nav.popToRoot(this.#defaultUrl);
        }
        //#region Check First Install
        this.logger.info('IsFirstInstall', this.#isFirstInstall());
        //#endregion Check First Install
        CarMDUtils.sleep(200);
        if (!UserState.isAuth) {
          await this.nav.popToRoot(RoutePath.Login);
        } else {
          if (AppState.isOnDevice) {
            if (!this.#isLiveReloadMode()) {
              await this.nav.popToRoot(RoutePath.Home);
            }
            await CarMDUtils.sleep(200);
            this.#hideSplashScreen();
          } //else: don't redirect when run ionic serve
        }

        if (AppState.isOnDevice) {
          if (AppState.isOnAndroid) {
            if (AppState.isOnPixel) {
              this.statusBar.overlaysWebView(true);
              this.statusBar.styleDefault();
            } else {
              this.statusBar.styleLightContent();
            }
          } else {
            this.statusBar.overlaysWebView(false);
            this.statusBar.styleDefault();
          }
          this.#hideSplashScreen();
        }

        if (!UserState.isAuth) {
          return;
        }
        this.logger.info('BEGIN CHECK TOKEN');
        const isValidToken = await this.authService.checkToken();
        if (!isValidToken) {
          this.logger.info('TOKEN INVALID => Session has expired');
          await this.helper.alert(
            'Your session has expired, please login again.'
          );

          await this.authService.logout();
          this.nav.popToRoot(RoutePath.Login);
        } else {
          await this.nav.popToRoot(RoutePath.Home);
        }
      } catch (error) {
        this.logger.debug('AppComponent>Error', error);
      } finally {
        this.logger.debug('AppComponent>finally');
      }
    });
  }

  #isFirstInstall() {
    const version = localStorage.getItem(StorageKeys.CURRENT_APP_VERSION);
    if (version === AppState.appVersion) {
      return false;
    }
    this.authService.clearCacheReports();
    localStorage.setItem(StorageKeys.CURRENT_APP_VERSION, AppState.appVersion);
    return true;
  }

  async #hideSplashScreen() {
    await CarMDUtils.sleep(500);
    this.splashScreen.hide();
  }

  #isLiveReloadMode() {
    return (
      AppConfig.isDevMode &&
      this.#defaultUrl !== undefined &&
      this.#defaultUrl != null &&
      this.#defaultUrl !== '/' &&
      this.#defaultUrl !== '/index.html'
    );
  }
}
