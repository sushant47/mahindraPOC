import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  markers;
  constructor() { }

  ngOnInit() {
    this.markers = this.returnLatLongList();
  }

  returnLatLongList() {
    return [
      {
        'latitude': 18.5136703,
        'longitude': 73.9117831
      },
      {
        'latitude': 18.5281382,
        'longitude': 73.8825513
      },
      {
        'latitude': 18.8939566,
        'longitude': 72.776333
      },
      {
        'latitude': 12.8340125,
        'longitude': 77.4601025
      }
    ];
  }

}
