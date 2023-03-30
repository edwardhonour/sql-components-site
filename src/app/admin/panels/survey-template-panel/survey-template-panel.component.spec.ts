import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyTemplatePanelComponent } from './survey-template-panel.component';

describe('SurveyTemplatePanelComponent', () => {
  let component: SurveyTemplatePanelComponent;
  let fixture: ComponentFixture<SurveyTemplatePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SurveyTemplatePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyTemplatePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
