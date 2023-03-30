import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule } from 'sql-components';
import { SurveyTemplateFormComponent } from '../../forms/survey-template-form/survey-template-form.component';

@Component({
  selector: 'app-survey-template-panel',
  standalone: true,
  imports: [CommonModule, SqlComponentsModule, SurveyTemplateFormComponent],
  templateUrl: './survey-template-panel.component.html',
  styleUrls: ['./survey-template-panel.component.css']
})
export class SurveyTemplatePanelComponent {

}
