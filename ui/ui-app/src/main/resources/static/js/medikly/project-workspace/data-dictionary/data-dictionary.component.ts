/**
 * Created by development on 26/9/17.
 */
import {Component, OnInit} from '@angular/core';
import { DialogAddDescriptionFile } from '../dialog/add-description-file/add-description-file.dialog';
import {MatDialog, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-project-summary',
  templateUrl: 'js/medikly/project-workspace/data-dictionary/data-dictionary.component.html',
  styleUrls: ['js/medikly/project-workspace/data-dictionary/data-dictionary.component.css']
})
export class DataDictionaryComponent implements OnInit{

  files: any = [];

  constructor(public dialog: MatDialog) {

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
  }

  //Open dialog description file
  openDialogAddDescriptionFile(file) {
    let dialogRef = this.dialog.open(DialogAddDescriptionFile, {
      width: '500px',
      height: '100vh',
      position: { right: '0px' }
    });
    dialogRef.componentInstance.item = file;
     dialogRef.afterClosed().subscribe(result => {
         if (result) {
             file = dialogRef.componentInstance.item;
         }
     });
  }


}
