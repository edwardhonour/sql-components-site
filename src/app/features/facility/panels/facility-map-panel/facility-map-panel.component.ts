import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule, MapMarker, MapInfoWindow } from '@angular/google-maps'
import { MatCardMdImage, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-facility-map-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, GoogleMapsModule, MatCardModule],
  templateUrl: './facility-map-panel.component.html',
  styleUrls: ['./facility-map-panel.component.css']
})
export class FacilityMapPanelComponent implements OnChanges, OnInit {
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;

  markers = [];
  infoContent: any = 'This is my content';

  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };


  @Input() facility_id: any = '-2';
  @Output() posted: EventEmitter<any> = new EventEmitter<any>();

  adding: any = 'N';
  data: any;
 
  ngOnChanges() {
    console.log("assessment panel changed")
      console.log(this.facility_id);
      this.getForm()
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });  
    this.addMarker();
    this.addMarker();
    this.addMarker();
    this.addMarker();
    this.addMarker();
    this.addMarker();
    this.addMarker();
  }

constructor(
private _dataService: DataService
) { }

postUpdate() {
  console.log(this.data.formData);
  this._dataService.postForm("post-stakeholder-form", this.data.formData).subscribe((data:any)=>{
  this.adding="N";
  this.data=data;
  this.posted.emit('RELOAD');
});
}

openInfo(marker: MapMarker, content: any) {
  this.infoContent = content;
  this.info.open(marker);
}

addMarker() {

  navigator.geolocation.getCurrentPosition((position) => {
    this.center = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };

    console.log(this.center);

  });  
}

postDelete() {
  console.log(this.data.formData);
  if (confirm('Are you sure? this cannot be reversed')) {
  this._dataService.postForm("delete-stakeholder-form", this.data.formData).subscribe((data:any)=>{
  this.adding="N";
  this.data=data;
  this.posted.emit('RELOAD');
});
  }
}

closeForm() {
  this.posted.emit('CLOSE');
}

getForm() {
  let inputForm: any = {
    facility_id: this.facility_id
  }
  this._dataService.postForm("get-facility-assessments", inputForm).subscribe((data:any)=>{
    this.data=data;
  });
}

}
