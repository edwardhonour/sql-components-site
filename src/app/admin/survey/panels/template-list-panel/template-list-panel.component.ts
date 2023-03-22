import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-template-list-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './template-list-panel.component.html',
  styleUrls: ['./template-list-panel.component.css']
})
export class TemplateListPanelComponent implements OnChanges, OnInit {
    
  @Input() id: any = '-2';
  @Output() selection: EventEmitter<any> = new EventEmitter<any>();

  adding: any = 'N';
  data: any;
  old_id: any = -1;
 
  ngOnChanges() {
    console.log(this.id);
    console.log(this.old_id);
    if (this.id!=this.old_id) {
      this.getTemplateList()
      this.old_id=this.id;
    }
  }

  ngOnInit(): void {
    
  }

constructor(
private _dataService: DataService
) { }


doClick(m: any) {
    console.log(m);
    this.selection.emit(m);
}

getTemplateList() {
  let inputForm: any = {
    id: this.id
  }
  this._dataService.postForm("get-template-list", inputForm).subscribe((data:any)=>{
    this.data=data;
  });
}

}

