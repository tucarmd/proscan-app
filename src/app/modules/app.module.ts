import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';
import { Device } from '@ionic-native/device/ngx';
import {
  HeaderInterceptor,
  httpInterceptorProviders,
} from '../api/http-interceptor';
import { AuthServiceProvider } from '../services/auth-service/auth-service';
import { ApiRestService } from '../services/api-rest.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HelperService } from '../services/helper.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';
import { BLE } from '@ionic-native/ble/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { GlobalValidator } from '../global-validators';
import { VehicleServiceProvider } from '../services/vehicle-service/vehicle-service';
import { ToolServiceProvider } from '../services/tool-service/tool-service';
import { ReportServiceProvider } from '../services/report-service/report-service';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { NgxPaginationModule } from 'ngx-pagination';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NavigationService } from '../services/navigation.service';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Storage } from '@ionic/storage-angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { File } from '@ionic-native/file/ngx';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ReactiveFormsModule } from '@angular/forms';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { ServiceInjectorModule } from './service-injector.module';
import { AppVersion } from '@ionic-native/app-version/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      scrollAssist: true,
      swipeBackEnabled: false,
      hardwareBackButton: false,
      _forceStatusbarPadding: true,
    }),
    IonicStorageModule.forRoot({
      name: 'com.carmd.proscan2',
      driverOrder: ['indexeddb', 'sqlite', 'websql', 'localstorage'],
    }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicImageLoaderModule,
    ServiceInjectorModule,
    NgxPaginationModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ...httpInterceptorProviders,
    BLE,
    File,
    Device,
    AuthServiceProvider,
    ApiRestService,
    HelperService,
    StatusBar,
    SplashScreen,
    Network,
    NavParams,
    Storage,
    GlobalValidator,
    AuthServiceProvider,
    VehicleServiceProvider,
    ToolServiceProvider,
    NavigationService,
    BarcodeScanner,
    BluetoothSerial,
    ReportServiceProvider,
    Insomnia,
    SQLite,
    WebView,
    SQLitePorter,
    Keyboard,
    Diagnostic,
    OpenNativeSettings,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
    EmailComposer,
    AppVersion
  ],
  bootstrap: [AppComponent],
  exports: [ServiceInjectorModule],
})
export class AppModule {}
