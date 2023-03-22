import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StakeholderFormComponent } from 'src/app/features/stakeholder/forms/stakeholder-form/stakeholder-form.component'; 
import { FacilityFormComponent } from 'src/app/features/facility/forms/facility-form/facility-form.component'; 
import { AddSurveyFormComponent } from 'src/app/admin/survey/forms/add-survey-form/add-survey-form.component';

@Component({
  selector: 'app-top-menu-panel',
  standalone: true,
  imports: [CommonModule, RouterModule, StakeholderFormComponent, FacilityFormComponent, AddSurveyFormComponent],
  templateUrl: './top-menu-panel.component.html',
  styleUrls: ['./top-menu-panel.component.css']
})
export class TopMenuPanelComponent implements OnChanges {

  stakeholder_id: any = '0';
  facility_id: any = '-1';
  assessment_id: any = '0';
  toggle_open: any = 'N';

  stakeholderShowing: any = 'N';
  facilityShowing: any = 'N';
  assessmentShowing: any = 'N';
  @Input() AS: any = 'Y';
  @Input() AF: any = 'Y';
  @Input() SA: any = 'Y';
  @Input() PQ: any = 'Y';
  @Input() stakeholder: any = '0';

  toggleStakeholder(m: any) {
    if (this.stakeholderShowing=='Y') {
        this.stakeholderShowing='N';
    } else {
        this.stakeholderShowing='Y';
        this.stakeholder_id = this.stakeholder;
    }
}

ngOnChanges(): void {
    this.stakeholder_id = this.stakeholder;
}

toggleMenu() {
    if (this.toggle_open=='Y') {
        this.toggle_open='N';
    } else {
        this.toggle_open='Y';
    }
}

toggleFacility(m: any) {
    if (this.facilityShowing=='Y') {
        this.facilityShowing='N';
    } else {
        this.facilityShowing='Y';
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


}
