import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterVinPage } from './enter-vin.page';

const routes: Routes = [
  {
    path: '',
    component: EnterVinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterVinPageRoutingModule {}
