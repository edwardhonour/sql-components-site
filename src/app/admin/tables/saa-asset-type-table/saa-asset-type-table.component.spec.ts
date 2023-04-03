import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaaAssetTypeTableComponent } from './saa-asset-type-table.component';

describe('SaaAssetTypeTableComponent', () => {
  let component: SaaAssetTypeTableComponent;
  let fixture: ComponentFixture<SaaAssetTypeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SaaAssetTypeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaaAssetTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
