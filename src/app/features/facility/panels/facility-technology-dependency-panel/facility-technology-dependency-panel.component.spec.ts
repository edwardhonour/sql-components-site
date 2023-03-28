import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityTechnologyDependencyPanelComponent } from './facility-technology-dependency-panel.component';

describe('FacilityTechnologyDependencyPanelComponent', () => {
  let component: FacilityTechnologyDependencyPanelComponent;
  let fixture: ComponentFixture<FacilityTechnologyDependencyPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityTechnologyDependencyPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityTechnologyDependencyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
