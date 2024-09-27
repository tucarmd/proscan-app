import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlcLocatorPage } from './dlc-locator.page';

const routes: Routes = [
  {
    path: '',
    component: DlcLocatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlcLocatorPageRoutingModule {}
