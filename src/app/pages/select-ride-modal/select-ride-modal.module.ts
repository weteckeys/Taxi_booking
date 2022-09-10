import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectRideModalPageRoutingModule } from './select-ride-modal-routing.module';

import { SelectRideModalPage } from './select-ride-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectRideModalPageRoutingModule
  ],
  declarations: [SelectRideModalPage]
})
export class SelectRideModalPageModule {}
