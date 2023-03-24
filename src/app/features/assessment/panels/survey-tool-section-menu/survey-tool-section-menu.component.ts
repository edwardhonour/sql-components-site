import { Component, EventEmitter, Output, Input, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlDataMenuComponent } from 'sql-components';
   
@Component({
  selector: 'app-survey-tool-section-menu',
  standalone: true,
  imports: [CommonModule, SqlDataMenuComponent],
  templateUrl: './survey-tool-section-menu.component.html',
  styleUrls: ['./survey-tool-section-menu.component.css']
})

export class SurveyToolSectionMenuComponent 
implements OnInit, OnChanges { 
 
   @Output() menuClick: EventEmitter<any> = new EventEmitter<any>(); 
   @Input() id: any = 0; 
  
   processClick(m: any) { 
       this.menuClick.emit(m); 
   } 
   
   ngOnChanges() { 
   console.log(this.id);
    } 
   
   ngOnInit() { 
   console.log(this.id);
   }
   
}
