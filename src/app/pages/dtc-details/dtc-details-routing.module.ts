import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DtcDetailsPage } from './dtc-details.page';

const routes: Routes = [
  {
    path: '',
    component: DtcDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DtcDetailsPageRoutingModule {}
