import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { SqlComponentsModule } from 'sql-components';

@Component({
  selector: 'app-facility-barriers-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MatCheckboxModule, MatCardModule, SqlComponentsModule],
  templateUrl: './facility-barriers-panel.component.html',
  styleUrls: ['./facility-barriers-panel.component.css']
})
export class FacilityBarriersPanelComponent implements OnChanges, OnInit {
    
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
  let inputForm: any = {
    facility_id: this.facility_id
  }
  this._dataService.postForm("get-facility-assessments", inputForm).subscribe((data:any)=>{
    this.data=data;
  });
}

}

