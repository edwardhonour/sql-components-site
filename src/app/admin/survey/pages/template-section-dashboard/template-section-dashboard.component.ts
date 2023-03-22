import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule,  FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule } from 'ngx-table-pagination';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { ApexOptions } from 'ng-apexcharts';
import { VertSideNavComponent } from 'src/app/layout/panels/vert-side-nav/vert-side-nav.component';
import { QuestionPanelComponent } from 'src/app/features/facility/panels/question-panel/question-panel.component';
import { OptionPanelComponent } from 'src/app/features/facility/panels/option-panel/option-panel.component';
import { OptionDisplayPanelComponent } from 'src/app/features/facility/panels/option-display-panel/option-display-panel.component';
import { EditOptionFormComponent } from '../../forms/edit-option-form/edit-option-form.component';

@Component({
  selector: 'app-template-section-dashboard',
  standalone: true,
  imports: [CommonModule, 
    RouterModule, 
    Ng2SearchPipeModule, VertSideNavComponent, ReactiveFormsModule,
    NgxTablePaginationModule, QuestionPanelComponent, OptionDisplayPanelComponent, EditOptionFormComponent,
    FormsModule, MatTableModule],
  templateUrl: './template-section-dashboard.component.html',
  styleUrls: ['./template-section-dashboard.component.css']
})
export class TemplateSectionDashboardComponent implements OnInit, OnDestroy
{


  isScreenSmall!: boolean;
  user: any;
  menu: any;
  dataSource: any;
  data: any;
  adding: any = 'N';
  addingC: any = 'N';
  parent: any;
  page_id: string='1';
  panel_id: string='1';
  accordion: any;
  centerClass: any = 'col-xl-9';
  accordion_showing: string = 'N';
  myfacilities_showing: string = 'N';
  cards_showing: string='Y';
  page_showing: string='cards';
  term: any;
  p: any;
  index: any;
  dsc: any;
  doc_file: any;
  doc_title: any;
  template_id: any;
  section_id: any;
  uploading: any = 'N';

  private _unsubscribeAll: Subject<any> = new Subject<any>();

     constructor(
      private _activatedRoute: ActivatedRoute,
      private _router: Router,
      private _dataService: DataService,
      public http: HttpClient  // used by upload
  ) { }

    ngOnInit(): void
    {      

      this._activatedRoute.data.subscribe(({ 
        data, menudata, userdata })=> { 
        this.data=data;
        this.section_id=this.data.formData['section_id'];
   //     this.navigation=menudata
        this.user=userdata
    }
    )
        
    }

    toggleAdd() {
      if (this.adding=='Y') {
        this.adding='N';
      } else {
        this.adding='Y';
      }
    }

    posted(m: any) {

    }

    doEdit(m: any) {
      this.data.formData['ID']=m.ID;
      this.data.formData['SECTION_NAME']=m.SECTION_NAME;
      this.data.formData['SECTION_ORDER']=m.SECTION_ORDER;
      this.adding='Y';
    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }



    toggleNavigation(name: string): void
    {

    }


  deleteTemplate() { 
    if (confirm('Are you sure? This cannot be reversed!!!')) {
      this._dataService.postForm("delete-template", this.data.formData).subscribe((data:any)=>{
        this.adding="N";
        this.data=data;
        location.reload();
    });
    }
  }

  showUpload() {
    if (this.uploading=='Y') {
      this.uploading='N';
    } else {
      this.uploading='Y';
    }
  }

  deleteTemplateSection() { 
    if (confirm('Are you sure? This cannot be reversed!!!')) {
      this._dataService.postForm("delete-template-section", this.data.formData).subscribe((data:any)=>{
        this.adding="N";
        this.data=data;
        location.reload();
    });
    }
  }

  postTemplate() { 
    this._dataService.postForm("add-template-section", this.data.formData).subscribe((data:any)=>{
        this.adding="N";
        this.data=data;
        location.reload();
    });
  }

  
    
  file=new FormControl('')
  file_data:any=''

  fileChange(index: any,event: any) {
    
    const fileList: FileList = event.target.files;
    //check whether file is selected or not
    if (fileList.length > 0) {

        const file = fileList[0];
        //get file information such as name, size and type
        console.log('finfo',file.name,file.size,file.type);
        //max file size is 8 mb
        if((file.size/1048576)<=8)
        {
          let formData = new FormData();
          formData.append('file', file, file.name);
          formData.append('section_id',this.section_id);
//            formData.append('user_id',this.data.uid);
           formData.append('template_id',this.template_id);
          this.file_data=formData
          
        }else{
          alert('File size exceeds 8 MB. Please choose less than 8 MB');
        }
        
    }

  }

  ip="https://myna-docs.com/api/"
  
  uploadFile() {
      this._dataService.postTemplate(this.file_data).subscribe((data:any)=>{
        if (data.error_code==0) {
            this.uploading='N'
location.reload()
        }
      }); 
  }

}
