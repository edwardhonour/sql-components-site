import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-stakeholder-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './stakeholder-form.component.html',
  styleUrls: ['./stakeholder-form.component.css']
})
export class StakeholderFormComponent implements OnChanges, OnInit {
    
  @Input() stakeholder_id: any = '-2';
  @Output() posted: EventEmitter<any> = new EventEmitter<any>();

  adding: any = 'N';
  data: any;
  old_stakeholder_id: any = -1;
 
  ngOnChanges() {
    console.log(this.stakeholder_id);
    console.log(this.old_stakeholder_id);
    if (this.stakeholder_id!=this.old_stakeholder_id) {
      this.getForm()
      this.old_stakeholder_id=this.stakeholder_id;
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
  location.reload();
});
}

postDelete() {
  console.log(this.data.formData);
  if (confirm('Are you sure? this cannot be reversed')) {
  this._dataService.postForm("delete-stakeholder-form", this.data.formData).subscribe((data:any)=>{
  this.adding="N";
  this.data=data;
  this.posted.emit('RELOAD');
  location.reload();
});
  }
}

closeForm() {
  this.posted.emit('CLOSE');
}

getForm() {
  let inputForm: any = {
    stakeholder_id: this.stakeholder_id
  }
  this._dataService.postForm("get-stakeholder-form", inputForm).subscribe((data:any)=>{
    this.data=data;
  });
}

}

