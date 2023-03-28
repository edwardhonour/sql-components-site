import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facility-utility-dependency-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facility-utility-dependency-panel.component.html',
  styleUrls: ['./facility-utility-dependency-panel.component.css']
})
export class FacilityUtilityDependencyPanelComponent {
  @Input() facility_id: any = '0';
}
