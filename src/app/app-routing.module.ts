import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },

  {
    path: '',
    loadChildren: () => import('./pages/slider/slider.module').then(m => m.SliderPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then(m => m.VerificationPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'choose-location',
    loadChildren: () => import('./pages/choose-location/choose-location.module').then(m => m.ChooseLocationPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./pages/rating/rating.module').then(m => m.RatingPageModule)
  },
  {
    path: 'tips',
    loadChildren: () => import('./pages/tips/tips.module').then(m => m.TipsPageModule)
  },
  {
    path: 'invite-friend',
    loadChildren: () => import('./pages/invite-friend/invite-friend.module').then(m => m.InviteFriendPageModule)
  },
  {
    path: 'invite-friendlist',
    loadChildren: () => import('./pages/invite-friendlist/invite-friendlist.module').then(m => m.InviteFriendlistPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./pages/my-account/my-account.module').then(m => m.MyAccountPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./pages/payment-method/payment-method.module').then(m => m.PaymentMethodPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then(m => m.WalletPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'request-ride',
    loadChildren: () => import('./pages/request-ride/request-ride.module').then( m => m.RequestRidePageModule)
  },
  {
    path: 'select-ride-modal',
    loadChildren: () => import('./pages/select-ride-modal/select-ride-modal.module').then( m => m.SelectRideModalPageModule)
  },
  {
    path: 'promocode-modal',
    loadChildren: () => import('./pages/promocode-modal/promocode-modal.module').then( m => m.PromocodeModalPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./pages/booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'chooose-amount',
    loadChildren: () => import('./pages/chooose-amount/chooose-amount.module').then( m => m.ChoooseAmountPageModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./pages/add-card/add-card.module').then( m => m.AddCardPageModule)
  },
  {
    path: 'money-add',
    loadChildren: () => import('./pages/money-add/money-add.module').then( m => m.MoneyAddPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./pages/success/success.module').then( m => m.SuccessPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
