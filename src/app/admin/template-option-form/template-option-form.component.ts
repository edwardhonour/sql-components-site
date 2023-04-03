import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule, SqlDataSelectComponent, SqlDeleteComponent, SqlSubmitComponent } from 'sql-components';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-template-option-form',
  standalone: true,
  imports: [CommonModule, SqlComponentsModule, SqlSubmitComponent, SqlDataSelectComponent, SqlDeleteComponent, MatDialogModule], 
  templateUrl: './template-option-form.component.html',
  styleUrls: ['./template-option-form.component.css']
 })
 export class TemplateOptionFormComponent {
 
}


