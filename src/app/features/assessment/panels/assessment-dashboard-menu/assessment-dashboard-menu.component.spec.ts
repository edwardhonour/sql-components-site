import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentDashboardMenuComponent } from './assessment-dashboard-menu.component';

describe('AssessmentDashboardMenuComponent', () => {
  let component: AssessmentDashboardMenuComponent;
  let fixture: ComponentFixture<AssessmentDashboardMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AssessmentDashboardMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentDashboardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
