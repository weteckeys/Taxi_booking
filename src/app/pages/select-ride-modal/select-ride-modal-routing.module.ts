import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectRideModalPage } from './select-ride-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SelectRideModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectRideModalPageRoutingModule {}
