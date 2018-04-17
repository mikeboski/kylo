/**
 * Created by development on 23/8/17.
 */
import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('');
@Component({
  selector: 'app-demo-content-element-dialog',
  styles: [
    `img {
      max-width: 100%;
    }`
  ],
  template: `
    <h2 mat-dialog-title>Create Project</h2>
    <mat-dialog-content>
 
    </mat-dialog-content>
    <mat-dialog-actions>
         <span fxFlex></span>
            <button
        md-button
        color="warn"
        mat-dialog-close>CANCEL</button>
            <button
        md-button
        color="primary"
        mat-dialog-close="true">OK</button>
    </mat-dialog-actions>
  `
})
export class DialogCreate implements OnInit {
  actionsAlignment: string;
  public form: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogCreate>, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      email: [null, Validators.compose([Validators.required])],
      range: [null, Validators.compose([Validators.required])],
      url: [null, Validators.compose([Validators.required])],
      date: [null, Validators.compose([Validators.required])],
      creditCard: [null, Validators.compose([Validators.required])],
      phone: [null, Validators.compose([Validators.required])],
      gender: [null, Validators.required],
      password: password,
      confirmPassword: confirmPassword
    });
  }

}
