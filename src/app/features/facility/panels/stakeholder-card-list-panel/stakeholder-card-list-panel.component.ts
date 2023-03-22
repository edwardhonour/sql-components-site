import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-stakeholder-card-list-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './stakeholder-card-list-panel.component.html',
  styleUrls: ['./stakeholder-card-list-panel.component.css']
})
export class StakeholderCardListPanelComponent {
@Input() data: any;

}
