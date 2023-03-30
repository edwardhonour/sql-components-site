import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule, SqlDataSelectComponent, SqlSubmitComponent } from 'sql-components';

@Component({
  selector: 'app-facility-saa-type-form',
  standalone: true,
  imports: [CommonModule, SqlComponentsModule, SqlSubmitComponent, SqlDataSelectComponent],
  templateUrl: './facility-saa-type-form.component.html',
  styleUrls: ['./facility-saa-type-form.component.css']
})
export class FacilitySaaTypeFormComponent {

}
