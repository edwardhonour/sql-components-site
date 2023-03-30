import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyTemplateFormComponent } from './survey-template-form.component';

describe('SurveyTemplateFormComponent', () => {
  let component: SurveyTemplateFormComponent;
  let fixture: ComponentFixture<SurveyTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SurveyTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
