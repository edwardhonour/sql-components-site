import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateListPanelComponent } from './template-list-panel.component';

describe('TemplateListPanelComponent', () => {
  let component: TemplateListPanelComponent;
  let fixture: ComponentFixture<TemplateListPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TemplateListPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
