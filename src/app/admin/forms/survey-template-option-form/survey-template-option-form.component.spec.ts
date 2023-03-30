import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyTemplateOptionFormComponent } from './survey-template-option-form.component';

describe('SurveyTemplateOptionFormComponent', () => {
  let component: SurveyTemplateOptionFormComponent;
  let fixture: ComponentFixture<SurveyTemplateOptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SurveyTemplateOptionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyTemplateOptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
