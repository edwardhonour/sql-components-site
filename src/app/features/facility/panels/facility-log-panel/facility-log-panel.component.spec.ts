import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityLogPanelComponent } from './facility-log-panel.component';

describe('FacilityLogPanelComponent', () => {
  let component: FacilityLogPanelComponent;
  let fixture: ComponentFixture<FacilityLogPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityLogPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityLogPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
