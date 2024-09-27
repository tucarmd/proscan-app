import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AppConfig } from 'src/app/configs/app.config';
import { HelperService } from 'src/app/services/helper.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Device } from '@ionic-native/device/ngx';
import { File } from '@ionic-native/file/ngx';
import { BaseController } from 'src/app/bases/base-controller';
import { AppLoggerService } from 'src/app/services/logger';
import { LoggerConfig } from 'src/app/configs/logger.config';
import { AppState } from 'src/app/services/state/app.state';
import { RoutePath } from 'src/app/app-routing.module';
@Component({
  selector: 'app-view-logs',
  templateUrl: './view-logs.page.html',
  styleUrls: ['./view-logs.page.scss'],
})
export class ViewLogsPage extends BaseController implements OnInit {
  logs: any;
  textLogs: any;
  downloadLink: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public file: File,
    public helper: HelperService,
    public emailComposer: EmailComposer,
    private appLoggerService: AppLoggerService,
    private device: Device
  ) {
    super('ViewLogsPage');
  }

  ngOnInit() {}

  ionViewWillEnter() {
  }

  ionViewDidEnter() {
    this.downloadLink = null;
    if (AppState.isOnDevice) {
      let logs = this.appLoggerService
        .getLogMessages()
        .filter(
          (e) => e.logger === LoggerConfig.bundleId
          //e.timeStamp > CheckUpdateViewController.#startLogTime
        )
        .map((e) =>
          [
            new Date(e.timeStamp).toISOString(),
            e.level,
            e.methodName,
            e.message,
          ].join(' ')
        )
        .join('\n');
      this.textLogs = logs;
      logs = logs.replace(/</g, '&lt;');
      logs = logs.replace(/</g, '&gt;');
      logs = logs.replace(/\n/g, '<br/>');

      this.logs = logs;
    }
  }

  close() {
    this.helper.popToRoot(RoutePath.Home);
  }

  clear() {
    if (this.textLogs) {
      this.helper.confirm(
        'Are you sure to clear all logs?',
        'Clear Logs',
        () => {
          this.appLoggerService.removeLogMessages();
          this.logs = '';
          this.textLogs = '';
          this.downloadLink = null;
          this.helper.alert('Log file has been cleared successfully!');
        },
        () => {}
      );
    } else {
      this.helper.alert('No logs file available.');
    }
  }

  download() {
    if (this.textLogs) {
      const filename = 'TestDrive-Log-Tool-' + new Date().getTime() + '.txt';
      const logContent = this.textLogs;
      try {
        this.file
          .writeFile(this.file.cacheDirectory, filename, logContent)
          .then(async (data) => {
            await this.onSuccess(data);
          })
          .catch((error) => {
            this.onErr(error);
          });
      } catch (error) {
        this.helper.alert(error);
      }
    } else {
      this.helper.alert('No logs file available.');
    }
  }

  async onSuccess(resp) {
    try {
      const deviceInfo =
        'DEVICE INFO: ' +
        '\r\n<br />- Cordova version: ' +
        this.device.cordova +
        '\r\n<br />- Model : ' +
        this.device.model +
        '\r\n<br />- Platform: ' +
        this.device.platform +
        '\r\n<br />- Version: ' +
        this.device.version +
        '\r\n<br />- Manufacturer: ' +
        this.device.manufacturer +
        '\r\n<br />- Serial: ' +
        this.device.serial;
      const email = {
        to: AppConfig.LOGGER_EMAIL,
        cc: AppConfig.LOGGER_CC_EMAIL,
        attachments: ['base64:ProScan_2_Log.txt//' + btoa(this.textLogs)],
        subject: 'ProScan 2.0 Logs ' + new Date().toISOString(),
        body: deviceInfo,
        isHtml: true,
      };

      // Send a text message using default options

      try {
        this.emailComposer.isAvailable().then((available: boolean) => {
          this.logger.debug(resp.nativeURL);
          this.logger.debug(available);
          if (available) {
            this.emailComposer.open(email).catch((error) => {
              this.logger.debug(error);
            });
          } else {
            this.helper.alert('Unable to send mail.');
          }
        });
      } catch (error) {
        this.logger.debug(error);
      }
    } catch (err) {
      this.onErr(err);
    }
  }
  onErr(resp) {
    this.logger.debug(resp);
    this.helper.alert('Cannot connect to server. Please try again.');
  }

  showDownloadPopup() {
    if (this.downloadLink) {
      this.helper.prompt(
        'Please copy this url and open on your device, it will expired after access.',
        'Download Logs File',
        [{ name: 'url', value: this.downloadLink }]
      );
    } else {
      this.download();
    }
  }
}
