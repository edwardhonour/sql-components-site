import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderContactFormComponent } from './stakeholder-contact-form.component';

describe('StakeholderContactFormComponent', () => {
  let component: StakeholderContactFormComponent;
  let fixture: ComponentFixture<StakeholderContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StakeholderContactFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StakeholderContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
