/**
 * Created by development on 22/8/17.
 */
import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'dialog-label',
  template: `
    <h4 >Label name:</h4>
    <mat-dialog-content>
         <mat-input-container style="width: 100%">
          <input mdInput #nameLabel>
        </mat-input-container>
    </mat-dialog-content>
    <mat-dialog-actions>
         <span fxFlex></span>
      <button
        md-button
        color="primary"
        mat-dialog-close (click)="dialogRef.close(nameLabel.value)">CREATE</button>
    </mat-dialog-actions>`,
})
export class DialogLabel {
  constructor(public dialogRef: MatDialogRef<DialogLabel>) {
  }
}
