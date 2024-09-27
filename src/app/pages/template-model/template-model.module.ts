import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplateModelPageRoutingModule } from './template-model-routing.module';

import { TemplateModelPage } from './template-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplateModelPageRoutingModule
  ],
  declarations: [TemplateModelPage]
})
export class TemplateModelPageModule {}
