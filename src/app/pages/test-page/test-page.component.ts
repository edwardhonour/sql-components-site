import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StakeholderContactListComponent } from 'src/app/features/stakeholder/panels/stakeholder-contact-list/stakeholder-contact-list.component';
import { StakeholderContactFormComponent } from 'src/app/features/stakeholder/forms/stakeholder-contact-form/stakeholder-contact-form.component';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [CommonModule, StakeholderContactListComponent, StakeholderContactFormComponent],
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent {

}
