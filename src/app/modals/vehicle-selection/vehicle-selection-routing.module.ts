import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleSelectionPage } from './vehicle-selection.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleSelectionPageRoutingModule {}
