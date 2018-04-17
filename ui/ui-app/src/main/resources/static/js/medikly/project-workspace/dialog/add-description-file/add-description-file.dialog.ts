/**
 * Created by development on 18/9/17.
 */
import {Component, OnInit, Input} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-description-file-dialog',
  styleUrls: ['js/medikly/project-workspace/dialog/add-description-file/add-description-file.dialog.css'],
  template: `
   <div class="dialog-content">
   

    <h2 md-dialog-title class="mb-0">{{item.file.name}}</h2>
    <span>{{this.Math.round(item.file.size/1024)}} kb</span>
    
    <md-dialog-content class="pt-2 pb-2">
    
          <form [formGroup]="form">

          <div class="mb-1">
            <md-input-container style="width: 100%">
              <textarea mdInput
                     placeholder="Description ({{!form._value.description || form._value.description.length==0 ? 'max. '+maxDescription : maxDescription-form.value.description.length}})"
                     [formControl]="form.controls['description']" maxlength="{{maxDescription}}"> </textarea>
            </md-input-container>
          </div>
            </form>
        
       <div fxLayout="row" fxLayout.xs="column" fxLayoutWrap="wrap" > 
        <div fxFlex="33" *ngFor="let chip of chips">
        <md-chip-list selectable="false" class="chips-description-file">
           <md-checkbox [checked]="chip.checked" [(ngModel)]="chip.checked">
          <md-chip color="accent" selected="true" class="{{chip.color}}-color">{{chip.name}}</md-chip>
        </md-checkbox>
         </md-chip-list>
           </div>
           </div> 
    </md-dialog-content>   

   </div>
   
      <md-dialog-actions>
         <span fxFlex></span>
            <button
        md-button
          color="warn"
        md-dialog-close="false">CANCEL</button>
        
         <button
          md-button
          color="primary"
          (click)="saveChanges()"
          [disabled]="!form.valid">SAVE
         
        </button>
         
    </md-dialog-actions>

  `
})
export class DialogAddDescriptionFile implements OnInit {
  @Input('item') item: any;
  Math: any;
  public form: FormGroup;
  maxDescription: number = 240;
  chips: any;

  constructor(public dialogRef: MatDialogRef<DialogAddDescriptionFile>, private fb: FormBuilder) {
      this.dialogRef
  }

  ngOnInit() {
    this.Math = Math;

    this.chips = [
      {
        name: 'raw data',
        checked: false,
        color: 'light-blue',
      },
      {
        name: 'documentation',
        checked: false,
        color: 'rose',
      },
      {
        name: 'visualization',
        checked: false,
        color: 'yellow',
      },
      {
        name: 'clean data',
        checked: false,
        color: 'yellow',
      },
      {
        name: 'script',
        checked: false,
        color: 'purple',
      },
      {
        name: 'report',
        checked: false,
        color: 'orange',
      }
    ];

    this.form = this.fb.group({
      description: [ this.item!=undefined && this.item.file.description != '' ? this.item.file.description : '' , Validators.compose([Validators.maxLength(this.maxDescription)])],
    });

    this.setLabelsChecked();
  }

  saveChanges(){
    this.item.file.description = this.form.value.description;
    this.item.file.labels = this.getLabelsChecked();
    this.dialogRef.close(true);
  }

  getLabelsChecked() {
    let array = this.chips.filter(item => item.checked ==true);
    return array;
  }

  setLabelsChecked(){
    for (let label of this.item.file.labels) {
      this.chips.filter((item: any) => {
        if (label.name === item.name) {
          item.checked = true;
        }
      })
    }
  }

}
