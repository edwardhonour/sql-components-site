import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityThreatPanelComponent } from './facility-threat-panel.component';

describe('FacilityThreatPanelComponent', () => {
  let component: FacilityThreatPanelComponent;
  let fixture: ComponentFixture<FacilityThreatPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityThreatPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityThreatPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
