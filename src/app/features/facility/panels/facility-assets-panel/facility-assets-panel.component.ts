import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facility-assets-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facility-assets-panel.component.html',
  styleUrls: ['./facility-assets-panel.component.css']
})
export class FacilityAssetsPanelComponent {

  @Input() facility_id: any;
  
}
