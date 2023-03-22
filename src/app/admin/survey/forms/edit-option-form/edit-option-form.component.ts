import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '/Users/user/sql-components-site/src/app/data.service'; 
import { Subject, takeUntil } from 'rxjs';
import { FormsModule,  FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule } from 'ngx-table-pagination';


@Component({
  selector: 'app-edit-option-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-option-form.component.html',
  styleUrls: ['./edit-option-form.component.css']
})
export class EditOptionFormComponent implements OnChanges, OnInit {
    
  @Input() section_id: any = '0';
  @Input() parent_id: any = '0';
  @Input() option_group: any = '0';
  @Input() option_id: any = '0';
  @Output() posted: EventEmitter<any> = new EventEmitter<any>();

  adding: any = 'N';
  data: any;
 
  ngOnChanges() {
    this.postForm()
  }

  ngOnInit(): void {
    
  }

constructor(
private _dataService: DataService
) { }

postUpdate() {
  console.log(this.data.formData);
  this._dataService.postForm("post-form-option", this.data.formData).subscribe((data:any)=>{
  this.adding="N";
//  this.data=data;
  this.posted.emit('RELOAD');
});
}

postDelete() {
  console.log(this.data.formData);
  if (confirm('Are you sure? this cannot be reversed')) {
  this._dataService.postForm("delete-form-option", this.data.formData).subscribe((data:any)=>{
  this.adding="N";
//  this.data=data;
  this.posted.emit('RELOAD');
});
  }
}

closeForm() {
  this.posted.emit('CLOSE');
}

postForm() {
  let inputForm: any = {
    section_id: this.section_id,
    parent_id: this.parent_id,
    option_group: this.option_group,
    option_id: this.option_id
  }
  this._dataService.postForm("get-one-form-option", inputForm).subscribe((data:any)=>{
    this.data=data;
  });
}

}
