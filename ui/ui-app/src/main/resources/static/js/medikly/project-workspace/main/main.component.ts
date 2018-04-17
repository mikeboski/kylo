import {Component, OnInit, OnDestroy} from '@angular/core';
//import {ToolbarService} from '../../core/toolbar/toolbar.service';
import {ActivatedRoute} from '@angular/router';
import {FileUploader} from 'ng2-file-upload';
import {DialogUploadFiles} from "../dialog/upload-files/upload-files.dialog";
import {DialogAddFilesUrl} from "../dialog/add-files-url/add-files-url.dialog";
import {MatDialog, MatDialogRef} from "@angular/material";
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-main',
  templateUrl: 'js/medikly/project-workspace/main/main.component.html',
  styleUrls: ['js/medikly/project-workspace/main/main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  hasBaseDropZoneOver = false;
  project: any;
  files: any = [];

  //Left Sidenav
  documents: any = [
    {
      name: 'Project summary',
      url: 'workspace.summary'
    },
    {
      name: 'Data dictionary',
      url: 'workspace.dictionary'
    }];

  constructor( public dialog: MatDialog) {
    this.project = 15;/*this.route.snapshot.params['id'];*/

    this.files = [
      {
        file: {
          name: 'file1.png',
          size: 544323,
          description: '',
          labels: []
        }
      },
      {
        file: {
          name: 'file2.json',
          size: 44323,
          description: '',
          labels: []
        }
      },
      {
        file: {
          name: 'file3.csv',
          size: 144323,
          description: '',
          labels: []
        }
      },
      {
        file: {
          name: 'file4.sql',
          size: 244323,
          description: '',
          labels: []
        }
      },
      {
        file: {
          name: 'file5.png',
          size: 544323,
          description: '',
          labels: []
        }
      }
    ]
  }

  ngOnInit() {
/*    this.ts.setSearchBarVisible(false);
    this.ts.setToolbarColor('purple has-breadcrumb');
    this.ts.setTopSectionTitle('Project Name / Workspace');
    this.ts.setBackRoute(`/projects/view/${this.project}/home`);*/
  }

  ngOnDestroy() {
/*    this.ts.setSearchBarVisible(true);
    this.ts.restoreToolbarColor();
    this.ts.setBackRoute('');
    this.ts.setSearchBarVisible(true);*/
  }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  //Open dialog upload files
  openDialogUploadFiles() {
    let dialogRef = this.dialog.open(DialogUploadFiles, {
      width: '500px',
      height: '100vh',
      position: { right: '0px' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
    /*    for (let file of dialogRef.componentInstance.uploader.queue) {
          this.files.push(file);
        }*/

      }
    });
  }

  //Open dialog add files from URL
  openDialogAddFilesUrl() {
    let dialogRef = this.dialog.open(DialogAddFilesUrl, {
      width: '500px',
      height: '100vh',
      position: { right: '0px' }
    });

    dialogRef.afterClosed().subscribe(result => {
     /* if (result) {
        this.files.push(dialogRef.componentInstance.files);
      }*/
    });
  }

  getExtension(fileName){
    return fileName.substr(fileName.lastIndexOf('.') + 1);
  }

}
