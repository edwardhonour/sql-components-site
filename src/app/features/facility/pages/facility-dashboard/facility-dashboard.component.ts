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
import { FacilityDashboardMenuComponent } from '../../panels/facility-dashboard-menu/facility-dashboard-menu.component'; 
import { FacilityAssessmentPanelComponent } from '../../panels/facility-assessment-panel/facility-assessment-panel.component'; 
import { TopMenuPanelComponent } from 'src/app/layout/panels/top-menu-panel/top-menu-panel.component'; 
import { TopMenuFacilityDashboardComponent } from '../../panels/top-menu-facility-dashboard/top-menu-facility-dashboard.component';
import { TestGridPanelComponent } from 'src/app/admin/survey/panels/test-grid-panel/test-grid-panel.component'; 
import { FacilityNotesPanelComponent } from '../../panels/facility-notes-panel/facility-notes-panel.component';
import { FacilityGeneralInfoPanelComponent } from '../../panels/facility-general-info-panel/facility-general-info-panel.component'; 
import { FacilityFsbPanelComponent } from '../../panels/facility-fsb-panel/facility-fsb-panel.component'; 
import { FacilityTenantPanelComponent } from '../../panels/facility-tenant-panel/facility-tenant-panel.component'; 
import { FacilityContactsPanelComponent } from '../../panels/facility-contacts-panel/facility-contacts-panel.component'; 
import { FacilityAssessmentHistoryPanelComponent } from '../../panels/facility-assessment-history-panel/facility-assessment-history-panel.component'; 
import { FacilityAssetsPanelComponent } from '../../panels/facility-assets-panel/facility-assets-panel.component';
import { FacilityIncidentFormComponent } from '../../forms/facility-incident-form/facility-incident-form.component'; 
import { FacilityIncidentPanelComponent } from '../../panels/facility-incident-panel/facility-incident-panel.component'; 
import { FacilitySaaPanelComponent } from '../../panels/facility-saa-panel/facility-saa-panel.component'; 
import { FacilityHistoryPanelComponent } from '../../panels/facility-history-panel/facility-history-panel.component';
import { FacilityRecommendedPanelComponent } from '../../panels/facility-recommended-panel/facility-recommended-panel.component'; 
import { FacilityDegradedPanelComponent } from '../../panels/facility-degraded-panel/facility-degraded-panel.component'; 
import { FacilityBarriersPanelComponent } from '../../panels/facility-barriers-panel/facility-barriers-panel.component'; 
import { FacilityBuildingEnvelopePanelComponent } from '../../panels/facility-building-envelope-panel/facility-building-envelope-panel.component';
import { FacilityCrimeStatsPanelComponent } from '../../panels/facility-crime-stats-panel/facility-crime-stats-panel.component'; 
import { FacilityCyberPanelComponent } from '../../panels/facility-cyber-panel/facility-cyber-panel.component'; 
import { FacilityEntryControlsPanelComponent } from '../../panels/facility-entry-controls-panel/facility-entry-controls-panel.component'; 
import { FacilityEssPanelComponent } from '../../panels/facility-ess-panel/facility-ess-panel.component'; 
import { FacilityIlluminationPanelComponent } from '../../panels/facility-illumination-panel/facility-illumination-panel.component';
import { FacilityLogPanelComponent } from '../../panels/facility-log-panel/facility-log-panel.component'; 
import { FacilityParkingPanelComponent } from '../../panels/facility-parking-panel/facility-parking-panel.component'; 
import { FacilityPhotosPanelComponent } from '../../panels/facility-photos-panel/facility-photos-panel.component'; 
import { FacilityThreatPanelComponent } from '../../panels/facility-threat-panel/facility-threat-panel.component'; 
import { FacilityMapPanelComponent } from '../../panels/facility-map-panel/facility-map-panel.component'; 
import { FacilityPropertyTypesComponent } from '../../panels/facility-property-types/facility-property-types.component';
import { FacilityOverviewComponent } from '../../panels/facility-overview/facility-overview.component'; 
import { EditFacilityDescriptionEditorComponent } from '../../forms/edit-facility-description-editor/edit-facility-description-editor.component';
import { SqlCardComponent, SqlMenuComponent } from 'sql-components';
import { FacilityUtilityDependencyPanelComponent } from '../../panels/facility-utility-dependency-panel/facility-utility-dependency-panel.component';
import { FacilityTechnologyDependencyPanelComponent } from '../../panels/facility-technology-dependency-panel/facility-technology-dependency-panel.component';
import { FacilitySecurityForcePanelComponent } from '../../panels/facility-security-force-panel/facility-security-force-panel.component';
import { FacilitySecurityManagementPanelComponent } from '../../panels/facility-security-management-panel/facility-security-management-panel.component';

@Component({
  selector: 'app-facility-dashboard',
  standalone: true,
  imports: [CommonModule,  VertSideNavComponent, TopMenuPanelComponent, FacilityHistoryPanelComponent,
    RouterModule,  FacilityAssessmentPanelComponent, FacilityIlluminationPanelComponent,
    Ng2SearchPipeModule, FacilityDashboardMenuComponent, FacilityNotesPanelComponent,
    NgxTablePaginationModule, MatRadioModule, TestGridPanelComponent, FacilitySecurityForcePanelComponent, FacilitySecurityManagementPanelComponent,
    FacilityGeneralInfoPanelComponent, FacilityFsbPanelComponent, FacilityTenantPanelComponent, FacilityContactsPanelComponent,
    FacilityAssessmentHistoryPanelComponent, FacilityMapPanelComponent, FacilityThreatPanelComponent,
    FacilityAssetsPanelComponent, FacilityBarriersPanelComponent, FacilityBuildingEnvelopePanelComponent,
    FacilityCrimeStatsPanelComponent, FacilityCyberPanelComponent, FacilityDegradedPanelComponent, FacilityUtilityDependencyPanelComponent, FacilityTechnologyDependencyPanelComponent,
    FacilityEntryControlsPanelComponent, FacilityEssPanelComponent, FacilityHistoryPanelComponent, FacilityIlluminationPanelComponent,
    FacilityLogPanelComponent, FacilityParkingPanelComponent, FacilityTenantPanelComponent, FacilityOverviewComponent,
    FacilityIncidentPanelComponent, FacilitySaaPanelComponent, FacilityPhotosPanelComponent, FacilityPropertyTypesComponent, SqlMenuComponent,
    FormsModule,  CalendarPanelComponent, TopMenuFacilityDashboardComponent, EditFacilityDescriptionEditorComponent, SqlCardComponent,
    FacilityRecommendedPanelComponent, FacilityDegradedPanelComponent],
  templateUrl: './facility-dashboard.component.html',
  styleUrls: ['./facility-dashboard.component.css']
})
export class FacilityDashboardComponent implements OnInit, OnDestroy
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
  facility_id: any = '0';
  topMenu: string = '0';
  bottomMenu: string = '0';

    closeAll() {
        this.topMenu='0';
        this.bottomMenu='0';
    }

    processClick(m: any) {
        this.topMenu = m.id;
        console.log(this.topMenu)
    }

    openDefault() {

    }


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
              if (this.data.user.force_logout>0) {
                  localStorage.removeItem('uid');
                  this._router.navigate(['/sign-in']);

              } else {
                this.facility_id=this.data.formData['id'];
       //         this.navigation=menudata
                this.user=userdata
                this.uploading='N'
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


    toggleNavigation(name: string): void
    {

    }


}
