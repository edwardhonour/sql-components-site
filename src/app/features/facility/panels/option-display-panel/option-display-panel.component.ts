import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule,  FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule } from 'ngx-table-pagination';


import { EditOptionFormComponent } from 'src/app/admin/survey/forms/edit-option-form/edit-option-form.component'; 

@Component({
  selector: 'app-option-display-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, EditOptionFormComponent],
  templateUrl: './option-display-panel.component.html',
  styleUrls: ['./option-display-panel.component.css']
})
export class OptionDisplayPanelComponent implements OnInit, OnChanges {
  data: any;
  editing: any = 'N';
  editingS: any = 'N';
  adding: any = 'N';
  adding2: any = 'N';
  parent: any;
  addingC: any = 'N';
  option_id: any;
  option_group: any;
  editingConditional: any = 'N';
  question_id: any;
  
  constructor(private _dataService: DataService) {}
  @Input() QUESTION_ID: any;
  
  ngOnInit() {
  
  }
  
  toggleAddOption() {
    if (this.adding=='Y') {
      this.adding='N';
    } else {
      this.adding='Y';
    }
  }
  
  toggleAddC(parent: any) {
    this.parent=parent;
    if (this.addingC=='Y') {
      this.addingC='N';
    } else {
      this.addingC='Y';
    }
  }
  
  toggleEditConditional(m: any) {
      this.question_id=m;
      alert(this.question_id)
      if (this.editingConditional=='Y') {
        this.editingConditional='N';
      } else {
        this.editingConditional='Y';
      }
  }
  
  trackPost(m: any) {
     if (m=='CLOSE') {
      this.editingConditional='N';
      this.addingC='N';
      this.editing='N';
      this.addingC='N';
      this.adding2='N';
      this.editingS='N';
      this.adding='N'
     }
     if (m=='RELOAD') {
      this.postForm()
      this.editingConditional='N';
      this.addingC='N';
      this.editing='N';
      this.addingC='N';
      this.adding2='N';
      this.editingS='N';
      this.adding='N'
     }
  }
  toggleAddConditionalOption() {
    if (this.adding2=='Y') {
      this.adding2='N';
    } else {
      this.adding2='Y';
    }
  }
  
  toggleEditS(oid: any, og: any) {
    this.option_id=oid;
    this.option_group=og;
    console.log(this.option_group)
    if (this.editingS=='Y') {
      this.editingS='N';
    } else {
      this.editingS='Y';
    }
  }
  
  toggleEdit() {
    if (this.editing=='Y') {
      this.editing='N';
    } else {
      this.editing='Y';
    }
  }
  
  ngOnChanges(): void {
    this.postForm();
  }
  
  postTemplate() { 
    this._dataService.postForm("add-option", this.data.formData).subscribe((data:any)=>{
        this.adding="N";
        this.data=data;
        location.reload();
    });
  }
  
  postForm() {
    let inputForm: any = {
      id: this.QUESTION_ID
    }
    this._dataService.postForm("get-one-option", inputForm).subscribe((data:any)=>{
      this.data=data;
    });
  }
  }
  