# InnovaDeviceProvider

_Version: 1.0.0_
_Author: Truyen Nguyen_
_Updated: 24 Jul, 2018_

## 1. Requirements

- NPM

- Ionic (version 3)

- Ionic Native BLE

## 2. Install

1. Copy innova-device folder to providers folder of Ionic 3 project.

2. Install Ionic Native BLE Plugin:

    - Reference:
        https://ionicframework.com/docs/native/ble/

        https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module

    - Command:
        ```
        ionic cordova plugin add cordova-plugin-ble-central --variable BLUETOOTH_USAGE_DESCRIPTION="Your description here"
        ```
        ```
        npm install --save @ionic-native/ble
        ```
3. Add providers to app’s NgModule (app.module.ts):
    - Import:
        ```
        import {BLE} from "@ionic-native/ble";
        import {UuidV4} from "../providers/innova-device/uuid-v4";
        import {InnovaDeviceHelper} from "../providers/innova-device/innova-device-helper";
        import {InnovaLogger} from "../providers/innova-device/innova-logger";
        import {InnovaDeviceProvider} from '../providers/innova-device/innova-device';
        import {DongleDeviceProvider} from '../providers/innova-device/dongle-device';
        ```
    - Add to providers of @NgModule:
        ```
        BLE,
        UuidV4,
        InnovaDeviceHelper,
        InnovaLogger,
        InnovaDeviceProvider,
        DongleDeviceProvider
        ```
    The updated app.module.ts looks like:
        ```
        import { BrowserModule } from '@angular/platform-browser';
        import { ErrorHandler, NgModule } from '@angular/core';
        import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
        import { SplashScreen } from '@ionic-native/splash-screen';
        import { StatusBar } from '@ionic-native/status-bar';

        import {BLE} from "@ionic-native/ble";
        import {UuidV4} from "../providers/innova-device/uuid-v4";
        import {InnovaDeviceHelper} from "../providers/innova-device/innova-device-helper";
        import {InnovaLogger} from "../providers/innova-device/innova-logger";
        import {InnovaDeviceProvider} from '../providers/innova-device/innova-device';
        import {DongleDeviceProvider} from '../providers/innova-device/dongle-device';

        import { MyApp } from './app.component';
        import { HomePage } from '../pages/home/home';

        @NgModule({
          declarations: [
            MyApp,
            HomePage
          ],
          imports: [
            BrowserModule,
            IonicModule.forRoot(MyApp)
          ],
          bootstrap: [IonicApp],
          entryComponents: [
            MyApp,
            HomePage
          ],
          providers: [
            StatusBar,
            SplashScreen,
            {provide: ErrorHandler, useClass: IonicErrorHandler},
            BLE,
            UuidV4,
            InnovaDeviceHelper,
            InnovaLogger,
            InnovaDeviceProvider,
            DongleDeviceProvider
          ]
        })
        export class AppModule {}

        ```
## 3. Using

### 3.1. DongleB

Inject DongleDeviceProvider into Page Component and using it.