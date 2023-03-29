import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule } from 'sql-components';
import { ThreatTypeFormComponent } from '../../forms/threat-type-form/threat-type-form.component';

@Component({
  selector: 'app-threat-type-panel',
  standalone: true,
  imports: [CommonModule, SqlComponentsModule, ThreatTypeFormComponent],
  templateUrl: './threat-type-panel.component.html',
  styleUrls: ['./threat-type-panel.component.css']
})
export class ThreatTypePanelComponent {

}
