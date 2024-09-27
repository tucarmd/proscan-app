import { Injectable } from '@angular/core';
declare var cordova: any;

@Injectable()
export class AppData {
    private static isEnableLogger: boolean;
    static isConnected: boolean = true;

    static get IsEnableLogger() {
        return AppData.isEnableLogger;
    }

    static set IsEnableLogger(value: boolean) {
        AppData.isEnableLogger = value;
    }

    static get IsEnableConsole() {
        return !this.isEnableLogger;
    }

    static get UseSaeUnit() {
        return true;
    }

    static get IsLiveDev() {
        return window.location.href.indexOf(':') > 0;
    }
}
