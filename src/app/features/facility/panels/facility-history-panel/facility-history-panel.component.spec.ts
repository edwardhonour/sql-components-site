import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityHistoryPanelComponent } from './facility-history-panel.component';

describe('FacilityHistoryPanelComponent', () => {
  let component: FacilityHistoryPanelComponent;
  let fixture: ComponentFixture<FacilityHistoryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityHistoryPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityHistoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
