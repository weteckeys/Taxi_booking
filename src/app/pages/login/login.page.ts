import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  seg_id = 1;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeSegment(val){
    this.seg_id = val; 
  }

  goToVerification(){
    this.router.navigate(['/verification']);
  }

}
