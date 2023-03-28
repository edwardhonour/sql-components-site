import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { SqlDataSelectComponent, SqlEditorComponent, SqlFormComponent, SqlInputComponent, SqlSubmitComponent } from 'sql-components';

@Component({
  selector: 'app-edit-facility-description-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, SqlEditorComponent, SqlFormComponent, SqlDataSelectComponent, SqlInputComponent, SqlDataSelectComponent, SqlSubmitComponent],
  templateUrl: './edit-facility-description-editor.component.html',
  styleUrls: ['./edit-facility-description-editor.component.scss']
})
export class EditFacilityDescriptionEditorComponent implements OnInit, OnDestroy {

  ngOnInit() {
  }
  
  ngOnDestroy(): void {
    
  }

}
