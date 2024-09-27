import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionInformationModalPage } from './option-information-modal.page';

const routes: Routes = [
  {
    path: '',
    component: OptionInformationModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionInformationModalPageRoutingModule {}
