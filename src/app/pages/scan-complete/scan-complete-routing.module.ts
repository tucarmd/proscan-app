import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanCompletePage } from './scan-complete.page';

const routes: Routes = [
  {
    path: '',
    component: ScanCompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanCompletePageRoutingModule {}
