import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facility-technology-dependency-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facility-technology-dependency-panel.component.html',
  styleUrls: ['./facility-technology-dependency-panel.component.css']
})
export class FacilityTechnologyDependencyPanelComponent {
@Input() facility_id: any = '0';
}
