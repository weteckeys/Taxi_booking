import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoooseAmountPage } from './chooose-amount.page';

const routes: Routes = [
  {
    path: '',
    component: ChoooseAmountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoooseAmountPageRoutingModule {}
