import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlCheckboxComponent, SqlDatepickerComponent, SqlFormComponent, SqlInputComponent, SqlRadioGroupComponent, SqlSelectComponent, SqlSubmitComponent } from 'sql-components';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-stakeholder-contact-form',
  standalone: true,
  imports: [CommonModule, SqlFormComponent, SqlInputComponent, SqlRadioGroupComponent,
  SqlDatepickerComponent, SqlCheckboxComponent, SqlSubmitComponent, SqlSelectComponent, MatOptionModule],
  templateUrl: './stakeholder-contact-form.component.html',
  styleUrls: ['./stakeholder-contact-form.component.css']
})
export class StakeholderContactFormComponent {

  @Input() id: any = '0';

}
