import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityIlluminationPanelComponent } from './facility-illumination-panel.component';

describe('FacilityIlluminationPanelComponent', () => {
  let component: FacilityIlluminationPanelComponent;
  let fixture: ComponentFixture<FacilityIlluminationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityIlluminationPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityIlluminationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
