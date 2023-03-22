import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule,  FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule } from 'ngx-table-pagination';


import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { VertSideNavComponent } from 'src/app/layout/panels/vert-side-nav/vert-side-nav.component'; 

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-preview-template-list',
  standalone: true,
  imports: [CommonModule, 
    RouterModule, 
    Ng2SearchPipeModule, 
    NgxTablePaginationModule,
    FormsModule,  MatInputModule, VertSideNavComponent,
     MatTableModule,
    MatRadioModule],
  templateUrl: './preview-template-list.component.html',
  styleUrls: ['./preview-template-list.component.scss']
})
export class PreviewTemplateListComponent implements OnInit, OnDestroy
{
  displayedColumns: string[] = ['id', 'template_name', 'click'];
  //navigation: Navigation;
  isScreenSmall!: boolean;
  term: any;
  p: any;
  q: any;
  uploading: any;
  data: any;
  currentYear: any;
  email: any;
  user: any;
  dataSource: any;;
  page_id: string='1';
  panel_id: string='1';
  accordion: any;
  centerClass: any = 'col-xl-9';
  accordion_showing: string = 'N';
  myfacilities_showing: string = 'N';
  cards_showing: string='Y';
  page_showing: string='cards';
  adding: any = 'N';

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  toggleAdd() {
    if (this.adding=='Y') {
      this.adding='N';
    } else {
      this.adding='Y';
    }
  }

     constructor(
      private _activatedRoute: ActivatedRoute,
      private _router: Router,
      private _dataService: DataService,
      public http: HttpClient  // used by upload
  ) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


    ngOnInit(): void
    {      

        this._activatedRoute.data.subscribe(({ 
            data, menudata, userdata })=> { 
            this.data=data;
            this.dataSource = new MatTableDataSource(data.list);
      //      this.navigation=menudata
            this.user=userdata
            this.uploading='N'
            if (this.data.user.force_logout>0) {
                localStorage.removeItem('uid');
                this._router.navigate(['/forced-off',this.data.user.force_logout]);
            }
          }) 
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

    postTemplate() { 
      this._dataService.postForm("add-template", this.data.formData).subscribe((data:any)=>{
          this.adding="N";
          this.data=data;
          location.reload();
      });
    }

}