import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeToolNamePageRoutingModule } from './change-tool-name-routing.module';

import { ChangeToolNamePage } from './change-tool-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeToolNamePageRoutingModule
  ],
  declarations: [ChangeToolNamePage]
})
export class ChangeToolNamePageModule {}
