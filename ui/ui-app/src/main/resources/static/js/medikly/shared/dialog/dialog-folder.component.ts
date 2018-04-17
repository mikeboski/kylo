/**
 * Created by development on 22/8/17.
 */
import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'dialog-folder',
  template: `
    <h4 >Folder name:</h4>
    <md-dialog-content>
         <md-input-container style="width: 100%">
          <input mdInput #nameFolder>
        </md-input-container>
    </md-dialog-content>
    <md-dialog-actions>
         <span fxFlex></span>
      <button
        md-button
        color="primary"
        md-dialog-close (click)="dialogRef.close(nameFolder.value)">CREATE</button>
    </md-dialog-actions>`,
})
export class DialogFolder {
  constructor(public dialogRef: MatDialogRef<DialogFolder>) {
  }
}
