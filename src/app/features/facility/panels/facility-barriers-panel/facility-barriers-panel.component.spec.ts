import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityBarriersPanelComponent } from './facility-barriers-panel.component';

describe('FacilityBarriersPanelComponent', () => {
  let component: FacilityBarriersPanelComponent;
  let fixture: ComponentFixture<FacilityBarriersPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityBarriersPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityBarriersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
