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

@Component({
  selector: 'app-facility-dashboard',
  standalone: true,
  imports: [CommonModule,  VertSideNavComponent, TopMenuPanelComponent, FacilityHistoryPanelComponent,
    RouterModule,  FacilityAssessmentPanelComponent, FacilityIlluminationPanelComponent,
    Ng2SearchPipeModule, FacilityDashboardMenuComponent, FacilityNotesPanelComponent,
    NgxTablePaginationModule, MatRadioModule, TestGridPanelComponent,
    FacilityGeneralInfoPanelComponent, FacilityFsbPanelComponent, FacilityTenantPanelComponent, FacilityContactsPanelComponent,
    FacilityAssessmentHistoryPanelComponent, FacilityMapPanelComponent, FacilityThreatPanelComponent,
    FacilityAssetsPanelComponent, FacilityBarriersPanelComponent, FacilityBuildingEnvelopePanelComponent,
    FacilityCrimeStatsPanelComponent, FacilityCyberPanelComponent, FacilityDegradedPanelComponent, 
    FacilityEntryControlsPanelComponent, FacilityEssPanelComponent, FacilityHistoryPanelComponent, FacilityIlluminationPanelComponent,
    FacilityLogPanelComponent, FacilityParkingPanelComponent, FacilityTenantPanelComponent, FacilityOverviewComponent,
    FacilityIncidentPanelComponent, FacilitySaaPanelComponent, FacilityPhotosPanelComponent, FacilityPropertyTypesComponent,
    FormsModule,  CalendarPanelComponent, TopMenuFacilityDashboardComponent,
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
showFGD: any = 'N';
showGFD: any = 'N';
showFT: any = 'N';
showOV: any = 'N';
showFSB: any = 'N';
showTenants: any = 'N';
showSAA: any = 'N';
showHistory: any = 'N';
showDashboard: any = 'N';
showRecommended: any = 'N';
showDegraded: any = 'N';
showEC: any = 'N';
showBE: any = 'N';
showESS: any = 'N';
showParking: any = 'N';
showBarriers: any = 'N';
showIllumination: any = 'N';
showUD: any = 'N';
showIncidents: any = 'N';
showPhotos: any = 'N';
showDocs: any = 'N';
showThreat: any = 'N';
showCrimeStats: any = 'N';
showContacts: any = 'N';
showTests: any = 'N';
showNotes: any = 'N';
showLog: any = 'N';
showAssets: any = 'N';
showAssessments: any = 'Y';
showMap: any = 'Y';

    closeAll() {
        this.showMap = 'Y';
        this.showFGD = 'N';
        this.showFT = 'N';
        this.showOV = 'N';
        this.showGFD = 'N';
        this.showFSB = 'N';
        this.showTenants = 'N';
        this.showSAA = 'N';
        this.showHistory = 'N';
        this.showDashboard = 'N';
        this.showRecommended = 'N';
        this.showDegraded = 'N';
        this.showEC = 'N';
        this.showBE = 'N';
        this.showESS = 'N';
        this.showParking = 'N';
        this.showBarriers = 'N';
        this.showIllumination = 'N';
        this.showUD = 'N';
        this.showIncidents = 'N';
        this.showPhotos = 'N';
        this.showDocs = 'N';
        this.showThreat = 'N';
        this.showCrimeStats = 'N';
        this.showContacts = 'N';
        this.showTests = 'N';
        this.showNotes = 'N';
        this.showLog = 'N';
        this.showAssets = 'N';
        this.showAssessments = 'N';
    }

    openDefault() {
        this.showAssessments = 'Y';
        this.showNotes = 'N';
        this.showFGD = 'N';
        this.showFT = 'N';
        this.showOV = 'N';
        this.showGFD = 'N';
        this.showFSB = 'N';
        this.showTenants = 'N';
        this.showSAA = 'N';
        this.showHistory = 'N';
        this.showDashboard = 'N';
        this.showRecommended = 'N';
        this.showDegraded = 'N';
        this.showEC = 'N';
        this.showBE = 'N';
        this.showESS = 'N';
        this.showParking = 'N';
        this.showBarriers = 'N';
        this.showIllumination = 'N';
        this.showUD = 'N';
        this.showIncidents = 'N';
        this.showPhotos = 'N';
        this.showDocs = 'N';
        this.showThreat = 'N';
        this.showCrimeStats = 'N';
        this.showContacts = 'N';
        this.showTests = 'N';
        this.showLog = 'N';
        this.showAssets = 'N';
        this.showMap = 'N';
    }

toggleGFD() {
    if (this.showFGD=='Y') {
        this.showFGD='N';
        this.openDefault();
    } else {
        this.closeAll();
        this.showFGD='Y';
    }
}

toggleFT() {
    if (this.showFT=='Y') {
        this.showFT='N';
        this.openDefault();
    } else {
        this.closeAll();
        this.showFT='Y';
    }
}

toggleOV() {
    if (this.showOV=='Y') {
        this.showOV='N';
        this.openDefault();
    } else {
        this.closeAll();
        this.showOV='Y';
    }
}

toggleFSB() {
    if (this.showFSB=='Y') {
      this.showFSB='N';
      this.openDefault();
    } else {
        this.closeAll();
      this.showFSB='Y';
    }
}

toggleTenants() {
    if (this.showTenants=='Y') {
      this.showTenants='N';
      this.openDefault();
    } else {
        this.closeAll();
      this.showTenants='Y';
    }
}

toggleMap() {
    if (this.showMap=='Y') {
      this.showMap='N';
      this.openDefault();
    } else {
        this.closeAll();
      this.showMap='Y';
    }
}


toggleSAA() {
    if (this.showSAA=='Y') {
      this.showSAA='N';
      this.openDefault();
    } else {
        this.closeAll();
      this.showSAA='Y';
    }
}

toggleHistory() {
    if (this.showHistory=='Y') {
      this.showHistory='N';
      this.openDefault();
    } else {
        this.closeAll();
      this.showHistory='Y';
    }
}

toggleDashboard() {
    if (this.showDashboard=='Y') {
      this.showDashboard='N';
      this.openDefault();
    } else {
        this.closeAll();
      this.showDashboard='Y';
    }
}

toggleRecommended() {
    if (this.showRecommended=='Y') {
      this.showRecommended='N';
      this.openDefault();
    } else {
        this.closeAll();
      this.showRecommended='Y';
    }
}
toggleDegraded() {
    if (this.showDegraded=='Y') {
      this.showDegraded='N';
      this.openDefault();
    } else {
        this.closeAll();
      this.showDegraded='Y';
    }
}
toggleEC() {
    if (this.showEC=='Y') {
      this.showEC='N';
      this.openDefault();
    } else {
        this.closeAll();
      this.showEC='Y';
    }
}
toggleBE() {
    if (this.showBE=='Y') {
      this.showBE='N';
      this.openDefault();
    } else {
        this.closeAll();
      this.showBE='Y';
    }
}
toggleESS() {
    if (this.showESS=='Y') {
      this.showESS='N';
      this.openDefault();
    } else {
        this.closeAll();
      this.showESS='Y';
    }
}
toggleParking() {
    if (this.showParking=='Y') {
        this.openDefault();
      this.showParking='N';
    } else {
        this.closeAll();
      this.showParking='Y';
    }
}
toggleBarriers() {
    if (this.showBarriers=='Y') {
        this.openDefault();
      this.showBarriers='N';
    } else {
        this.closeAll();
      this.showBarriers='Y';
    }
}
toggleIllumination() {
    if (this.showIllumination=='Y') {
        this.openDefault();
      this.showIllumination='N';
    } else {
        this.closeAll();
      this.showIllumination='Y';
    }
}
toggleUD() {
    if (this.showUD=='Y') {
        this.openDefault();
      this.showUD='N';
    } else {
        this.closeAll();
      this.showUD='Y';
    }
}
togglePhotos() {
    if (this.showPhotos=='Y') {
        this.openDefault();
      this.showPhotos='N';
    } else {
        this.closeAll();
      this.showPhotos='Y';
    }
}
toggleDocs() {
    if (this.showDocs=='Y') {
        this.openDefault();
      this.showDocs='N';
    } else {
        this.closeAll();
      this.showDocs='Y';
    }
}
toggleThreat() {
    if (this.showThreat=='Y') {
        this.openDefault();
      this.showThreat='N';
    } else {
        this.closeAll();
      this.showThreat='Y';
    }
}
toggleCrimeStats() {
    if (this.showCrimeStats=='Y') {
        this.openDefault();
      this.showCrimeStats='N';
    } else {
        this.closeAll();
      this.showCrimeStats='Y';
    }
}

toggleContacts() {
    if (this.showContacts=='Y') {
        this.openDefault();
      this.showContacts='N';
    } else {
        this.closeAll();
      this.showContacts='Y';
    }
}

toggleTests() {
    if (this.showTests=='Y') {
        this.openDefault();
      this.showTests='N';
    } else {
        this.closeAll();
      this.showTests='Y';
    }
}
toggleNotes() {
    if (this.showNotes=='Y') {
        this.openDefault();
      this.showNotes='N';
    } else {
        this.closeAll();
      this.showNotes='Y';
    }
}
toggleLog() {
    if (this.showLog=='Y') {
        this.openDefault();
      this.showLog='N';
    } else {
        this.closeAll();
      this.showLog='Y';
    }
}

  toggleFGD() {
      if (this.showFGD=='Y') {
        this.openDefault();
        this.showFGD='N';
      } else {
        this.closeAll();
        this.showFGD='Y';
      }
  }

  clickIt(m: any) {
      console.log(m)
      if (m=='toggleGFD') {  this.toggleFGD(); }
      if (m=='toggleFSB') {  this.toggleFSB(); }
  
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
