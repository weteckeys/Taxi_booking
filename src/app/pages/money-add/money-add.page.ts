import { SuccessPage } from './../success/success.page';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-add',
  templateUrl: './money-add.page.html',
  styleUrls: ['./money-add.page.scss'],
})
export class MoneyAddPage implements OnInit {

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
            component: SuccessPage,
        });
        return await modal.present();
    }

}
