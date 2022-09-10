import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {

  rate = 3;
  constructor() { }

  ngOnInit() {
  }

  onRateChange(event) {

  }

}
