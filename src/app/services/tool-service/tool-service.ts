import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/configs/app.config';

declare var cordova: any;

@Injectable()
export class ToolServiceProvider {
  public connectedDevice: any;
  readingTimeout = 60000;

  constructor() {
  }

  setConnectedDevice(device) {
    this.connectedDevice = device;
  }

  getConnectedDevice() {
    return this.connectedDevice;
  }

  clearConnectedDevice() {
    this.connectedDevice = null;
  }

  public isStartsWithToolName(toolName: string): boolean {
    return toolName.startsWith("BM1021")
      || toolName.startsWith("STVCI-826E")
      || toolName.startsWith("ScanTool");
  }

  public isEqualToolName(toolName: string): boolean {
    return toolName === "BM1021"
      || toolName === "STVCI-826ELE";
  }

  public wait(ms) {
    return new Promise<any>(function (resolve, reject) {
      setTimeout(resolve, ms);
    });
  }


  public checkFirmwareUpdates(): Promise<any> {
    let url = "http://dev.publicws.innova.com/UpdateServiceRest.svc/GetFirmwareUpdateByUsbProductIdXml?UsbProductid=660&firmwareV=17.07.03&BootLoaderV=01.01.03&DatabaseV=17.05.02";
    let ctx = this;
    let process = new Promise<any>(function (resolve, reject) {
      this.http.post(url)
        .map(res => res.json())
        .subscribe(
          res => {
            resolve(res);
          },
          err => {
            console.log(err);
            reject(err);
          },
          () => {

          }
        )
    });

    return ctx.promiseTimeout(ctx.readingTimeout, process);
  }

  private promiseTimeout(ms, promise): Promise<any> {
    let id;
    let timeout = new Promise((resolve, reject) => {
      id = setTimeout(() => {
        reject('Timed out')
      }, ms);
    });

    return Promise.race([
      promise,
      timeout
    ])
      .then((result) => {
        clearTimeout(id);
        return new Promise((resolve) => {
          resolve(result);
        });
      })
      .catch((error) => {
        clearTimeout(id);
        return new Promise((resolve, reject) => {
          reject(error);
        });
      });
  }
}
