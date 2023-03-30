import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySaaTypeFormComponent } from './facility-saa-type-form.component';

describe('FacilitySaaTypeFormComponent', () => {
  let component: FacilitySaaTypeFormComponent;
  let fixture: ComponentFixture<FacilitySaaTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilitySaaTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilitySaaTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
