import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityAssetFormComponent } from './facility-asset-form.component';

describe('FacilityAssetFormComponent', () => {
  let component: FacilityAssetFormComponent;
  let fixture: ComponentFixture<FacilityAssetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityAssetFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityAssetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
