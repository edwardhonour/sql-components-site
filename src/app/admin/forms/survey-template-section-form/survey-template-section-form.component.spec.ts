import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyTemplateSectionFormComponent } from './survey-template-section-form.component';

describe('SurveyTemplateSectionFormComponent', () => {
  let component: SurveyTemplateSectionFormComponent;
  let fixture: ComponentFixture<SurveyTemplateSectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SurveyTemplateSectionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyTemplateSectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
