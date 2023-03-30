import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsComponent, SqlComponentsModule } from 'sql-components';
import { SurveyTemplateFormComponent } from '../../forms/survey-template-form/survey-template-form.component';
import { SurveyTemplateSectionFormComponent } from '../../forms/survey-template-section-form/survey-template-section-form.component';

@Component({
  selector: 'app-survey-template-section-panel',
  standalone: true,
  imports: [CommonModule, SqlComponentsModule, SurveyTemplateSectionFormComponent],
  templateUrl: './survey-template-section-panel.component.html',
  styleUrls: ['./survey-template-section-panel.component.css']
})
export class SurveyTemplateSectionPanelComponent {

}
