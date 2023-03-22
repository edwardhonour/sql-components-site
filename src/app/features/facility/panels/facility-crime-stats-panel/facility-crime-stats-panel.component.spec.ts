import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityCrimeStatsPanelComponent } from './facility-crime-stats-panel.component';

describe('FacilityCrimeStatsPanelComponent', () => {
  let component: FacilityCrimeStatsPanelComponent;
  let fixture: ComponentFixture<FacilityCrimeStatsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityCrimeStatsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityCrimeStatsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
