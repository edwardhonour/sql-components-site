import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-facility-countrmeasures-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './facility-countrmeasures-panel.component.html',
  styleUrls: ['./facility-countrmeasures-panel.component.css']
})
export class FacilityCountrmeasuresPanelComponent  implements OnChanges, OnInit {
    
  @Input() facility_id: any = '-2';
  @Output() posted: EventEmitter<any> = new EventEmitter<any>();

  adding: any = 'N';
  data: any;
  old_stakeholder_id: any = -1;
 
  ngOnChanges() {
    console.log(this.facility_id);
    if (this.facility_id!='-2') {
      this.getForm();
    }
  }

  ngOnInit(): void {
    
  }

constructor(
private _dataService: DataService
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
  console.log('in postForm')
  
  let inputForm: any = {
    facility_id: this.facility_id
  }
  this._dataService.postForm("get-facility-preview-info", inputForm).subscribe((data:any)=>{
    this.data=data;
  });
}

}
