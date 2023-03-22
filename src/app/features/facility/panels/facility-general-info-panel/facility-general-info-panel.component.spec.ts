import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityGeneralInfoPanelComponent } from './facility-general-info-panel.component';

describe('FacilityGeneralInfoPanelComponent', () => {
  let component: FacilityGeneralInfoPanelComponent;
  let fixture: ComponentFixture<FacilityGeneralInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityGeneralInfoPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityGeneralInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
