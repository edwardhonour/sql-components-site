import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDashboardNewComponent } from './facility-dashboard-new.component';

describe('FacilityDashboardNewComponent', () => {
  let component: FacilityDashboardNewComponent;
  let fixture: ComponentFixture<FacilityDashboardNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityDashboardNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityDashboardNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
