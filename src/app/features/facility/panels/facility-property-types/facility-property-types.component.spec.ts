import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityPropertyTypesComponent } from './facility-property-types.component';

describe('FacilityPropertyTypesComponent', () => {
  let component: FacilityPropertyTypesComponent;
  let fixture: ComponentFixture<FacilityPropertyTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityPropertyTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityPropertyTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
