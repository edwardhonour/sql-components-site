import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDegradedPanelComponent } from './facility-degraded-panel.component';

describe('FacilityDegradedPanelComponent', () => {
  let component: FacilityDegradedPanelComponent;
  let fixture: ComponentFixture<FacilityDegradedPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityDegradedPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityDegradedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
