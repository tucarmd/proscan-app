import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlcLocatorDetailsPage } from './dlc-locator-details.page';

const routes: Routes = [
  {
    path: '',
    component: DlcLocatorDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlcLocatorDetailsPageRoutingModule {}
