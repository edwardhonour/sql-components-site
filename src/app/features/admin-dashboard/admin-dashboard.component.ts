import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule,  FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule } from 'ngx-table-pagination';

import { MatRadioModule } from '@angular/material/radio';
import { CalendarPanelComponent } from '../calendar/panels/calendar-panel/calendar-panel.component'; 
import { VertSideNavComponent } from 'src/app/layout/panels/vert-side-nav/vert-side-nav.component'; 
import { FacilityFormComponent } from '../facility/forms/facility-form/facility-form.component'; 
import { StakeholderFormComponent } from '../stakeholder/forms/stakeholder-form/stakeholder-form.component'; 
import { TopMenuPanelComponent } from 'src/app/layout/panels/top-menu-panel/top-menu-panel.component'; 
import { TestGridPanelComponent } from 'src/app/admin/survey/panels/test-grid-panel/test-grid-panel.component'; 
import { AssessmentCardListPanelComponent } from '../assessment/panels/assessment-card-list-panel/assessment-card-list-panel.component';
import { FacilityCardListPanelComponent } from '../facility/panels/facility-card-list-panel/facility-card-list-panel.component'; 
import { StakeholderCardListPanelComponent } from '../facility/panels/stakeholder-card-list-panel/stakeholder-card-list-panel.component'; 
import { DataService } from 'src/app/data.service';
import { AssessmentDashboardMenuComponent } from '../assessment/panels/assessment-dashboard-menu/assessment-dashboard-menu.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, VertSideNavComponent, AssessmentCardListPanelComponent, FacilityCardListPanelComponent,
    RouterModule, TestGridPanelComponent, StakeholderCardListPanelComponent,
    Ng2SearchPipeModule, StakeholderFormComponent, TopMenuPanelComponent,
    NgxTablePaginationModule, MatRadioModule, FacilityFormComponent, AssessmentDashboardMenuComponent,
    FormsModule, CalendarPanelComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit, OnDestroy
{
  isScreenSmall: boolean = false;
  term: any;
  p: any;
  q: any;
  uploading: any;
  data: any;
  currentYear: any;
  email: any;
  user: any;
  isOpen: any = 'N';

  private _unsubscribeAll: Subject<any> = new Subject<any>();


     constructor(
      private _activatedRoute: ActivatedRoute,
      private _dataService: DataService,
      private _router: Router,
      public http: HttpClient  // used by upload
  ) { }

    ngOnInit(): void
    {      
      let d = { name: 'home', link: '/', count: 0, isSmall: 'N', hideNav: 'N', hideHeader: 'N'};
      this._dataService.locationSubject.next(d);

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

}
