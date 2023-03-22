import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityMapPanelComponent } from './facility-map-panel.component';

describe('FacilityMapPanelComponent', () => {
  let component: FacilityMapPanelComponent;
  let fixture: ComponentFixture<FacilityMapPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityMapPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityMapPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
