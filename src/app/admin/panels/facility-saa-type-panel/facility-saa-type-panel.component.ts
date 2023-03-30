import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule, SqlSubmitComponent } from 'sql-components';
import { FacilitySaaFormComponent } from 'src/app/features/facility/forms/facility-saa-form/facility-saa-form.component';
import { FacilitySaaTypeFormComponent } from '../../forms/facility-saa-type-form/facility-saa-type-form.component';

@Component({
  selector: 'app-facility-saa-type-panel',
  standalone: true,
  imports: [CommonModule, SqlComponentsModule, SqlSubmitComponent, FacilitySaaTypeFormComponent],
  templateUrl: './facility-saa-type-panel.component.html',
  styleUrls: ['./facility-saa-type-panel.component.css']
})
export class FacilitySaaTypePanelComponent {

}
