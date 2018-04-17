/**
 * Created by development on 18/9/17.
 */
import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-add-files-url-dialog',
  styleUrls: ['js/medikly/project-workspace/dialog/add-files-url/add-files-url.dialog.css'],
  template: `
    <div class="dialog-content">
    <h2 mat-dialog-title>Add files via URL</h2>
    
    <mat-dialog-content>
    
       <form [formGroup]="form">
          <div class="mb-1">
            <mat-input-container style="width: 75%">
              <input mdInput placeholder="Paste URL" [formControl]="form.controls['url']" type="url">
            </mat-input-container>
          <button color="primary" [disabled]="!form.controls.url.valid" *ngIf="!urlAdded" md-raised-button (click)="addToFiles(form.value)">ADD</button>
          <button md-button color="primary" *ngIf="urlAdded" (click)="removeFile(form.value)">REMOVE</button>
          </div>
          <div class="mb-1">
          <mat-input-container style="width: 100%" *ngIf="urlAdded">
            <input mdInput placeholder="File name" [formControl]="form.controls['fname']">
          </mat-input-container>
          <small *ngIf="form.controls['fname'].hasError('required') && form.controls['fname'].touched" class="mat-text-warn">
          Add the extension type if you know it.</small>
        </div>
   
      </form>
    </mat-dialog-content>   
     
     </div>
    <mat-dialog-actions>
         <span fxFlex></span>
            <button
        md-button
          color="warn"
        class="mr-1"
        mat-dialog-close>CANCEL</button>
            <button
        md-button
        color="primary" [disabled]="!form.valid"
        mat-dialog-close="true" >SAVE</button>
    </mat-dialog-actions>
  `
})
export class DialogAddFilesUrl implements OnInit {

  public form: FormGroup;
  files: any = [];
  urlAdded: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogAddFilesUrl>, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      url: [null, Validators.compose([Validators.required])],
      fname: [null, Validators.compose([Validators.required])],
    });
  }

  addToFiles(file){
    this.files.push(file);
    this.urlAdded = true;

    let split = file.url.split("/");
    if(split.length>0){
      let index = split.length-1;
      this.form.controls['fname'].setValue(split[index]);
    }
  }

  removeFile(file){
    let index: number = this.files.indexOf(file);
    if (index !== -1) {
      this.files.splice(index, 1);
    }
    this.form.reset();
  }

}
