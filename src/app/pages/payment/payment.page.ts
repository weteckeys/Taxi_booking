import { PromocodeModalPage } from './../promocode-modal/promocode-modal.page';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

    value;
    constructor(private route: Router, private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    checkedChange(eve) {
      console.log(eve.detail.value);
      this.value = eve.detail.value;
    }

    async openPromoModel() {
        const modal = await this.modalCtrl.create({
            component: PromocodeModalPage,
            cssClass : 'promoModal'
        });
        return await modal.present();
    }

}
