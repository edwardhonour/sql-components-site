import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyToolSectionMenuComponent } from './survey-tool-section-menu.component';

describe('SurveyToolSectionMenuComponent', () => {
  let component: SurveyToolSectionMenuComponent;
  let fixture: ComponentFixture<SurveyToolSectionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SurveyToolSectionMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyToolSectionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
