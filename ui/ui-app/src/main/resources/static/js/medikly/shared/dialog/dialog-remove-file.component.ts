/**
 * Created by development on 22/8/17.
 */
import {Component, Input} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'dialog-remove-file',
  template: `
    <h4 style="margin-bottom: 8px">Remove</h4>
    <span >Do you want to remove <b>{{file.name}}</b>?</span>
    <md-dialog-actions style="margin-top: 16px">
         <span fxFlex></span>
            <button
        md-button
        color="warn"
        md-dialog-close>CANCEL</button>
      <button
        md-button
        color="primary"
        md-dialog-close="true">OK</button>
    </md-dialog-actions>`,
})
export class DialogRemoveFile {
  @Input('file') file: any;
  constructor(public dialogRef: MatDialogRef<DialogRemoveFile>) {
  }
}
