import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportHistoryPageRoutingModule } from './report-history-routing.module';

import { ReportHistoryPage } from './report-history.page';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportHistoryPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [ReportHistoryPage]
})
export class ReportHistoryPageModule {}
