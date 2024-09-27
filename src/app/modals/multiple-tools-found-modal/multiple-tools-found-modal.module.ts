import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultipleToolsFoundModalPageRoutingModule } from './multiple-tools-found-modal-routing.module';

import { MultipleToolsFoundModalPage } from './multiple-tools-found-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultipleToolsFoundModalPageRoutingModule
  ],
  declarations: [MultipleToolsFoundModalPage]
})
export class MultipleToolsFoundModalPageModule {}
