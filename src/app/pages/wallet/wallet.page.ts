import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPayment() {
      this.router.navigate(['/money-add']);
  }

}
