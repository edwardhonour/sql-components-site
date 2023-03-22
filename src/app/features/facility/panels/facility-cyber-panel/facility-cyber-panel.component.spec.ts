import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityCyberPanelComponent } from './facility-cyber-panel.component';

describe('FacilityCyberPanelComponent', () => {
  let component: FacilityCyberPanelComponent;
  let fixture: ComponentFixture<FacilityCyberPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityCyberPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityCyberPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
