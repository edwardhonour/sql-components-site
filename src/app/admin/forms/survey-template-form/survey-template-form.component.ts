import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule, SqlDataSelectComponent, SqlDeleteComponent } from 'sql-components';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-survey-template-form',
  standalone: true,
  imports: [CommonModule, SqlComponentsModule, SqlDeleteComponent, SqlDataSelectComponent, SqlDeleteComponent, MatDialogModule],
  templateUrl: './survey-template-form.component.html',
  styleUrls: ['./survey-template-form.component.css']
})
export class SurveyTemplateFormComponent {

}
