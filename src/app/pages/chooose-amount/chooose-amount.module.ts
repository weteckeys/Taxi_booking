import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoooseAmountPageRoutingModule } from './chooose-amount-routing.module';

import { ChoooseAmountPage } from './chooose-amount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoooseAmountPageRoutingModule
  ],
  declarations: [ChoooseAmountPage]
})
export class ChoooseAmountPageModule {}
