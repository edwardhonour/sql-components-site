import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentCardListPanelComponent } from './assessment-card-list-panel.component';

describe('AssessmentCardListPanelComponent', () => {
  let component: AssessmentCardListPanelComponent;
  let fixture: ComponentFixture<AssessmentCardListPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AssessmentCardListPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentCardListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
