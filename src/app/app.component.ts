import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'My Wallet',
      url: '/wallet',
      icon: 'wallet'
    },
    {
      title: 'History',
      url: '/history',
      icon: 'time'
    },
    {
      title: 'Notification',
      url: '/notification',
      icon: 'notifications'
    },
    {
      title: 'Invite Friends',
      url: '/invite-friend',
      icon: 'gift'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'cog'
    },
    {
      title: 'Rating',
      url: '/rating',
      icon: 'cog'
    },
    {
      title: 'Tips',
      url: '/tips',
      icon: 'cog'
    },
    {
      title: 'My Account',
      url: '/my-account',
      icon: 'cog'
    },
    {
      title: 'Payment Method',
      url: '/payment-method',
      icon: 'cog'
    },
    {
      title: 'Chat',
      url: '/chat',
      icon: 'cog'
    },
    {
      title: 'Logout',
      url: '/',
      icon: 'log-out'
    },

  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
