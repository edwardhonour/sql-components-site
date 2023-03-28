import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySecurityManagementPanelComponent } from './facility-security-management-panel.component';

describe('FacilitySecurityManagementPanelComponent', () => {
  let component: FacilitySecurityManagementPanelComponent;
  let fixture: ComponentFixture<FacilitySecurityManagementPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilitySecurityManagementPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilitySecurityManagementPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
