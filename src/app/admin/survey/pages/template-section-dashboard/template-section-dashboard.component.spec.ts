import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSectionDashboardComponent } from './template-section-dashboard.component';

describe('TemplateSectionDashboardComponent', () => {
  let component: TemplateSectionDashboardComponent;
  let fixture: ComponentFixture<TemplateSectionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TemplateSectionDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateSectionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
