import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultipleToolsFoundModalPage } from './multiple-tools-found-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MultipleToolsFoundModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultipleToolsFoundModalPageRoutingModule {}
