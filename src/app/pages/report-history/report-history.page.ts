import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { RoutePath } from 'src/app/app-routing.module';
import { AppStrings } from 'src/app/configs/app.config';
import {
  ReportHistoryItem,
  ReportHistoryModel,
} from 'src/app/models/app.model';
import { HelperService } from 'src/app/services/helper.service';
import { ReportServiceProvider } from 'src/app/services/report-service/report-service';
import { ToolServiceProvider } from 'src/app/services/tool-service/tool-service';
import * as moment from 'moment';
import { BaseController } from 'src/app/bases/base-controller';
@Component({
  selector: 'app-report-history',
  templateUrl: './report-history.page.html',
  styleUrls: ['./report-history.page.scss'],
})
export class ReportHistoryPage extends BaseController implements OnInit {
  Reports: ReportHistoryModel;
  filterText = '';
  shouldShowCancel = true;
  filteredReports: Array<ReportHistoryItem>;
  reportItems: Array<ReportHistoryItem> = [];
  myDateFrom: any;
  myDateTo: any;
  page: number = 1;
  retry = 1;
  isLoading = true;
  fromHome = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public helper: HelperService,
    public toolService: ToolServiceProvider,
    public reportService: ReportServiceProvider
  ) {
    super('ReportHistoryPage');
  }
  ngOnInit() {
    this.loadReportHistory();
  }

  ionViewWillEnter() {}

  ionViewDidEnter() {
  }

  async loadReportHistory(timeout = 20000) {
    let ctx = this;
    ctx.isLoading = true;
    const data = await ctx.reportService.getReportHistory();
    if (data.success) {
      ctx.Reports = data.data;
      if (data.data.reportHistories) {
        ctx.reportItems = data.data.reportHistories;
      }
      ctx.initFilteredReports();
      ctx.isLoading = false;
    } else {
      ctx.isLoading = false;
      ctx.helper.alert(AppStrings.MSG_SERVER_ERROR_TRY_LATER, AppStrings.ERROR);
      this.helper.popToRoot(RoutePath.Home);
    }
  }

  async viewDetails(id: string) {
    this.helper.goTo(RoutePath.ScanComplete, {
      queryParams: {
        reportId: id,
        fromHistory: 'true',
      },
    });
  }

  // This function makes `this.filteredItems` hold a reference to the
  // `this.items`-array.
  initFilteredReports() {
    this.filteredReports = this.reportItems;
  }

  parseDate(value: any) {
    if (value) {
      return new Date(value);
    }
    return null;
  }

  parseDate2(value: any) {
    if (value) {
      return moment(value, 'MM-DD-YYYY').toDate();
    }
    return null;
  }

  filterByDate() {
    this.isLoading = true;
    if (this.myDateFrom) {
      const dateFrom = this.parseDate2(this.myDateFrom);
      this.initFilteredReports();
      if (this.myDateTo) {
        const dateTo = this.parseDate2(this.myDateTo);
        dateTo.setHours(23, 59, 59);
        this.filteredReports = this.filteredReports.filter((item) => {
          const reportDate = this.parseDate(item.createdDateTime);
          reportDate.setHours(0, 0, 1);
          return (
            reportDate.getTime() >= dateFrom.getTime() &&
            reportDate.getTime() <= dateTo.getTime()
          );
        });
      } else {
        this.filteredReports = this.filteredReports.filter((item) => {
          const reportDate = this.parseDate(item.createdDateTime);
          reportDate.setHours(0, 0, 1);
          return reportDate.getTime() >= dateFrom.getTime();
        });
      }
    } else if (this.myDateTo) {
      this.initFilteredReports();
      const dateTo = this.parseDate2(this.myDateTo);
      dateTo.setHours(23, 59, 59);
      this.filteredReports = this.filteredReports.filter((item) => {
        const reportDate = this.parseDate(item.createdDateTime);
        reportDate.setHours(1, 0, 0);
        return reportDate.getTime() <= dateTo.getTime();
      });
    }
    this.page = 1;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  filterItems(ev: any) {
    this.initFilteredReports();
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.filteredReports = this.filteredReports.filter((item) => {
        return (
          (item.vin &&
            item.vin.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.reportNumber &&
            item.reportNumber
              .toString()
              .toLowerCase()
              .indexOf(val.toLowerCase()) > -1) ||
          (item.workOrderNumber &&
            item.workOrderNumber
              .toString()
              .toLowerCase()
              .indexOf(val.toLowerCase()) > -1)
        );
      });
    }
  }

  formatDate(event) {
    const value: string = event.target.value
    const date = new Date(value);
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [month, day, year].join('-');
  }

  goBack() {
    this.helper.popToRoot(RoutePath.Home);
  }
}
