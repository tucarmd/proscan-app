import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionInformationModalPageRoutingModule } from './option-information-modal-routing.module';

import { OptionInformationModalPage } from './option-information-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionInformationModalPageRoutingModule
  ],
  declarations: [OptionInformationModalPage]
})
export class OptionInformationModalPageModule {}
