/**
 * Created by development on 26/9/17.
 */

import {Component, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {DialogUploadFiles} from "../dialog/upload-files/upload-files.dialog";
import {MatDialog, MatDialogRef} from "@angular/material";
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-workspace-home',
  templateUrl: 'js/medikly/project-workspace/home/home.component.html',
  styleUrls: ['js/medikly/project-workspace/home/home.component.css']
})
export class HomeComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  hasBaseDropZoneOver = false;
  project: any;


  constructor(public dialog: MatDialog) {
    this.project = 15;
  }

  ngOnInit() {
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  //Open dialog upload files
  openDialogUploadFiles() {
    let dialogRef = this.dialog.open(DialogUploadFiles, {
      width: '500px',
      height: '100vh',
      position: { right: '0px' }
    });
    // dialogRef.afterClosed().subscribe(result => {
    //     if (result) {
    //         this.files.push(dialogRef.componentInstance.uploader.queue);
    //     }
    // });
  }
}
