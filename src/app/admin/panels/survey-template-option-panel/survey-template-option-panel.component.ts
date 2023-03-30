import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule } from 'sql-components';
import { SurveyTemplateOptionFormComponent } from '../../forms/survey-template-option-form/survey-template-option-form.component';

@Component({
  selector: 'app-survey-template-option-panel',
  standalone: true,
  imports: [CommonModule, SqlComponentsModule, SurveyTemplateOptionFormComponent],
  templateUrl: './survey-template-option-panel.component.html',
  styleUrls: ['./survey-template-option-panel.component.css']
})
export class SurveyTemplateOptionPanelComponent {

}
