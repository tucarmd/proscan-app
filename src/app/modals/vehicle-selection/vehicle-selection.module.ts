import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleSelectionPageRoutingModule } from './vehicle-selection-routing.module';

import { VehicleSelectionPage } from './vehicle-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleSelectionPageRoutingModule
  ],
  declarations: [VehicleSelectionPage]
})
export class VehicleSelectionPageModule {}
