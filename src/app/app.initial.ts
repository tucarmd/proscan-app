import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AppComponent } from "./app.component";
import { AppConfig } from "./configs/app.config";
import { AuthServiceProvider } from "./services/auth-service/auth-service";
import { AppLogger, AppLoggerService } from "./services/logger";
import { AppState } from "./services/state/app.state";
import { UserState } from "./services/state/user.state";
import { install } from 'resize-observer';
import { DatabaseService } from "./services/database.service";
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root',
})
export class AppInitial {
  private isInitialled = false;
  private logger: AppLogger;
  constructor(
    appLoggerService: AppLoggerService,
    private auth: AuthServiceProvider,
    private storage: Storage,
    private databaseService: DatabaseService
  ) {
    this.logger = appLoggerService.getLogger('AppInitial');
  }

  fixIssueResizeObserverIos13() {
    /* Issue: Unhandled Runtime Error ReferenceError: Can't find variable: ResizeObserver on Safari #27
     * https://github.com/nerdyman/react-compare-slider/issues/27
     *
     * Jira RVD issue: [S10] Can't return value of  live data on Dashboard (iPad)
     * https://iectech.atlassian.net/jira/software/projects/RVD/boards/126?selectedIssue=RVD-404
     */
    if (typeof window !== 'undefined') {
      install();
    }
  }
  async run(context: AppComponent) {
    this.logger?.info('ENVIRONMENT', environment);
    //Should run in static?
    if (this.isInitialled) {
      return;
    }
    await AppState.init();
    this.fixIssueResizeObserverIos13();

    //#region Storage
    await this.storage.create();
    //#endregion Storage

    if(AppState.isOnDevice){
      this.databaseService.createDB();
    }
    
    //#region User
    await this.auth.init();
    UserState.init();
    this.logger.info('AuthService was initialled successfully');
    //#endregion User

    this.isInitialled = true;
    this.logger.info('AppInitial was run successfully');
  }
}
