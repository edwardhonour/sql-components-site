import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderInfoPanelComponent } from './stakeholder-info-panel.component';

describe('StakeholderInfoPanelComponent', () => {
  let component: StakeholderInfoPanelComponent;
  let fixture: ComponentFixture<StakeholderInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StakeholderInfoPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StakeholderInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
