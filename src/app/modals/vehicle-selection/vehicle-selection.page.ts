import { Component, Input, NgZone, OnInit } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular';
import { BaseController } from 'src/app/bases/base-controller';
import { SLEEP_TIMEOUT } from 'src/app/configs/app.config';
import { OptionDescription } from 'src/app/models/app.constant';
import { OptionInformationModel } from 'src/app/models/app.model';
import { HelperService } from 'src/app/services/helper.service';
import { InnovaVCIService } from 'src/app/services/innova-vci.service';
import { AppState } from 'src/app/services/state/app.state';
import { OptionInformationModalPage } from '../option-information-modal/option-information-modal.page';

const SELECT_YEAR = 'Select Year';
const SELECT_MAKE = 'Select Make';
const SELECT_MODEL = 'Select Model';
const SELECT_ENGINE = 'Select Engine';
const SELECT_OPTION_1 = 'Select Option 1';
const SELECT_OPTION_2 = 'Select Option 2';
const SELECT_OPTION_3 = 'Select Option 3';
const DONE = 'Done';
@Component({
  selector: 'app-vehicle-selection',
  templateUrl: './vehicle-selection.page.html',
  styleUrls: ['./vehicle-selection.page.scss'],
})
export class VehicleSelectionPage extends BaseController implements OnInit {
  @Input() ymme: {
    year: string;
    make: string;
    model: string;
    engine: string;
    options1: string[];
  };
  options: OptionInformationModel[];
  isViewingDetails = false;
  viewingOption1 = false;
  viewingOption2 = false;
  viewingOption3 = false;
  listOption1: string[];
  listOption2: string[];
  listOption3: string[];
  option1: string = '';
  option2: string = '';
  option3: string = '';
  isLoading = false;
  fieldSelect: string;
  fieldOptions: string[];
  #emptyRespCnt: number;
  constructor(
    private helper: HelperService,
    private modalController: ModalController,
    private innovaVciService: InnovaVCIService,
    private ngZone: NgZone
  ) {
    super('VehicleSelectionPage');
  }

  ngOnInit() {}

  async ionViewDidEnter() {
    if (AppState.isOnDevice) {
      this.listOption1 = this.ymme?.options1;
    } else {
      this.loadDummyData();
    }
  }

  get couldSubmit() {
    return this.fieldSelect === DONE;
  }

