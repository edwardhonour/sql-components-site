import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sitebar-wrapper',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './sitebar-wrapper.component.html',
  styleUrls: ['./sitebar-wrapper.component.css']
})
export class SitebarWrapperComponent implements OnDestroy {

  data: any;
  class: any;
  myObs: Subscription;

  ngOnDestroy() {
      this.myObs.unsubscribe();
  }

  constructor(private _dataService: DataService) { 
    this.myObs = this._dataService.locationSubject.subscribe(d => {
      this.data=d;
      if (this.data.hideNav=='Y') {
        this.class="";
      } else {
        this.class="";
      }
    })
  }

}
