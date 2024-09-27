import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanCompletePageRoutingModule } from './scan-complete-routing.module';

import { ScanCompletePage } from './scan-complete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanCompletePageRoutingModule
  ],
  declarations: [ScanCompletePage]
})
export class ScanCompletePageModule {}
