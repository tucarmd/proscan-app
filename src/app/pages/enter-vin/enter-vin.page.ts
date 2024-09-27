import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput, ModalController, NavParams } from '@ionic/angular';
import { BaseController } from 'src/app/bases/base-controller';
import { ReportSession } from 'src/app/models/report-session';
import { HelperService } from 'src/app/services/helper.service';
import { ReportServiceProvider } from 'src/app/services/report-service/report-service';
import { AppState } from 'src/app/services/state/app.state';
import { ToolServiceProvider } from 'src/app/services/tool-service/tool-service';
import { VehicleServiceProvider } from 'src/app/services/vehicle-service/vehicle-service';

export const VIN_MAX_LENGTH = 17;
const DASH_CHARACTER = '-';
@Component({
  selector: 'app-enter-vin',
  templateUrl: './enter-vin.page.html',
  styleUrls: ['./enter-vin.page.scss'],
})
export class EnterVinPage extends BaseController {
  reportSession: ReportSession;
  public isModal = false;
  @ViewChild('vinInput') vinInput: IonInput;
  public vinForm: FormGroup;
  isLoading;
  invalidVIN = false;
  hasVIN = false;
  isVehiclesNotFound = false;
  vinLength = VIN_MAX_LENGTH;
  constructor(public modal: ModalController,
    public toolService: ToolServiceProvider,
    public helper: HelperService,
    public navParams: NavParams,
    public reportService: ReportServiceProvider,
    public vehicleService: VehicleServiceProvider) {
      super('EnterVinPage');
  }
  
  ngOnInit() {
    this.vinForm = new FormGroup({
      vin: new FormControl('', [Validators.required, Validators.maxLength(17)])
    });
  }

  ionViewWillEnter(){
    this.invalidVIN = false;
    this.isVehiclesNotFound = false;
    this.logger.debug(this.isModal);
    this.reportSession = this.reportService.getReportSession();
  }

  ionViewDidEnter(){
    setTimeout(() => {
      this.vinInput.setFocus();
    }, 1000);
  }

  async submit() {
    this.hasVIN = false;
    let vin = this.vinInput.value as string;
    this.isLoading = true;
    let re = new RegExp('[a-zA-Z0-9]{17}$');
    let matches = vin.match(re);
    if (matches && matches.length) {
      vin = matches[0];
      if (this.isModal) {
        let result = await this.vehicleService.decodeVin(vin);
        this.isLoading = false;
        if (result.success) {
          await this.modal.dismiss({ vin: vin, data: result.data});
        }
        else {
          this.hasVIN = true;
          this.isVehiclesNotFound = true;
        }
      } else {
        let result = await this.vehicleService.getDlcLocationByVin(vin);
        this.isLoading = false;
        if (result.success) {
          await this.modal.dismiss({ vin: vin, data: result.data});
        }
        else {
          this.hasVIN = true;
          this.isVehiclesNotFound = true;
        }
      }
    } else {
      this.hasVIN = true;
      this.isLoading = false;
      this.isVehiclesNotFound = true;
    }
  }

  #formatVin(vin: string) {
    if (vin) {
      vin = vin.replace(/[^a-zA-Z0-9]/gi, '');
      vin = vin.replace(/[qo]/gi, '0');
      vin = vin.replace(/[i]/gi, '1');
      vin = vin.slice(0, 17);
      vin = vin.toUpperCase();
    }
    return vin;
  }

  async vinChanges(){
    this.isVehiclesNotFound = false;
    const vin: string = this.#formatVin(this.vinInput.value as string);
    this.vinLength = VIN_MAX_LENGTH - vin.length;
    this.vinInput.value = vin;
    if(vin.length === VIN_MAX_LENGTH){
      this.hasVIN = true;
    } else {
      this.hasVIN = false;
    }
  }

  public close() {
    this.modal.dismiss(null);
  }
}
