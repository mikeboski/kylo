/**
 * Created by development on 22/8/17.
 */
import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'dialog-label',
  template: `
    <h4 >Label name:</h4>
    <md-dialog-content>
         <md-input-container style="width: 100%">
          <input mdInput #nameLabel>
        </md-input-container>
    </md-dialog-content>
    <md-dialog-actions>
         <span fxFlex></span>
      <button
        md-button
        color="primary"
        md-dialog-close (click)="dialogRef.close(nameLabel.value)">CREATE</button>
    </md-dialog-actions>`,
})
export class DialogLabel {
  constructor(public dialogRef: MatDialogRef<DialogLabel>) {
  }
}
