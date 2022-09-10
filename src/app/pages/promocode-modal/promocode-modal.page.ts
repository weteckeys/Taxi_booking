import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-promocode-modal',
  templateUrl: './promocode-modal.page.html',
  styleUrls: ['./promocode-modal.page.scss'],
})
export class PromocodeModalPage implements OnInit {

    constructor(private modalCtrl: ModalController, private alertController: AlertController, private route: Router) { }

    ngOnInit() {
    }

    close() {
        this.modalCtrl.dismiss();
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: 'Bookimg Successful!',
            message: '<span style="color: gray">Your Booking has been confirmed. Driver will pickup you will in 2 minutes.</span>',
            buttons: [
              {
                  text: 'Cancel',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: (blah) => {
                      console.log('Confirm Cancel: blah');
                  }
              },
              {
                text: 'Okay',
                handler: () => {
                    console.log('Confirm Okay');
                    this.modalCtrl.dismiss();
                    this.route.navigate(['/home']);
                }
              }
            ]
        });

        await alert.present();
    }

}
