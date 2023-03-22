import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-facility-asset-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './facility-asset-form.component.html',
  styleUrls: ['./facility-asset-form.component.css']
})
export class FacilityAssetFormComponent {

}
