import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostInsertTriggerComponent, SQLDataService, SqlEditorComponent, SqlFormComponent, SqlSubmitComponent, SqlComponentsModule } from 'sql-components';

@Component({
  selector: 'app-facility-general-info-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SqlFormComponent, SqlEditorComponent, SqlSubmitComponent, PostInsertTriggerComponent],
  templateUrl: './facility-general-info-panel.component.html',
  styleUrls: ['./facility-general-info-panel.component.css']
})
export class FacilityGeneralInfoPanelComponent implements OnChanges, OnInit {
    
  @Input() facility_id: any = '-2';
  @Output() posted: EventEmitter<any> = new EventEmitter<any>();

  adding: any = 'N';
  data: any;
 
  ngOnChanges() {
    console.log("assessment panel changed")
      console.log(this.facility_id);
      this.getForm()
  }

  ngOnInit(): void {
    
  }

constructor(
private _dataService: DataService,
private _sqldataService: SQLDataService
) { }

postUpdate() {
  console.log(this.data.formData);
  this._dataService.postForm("post-stakeholder-form", this.data.formData).subscribe((data:any)=>{
  this.adding="N";
  this.data=data;
  this.posted.emit('RELOAD');
});
}

postDelete() {
  console.log(this.data.formData);
  if (confirm('Are you sure? this cannot be reversed')) {
  this._dataService.postForm("delete-stakeholder-form", this.data.formData).subscribe((data:any)=>{
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
    facility_id: this.facility_id
  }
  this._dataService.postForm("get-facility-assessments", inputForm).subscribe((data:any)=>{
    this.data=data;
    let parameters = { page: 'stakeholders', id: this.data.formData.facility_description_id, id2: 0, id3: 0 };
    this._sqldataService.paramSubject.next(parameters)
    this._sqldataService.containerSubject.next(parameters)
    console.log(this.data)
  });
}

}
