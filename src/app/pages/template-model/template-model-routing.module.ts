import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateModelPage } from './template-model.page';

const routes: Routes = [
  {
    path: '',
    component: TemplateModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateModelPageRoutingModule {}
