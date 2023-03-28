import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';

@Component({
  selector: 'app-edit-facility-description-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxEditorModule],
  templateUrl: './edit-facility-description-editor.component.html',
  styleUrls: ['./edit-facility-description-editor.component.scss']
})
export class EditFacilityDescriptionEditorComponent implements OnInit, OnDestroy {

  editor: any;
  editordoc: any;


  html = '';
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  ngOnInit() {
      this.editor = new Editor();
  }

  ngOnDestroy(): void {
    
  }

  cl() {

  }

}
