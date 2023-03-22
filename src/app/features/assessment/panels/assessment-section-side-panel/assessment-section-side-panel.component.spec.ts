import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentSectionSidePanelComponent } from './assessment-section-side-panel.component';

describe('AssessmentSectionSidePanelComponent', () => {
  let component: AssessmentSectionSidePanelComponent;
  let fixture: ComponentFixture<AssessmentSectionSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AssessmentSectionSidePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentSectionSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
