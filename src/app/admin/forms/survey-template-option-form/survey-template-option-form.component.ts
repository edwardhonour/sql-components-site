import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule, SqlDataSelectComponent, SqlDeleteComponent } from 'sql-components';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-survey-template-option-form',
  standalone: true,
  imports: [CommonModule, SqlComponentsModule, SqlDeleteComponent, SqlDataSelectComponent, SqlDeleteComponent, MatDialogModule],
  templateUrl: './survey-template-option-form.component.html',
  styleUrls: ['./survey-template-option-form.component.css']
})
export class SurveyTemplateOptionFormComponent {

}
