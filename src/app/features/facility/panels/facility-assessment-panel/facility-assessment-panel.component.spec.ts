import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityAssessmentPanelComponent } from './facility-assessment-panel.component';

describe('FacilityAssessmentPanelComponent', () => {
  let component: FacilityAssessmentPanelComponent;
  let fixture: ComponentFixture<FacilityAssessmentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityAssessmentPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityAssessmentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
