import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlcLocatorPageRoutingModule } from './dlc-locator-routing.module';

import { DlcLocatorPage } from './dlc-locator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DlcLocatorPageRoutingModule
  ],
  declarations: [DlcLocatorPage]
})
export class DlcLocatorPageModule {}
