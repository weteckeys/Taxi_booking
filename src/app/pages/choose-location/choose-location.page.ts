import { Component, OnInit } from '@angular/core';
// import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-choose-location',
  templateUrl: './choose-location.page.html',
  styleUrls: ['./choose-location.page.scss'],
})
export class ChooseLocationPage implements OnInit {

  constructor(
    // private api: ApiService
  ) { }

  ngOnInit() {
  }

  openModal() {
    // console.log("FOCUS");
    // this.api.modalClass = 'custom_modal2';
    // console.log(this.api.modalClass);
  }

}
