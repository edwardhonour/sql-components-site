import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StakeholderContactListComponent } from 'src/app/features/stakeholder/panels/stakeholder-contact-list/stakeholder-contact-list.component';
import { StakeholderContactFormComponent } from 'src/app/features/stakeholder/forms/stakeholder-contact-form/stakeholder-contact-form.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SQLDataService, SqlFormComponent, SqlInputComponent, SqlPanelComponent } from 'sql-components';
import { ThreatTypeFormComponent } from 'src/app/admin/forms/threat-type-form/threat-type-form.component';
import { ThreatTypePanelComponent } from 'src/app/admin/panels/threat-type-panel/threat-type-panel.component';
import { FacilitySaaTypePanelComponent } from 'src/app/admin/panels/facility-saa-type-panel/facility-saa-type-panel.component';
import { SaaAssetTypeTableComponent } from 'src/app/admin/tables/saa-asset-type-table/saa-asset-type-table.component';
import { TemplateOptionTableComponent } from 'src/app/admin/template-option-table/template-option-table.component';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [CommonModule, StakeholderContactListComponent, StakeholderContactFormComponent, SaaAssetTypeTableComponent,
      RouterModule, ThreatTypeFormComponent, FacilitySaaTypePanelComponent, TemplateOptionTableComponent,
      ThreatTypePanelComponent,
            SqlPanelComponent, SqlFormComponent, SqlInputComponent],
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

      data: any;

     constructor(
      private _activatedRoute: ActivatedRoute,
      private _sqlDataService: SQLDataService,
      private _router: Router
  ) { }

  ngOnInit(): void {
        this._activatedRoute.data.subscribe(({ 
        parameters })=> { 
              console.log('results')
              console.log(parameters)
              let params = { page: '', id: parameters.id, id2: parameters.id2, id3: parameters.id3 }
              this._sqlDataService.paramSubject.next(params);
        })   
        this._sqlDataService.pageSubject.subscribe((data: any) => {
            console.log('page Subject');
            this.data=data;
        })
  }

}
