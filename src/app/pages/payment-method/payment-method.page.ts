import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
})
export class PaymentMethodPage implements OnInit {

  method;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  chooseMethod(val) {
    this.method = val;
  }

  goToAddCard() {
      this.router.navigate(['/add-card']);
  }

}
