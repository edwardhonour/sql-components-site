import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StakeholderFormComponent } from 'src/app/features/stakeholder/forms/stakeholder-form/stakeholder-form.component'; 
import { FacilityFormComponent } from '../../forms/facility-form/facility-form.component'; 
import { AddSurveyFormComponent } from 'src/app/admin/survey/forms/add-survey-form/add-survey-form.component'; 
import { FacilityAssetFormComponent } from '../../forms/facility-asset-form/facility-asset-form.component'; 
import { FacilityContactsFormComponent } from '../../forms/facility-contacts-form/facility-contacts-form.component'; 
import { FacilityDocumentsFormComponent } from '../../forms/facility-documents-form/facility-documents-form.component'; 
import { FacilityIncidentFormComponent } from '../../forms/facility-incident-form/facility-incident-form.component'; 
import { FacilityNotesFormComponent } from '../../forms/facility-notes-form/facility-notes-form.component'; 
import { FacilitySaaFormComponent } from '../../forms/facility-saa-form/facility-saa-form.component'; 

@Component({
  selector: 'app-top-menu-facility-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, StakeholderFormComponent, 
    FacilityFormComponent, AddSurveyFormComponent, FacilityAssetFormComponent, FacilityDocumentsFormComponent,
    FacilityAssetFormComponent, FacilityIncidentFormComponent, FacilitySaaFormComponent, 
    FacilityContactsFormComponent, FacilityDocumentsFormComponent, AddSurveyFormComponent,
    FacilityIncidentFormComponent, FacilityNotesFormComponent, FacilitySaaFormComponent,
  ],
  templateUrl: './top-menu-facility-dashboard.component.html',
  styleUrls: ['./top-menu-facility-dashboard.component.css']
})
export class TopMenuFacilityDashboardComponent implements OnChanges {

  stakeholder_id: any = '0';
  facility_id: any = '-1';
  assessment_id: any = '0';
  contact_id: any = '0';
  asset_id: any = '0';
  saa_id: any = '0';
  incident_id: any = '0';
  
  tenantShowing: any = 'N';
  contactShowing: any = 'N';
  incidentShowing: any = 'N';
  notesShowing: any = 'N';
  saaShowing: any = 'N';
  assetsShowing: any = 'N';
  stakeholderShowing: any = 'N';
  facilityShowing: any = 'N';
  assessmentShowing: any = 'N';
  photosShowing: any = 'N';
  documentShowing: any = 'N';
  assetShowing: any = 'N';
  toggle_open: any = 'N';

  @Input() AS: any = 'Y';
  @Input() AF: any = 'Y';
  @Input() SA: any = 'Y';
  @Input() PQ: any = 'Y';
  @Input() facility: any = '0';

  toggleStakeholder(m: any) {
    if (this.stakeholderShowing=='Y') {
        this.stakeholderShowing='N';
    } else {
        this.stakeholderShowing='Y';
    }
}
toggleTenant(m: any) {

}

closeNotesForm() {

}

toggleIncident(m: any) {

}


ngOnChanges(): void {
  this.facility_id=this.facility;
}

toggleFacility(m: any) {
    if (this.facilityShowing=='Y') {
        this.facilityShowing='N';
    } else {
        this.facilityShowing='Y';
        this.facility_id = m;
    }
}

toggleMenu() {
  if (this.toggle_open=='Y') {
      this.toggle_open='N';
  } else {
      this.toggle_open='Y';
  }
}

toggleSAA(m: any) {
  if (this.saaShowing=='Y') {
      this.saaShowing='N';
  } else {
      this.saaShowing='Y';
      this.facility_id = m;
  }
}

toggleContact(m: any) {
  if (this.contactShowing=='Y') {
      this.contactShowing='N';
  } else {
      this.contactShowing='Y';
      this.facility_id = m;
  }
}

toggleAsset(m: any) {
  if (this.assetShowing=='Y') {
      this.assetShowing='N';
  } else {
      this.assetShowing='Y';
      this.facility_id = m;
  }
}

toggleNotes(m: any) {
  if (this.notesShowing=='Y') {
      this.notesShowing='N';
  } else {
      this.notesShowing='Y';
      this.facility_id = m;
  }
}

toggleAssessment(m: any) {
    if (this.assessmentShowing=='Y') {
        this.assessmentShowing='N';
    } else {
        this.assessmentShowing='Y';
        this.assessment_id = m;
    }
}       

closeStakeholderForm() {
    this.stakeholderShowing='N';
}

closeFacilityForm() {
  this.facilityShowing='N';
}

closeAssessmentForm() {
  this.assessmentShowing='N';
}

closeContactForm() {
  this.contactShowing='N';
}




}
