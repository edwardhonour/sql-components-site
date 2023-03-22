import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityParkingPanelComponent } from './facility-parking-panel.component';

describe('FacilityParkingPanelComponent', () => {
  let component: FacilityParkingPanelComponent;
  let fixture: ComponentFixture<FacilityParkingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityParkingPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityParkingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
