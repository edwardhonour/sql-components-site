import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuFacilityDashboardComponent } from './top-menu-facility-dashboard.component';

describe('TopMenuFacilityDashboardComponent', () => {
  let component: TopMenuFacilityDashboardComponent;
  let fixture: ComponentFixture<TopMenuFacilityDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TopMenuFacilityDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMenuFacilityDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
