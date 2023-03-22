import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewTemplateListComponent } from './preview-template-list.component';

describe('PreviewTemplateListComponent', () => {
  let component: PreviewTemplateListComponent;
  let fixture: ComponentFixture<PreviewTemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PreviewTemplateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
