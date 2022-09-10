import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chooose-amount',
  templateUrl: './chooose-amount.page.html',
  styleUrls: ['./chooose-amount.page.scss'],
})
export class ChoooseAmountPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  dismiss() {
      this.modalCtrl.dismiss();
  }

}
