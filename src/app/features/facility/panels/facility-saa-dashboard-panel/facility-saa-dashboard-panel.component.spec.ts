import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySaaDashboardPanelComponent } from './facility-saa-dashboard-panel.component';

describe('FacilitySaaDashboardPanelComponent', () => {
  let component: FacilitySaaDashboardPanelComponent;
  let fixture: ComponentFixture<FacilitySaaDashboardPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilitySaaDashboardPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilitySaaDashboardPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
