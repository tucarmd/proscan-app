import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectionFailedPageRoutingModule } from './connection-failed-routing.module';

import { ConnectionFailedPage } from './connection-failed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectionFailedPageRoutingModule
  ],
  declarations: [ConnectionFailedPage]
})
export class ConnectionFailedPageModule {}
