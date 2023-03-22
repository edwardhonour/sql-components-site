import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule,  FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule } from 'ngx-table-pagination';


import { MatRadioModule } from '@angular/material/radio';
import { CalendarPanelComponent } from 'src/app/features/calendar/panels/calendar-panel/calendar-panel.component';
import { VertSideNavComponent } from 'src/app/layout/panels/vert-side-nav/vert-side-nav.component';
import { TopMenuPanelComponent } from 'src/app/layout/panels/top-menu-panel/top-menu-panel.component';
import { FacilityPreviewPanelComponent } from '../../panels/facility-preview-panel/facility-preview-panel.component';
import { TestGridPanelComponent } from 'src/app/admin/survey/panels/test-grid-panel/test-grid-panel.component'; 

@Component({
  selector: 'app-facility-list',
  standalone: true,
  imports: [CommonModule, VertSideNavComponent, TestGridPanelComponent,
    RouterModule, 
    Ng2SearchPipeModule, TopMenuPanelComponent, FacilityPreviewPanelComponent,
    NgxTablePaginationModule,  MatRadioModule, 
    FormsModule],
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit, OnDestroy
{

  isScreenSmall!: boolean;
  term: any;
  p: any;
  q: any;
  uploading: any;
  data: any;
  currentYear: any;
  email: any;
  user: any;
  facility_id: any;

  private _unsubscribeAll: Subject<any> = new Subject<any>();


     constructor(
      private _activatedRoute: ActivatedRoute,
      private _router: Router,
      private _dataService: DataService,
      public http: HttpClient  // used by upload
  ) { }

    ngOnInit(): void
    {      
            this._activatedRoute.data.subscribe(({ 
              data, menudata, userdata })=> { 
              this.data=data;
//              this.navigation=menudata
              this.user=userdata
              this.uploading='N'
              if (this.data.user.force_logout>0) {
                  localStorage.removeItem('uid');
                  this._router.navigate(['/forced-off',this.data.user.force_logout]);
              }
            }) 
            
    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }


    preview(m: any) {
        this.facility_id=m.id;
    }

    toggleNavigation(name: string): void
    {

    }


}
