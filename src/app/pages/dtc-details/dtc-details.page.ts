import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DtcItem, DtcModel, ReportModel } from 'src/app/models/app.model';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { ReportServiceProvider } from 'src/app/services/report-service/report-service';
import { RoutePath } from 'src/app/app-routing.module';
import { NavigationService } from 'src/app/services/navigation.service';
import { BaseController } from 'src/app/bases/base-controller';

@Component({
  selector: 'app-dtc-details',
  templateUrl: './dtc-details.page.html',
  styleUrls: ['./dtc-details.page.scss'],
})
export class DtcDetailsPage extends BaseController implements OnInit {

  ModuleName = '';
  public ModuleId = '';
  VehicleName = '';
  Vin = '';
  DtcCount = 0;
  public ReportModel: ReportModel;
  public MilDTC: DtcItem;
  public PendingCodes: DtcItem[];
  public StoredCodes: DtcItem[];
  public PermanentCodes: DtcItem[];
  public DisplayOBDCodes: boolean;
  ReportData: Observable<any>;
  System: string;
  SubSystem: string;
  Dtcs: Array<DtcModel> = [];
  DtcsView:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalController: ModalController,
    public helper: HelperService,
    private navigationService: NavigationService,
    private reportService: ReportServiceProvider) {
      super('DtcDetailsPage');
  }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    let ctx = this;
    if(!ctx.MilDTC && !ctx.DisplayOBDCodes){
      if(this.ReportModel){
        ctx.Vin = this.ReportModel.vin;
        ctx.VehicleName = this.ReportModel.ymme;
        let moduleValue = this.ReportModel.modulesWithDTC.find(x => x.id === ctx.ModuleId);
        if (moduleValue) {
          ctx.ModuleName = moduleValue.name;
          ctx.DtcCount = moduleValue.dtcCount;
          ctx.Dtcs = moduleValue.dtcs;
          ctx.System = moduleValue.system;
          ctx.SubSystem = moduleValue.subSystem;
          let i=0;
          for (i; i < moduleValue.dtcs.length;i++){
            const item = moduleValue.dtcs[i];
            ctx.Dtcs[i].definition = item.definition.toString().split('`').join('</br>');
          }
        }
      }
    }
  }

  backToReportPage() {
    this.modalController.dismiss();
  }

  viewEraseDtcs() {
    this.navigationService.goTo(RoutePath.DtcErase, {
      queryParams: {
        reportId: this.ReportModel ? this.ReportModel.id : null,
        moduleId: this.ModuleId,
        system: this.System,
        subSystem: this.SubSystem
      }
    });
  }
}