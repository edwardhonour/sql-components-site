import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityIncidentFormComponent } from './facility-incident-form.component';

describe('FacilityIncidentFormComponent', () => {
  let component: FacilityIncidentFormComponent;
  let fixture: ComponentFixture<FacilityIncidentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityIncidentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityIncidentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
