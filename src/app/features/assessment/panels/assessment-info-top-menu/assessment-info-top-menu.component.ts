import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StakeholderFormComponent } from 'src/app/features/stakeholder/forms/stakeholder-form/stakeholder-form.component';
import { FacilityFormComponent } from 'src/app/features/facility/forms/facility-form/facility-form.component'; 
import { AddSurveyFormComponent } from 'src/app/admin/survey/forms/add-survey-form/add-survey-form.component'; 
import { FacilityAssetFormComponent } from 'src/app/features/facility/forms/facility-asset-form/facility-asset-form.component';
import { FacilityContactsFormComponent } from 'src/app/features/facility/forms/facility-contacts-form/facility-contacts-form.component'; 
import { FacilityDocumentsFormComponent } from 'src/app/features/facility/forms/facility-documents-form/facility-documents-form.component'; 
import { FacilityIncidentFormComponent } from 'src/app/features/facility/forms/facility-incident-form/facility-incident-form.component'; 
import { FacilityNotesFormComponent } from 'src/app/features/facility/forms/facility-notes-form/facility-notes-form.component'; 
import { FacilitySaaFormComponent } from 'src/app/features/facility/forms/facility-saa-form/facility-saa-form.component'; 


@Component({
  selector: 'app-assessment-info-top-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, StakeholderFormComponent, 
    FacilityFormComponent, AddSurveyFormComponent, FacilityAssetFormComponent,
    FacilityContactsFormComponent, FacilityDocumentsFormComponent, 
    FacilityIncidentFormComponent, FacilityNotesFormComponent, FacilitySaaFormComponent,
  ],
  templateUrl: './assessment-info-top-menu.component.html',
  styleUrls: ['./assessment-info-top-menu.component.css']
})
export class AssessmentInfoTopMenuComponent implements OnChanges {

  stakeholder_id: any = '0';
  facility_id: any = '-1';
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
  assessment: any = '0';

  @Input() AS: any = 'Y';
  @Input() AF: any = 'Y';
  @Input() SA: any = 'Y';
  @Input() PQ: any = 'Y';
  @Input() assessment_id: any = '0';

  toggleStakeholder(m: any) {
    if (this.stakeholderShowing=='Y') {
        this.stakeholderShowing='N';
    } else {
        this.stakeholderShowing='Y';
    }
}

ngOnChanges(): void {
  this.assessment=this.assessment_id;
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
