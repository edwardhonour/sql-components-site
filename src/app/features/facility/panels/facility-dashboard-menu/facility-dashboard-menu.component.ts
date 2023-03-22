import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facility-dashboard-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facility-dashboard-menu.component.html',
  styleUrls: ['./facility-dashboard-menu.component.css']
})
export class FacilityDashboardMenuComponent {
  
  @Output() action: EventEmitter<boolean> = new EventEmitter<boolean>();

  clickIt(a: any ) {
    this.action.emit(a);
  }
  
}
