import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeToolNameModalPageRoutingModule } from './change-tool-name-modal-routing.module';

import { ChangeToolNameModalPage } from './change-tool-name-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeToolNameModalPageRoutingModule
  ],
  declarations: [ChangeToolNameModalPage]
})
export class ChangeToolNameModalPageModule {}
