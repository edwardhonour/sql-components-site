import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityAssessmentHistoryPanelComponent } from './facility-assessment-history-panel.component';

describe('FacilityAssessmentHistoryPanelComponent', () => {
  let component: FacilityAssessmentHistoryPanelComponent;
  let fixture: ComponentFixture<FacilityAssessmentHistoryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityAssessmentHistoryPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityAssessmentHistoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
