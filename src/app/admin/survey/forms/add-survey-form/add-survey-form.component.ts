import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
      dateInput: 'LL'
  },
  display: {
      dateInput: 'MM/DD/YYYY',
      monthYearLabel: 'YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'YYYY'
  }
};

@Component({
  selector: 'app-add-survey-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MomentDateModule, DatePipe],
  templateUrl: './add-survey-form.component.html',
  styleUrls: ['./add-survey-form.component.css'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }, { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },]

})
export class AddSurveyFormComponent implements OnChanges, OnInit {
    
  @Input() facility_id: any = '0';
  @Input() stakeholder_id: any = '0';
  @Input() assessment_id: any = '0';
  @Output() posted: EventEmitter<any> = new EventEmitter<any>();

  estimated_start_date: any = new Date;
  estimated_complete_date: any = new Date;
  due_date: any = new Date;
  animations?: any[];
  datepipe: DatePipe = new DatePipe('en-US')

  adding: any = 'N';
  data: any;
 
  ngOnChanges() {
    this.getForm()
  }

  ngOnInit(): void {
    
  }

constructor(
private _dataService: DataService
) { }

postUpdate() {
  this.data.formData.due_date= this.datepipe.transform(this.due_date,'YYYY-MM-dd');
  this.data.formData.est_complete_date = this.datepipe.transform(this.estimated_complete_date,'YYYY-MM-dd');
  this.data.formData.est_start_date= this.datepipe.transform(this.estimated_start_date,'YYYY-MM-dd');

  console.log(this.data.formData);
  this._dataService.postForm("post-schedule-form", this.data.formData).subscribe((data:any)=>{
  this.adding="N";
  this.data=data;
  this.posted.emit('RELOAD');
});
}

postDelete() {
  console.log(this.data.formData);
  if (confirm('Are you sure? this cannot be reversed')) {
  this._dataService.postForm("delete-form-option", this.data.formData).subscribe((data:any)=>{
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
    facility_id: this.facility_id,
    stakeholder_id: this.stakeholder_id,
    assessment_id: this.assessment_id,
  }
  this._dataService.postForm("get-schedule-form", inputForm).subscribe((data:any)=>{
    this.data=data;
  });
}

}

