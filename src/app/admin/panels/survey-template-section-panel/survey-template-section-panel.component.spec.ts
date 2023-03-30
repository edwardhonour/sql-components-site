import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyTemplateSectionPanelComponent } from './survey-template-section-panel.component';

describe('SurveyTemplateSectionPanelComponent', () => {
  let component: SurveyTemplateSectionPanelComponent;
  let fixture: ComponentFixture<SurveyTemplateSectionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SurveyTemplateSectionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyTemplateSectionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
