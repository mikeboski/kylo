/**
 * Created by development on 22/8/17.
 */
import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'dialog-folder',
  template: `
    <h4 >Folder name:</h4>
    <mat-dialog-content>
         <mat-input-container style="width: 100%">
          <input mdInput #nameFolder>
        </mat-input-container>
    </mat-dialog-content>
    <mat-dialog-actions>
         <span fxFlex></span>
      <button
        md-button
        color="primary"
        mat-dialog-close (click)="dialogRef.close(nameFolder.value)">CREATE</button>
    </mat-dialog-actions>`,
})
export class DialogFolder {
  constructor(public dialogRef: MatDialogRef<DialogFolder>) {
  }
}
