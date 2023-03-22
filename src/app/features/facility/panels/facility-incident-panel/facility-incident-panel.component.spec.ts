import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityIncidentPanelComponent } from './facility-incident-panel.component';

describe('FacilityIncidentPanelComponent', () => {
  let component: FacilityIncidentPanelComponent;
  let fixture: ComponentFixture<FacilityIncidentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityIncidentPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityIncidentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
