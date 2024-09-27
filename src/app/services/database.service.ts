import { ItemSupportedModules } from '../models/app.model';
import { EnumAppDataKey } from 'src/app/models/app.enum';
import { AppData } from 'src/app/models/app.data';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {
  ReportItem,
  SettingData,
  CacheData,
  LiveDataReportItem,
  Report,
} from '../models/app.model';
import { NewLiveDataRecordEntry } from './innova-tool-models';
import { CustomerInfo } from './api.models';
import _ from 'lodash';
import { AppLogger, AppLoggerService } from './logger';
import { AppConstants } from '../models/app.constant';


@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  reports = new BehaviorSubject([]);
  liveDataReports = new BehaviorSubject([]);
  settingData = new BehaviorSubject<any[]>([]);
  isDbReady = new BehaviorSubject(false);
  cacheData = new BehaviorSubject<CacheData[]>([]);
  private storage: SQLiteObject;
  private logger: AppLogger;

  constructor(
    private sqlite: SQLite,
    appLoggerService: AppLoggerService
  ) {
    this.logger = appLoggerService.getLogger(this.constructor.name);
  }
  createDB() {
    this.sqlite
      .create({
        name: AppConstants.databaseFileName,
        location: 'default',
      })
      .then(async (db: SQLiteObject) => {
        this.storage = db;
      }).catch(err => {
        this.logger.error('Err Create DB', err);
      })
  }
  public get dbState(): boolean {
    return this.isDbReady.value;
  }
  fetchReports(): Observable<ReportItem[]> {
    return this.reports.asObservable();
  }

  fetchLiveDataReports(): Observable<LiveDataReportItem[]> {
    return this.liveDataReports.asObservable();
  }

  fetchSettingData(): Observable<SettingData[]> {
    return this.settingData.asObservable();
  }

  fetchCacheData(): Observable<CacheData[]> {
    return this.cacheData.asObservable();
  }

  // Get list
  getSQLReports(customerName = '', vehicle = '', phone = '', email = '', orderBy = null, sort = null) {
    orderBy = orderBy || 'id';
    sort = sort || 'DESC';
    let sql = 'SELECT id, reportId, reportNumber, customerName, vehicle, phone, email, scanningType, isSentReport, createdAt, dtcs FROM reports ';
    let sqlWhere = 'WHERE';
    sqlWhere += customerName
      ? " customerName LIKE '%" + customerName + "%' "
      : '';
    if (sqlWhere !== 'WHERE' && vehicle) {
      sqlWhere += 'AND';
    }
    sqlWhere += vehicle ? " vehicle LIKE '%" + vehicle + "%' " : '';
    if (sqlWhere !== 'WHERE' && phone) {
      sqlWhere += 'AND';
    }
    sqlWhere += phone ? " phone LIKE '%" + phone + "%' " : '';
    if (sqlWhere !== 'WHERE' && email) {
      sqlWhere += 'AND';
    }
    sqlWhere += email ? " email LIKE '%" + email + "%' " : '';
    sql += sqlWhere !== 'WHERE' ? sqlWhere : '';
    sql += ' ORDER BY ' + orderBy + ' ' + sort;
    return sql;
  }

  getReports(customerName = '', vehicle = '', phone = '', email = '', orderBy = null, sort = null) {
    let sql = this.getSQLReports(
      customerName,
      vehicle,
      phone,
      email,
      orderBy,
      sort
    );
    return this.storage
      .executeSql(sql, [])
      .then(async (res) => {
        let items: ReportItem[] = [];
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            let reportHistoryItem = new ReportItem();
            reportHistoryItem.id = res.rows.item(i).id;
            reportHistoryItem.reportId = res.rows.item(i).reportId;
            reportHistoryItem.reportNumber = res.rows.item(i).reportNumber;
            reportHistoryItem.createdAt = res.rows.item(i).createdAt;
            reportHistoryItem.customerName = res.rows.item(i).customerName;
            reportHistoryItem.vehicle = res.rows.item(i).vehicle;
            reportHistoryItem.dtcs = res.rows.item(i).dtcs;
            reportHistoryItem.phone = res.rows.item(i).phone;
            reportHistoryItem.email = res.rows.item(i).email;
            reportHistoryItem.isSentReport = res.rows.item(i).isSentReport ? res.rows.item(i).isSentReport : 0;
            reportHistoryItem.scanningType = res.rows.item(i).scanningType;
            items.push(reportHistoryItem);
          }
        }
        this.reports.next(items);
      })
      .catch((error) => console.error('getReports', error));
  }

  // Add
  async addReport(reportDetails: Report, totalDtc?) {
    if (!reportDetails) {
      return;
    }
    let data = [
      reportDetails.reportId,
      reportDetails.reportNumber,
      reportDetails.createdAt,
      reportDetails.vehicle ? reportDetails.vehicle.nickName : reportDetails.vin,
      totalDtc || reportDetails.totalDtc,
      reportDetails.scanningType,
      reportDetails ? JSON.stringify(reportDetails) : '',
    ];
    return await this.storage
      .executeSql(
        'INSERT INTO reports (reportId, reportNumber, createdAt, vehicle, dtcs, scanningType, reportDetails ) VALUES (?, ?, ?, ?, ?, ?, ?)',
        data
      )
      .then(async (res) => {
        await AppData.set(EnumAppDataKey.ReportId, res && res.insertId ? res.insertId : '');
        await this.getReports();
      }).catch(err => {
        this.logger.error('Err when addReport sql', err);
      });
  }

  // Get report details
  async getReport(id): Promise<Report> {
    try {
      let res = await this.storage
        .executeSql('SELECT * FROM reports WHERE id = ?', [id]);
      if (res && res.rows) {
        if (res.rows.item(0).reportDetails) {
          let report = JSON.parse(
            res.rows.item(0).reportDetails
          ) as Report;
          report.id = res.rows.item(0).id;
          if (_.isNumber(res.rows.item(0).reportNumber)) {
            report.reportNumber = res.rows.item(0).reportNumber;
          }
          let newReport = new Report(report);
          return newReport;
        }
      }
    } catch (err) {
      return null;
    }
  }

  // Update
  updateEmailSent(id, isSentReport) {
    return this.storage
      .executeSql(
        `UPDATE reports SET isSentReport = ? WHERE id = ${id}`, [isSentReport]
      ).then((a) => {
        this.logger.debug('updateEmailSent Updated', a);
        this.getReports();
      }).catch(e => {
        this.logger.error('error ' + JSON.stringify(e));
      });
  }
  updateReportNumber(id, reportNumber) {
    return this.storage
      .executeSql(
        `UPDATE reports SET reportNumber = ? WHERE id = ${id}`, [reportNumber]
      ).then((a) => {
        this.logger.debug('reportNumber Updated', a);
        this.getReports();
      }).catch(e => {
        this.logger.error('error ' + JSON.stringify(e));
      });
  }

  updateCustomerInfo(id, customerInfo: CustomerInfo, reportDetails: Report) {
    let data = [customerInfo.firstName + ' ' + customerInfo.lastName, customerInfo.phone,
    customerInfo.email, reportDetails ? JSON.stringify(reportDetails) : ''];
    return this.storage
      .executeSql(
        `UPDATE reports SET customerName = ?, phone = ?, email = ?, reportDetails = ? WHERE id = ${id}`,
        data
      )
      .then(() => {
        this.getReports();
      }).catch(err => {
        this.logger.error('Err when update customer info:', err);
      });
  }

  async updateReportDetails(id, report: Report) {
    let data = [report ? JSON.stringify(report) : ''];
    this.storage
      .executeSql(
        `UPDATE reports SET reportDetails = ? WHERE id = ${id}`,
        data
      ).then(() => {
        // update reportId, reportNumber after sync
        let dataUpdate = [report ? report.reportId : id, report.reportNumber];
        this.logger.debug('data report Update:', dataUpdate);
        return this.storage
          .executeSql(
            `UPDATE reports SET reportId = ?, reportNumber = ? WHERE id = ${id}`,
            dataUpdate
          )
          .then(() => {
            this.getReports();
          });
      }).catch((err => {
        this.logger.error(`Error updateReportDetails id: ${id}`, err);
      }));
  }

  // Delete
  deleteReport(id) {
    return this.storage
      .executeSql('DELETE FROM reports WHERE id = ?', [id])
      .then(() => {
        // this.getReports();
      });
  }

  // Live data reports START
  async getLiveDataItemDetail(id): Promise<NewLiveDataRecordEntry> {
    let res = await this.storage
      .executeSql('SELECT * FROM liveDataReports WHERE id = ?', [id]);
    if (res.rows.item(0).reportDetails) {
      return JSON.parse(
        res.rows.item(0).reportDetails
      ) as NewLiveDataRecordEntry;
    }
    return null;
  }
  // Get list live data reports
  getLiveDataReports() {
    return this.storage
      .executeSql('SELECT * FROM liveDataReports ORDER BY id DESC', [])
      .then((res) => {
        let items: LiveDataReportItem[] = [];
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            let reportLiveDataReports = new LiveDataReportItem();
            reportLiveDataReports.id = res.rows.item(i).id;
            reportLiveDataReports.createdAt = res.rows.item(i).createdAt;
            reportLiveDataReports.vehicle = res.rows.item(i).vehicle;
            items.push(reportLiveDataReports);
          }
        }
        this.liveDataReports.next(items);
      })
      .catch((error) => console.error('Get live -data-reports', error));
  }

  // Add list live data reports
  addLiveDataReports(vehicle, reportDetails) {
    let data = [new Date().getTime(), vehicle, reportDetails ? JSON.stringify(reportDetails) : ''];
    return this.storage
      .executeSql(
        'INSERT INTO liveDataReports (createdAt, vehicle, reportDetails) VALUES (?, ?, ?)',
        data
      )
      .then(() => {
        this.getLiveDataReports();
      })
      .catch((error) => console.error('addLiveDataReports', error));
  }
  //Get live report detail.

  // Update list live data reports
  // Delete list live data reports
  deleteLiveDataReports(id) {
    return this.storage
      .executeSql('DELETE FROM liveDataReports WHERE id = ?', [id])
      .then((_) => {
        this.getLiveDataReports();
      });
  }
  //Live data reports END

  //Setting data START

  //Get Setting data
  getSettingData() {
    return this.storage
      .executeSql('SELECT * FROM settingsData', [])
      .then((res) => {
        let items: SettingData[] = [];
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            let settingData = new SettingData();
            settingData.id = res.rows.item(i).id;
            settingData.tokenKey = res.rows.item(i).tokenKey;
            //settingData.userInfo  = res.rows.item(i).userInfo ;
            settingData.lastLogInTime = res.rows.item(i).lastLogInTime;
            settingData.usbProductId = res.rows.item(i).usbProductId;
            //settingData.scanSetting  = res.rows.item(i).scanSetting ;
            settingData.retailer = res.rows.item(i).retailer;
            settingData.scanningType = res.rows.item(i).scanningType;
            settingData.driveCycles = res.rows.item(i).driveCycles;
            settingData.formatDate = res.rows.item(i).formatDate;
            settingData.formatTime = res.rows.item(i).formatTime;
            settingData.emailSupport = res.rows.item(i).emailSupport;
            settingData.recentVINScanned = res.rows.item(i).recentVINScanned;
            settingData.recentMileage = res.rows.item(i).recentMileage;
            settingData.agreePolicies = res.rows.item(i).agreePolicies;
            settingData.skipToolUpdatingAt = res.rows.item(
              i
            ).skipToolUpdatingAt;
            settingData.firstDateOff = res.rows.item(i).firstDateOff;
            settingData.vCIResponse = res.rows.item(i).vCIResponse;
            settingData.supportedModulesData = res.rows.item(
              i
            ).supportedModulesData;
            settingData.appRegional = res.rows.item(i).appRegional;
            settingData.appLanguage = res.rows.item(i).appLanguage;
            settingData.recentVins = res.rows.item(i).recentVins; // save 5 Vins
            items.push(settingData);
          }
        }
        this.settingData.next(items);
      })
      .catch((error) => console.error('get Setting Data', error));
  }


  getItemSettting(item) {
    let id = this.settingData.value ? this.settingData.value[0] && this.settingData.value[0].id : 1
    return this.storage
      .executeSql(`SELECT ${item} FROM settingsData WHERE id = ?`, [id])
      .then((res) => {
        if (res.rows.length > 0) {
          return res.rows.item(0)[item]
        }
      })
      .catch((error) => console.error('getItemSettting', error));
  }


  addSetting(
    tokenKey,
    userInfo,
    lastLogInTime,
    usbProductId,
    scanSetting,
    retailer,
    scanningType,
    driveCycles,
    formatDate,
    formatTime,
    emailSupport,
    recentVINScanned,
    recentMileage,
    agreePolicies,
    skipToolUpdatingAt,
    firstDateOff,
    vCIResponse,
    supportedModulesData,
    appRegional,
    appLanguage
  ) {
    let data = [
      tokenKey,
      userInfo ? JSON.stringify(userInfo) : '',
      lastLogInTime,
      usbProductId,
      scanSetting ? JSON.stringify(scanSetting) : '',
      retailer,
      scanningType,
      driveCycles,
      formatDate,
      formatTime,
      emailSupport,
      recentVINScanned,
      recentMileage,
      agreePolicies,
      skipToolUpdatingAt,
      firstDateOff,
      vCIResponse,
      supportedModulesData,
      appRegional,
      appLanguage
    ];
    return this.storage
      .executeSql(
        'INSERT INTO settingsData (tokenKey, userInfo, lastLogInTime, usbProductId, scanSetting, retailer, scanningType, driveCycles, formatDate, formatTime, emailSupport, recentVINScanned, recentMileage, agreePolicies, skipToolUpdatingAt, firstDateOff, vCIResponse, supportedModulesData, appRegional, appLanguage) VALUES (?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?, ?, ?)',
        data
      )
      .then((res) => {
        this.logger.debug('addSetting Success', res);
        this.getSettingData();
      }).catch(err => {
        this.logger.debug('err when add settingdata', err);
      });
  }
  async saveSettingItem(itemName, value: Array<string>) {
    if (this.settingData.value && this.settingData.value.length > 0) {
      let id = this.settingData.value[0].id // save always in first array
      return await this.storage
        .executeSql(
          `UPDATE settingsData SET ${itemName} = ? WHERE id = ?`, [value, id]
        )
        .then((res) => {
          this.logger.debug(`updateSettingItem data ${itemName}`, res);
          this.getSettingData();
        }).catch(err => {
          this.logger.debug(`err data ${itemName}`, err);
        });
    } else {
      // add defaut setting
      this.logger.debug(`add setting data default`);
      await this.addSetting('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
      return this.saveSettingItem(itemName, value);
    }
  }
  deleteSettingData(id) {
    return this.storage
      .executeSql('DELETE FROM settingsData WHERE id = ?', [id])
      .then((_) => {
        this.logger.debug(`DELETE setting data`, _);
        this.getSettingData();
      }).catch(err => {
        this.logger.error('Err when delet settingsData', err);
      });
  }

  updateSettingData(id, setting: SettingData) {
    let data = [
      setting.tokenKey,
      setting.userInfo ? JSON.stringify(setting.userInfo) : '',
      setting.lastLogInTime,
      setting.usbProductId,
      setting.scanSetting ? JSON.stringify(setting.scanSetting) : '',
      setting.retailer,
      setting.scanningType,
      setting.driveCycles,
      setting.formatDate,
      setting.formatTime,
      setting.emailSupport,
      setting.recentVINScanned,
      setting.recentMileage,
      setting.agreePolicies,
      setting.skipToolUpdatingAt,
      setting.firstDateOff,
      setting.vCIResponse,
      setting.supportedModulesData,
      setting.appRegional,
      setting.appLanguage,
    ];
    return this.storage
      .executeSql(
        `UPDATE settingsData SET
        tokenKey =?,
        userInfo =?,
        lastLogInTime =?,
        usbProductId =?,
        scanSetting =?,
        retailer =?,
        scanningType =?,
        driveCycles =?,
        formatDate =?,
        formatTime =?,
        emailSupport =?,
        recentVINScanned =?,
        recentMileage =?,
        agreePolicies =?,
        skipToolUpdatingAt =?,
        firstDateOff =?,
        vCIResponse =?,
        supportedModulesData =?,
        appRegional =?,
        appLanguage =? WHERE id = ${id}`,
        data
      )
      .then(() => {
        this.getSettingData();
      });
  }
  //Setting data END

  //Cache data START
  getCacheData() {
    return this.storage
      .executeSql('SELECT * FROM cacheData', [])
      .then((res) => {
        let items: CacheData[] = [];
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            let cacheData = new CacheData();
            cacheData.id = res.rows.item(i).id;
            cacheData.vin = res.rows.item(i).vin;
            cacheData.data = res.rows.item(i).data; // { supportedModules: { en: [], es: [] } }
            cacheData.createdAt = res.rows.item(i).createdAt;
            items.push(cacheData);
          }
        }
        this.cacheData.next(items);
        this.logger.debug('cacheData', this.cacheData)
      })
      .catch((error) => console.error('getCacheData', error));
  }

  addCacheData(vin, data) {
    let supportedModules = [data ? JSON.stringify(data) : ''];
    let parameters = [vin, supportedModules, new Date().getTime()];
    let isExist = false;
    if (this.cacheData.value) {
      isExist = this.cacheData.value.findIndex(cache => cache.vin === vin) >= 0;
    }
    this.logger.info(`addCacheData vin data [${isExist ? 'UPDATE' : 'INSERT'}]`, vin, data);
    let proc = isExist
      ? this.storage
        .executeSql(
          'UPDATE cacheData SET data = ?, createdAt = ? WHERE vin = ?',
          [supportedModules, +new Date(), vin]
        )
      : this.storage
        .executeSql(
          'INSERT INTO cacheData (vin, data, createdAt) VALUES (?, ?, ?)',
          parameters
        );
    return proc.then(() => {
      this.getCacheData();
    })
  }

  async getCacheDetail(vin): Promise<ItemSupportedModules> {
    try {
      let res = await this.storage
        .executeSql('SELECT * FROM cacheData WHERE vin = ?', [vin]);
      if (res && res.rows) {
        if (res.rows.item(0).data) {
          let modulesCache = JSON.parse(
            res.rows.item(0).data
          ) as ItemSupportedModules;
          //  modulesCache.id = res.rows.item(0).id;
          return modulesCache;
        }
      }
    } catch (err) {
      return null;
    }
  }
  deleteCacheData(vin?: string) {
    return this.storage
      .executeSql(`DELETE FROM cacheData WHERE vin ${vin ? '= ?' : ' != ""'}`, vin ? [vin] : undefined)
      .then((_) => {
        this.logger.debug(`Cached data ${vin ? 'of ' + vin + ' ' : ''}is removed`);
        this.getCacheData();
      });
  }
  //Cache data END
}
