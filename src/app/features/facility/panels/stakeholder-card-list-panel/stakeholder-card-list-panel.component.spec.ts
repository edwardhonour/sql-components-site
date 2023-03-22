import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderCardListPanelComponent } from './stakeholder-card-list-panel.component';

describe('StakeholderCardListPanelComponent', () => {
  let component: StakeholderCardListPanelComponent;
  let fixture: ComponentFixture<StakeholderCardListPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StakeholderCardListPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StakeholderCardListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
