import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlMenuComponent } from 'sql-components';

@Component({
  selector: 'app-assessment-dashboard-menu',
  standalone: true,
  imports: [CommonModule, SqlMenuComponent],
  templateUrl: './assessment-dashboard-menu.component.html',
  styleUrls: ['./assessment-dashboard-menu.component.css']
})

export class AssessmentDashboardMenuComponent {
  @Output() menuClick: EventEmitter<any> = new EventEmitter<any>(); 

  processClick(m: any) {
     console.log('the component');
     console.log(m);
     this.menuClick.emit(m);
  }

}
