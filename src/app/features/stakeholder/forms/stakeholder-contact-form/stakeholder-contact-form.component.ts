import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlCheckboxComponent, SqlDatepickerComponent, SqlDefaultValueComponent, SqlFormComponent, SqlInputComponent, SqlRadioGroupComponent, SqlSubmitComponent } from 'sql-components';

@Component({
  selector: 'app-stakeholder-contact-form',
  standalone: true,
  imports: [CommonModule, SqlFormComponent, SqlInputComponent, SqlRadioGroupComponent,
  SqlDatepickerComponent, SqlCheckboxComponent, SqlSubmitComponent, SqlDefaultValueComponent],
  templateUrl: './stakeholder-contact-form.component.html',
  styleUrls: ['./stakeholder-contact-form.component.css']
})
export class StakeholderContactFormComponent {

  @Input() id: any = '0';

}
