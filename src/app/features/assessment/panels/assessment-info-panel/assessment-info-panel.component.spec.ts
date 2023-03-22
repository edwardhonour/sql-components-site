import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentInfoPanelComponent } from './assessment-info-panel.component';

describe('AssessmentInfoPanelComponent', () => {
  let component: AssessmentInfoPanelComponent;
  let fixture: ComponentFixture<AssessmentInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AssessmentInfoPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
