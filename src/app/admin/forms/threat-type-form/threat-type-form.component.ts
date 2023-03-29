import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule, SqlSubmitComponent } from 'sql-components';

@Component({
  selector: 'app-threat-type-form',
  standalone: true,
  imports: [CommonModule, SqlComponentsModule, SqlSubmitComponent],
  templateUrl: './threat-type-form.component.html',
  styleUrls: ['./threat-type-form.component.css']
})
export class ThreatTypeFormComponent {

}
