/**
 * Created by development on 22/8/17.
 */
import {Component, Input} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'dialog-rename-file',
  template: `
    <h4 style="margin-bottom: 8px">Rename</h4>
    <span >Please enter a new name for the item:</span>
    <mat-dialog-content style="margin-top: 16px">
         <mat-input-container style="width: 100%">
          <input mdInput [(ngModel)]="currentName" #newFileName>
        </mat-input-container>
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
        mat-dialog-close (click)="dialogRef.close(newFileName.value)">OK</button>
    </mat-dialog-actions>`,
})
export class DialogRenameFile {
  @Input('currentName') currentName: string = '';

  constructor(public dialogRef: MatDialogRef<DialogRenameFile>) {
  }
}
