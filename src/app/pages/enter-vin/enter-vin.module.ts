import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterVinPageRoutingModule } from './enter-vin-routing.module';

import { EnterVinPage } from './enter-vin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterVinPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EnterVinPage]
})
export class EnterVinPageModule {}
