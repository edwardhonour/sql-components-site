import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySaaFormComponent } from './facility-saa-form.component';

describe('FacilitySaaFormComponent', () => {
  let component: FacilitySaaFormComponent;
  let fixture: ComponentFixture<FacilitySaaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilitySaaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilitySaaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
