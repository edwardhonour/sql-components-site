import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  myObs: Subscription;
  contentClass: any;
  constructor(private _dataService: DataService) { 
    this.myObs = this._dataService.locationSubject.subscribe(d => {
      this.data=d;
      if (this.data.hideNav=='Y') {
        this.contentClass="col-12";
      } else {
        this.contentClass="col-10";
      }
    })
  }
}
