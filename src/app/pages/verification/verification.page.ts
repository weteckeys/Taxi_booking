import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  @ViewChild('ngOtpInput', {static: false}) ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder:'•',
    inputStyles: {
      'width': '50px',
      'height': '50px',
      'border' : '0px',
      'border-bottom' : '3px solid lightgray',
      'border-radius' : '0px',
      'font-size' : '25px',
      'font-weight' : 'bold'
    }
  };

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  onOtpChange(eve) {

  }

  goBack() {
    this.navCtrl.back();
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
