import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides } from '@ionic/angular';
// import { CalendarComponent } from 'ionic2-calendar';
import * as moment from 'moment';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

    // @ViewChild(CalendarComponent, { static: false }) myCal: CalendarComponent;
    @ViewChild('mySlider', {static : false}) slider: IonSlides;

    @ViewChild('testSlider', {static : false}) slider1: ElementRef;

    slideOpts = {
        slidesPerView : 1,
        allowTouchMove: false
    };

    calendar = {
        mode: 'month',
        currentDate: new Date(),
    };

    lblVisible = false;

    currnetMonth;
    date;
    myDate;
    todayDate;
    id = 1;
    noOfSeat = 3;
    pBtnDis = false;
    mBtnDis = false;

    constructor(private route: Router) {
        this.todayDate = moment();
    }

    ngOnInit() {
        this.currnetMonth = this.getDate(new Date());
        console.log(this.currnetMonth);
    }

    getDate(date) {
        var d = new Date(date);
        const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
          'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
        ];
        var c = monthNames[d.getMonth()];
        return c;
    }

    onCurrentDateChanged(ents) {
        this.currnetMonth = this.getDate(ents);
        // console.log("====",this.currnetMonth);
    }

    back() {
        this.date = this.todayDate.subtract(1, 'days').toDate();
        this.myDate = moment(this.date).format('ddd, Do MMMM')
        var swiper = document.querySelector('.swiper-container')['swiper'];
        var date = moment().add('-1', 'M').toLocaleString();
        this.currnetMonth = this.getDate(date);
        swiper.slidePrev();
    }

    next() {
        this.date = this.todayDate.add(1, 'days').toDate();
        this.myDate = moment(this.date).format('ddd, Do MMMM');
        var swiper = document.querySelector('.swiper-container')['swiper'];

        console.log(swiper);
        swiper.slideNext();
    }

    onClick(val) {
        console.log(val);
        this.id = val;
    }

    onslide2() {
        this.slider.slideNext();
        this.id = this.id + 1;
    }

    plus() {
        this.mBtnDis = false;
        if (this.noOfSeat <= 3) {
            this.noOfSeat = this.noOfSeat + 1;
        } else if (this.noOfSeat === 4) {
            this.pBtnDis = true;
        }
    }

    minus() {
        this.pBtnDis = false;
        if (this.noOfSeat >= 2) {
            this.noOfSeat = this.noOfSeat - 1;
        } else if (this.noOfSeat === 1) {
            this.mBtnDis = true;
        }
    }

    goToPayment() {
      this.route.navigate(['/payment']);
    }

    dont_agree() {

    }

}
