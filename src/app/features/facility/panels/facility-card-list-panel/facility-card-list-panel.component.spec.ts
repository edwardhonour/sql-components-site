import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityCardListPanelComponent } from './facility-card-list-panel.component';

describe('FacilityCardListPanelComponent', () => {
  let component: FacilityCardListPanelComponent;
  let fixture: ComponentFixture<FacilityCardListPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityCardListPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityCardListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
