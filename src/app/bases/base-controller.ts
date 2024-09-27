import { AppLogger, AppLoggerService } from '../services/logger';
import { ServiceInjector } from '../modules/service-injector.module';
import { AppState } from '../services/state/app.state';
export class BaseController {
  protected readonly logger: AppLogger;
  protected readonly serviceInjector = ServiceInjector;
  protected readonly name: string;
  public isAndroid: boolean;

  constructor(name: string) {
    this.name = name;// || this.constructor?.name;

    const appLoggerService: AppLoggerService =
    ServiceInjector.get(AppLoggerService);
    this.logger = appLoggerService?.getLogger(this.name);
    this.logger.debug('Enter');
    this.isAndroid = AppState.isOnAndroid;
  }
}
