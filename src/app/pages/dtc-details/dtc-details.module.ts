import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DtcDetailsPageRoutingModule } from './dtc-details-routing.module';

import { DtcDetailsPage } from './dtc-details.page';
import { GroupByPipe } from 'src/app/components/group-by/group-by-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DtcDetailsPageRoutingModule
  ],
  declarations: [GroupByPipe, DtcDetailsPage],
  exports: [GroupByPipe]
})
export class DtcDetailsPageModule {}
