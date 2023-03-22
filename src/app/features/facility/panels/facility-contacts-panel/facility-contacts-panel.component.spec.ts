import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityContactsPanelComponent } from './facility-contacts-panel.component';

describe('FacilityContactsPanelComponent', () => {
  let component: FacilityContactsPanelComponent;
  let fixture: ComponentFixture<FacilityContactsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityContactsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityContactsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
