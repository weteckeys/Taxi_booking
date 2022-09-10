import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { ApiService } from 'src/app/api/api.service';
import { Router } from '@angular/router';
declare var google: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  id = 'div1';
  autocomplete1: { 'query': string };
  autocompleteItems1: any = [];

  autocomplete2: { 'query': string };
  autocompleteItems2: any = [];

  GoogleAutocomplete;

  latOri = -14.5931473;
  longOri = -56.1224024;

  latDest = -15.5931473;
  longDest = -56.1224024;

  height;

  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;

  constructor(private modalCtrl: ModalController, private api: ApiService, private router: Router, private plt: Platform) {
    this.height = this.plt.height();
    console.log("==============", this.plt.height());
  }

  ngOnInit() {

    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete1 = { query: '' };
    this.autocompleteItems1 = [];

    this.autocomplete2 = { query: '' };
    this.autocompleteItems2 = [];

    this.loadMap(this.latOri, this.longOri, this.latDest, this.longDest);
  }

  ionViewDidLoad() {
  }

  loadMap(latOri, lngOri, latDest, lngDest) {

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay = new google.maps.DirectionsRenderer();
    var bounds = new google.maps.LatLngBounds;

    var origin1 = { lat: parseFloat(latOri), lng: parseFloat(lngOri) };
    var destinationA = { lat: latDest, lng: lngDest };

    var destinationIcon = 'https://chart.googleapis.com/chart?' +
      'chst=d_map_pin_letter&chld=D|FF0000|000000';
    var originIcon = 'https://chart.googleapis.com/chart?' +
      'chst=d_map_pin_letter&chld=O|FFFF00|000000';
    var map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: latOri, lng: lngOri },
      zoom: 100
    });

    directionsDisplay.setMap(map);
    var geocoder = new google.maps.Geocoder;

    var service = new google.maps.DistanceMatrixService;

    service.getDistanceMatrix({
      origins: [origin1],
      destinations: [destinationA],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, function (response, status) {
      if (status !== 'OK') {
        alert('Error was: ' + status);
      } else {
        var originList = response.originAddresses;
        var destinationList = response.destinationAddresses;

        var showGeocodedAddressOnMap = function (asDestination) {
          var icon = asDestination ? destinationIcon : originIcon;
          return function (results, status) {
            if (status === 'OK') {
              map.fitBounds(bounds.extend(results[0].geometry.location));
            } else {
              alert('Geocode was not successful due to: ' + status);
            }
          };
        };

        directionsService.route({
          origin: origin1,
          destination: destinationA,
          travelMode: 'DRIVING'
        }, function (response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });


        for (var i = 0; i < originList.length; i++) {
          var results = response.rows[i].elements;
          geocoder.geocode({ 'address': originList[i] },
            showGeocodedAddressOnMap(false));
          for (var j = 0; j < results.length; j++) {
            geocoder.geocode({ 'address': destinationList[j] },
              showGeocodedAddressOnMap(true));
          }
        }
      }
    });
  }

  onClick() {
    this.id = 'div2';
    console.log(document.getElementById('item'));
    document.getElementById('item').classList.remove('div1');
    document.getElementById('item').classList.toggle('active');
  }

  onClick2() {
    this.id = 'div1';
    console.log(document.getElementById('item'));
    document.getElementById('item').classList.toggle('div1');
    document.getElementById('item').classList.remove('active');
  }

  onSearchChange1(event) {

    if (this.autocomplete1.query == '') {
      this.autocompleteItems1 = [];
      return;
    }

    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete1.query }, (predictions, status) => {
      this.autocompleteItems1 = [];
      console.log(predictions, status);

      predictions.forEach(element => {
        this.autocompleteItems1.push(element.description);
      });
    });
  }

  selectSearchResult1(item) {
    console.log(item);
    this.autocompleteItems1 = [];
    this.autocomplete1.query = item;
    document.getElementById('item').classList.toggle('div1');
  }

  onSearchChange2(event) {
    if (this.autocomplete2.query == '') {
      this.autocompleteItems2 = [];
      return;
    }

    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete2.query }, (predictions, status) => {
      this.autocompleteItems2 = [];
      console.log(predictions, status);

      predictions.forEach(element => {
        this.autocompleteItems2.push(element.description);
      });
    });
  }

  selectSearchResult2(item) {
    console.log(item);
    this.autocompleteItems2 = [];
    this.autocomplete2.query = item;
    document.getElementById('item').classList.toggle('div1');
  }

  goToRequestRide() {
    this.router.navigate(['/request-ride']);
  }

}
