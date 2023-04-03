import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaaAssetTypeFormComponent } from './saa-asset-type-form.component';

describe('SaaAssetTypeFormComponent', () => {
  let component: SaaAssetTypeFormComponent;
  let fixture: ComponentFixture<SaaAssetTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SaaAssetTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaaAssetTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
