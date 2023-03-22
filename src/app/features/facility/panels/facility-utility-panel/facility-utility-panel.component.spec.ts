import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityUtilityPanelComponent } from './facility-utility-panel.component';

describe('FacilityUtilityPanelComponent', () => {
  let component: FacilityUtilityPanelComponent;
  let fixture: ComponentFixture<FacilityUtilityPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityUtilityPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityUtilityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
