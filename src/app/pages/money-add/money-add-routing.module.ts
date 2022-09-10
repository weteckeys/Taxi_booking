import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoneyAddPage } from './money-add.page';

const routes: Routes = [
  {
    path: '',
    component: MoneyAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoneyAddPageRoutingModule {}
