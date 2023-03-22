import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityCountrmeasuresPanelComponent } from './facility-countrmeasures-panel.component';

describe('FacilityCountrmeasuresPanelComponent', () => {
  let component: FacilityCountrmeasuresPanelComponent;
  let fixture: ComponentFixture<FacilityCountrmeasuresPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityCountrmeasuresPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityCountrmeasuresPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
