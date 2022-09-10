import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoneyAddPageRoutingModule } from './money-add-routing.module';

import { MoneyAddPage } from './money-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoneyAddPageRoutingModule
  ],
  declarations: [MoneyAddPage]
})
export class MoneyAddPageModule {}
