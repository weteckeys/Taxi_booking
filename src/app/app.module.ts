import { SuccessPageModule } from './pages/success/success.module';
import { ChoooseAmountPageModule } from './pages/chooose-amount/chooose-amount.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgOtpInputModule } from 'ng-otp-input';
import { ChooseLocationPageModule } from './pages/choose-location/choose-location.module';
import { IonicRatingModule } from 'ionic-rating';
import { NgCalendarModule  } from 'ionic2-calendar';

import { SelectRideModalPageModule } from '../app/pages/select-ride-modal/select-ride-modal.module';
import { PromocodeModalPageModule } from '../app/pages/promocode-modal/promocode-modal.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgOtpInputModule,
    ChooseLocationPageModule,
    IonicRatingModule,
    SelectRideModalPageModule,
    PromocodeModalPageModule,
    ChoooseAmountPageModule,
    SuccessPageModule,
    NgCalendarModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
