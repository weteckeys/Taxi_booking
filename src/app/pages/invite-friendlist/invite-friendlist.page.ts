import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-invite-friendlist',
  templateUrl: './invite-friendlist.page.html',
  styleUrls: ['./invite-friendlist.page.scss'],
})
export class InviteFriendlistPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
