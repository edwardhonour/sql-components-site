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

@Component({
  selector: 'app-section-panel',
  standalone: true,
  imports: [ CommonModule, MatRadioModule, FormsModule],
  templateUrl: './section-panel.component.html',
  styleUrls: ['./section-panel.component.css']
})
export class SectionPanelComponent implements OnChanges, OnInit{

  @Input() section_id: any;
  @Input() survey_id: any;
  @Input() data: any;

  ngOnChanges() {

  }

  ngOnInit(): void {
   this.postForm(); 
  }

  constructor(private _dataService: DataService) {}

  postForm() {
    let formData: any = {
      survey_id: this.survey_id,
      section_id: this.section_id
    }
    this._dataService.postForm("get-survey-section", formData).subscribe((data:any)=>{
      this.data=data;
      console.log(data);
     });
  }


}
