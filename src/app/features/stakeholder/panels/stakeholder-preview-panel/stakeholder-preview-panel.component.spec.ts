import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderPreviewPanelComponent } from './stakeholder-preview-panel.component';

describe('StakeholderPreviewPanelComponent', () => {
  let component: StakeholderPreviewPanelComponent;
  let fixture: ComponentFixture<StakeholderPreviewPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StakeholderPreviewPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StakeholderPreviewPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
