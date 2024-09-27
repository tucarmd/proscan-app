import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeToolNameModalPage } from './change-tool-name-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeToolNameModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeToolNameModalPageRoutingModule {}
