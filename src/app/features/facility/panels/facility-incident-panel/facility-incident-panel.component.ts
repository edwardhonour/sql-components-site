import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facility-incident-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facility-incident-panel.component.html',
  styleUrls: ['./facility-incident-panel.component.css']
})
export class FacilityIncidentPanelComponent {

  @Input() facility_id: any;

}
