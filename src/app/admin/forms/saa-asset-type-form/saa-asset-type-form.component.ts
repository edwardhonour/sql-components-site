import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule, SqlDataSelectComponent, SqlDeleteComponent, SqlSubmitComponent } from 'sql-components';
import {MatDialogModule} from '@angular/material/dialog';
 
 
@Component({
selector: 'app-saa-asset-type-form',
standalone: true,
imports: [CommonModule, SqlComponentsModule, SqlSubmitComponent, SqlDataSelectComponent, SqlDeleteComponent, MatDialogModule], 
templateUrl: './saa-asset-type-form.component.html',
styleUrls: ['./saa-asset-type-form.component.css']
})
export class SaaAssetTypeFormComponent {
  
}