import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityRecommendedPanelComponent } from './facility-recommended-panel.component';

describe('FacilityRecommendedPanelComponent', () => {
  let component: FacilityRecommendedPanelComponent;
  let fixture: ComponentFixture<FacilityRecommendedPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityRecommendedPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityRecommendedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
