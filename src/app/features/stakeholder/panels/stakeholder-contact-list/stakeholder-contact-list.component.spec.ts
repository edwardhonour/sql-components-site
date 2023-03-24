import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderContactListComponent } from './stakeholder-contact-list.component';

describe('StakeholderContactListComponent', () => {
  let component: StakeholderContactListComponent;
  let fixture: ComponentFixture<StakeholderContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StakeholderContactListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StakeholderContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
