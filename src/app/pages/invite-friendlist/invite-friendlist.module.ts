import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InviteFriendlistPageRoutingModule } from './invite-friendlist-routing.module';

import { InviteFriendlistPage } from './invite-friendlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InviteFriendlistPageRoutingModule
  ],
  declarations: [InviteFriendlistPage]
})
export class InviteFriendlistPageModule {}
