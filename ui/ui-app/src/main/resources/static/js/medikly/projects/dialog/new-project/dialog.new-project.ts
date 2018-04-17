/**
 * Created by development on 18/9/17.
 */
/**
 * Created by development on 23/8/17.
 */
import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-content-element-dialog',
  templateUrl: 'js/medikly/projects/dialog/new-project/dialog.new-project.html',
  styleUrls: ['js/medikly/projects/dialog/new-project/dialog.new-project.css'],
})
export class DialogNewProject implements OnInit {
  actionsAlignment: string;
  public form: FormGroup;
  privacy: string = "open";
  maxName: number = 60;
  maxObjective: number = 120;

  constructor(public dialogRef: MatDialogRef<DialogNewProject>, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(this.maxName)])],
      objective: [null, Validators.compose([Validators.minLength(2), Validators.maxLength(this.maxObjective)])],
      privacy: [null, Validators.required],
    });
  }

  openProjectTemplate(){
    console.log('cerrado');
    this.dialogRef.close();
    //this.router.navigate(['/projects/view/'+0]);
  }

}
