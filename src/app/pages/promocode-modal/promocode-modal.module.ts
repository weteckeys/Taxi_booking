import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocodeModalPageRoutingModule } from './promocode-modal-routing.module';

import { PromocodeModalPage } from './promocode-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocodeModalPageRoutingModule
  ],
  declarations: [PromocodeModalPage]
})
export class PromocodeModalPageModule {}
