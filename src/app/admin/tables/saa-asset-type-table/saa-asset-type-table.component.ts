import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule } from 'sql-components';
import { SaaAssetTypeFormComponent } from '../../forms/saa-asset-type-form/saa-asset-type-form.component';
 
 
@Component({
selector: 'app-saa-asset-type-table',
standalone: true,
imports: [CommonModule, SqlComponentsModule, SaaAssetTypeFormComponent], 
templateUrl: './saa-asset-type-table.component.html',
styleUrls: ['./saa-asset-type-table.component.css']
})
export class SaaAssetTypeTableComponent {
  
}