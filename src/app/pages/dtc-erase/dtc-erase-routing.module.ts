import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DtcErasePage } from './dtc-erase.page';

const routes: Routes = [
  {
    path: '',
    component: DtcErasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DtcErasePageRoutingModule {}
