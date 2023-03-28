import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityUtilityDependencyPanelComponent } from './facility-utility-dependency-panel.component';

describe('FacilityUtilityDependencyPanelComponent', () => {
  let component: FacilityUtilityDependencyPanelComponent;
  let fixture: ComponentFixture<FacilityUtilityDependencyPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityUtilityDependencyPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityUtilityDependencyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
