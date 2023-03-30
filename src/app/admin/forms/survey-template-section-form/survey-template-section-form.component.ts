import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule, SqlDataSelectComponent, SqlDeleteComponent } from 'sql-components';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-survey-template-section-form',
  standalone: true,
  imports: [CommonModule, SqlComponentsModule, SqlDeleteComponent, SqlDataSelectComponent, MatDialogModule],
  templateUrl: './survey-template-section-form.component.html',
  styleUrls: ['./survey-template-section-form.component.css']
})
export class SurveyTemplateSectionFormComponent {

}
