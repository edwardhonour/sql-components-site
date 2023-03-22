import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDocumentsPanelComponent } from './facility-documents-panel.component';

describe('FacilityDocumentsPanelComponent', () => {
  let component: FacilityDocumentsPanelComponent;
  let fixture: ComponentFixture<FacilityDocumentsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityDocumentsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityDocumentsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
