import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectionFailedPage } from './connection-failed.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectionFailedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectionFailedPageRoutingModule {}
