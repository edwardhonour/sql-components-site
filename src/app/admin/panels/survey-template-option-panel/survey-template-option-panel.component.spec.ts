import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyTemplateOptionPanelComponent } from './survey-template-option-panel.component';

describe('SurveyTemplateOptionPanelComponent', () => {
  let component: SurveyTemplateOptionPanelComponent;
  let fixture: ComponentFixture<SurveyTemplateOptionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SurveyTemplateOptionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyTemplateOptionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
