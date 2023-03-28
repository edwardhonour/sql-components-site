import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySecurityForcePanelComponent } from './facility-security-force-panel.component';

describe('FacilitySecurityForcePanelComponent', () => {
  let component: FacilitySecurityForcePanelComponent;
  let fixture: ComponentFixture<FacilitySecurityForcePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilitySecurityForcePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilitySecurityForcePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
