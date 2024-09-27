import { LoggingServiceConfiguration } from 'ionic-logging-service';
import { AppConstants } from '../models/app.constant';

export class LoggerConfig {
  public static enabled = true;
  public static readonly enabledConsole = false;
  public static readonly bundleId = AppConstants.appBundleId;
  public static readonly defaultTagName = 'General';
  public static readonly configuration: LoggingServiceConfiguration = {
    logLevels: [
      {
        loggerName: LoggerConfig.bundleId,
        logLevel: 'ALL',
      },
    ],
    memoryAppender: {
      maxMessages: 8_000,
      threshold: 'ALL'
    },
    // localStorageAppender: {
    //   localStorageKey: AppConstants.loggerLocalStorageKey,
    //   maxMessages: 8_000,
    //   threshold: 'ALL'
    // }
  };
  static get enableLogger() {
    return LoggerConfig.enabled;
  }
  static set enableLogger(value) {
    LoggerConfig.enabled = value;
  }
}
