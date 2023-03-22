import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-assessment-card-list-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './assessment-card-list-panel.component.html',
  styleUrls: ['./assessment-card-list-panel.component.css']
})
export class AssessmentCardListPanelComponent {

  @Input() data: any;

}
