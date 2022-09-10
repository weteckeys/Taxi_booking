import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ChoooseAmountPage } from '../chooose-amount/chooose-amount.page';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {

  price;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  priceClick(val) {
    this.price = val;
  }

  async chooseAmount() {
    const modal = await this.modalCtrl.create({
        component: ChoooseAmountPage,
        cssClass: 'custom-modal'
    });
    return await modal.present();
  }

}
