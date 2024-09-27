import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DtcErasePageRoutingModule } from './dtc-erase-routing.module';

import { DtcErasePage } from './dtc-erase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DtcErasePageRoutingModule
  ],
  declarations: [DtcErasePage]
})
export class DtcErasePageModule {}
