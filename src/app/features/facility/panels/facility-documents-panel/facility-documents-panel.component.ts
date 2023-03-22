import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-facility-documents-panel',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './facility-documents-panel.component.html',
  styleUrls: ['./facility-documents-panel.component.css']
})
export class FacilityDocumentsPanelComponent implements OnChanges, OnInit {
    
  @Input() facility_id: any = '-1';
  @Input() stakeholder_id: any = '-1';
  @Input() parent_id: any = '0';
  @Input() option_group: any = '0';
  @Input() option_id: any = '0';
  @Output() posted: EventEmitter<any> = new EventEmitter<any>();

  adding: any = 'N';
  data: any;
 
  ngOnChanges() {
    console.log('facility form changed')
    console.log(this.stakeholder_id)
    this.getForm()
  }

  ngOnInit(): void {
    
  }

constructor(
private _dataService: DataService
) { }

postUpdate() {
  console.log(this.data.formData);
  this._dataService.postForm("post-facility-form", this.data.formData).subscribe((data:any)=>{
  this.adding="N";
  this.data=data;
  location.reload();

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
    stakeholder_id: this.stakeholder_id
  }
  this._dataService.postForm("get-facility-form", inputForm).subscribe((data:any)=>{
    this.data=data;
  });
}

}

