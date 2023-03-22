import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityTenantFormComponent } from './facility-tenant-form.component';

describe('FacilityTenantFormComponent', () => {
  let component: FacilityTenantFormComponent;
  let fixture: ComponentFixture<FacilityTenantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityTenantFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityTenantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
