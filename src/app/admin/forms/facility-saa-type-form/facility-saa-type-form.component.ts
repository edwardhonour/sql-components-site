import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule, SqlDataSelectComponent, SqlDeleteComponent, SqlSubmitComponent } from 'sql-components';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-facility-saa-type-form',
  standalone: true,
  imports: [CommonModule, SqlComponentsModule, SqlSubmitComponent, SqlDataSelectComponent, SqlDeleteComponent, MatDialogModule],
  templateUrl: './facility-saa-type-form.component.html',
  styleUrls: ['./facility-saa-type-form.component.css']
})
export class FacilitySaaTypeFormComponent {

}