  async reInitYmme(fieldSelect: string) {
    if (fieldSelect === SELECT_OPTION_1) {
      this.option2 = this.option3 = null;
      this.listOption2 = this.listOption3 = [];
    } else if (fieldSelect === SELECT_OPTION_2) {
      this.option3 = null;
      this.listOption3 = [];
    }
    let result = await this.innovaVciService.ymme_back();
    this.logger.debug('back', result);
    if (result) {
      let index = -1;
      if (result.field === SELECT_YEAR) {
        index = result.options.findIndex((d) => d === this.ymme.year);
        if (index > -1) {
          await this.helper.sleep(SLEEP_TIMEOUT);
          result = await this.innovaVciService.ymme_get(index);
          this.logger.debug('get makes', result);
          if (result && result.field === SELECT_MAKE) {
            index = result.options.findIndex((d) => d === this.ymme.make);
            if (index > -1) {
              await this.helper.sleep(SLEEP_TIMEOUT);
              result = await this.innovaVciService.ymme_get(index);
              this.logger.debug('get models', result);
              if (result && result.field === SELECT_MODEL) {
                index = result.options.findIndex((d) => d === this.ymme.model);
                if (index > -1) {
                  await this.helper.sleep(SLEEP_TIMEOUT);
                  result = await this.innovaVciService.ymme_get(index);
                  this.logger.debug('get engines', result);
                }
              }
            }
          }
        }
      }
      if (result && result.field === SELECT_ENGINE) {
        index = result.options.findIndex((d) => d === this.ymme.engine);
        if (index > -1) {
          await this.helper.sleep(SLEEP_TIMEOUT);
          result = await this.innovaVciService.ymme_get(index);
          this.logger.debug('get options 1', result, fieldSelect);
          if (result && result.field === SELECT_OPTION_1) {
            this.listOption1 = result.options;
            if (fieldSelect === SELECT_OPTION_2) {
              index = result.options.findIndex(
                (d) => d === this.listOption1.find((d) => d === this.option1)
              );
              if (index > -1) {
                await this.helper.sleep(SLEEP_TIMEOUT);
                result = await this.innovaVciService.ymme_get(index);
                this.logger.debug('get options 2', result);
                if (result && result.field === SELECT_OPTION_2) {
                  this.listOption2 = result.options;
                }
                await this.helper.sleep(SLEEP_TIMEOUT);
              }
            } else if (fieldSelect === SELECT_OPTION_3) {
              index = result.options.findIndex(
                (d) => d === this.listOption1.find((d) => d === this.option1)
              );
              if (index > -1) {
                await this.helper.sleep(SLEEP_TIMEOUT);
                result = await this.innovaVciService.ymme_get(index);
                this.logger.debug('get options 2', result);
                if (result && result.field === SELECT_OPTION_2) {
                  this.listOption2 = result.options;
                  index = result.options.findIndex(
                    (d) =>
                      d === this.listOption2.find((d) => d === this.option2)
                  );
                  if (index > -1) {
                    await this.helper.sleep(SLEEP_TIMEOUT);
                    result = await this.innovaVciService.ymme_get(index);
                    this.logger.debug('get options 3', result);
                    if (result && result.field === SELECT_OPTION_3) {
                      this.listOption3 = result.options;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  async loadFieldData(index, expectedField = '') {
    this.fieldSelect = expectedField;
    if (!this.isLoading) {
      this.isLoading = true;
      this.helper.showLoading();
    }
    if (isNaN(index) && expectedField) {
      this.isLoading = false;
      this.helper.hideLoading();
      return this.logger.debug(
        `loadFieldData (skip) [${expectedField}]:${index}`
      );
    }

    if (this.option1 || this.option2 || this.option3) {
      if (
        (expectedField === SELECT_OPTION_1 && this.option1) ||
        (expectedField === SELECT_OPTION_2 && this.option2) ||
        (expectedField === SELECT_OPTION_3 && this.option3)
      ) {
        await this.reInitYmme(expectedField);
        await this.helper.sleep(SLEEP_TIMEOUT);
      }
    }
    let resp: { field; options } = await this.innovaVciService.ymme_get(index);
    this.logger.debug(`loadFieldData [${expectedField}]:${index}`, resp);
    const { field, options } = resp;
    if (field && options) {
      this.#emptyRespCnt = 0;
      this.fieldSelect = field;
      this.fieldOptions = options;
      if (!this.couldSubmit) {
        // Load data from tool
        this.loadFieldOptions();
      }
      this.isLoading = false;
      this.helper.hideLoading();
    } else {
      this.isLoading = false;
      this.helper.hideLoading();
      // in case tool not response data, try again?
      this.#emptyRespCnt++;
      if (this.#emptyRespCnt >= 6) {
        this.logger.debug(
          '!! It seems we lost connect with tool, close dialog to make new connection'
        );
        return this.cancel();
      }
    }
  }

  private loadFieldOptions() {
    const field = (this.fieldSelect || '').toLowerCase();
    const opts = this.fieldOptions ? Array.from(this.fieldOptions) : [];
    if (field.includes('option 1')) {
      this.listOption1 = opts;
      this.listOption2 = this.listOption3 = [];
    } else if (field.includes('option 2')) {
      this.listOption2 = opts;
      this.listOption3 = [];
    } else if (field.includes('option 3')) {
      this.listOption3 = opts;
    }
    this.viewingOption1 = false;
    this.viewingOption2 = false;
    this.viewingOption3 = false;
  }

  async submit() {
    if (this.isLoading) {
      return this.logger.debug('...loading data, skip this request');
    }
    this.isLoading = true;
    let confirm = await this.innovaVciService.ymme_confirm();
    this.isLoading = false;
    this.logger.debug('ymme_confirm', confirm);
    // Dismiss modal then hide loading
    return this.modalController.dismiss({
      confirm,
    });
  }

  cancel() {
    return this.modalController.dismiss();
  }

  private loadDummyData() {
    this.listOption1 = {
      vehinfo: '2020 Toyota Camry L4-2.5L (A25A-FKS) ',
      field: 'Select Option 1',
      options: ['TMMK Product', 'Others'],
    }.options;
  }

  viewMoreInfo() {
    this.logger.debug('viewMoreInfo');
  }

  private async getDataFromModal(modalOptions: ModalOptions) {
    const modal = await this.modalController.create(modalOptions);
    await this.helper.hideLoading();
    modal.present().then(() => {});
    return modal.onDidDismiss();
  }

  getListOption(option: number): OptionInformationModel[] {
    let options = [];
    switch (option) {
      case 1:
        options = this.listOption1;
        break;
      case 2:
        options = this.listOption2;
        break;
      case 3:
        options = this.listOption3;
        break;
    }
    let result: OptionInformationModel[] = [];
    options.forEach((item) => {
      const option = OptionDescription.Toyota.find((d) => d.option === item);
      if (option) {
        result.push(
          new OptionInformationModel(
            option.option,
            option.description,
            option.image,
            true
          )
        );
      } else {
        result.push(new OptionInformationModel(item));
      }
    });
    return result;
  }

  async viewOptions(option: number) {
    this.options = this.getListOption(option);
    switch (option) {
      case 1:
        this.viewingOption1 = !this.viewingOption1;
        this.viewingOption2 = this.viewingOption3 = false;
        break;
      case 2:
        this.viewingOption2 = !this.viewingOption2;
        this.viewingOption1 = this.viewingOption3 = false;
        break;
      case 3:
        this.viewingOption3 = !this.viewingOption3;
        this.viewingOption1 = this.viewingOption2 = false;
        break;
    }
  }

  selectOption(index: number, option: OptionInformationModel) {
    this.logger.debug('selectOption', index, option);
    let ctx = this;
    setTimeout(async () => {
      if (!ctx.isViewingDetails) {
        ctx.ngZone.run(async () => {
          ctx.logger.debug('!this.isViewingDetails', index, option);
          let field = '';
          if (ctx.viewingOption1) {
            ctx.viewingOption1 = false;
            ctx.option1 = option?.option;
            field = SELECT_OPTION_1;
            if(!AppState.isOnDevice){
              this.listOption2 = {
                vehinfo: '2015 Toyota Camry L4-2.5L (2AR-FE) ',
                field: 'Select Option 2',
                options: ['w/ Smart Key', 'w/o Smart Key'],
              }.options;
            }
          } else if (ctx.viewingOption2) {
            ctx.viewingOption2 = false;
            ctx.option2 = option?.option;
            field = SELECT_OPTION_2;
            if(!AppState.isOnDevice){
              this.listOption3 = {
                vehinfo: '2015 Toyota Camry L4-2.5L (2AR-FE) ',
                field: 'Select Option 3',
                options: ['RADAR CRUISE', 'Others'],
              }.options;
            }
          } else if (ctx.viewingOption3) {
            ctx.viewingOption3 = false;
            ctx.option3 = option?.option;
            field = SELECT_OPTION_3;
          }
          if (AppState.isOnDevice) {
            await ctx.loadFieldData(index, field);
          }
        });
      }
    }, 10);
  }

  async viewOption(option: OptionInformationModel) {
    this.isViewingDetails = true;
    const { data } = await this.getDataFromModal({
      component: OptionInformationModalPage,
      componentProps: {
        optionInformation: option,
      },
      showBackdrop: true,
      backdropDismiss: true,
      cssClass: 'app-modal-dialog custom-modal',
    });
    this.isViewingDetails = false;
    return data && data.confirm;
  }
}
