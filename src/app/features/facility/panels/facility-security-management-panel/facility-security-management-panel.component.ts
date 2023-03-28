import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facility-security-management-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facility-security-management-panel.component.html',
  styleUrls: ['./facility-security-management-panel.component.css']
})
export class FacilitySecurityManagementPanelComponent {
  @Input() facility_id: any = '0';
}
