import { Component, Input, Output, EventEmitter, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlTableComponent, SqlEditTableComponent, SqlAddTableComponent } from 'sql-components';
import { StakeholderContactFormComponent } from '../../forms/stakeholder-contact-form/stakeholder-contact-form.component';

@Component({
  selector: 'app-stakeholder-contact-list',
  standalone: true,
  imports: [CommonModule, SqlTableComponent, SqlEditTableComponent, StakeholderContactFormComponent, SqlAddTableComponent],
  templateUrl: './stakeholder-contact-list.component.html',
  styleUrls: ['./stakeholder-contact-list.component.css']
})

export class StakeholderContactListComponent 
implements OnInit, OnChanges, OnDestroy {

  @Input() title: any;
  @Input() id: any;
  m: any;

  constructor () { }

  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    
  }

  buttonClick(m: any) {
    console.log('button');
    console.log(m);
  }

  rowClick(m: any) {
    console.log('row');
    console.log(m);
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
  
}
