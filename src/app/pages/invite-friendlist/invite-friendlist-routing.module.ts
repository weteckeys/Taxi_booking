import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InviteFriendlistPage } from './invite-friendlist.page';

const routes: Routes = [
  {
    path: '',
    component: InviteFriendlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InviteFriendlistPageRoutingModule {}
