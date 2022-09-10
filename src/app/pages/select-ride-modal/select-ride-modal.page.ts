import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PromocodeModalPage } from '../promocode-modal/promocode-modal.page';

@Component({
  selector: 'app-select-ride-modal',
  templateUrl: './select-ride-modal.page.html',
  styleUrls: ['./select-ride-modal.page.scss'],
})
export class SelectRideModalPage implements OnInit {

  ride = [
    {
      name : 'Just Go',
      price : '$25.00',
      km : '0.1 km',
      time : '2 min',
      car : 'assets/imgs/minivan.png'
    },
    {
      name : 'Luxury',
      price : '$45.00',
      km : '0.3 km',
      time : '15 min',
      car : 'assets/imgs/luxury.png'
    },
    {
      name : 'Electric Car',
      price : '$40.00',
      km : '0.4 km',
      time : '20 min',
      car : 'assets/imgs/minivan.png'
    },
    {
      name : 'Bike',
      price : '$40.00',
      km : '0.4 km',
      time : '20 min',
      car : 'assets/imgs/bike.png'
    },
    {
      name : 'car 4 seat',
      price : '$40.00',
      km : '0.3 km',
      time : '25 min',
      car : 'assets/imgs/luxury.png'
    },
    {
      name : 'car 7 seat',
      price : '$35.00',
      km : '1 km',
      time : '30 min',
      car : 'assets/imgs/minivan-car.png'
    },
  ];
  constructor(private modalCtrl: ModalController, private route: Router) { }

  ngOnInit() {
  }

  selectRide() {
      this.modalCtrl.dismiss();
      this.route.navigate(['/booking']);

    // const modal = await this.modalCtrl.create({
    //   component: PromocodeModalPage,
    //   cssClass : 'promoModal'
    // });
    // return await modal.present();
  }

}
