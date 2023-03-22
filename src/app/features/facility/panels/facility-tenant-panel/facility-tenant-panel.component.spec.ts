import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityTenantPanelComponent } from './facility-tenant-panel.component';

describe('FacilityTenantPanelComponent', () => {
  let component: FacilityTenantPanelComponent;
  let fixture: ComponentFixture<FacilityTenantPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityTenantPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityTenantPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
