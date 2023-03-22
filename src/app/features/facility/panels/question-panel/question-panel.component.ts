import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule,  FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule } from 'ngx-table-pagination';


import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-question-panel',
  standalone: true,
  imports: [ CommonModule,  MatRadioModule, FormsModule, MatCardModule, MatCheckboxModule, MatInputModule, MatFormFieldModule],
  templateUrl: './question-panel.component.html',
  styleUrls: ['./question-panel.component.css']
})
export class QuestionPanelComponent implements OnChanges, OnInit {
 
  @Input() survey_id: any;
  @Input() question_id: any;
  @Input() level: number = 0;
  @Output() show: EventEmitter<string> = new EventEmitter<string>();
  data: any;
  panel_open: any = 'N';
  primary_value: any;

  ngOnInit(): void {
    this.level++;
  }

  ngOnChanges(): void {
    this.postForm();
  }

  constructor(private _dataService: DataService) {}

  postForm() {
    let formData: any = {
      survey_id: this.survey_id,
      question_id: this.question_id
    }
    console.log(formData);
    this._dataService.postForm("get-survey-question", formData).subscribe((data:any)=>{
      this.data=data;
     });
  }
  
  clearOtherRadioButtons(id: any) {

  }

  updateItem(inputArray: any, item: any){
  
  }

  primaryRadioChange(id: any) {
    console.log(this.data.formData);
    let spaghettiProperties = Object.keys(this.data.conditionals);
    for (let prop of spaghettiProperties ) { 
      if (prop!='survey_id'&&prop!='question_id') {
        this.data.conditionals[prop]='N'
      }
    }

    let z = this.data.formData[this.data.question.model];
    let p = 'p'+z;
    console.log(p);
    this.data.formData[p]='Y';
    this.data.conditionals[p]='Y';
    console.log(this.data.conditionals)
  }

}
