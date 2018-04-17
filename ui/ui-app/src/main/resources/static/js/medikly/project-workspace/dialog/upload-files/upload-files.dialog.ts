/**
 * Created by development on 18/9/17.
 */
/**
 * Created by development on 23/8/17.
 */
import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';


@Component({
  selector: 'app-upload-files-dialog',
  styleUrls: ['js/medikly/project-workspace/dialog/upload-files/upload-files.dialog.css'],
  template: `
    <div class="dialog-content">
    <h2 mat-dialog-title>Add files to your dataset</h2>
    
    <mat-dialog-content class="content-dialog-upload-files">
    
      <md-tab-group color="primary">
        <md-tab>
          <ng-template md-tab-label>MY COMPUTER</ng-template>
            
            <div *ngFor="let file of uploader.queue ; let i = index">
                 <div fxLayout="row" class="file-uploaded">
              <div>
                {{file.file.name}}
              </div>
              <div fxFlex></div>
                    <button md-icon-button (click)="removeFile(file)"><mat-icon>close</mat-icon></button>
              </div>
            </div>
            <div class="upload-files" *ngIf="uploader.queue.length==0">
              Upload from your computer
            </div>
            <div ng2FileDrop
            [ngClass]="{'nv-file-over': hasBaseDropZoneOver}"
            (fileOver)="fileOverBase($event)"
            [uploader]="uploader" class="my-drop-zone mb-1 dragdrop-content">
              
              <h2 class="dragdrop-title">Drag files here</h2>
              <p class="middle-content">- or -</p>
              <input type="file" ng2FileSelect placeholder="" title="" [uploader]="uploader" multiple/>
               
            </div>
          </md-tab>
      </md-tab-group>
    </mat-dialog-content>   
    </div>
    
    <mat-dialog-actions>
         <span fxFlex></span>
        <button
        md-button
          color="warn"
        class="mr-1"
        mat-dialog-close>CANCEL</button>
        
        <button md-raised-button md-button-sm color="primary" type="button" mat-dialog-close="true"
          (click)="uploader.uploadAll()" [disabled]="!uploader.getNotUploadedItems().length">UPLOAD</button>
    </mat-dialog-actions>
  `
})
export class DialogUploadFiles implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  hasBaseDropZoneOver = false;

  constructor(public dialogRef: MatDialogRef<DialogUploadFiles>) {
  }

  ngOnInit() {
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  removeFile(file){
    let index: number = this.uploader.queue.indexOf(file);
    if (index !== -1) {
      this.uploader.queue.splice(index, 1);
    }
  }


}
