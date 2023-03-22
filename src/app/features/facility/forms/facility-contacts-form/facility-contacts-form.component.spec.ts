import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityContactsFormComponent } from './facility-contacts-form.component';

describe('FacilityContactsFormComponent', () => {
  let component: FacilityContactsFormComponent;
  let fixture: ComponentFixture<FacilityContactsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityContactsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityContactsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
