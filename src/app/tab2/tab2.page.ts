import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  center = new google.maps.LatLng(-8.063242, -34.871048);
  zoom = 12;
  
  constructor() {}

}
