import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleLinkingPageRoutingModule } from './vehicle-linking-routing.module';

import { VehicleLinkingPage } from './vehicle-linking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleLinkingPageRoutingModule
  ],
  declarations: [VehicleLinkingPage]
})
export class VehicleLinkingPageModule {}
