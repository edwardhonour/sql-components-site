import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule,  FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule } from 'ngx-table-pagination';

import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { VertSideNavComponent } from 'src/app/layout/panels/vert-side-nav/vert-side-nav.component'; 

@Component({
  selector: 'app-template-dashboard',
  standalone: true,
  imports: [CommonModule, 
    RouterModule, 
    Ng2SearchPipeModule, 
    NgxTablePaginationModule,ReactiveFormsModule,
    FormsModule,  MatTableModule, VertSideNavComponent,
   MatRadioModule],
  templateUrl: './template-dashboard.component.html',
  styleUrls: ['./template-dashboard.component.css']
})
export class TemplateDashboardComponent implements OnInit, OnDestroy
{
  displayedColumns: string[] = ['ID', 'SECTION_NAME', 'SECTION_ORDER', 'CLICK', 'CLICK2'];
  dataSource: any;
  data: any;
  uploading: any = 'N';
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
  adding: any = 'N';

  isScreenSmall!: boolean;
  q: any;
  currentYear: any;
  email: any;
  user: any;
  index: any;
  dsc: any;
  doc_file: any;
  doc_title: any;
  template_id: any;
  section_id: any;

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
 //             this.navigation=menudata
              this.user=userdata
              this.uploading='N'
              this.data=data;
              this.template_id = this.data.formData['template_id'];
              this.dataSource = new MatTableDataSource(data.list);
              if (this.data.user.force_logout>0) {
                  localStorage.removeItem('uid');
                  this._router.navigate(['/forced-off',this.data.user.force_logout]);
              }
            }) 
    }

    toggleAdd() {
      if (this.adding=='Y') {
        this.adding='N';
      } else {
        this.adding='Y';
      }
    }

    showUpload() {
      if (this.uploading=='Y') {
        this.uploading='N';
      } else {
        this.uploading='Y';
      }
    }

    doEdit(m: any) {
      this.data.formData['id']=m.id;
      this.data.formData['section_name']=m.section_name;
      this.data.formData['section_order']=m.section_order;
      this.adding='Y';
    }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


    ngOnDestroy(): void
    {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
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
              window.open(
                "https://myna-docs.com/api/"+data.filename);
          }
        }); 
    }
  
}
