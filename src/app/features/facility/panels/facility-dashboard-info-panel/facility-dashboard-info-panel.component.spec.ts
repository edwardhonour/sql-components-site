import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDashboardInfoPanelComponent } from './facility-dashboard-info-panel.component';

describe('FacilityDashboardInfoPanelComponent', () => {
  let component: FacilityDashboardInfoPanelComponent;
  let fixture: ComponentFixture<FacilityDashboardInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityDashboardInfoPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityDashboardInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
