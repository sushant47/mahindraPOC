import { Component, OnInit, Renderer } from '@angular/core';
import { HttpService } from '../core/services/http.service';
import { APICONSTANTS } from '../core/constants/apiconst';
import * as _ from 'lodash';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  markers;
  public tractorBrands: any = [];
  public mahindraUsers: String = '';
  public nonMahindraUsers: String = '';
  public withoutTractors: String = '';
  public leasers: String = '890';
  public togglevalue = true;
  selectedItem = { 'name': 'M & M App Users', 'value': this.mahindraUsers };
  groups = [{ 'name': 'M & M App Users', 'value': this.mahindraUsers }, { 'name': 'Non M & M', 'value': this.nonMahindraUsers }
    , { 'name': 'No Tractors', 'value': this.withoutTractors }, { 'name': 'Frequently leasing member', 'value': this.leasers }];
  constructor(private httpService: HttpService, private render: Renderer) { }

  ngOnInit() {
    this.markers = this.returnLatLongList();
    this.getData();
  }

  returnLatLongList() {
    return [
      {
        'latitude': 18.5136703,
        'longitude': 73.9117831,
        'toolTip': {
          'growthIndex': 'Growth Index: 89',
          'userWithoutTractors': 'User without tractors: 40'
        }
      },
      {
        'latitude': 18.5281382,
        'longitude': 73.8825513,
        'toolTip': {
          'growthIndex': 'Growth Index: 70',
          'userWithoutTractors': 'User without tractors: 42'
        }
      },
      {
        'latitude': 18.8939566,
        'longitude': 72.776333,
        'toolTip': {
          'growthIndex': 'Growth Index: 78',
          'userWithoutTractors': 'User without tractors: 30'
        }
      },
      {
        'latitude': 12.8340125,
        'longitude': 77.4601025,
        'toolTip': {
          'growthIndex': 'Growth Index: 72',
          'userWithoutTractors': 'User without tractors: 70'
        }
      }
    ];
  }

  public getData() {
    this.httpService.post(`${APICONSTANTS.URL}${APICONSTANTS.API_MODULE}`, APICONSTANTS.GET_MANDI_DETAILS_BODY).subscribe((value: any) => {
      console.log(value);
      this.tractorBrands = value.data.cropDetails;
      const count = _.filter(this.tractorBrands, (data) => {
        return data.tractorBrand === 'Mahindra';
      });
      const noTractors = _.filter(this.tractorBrands, (data) => {
        return data.tractorBrand === null;
      });
      const nonMahindraUsers = _.filter(this.tractorBrands, (data) => {
        return data.tractorBrand !== 'Mahindra' && data.tractorBrand;
      });
      console.log(count);
      console.log(noTractors);
      console.log(nonMahindraUsers);
      this.mahindraUsers = this.tractorBrands.length;
      this.withoutTractors = noTractors.length;
      this.nonMahindraUsers = '' + (this.tractorBrands.length - nonMahindraUsers.length - noTractors.length);
      this.groups = [{ 'name': 'M & M App Users', 'value': this.mahindraUsers }, { 'name': 'Non M & M', 'value': this.nonMahindraUsers }
      , { 'name': 'No Tractors', 'value': this.withoutTractors }, { 'name': 'Frequently leasing member', 'value': this.leasers }];
    });
  }
  public listClick(event: any, newValue) {
    console.log(event);
    this.selectedItem = newValue;
    // How to remove 'active' from siblings ?
  }
  public toggleView(event: any) {
    this.togglevalue = !this.togglevalue;
  }
}
