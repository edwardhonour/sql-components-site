import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facility-security-force-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facility-security-force-panel.component.html',
  styleUrls: ['./facility-security-force-panel.component.css']
})
export class FacilitySecurityForcePanelComponent {
  @Input() facility_id: any = '0';
}
