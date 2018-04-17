/**
 * Created by development on 23/8/17.
 */
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { DialogRemoveFile } from '../../shared/dialog/dialog-remove-file.component';
import { DialogRenameFile } from '../../shared/dialog/dialog-rename-file.component';
import { DisplayDocumentsService } from './display-documents.service';
import {DOCUMENTS} from '../data/documents';

@Component({
  selector: 'app-display-documents',
  templateUrl: 'js/medikly/shared/display-documents/display-documents.component.html',
  styleUrls: ['js/medikly/shared/display-documents/display-documents.component.css']
})
export class DisplayDocumentsComponent implements OnInit, OnDestroy {
  displayMode = 'default';
  multi = false;
  hideToggle = true;
  date: any;
  documents: any = [];
  num = 1;
  selectedOption: string;

  order: string = 'file_name';
  reverse: boolean = false;

  //Card Mode and List Mode
  modeCard: boolean = true;
  @Input('titleMode') titleMode: string = 'Recent Projects';


  hover: string = '';

  constructor(public dialog: MatDialog, private dds: DisplayDocumentsService) {
    this.date = new Date();

    this.getDocuments();

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.documents = this.dds.getDocuments();
    this.titleMode = this.dds.getTitleMode();
  }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }

  //Dialog Rename File
  openDialogRenameFile(document) {
    let dialogRef = this.dialog.open(DialogRenameFile);
    dialogRef.componentInstance.currentName = document.name;
    dialogRef.afterClosed().subscribe(result => {
      if (result) document.name = result;
    });
  }

  //Dialog Remove File
  openDialogRemoveFile(file) {
    let dialogRef = this.dialog.open(DialogRemoveFile);
    dialogRef.componentInstance.file = file;
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.removeFile(file);
    });
  }
  removeFile(file) {
    let index: number = this.documents.indexOf(file);
    if (index !== -1) {
      this.documents.splice(index, 1);
    }
  }

  //Metod to switch between 'Card Mode' and 'List Mode'
  changeMode() {
    if(this.modeCard){
      this.modeCard = false;
      this.titleMode = 'Today';
    }
    else{
      this.modeCard = true;
      this.titleMode = 'Recent Documents';
    }
  }

  getDocuments() {
    this.fetchDocuments().then(documents => {
      this.documents = documents;
      this.dds.setDocuments(this.documents);
      this.dds.setTitleMode(this.titleMode);
    });
  }
  fetchDocuments(): Promise<any[]> {
    return Promise.resolve(DOCUMENTS);
  }

  orderByName(){
    this.reverse = !this.reverse;
      this.dds.setReverse(this.reverse);
  }

}
