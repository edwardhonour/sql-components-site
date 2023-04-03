import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule } from 'sql-components';
import { TemplateOptionFormComponent } from '../template-option-form/template-option-form.component'; 

@Component({
  selector: 'app-template-option-table',
  standalone: true,
  imports: [CommonModule, SqlComponentsModule, TemplateOptionFormComponent], 
  templateUrl: './template-option-table.component.html',
  styleUrls: ['./template-option-table.component.css']
})
export class TemplateOptionTableComponent {
 
}


