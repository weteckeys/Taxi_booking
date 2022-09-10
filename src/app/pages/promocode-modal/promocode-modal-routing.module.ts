import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromocodeModalPage } from './promocode-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PromocodeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromocodeModalPageRoutingModule {}
