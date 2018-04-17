import {Component, OnInit, OnDestroy, Inject, ElementRef} from '@angular/core';

import {MatDialog, MatDialogRef} from '@angular/material';
import {DOCUMENT} from '@angular/platform-browser';
import { DialogNewProject } from '../dialog/new-project/dialog.new-project';

@Component({
  selector: 'app-projects-home',
  templateUrl: 'js/medikly/projects/home/projects.component.html',
  styleUrls: ['js/medikly/projects/home/projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  displayMode = 'default';
  multi = false;
  hideToggle = true;
  date: any;
  products: any[] = [];
  num = 1;
  order: string = 'name';
  reverse: boolean = false;

  //Card Mode and List Mode
  modeCard: boolean = true;
  titleMode: string = 'Recent Projects';
  showTemplates: boolean = false;
  hover: string = '';

  //SideMenu
  mainMenu = [{icon: 'people', title: 'Shared with Me'}, {
    icon: 'access_time',
    title: 'Recent'
  }, {icon: 'star_rate', title: 'Starred'}, {icon: 'delete', title: 'Trash'}];
  infoMenu = [{icon: 'settings', title: 'Settings'}, {icon: 'feedback', title: 'Send feedback'}, {
    icon: 'help',
    title: 'Help'
  }];
  dataMenu = [{icon: 'subtitles', title: 'Data Model'}, {icon: 'settings_input_component', title: 'Data Sources'}];
  folderMenu = [{icon: 'folder', title: 'Folder 1'}, {icon: 'folder', title: 'Folder 2'}];
  labelMenu = [{icon: 'label', title: 'Label 1'}, {icon: 'label', title: 'Label 2'}];

  constructor(public dialog: MatDialog, @Inject(DOCUMENT) private document: Document, private el: ElementRef) {



    this.date = new Date();
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {

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

  openTemplates() {
    this.showTemplates = !this.showTemplates;

    if (this.showTemplates) {
      document.querySelector('.main-container').scrollTop = 0;
    }

  }

  //Open dialog new project
  openDialogNewProject(){

      let dialogRef = this.dialog.open(DialogNewProject, {
        width: '848px',
      });

      dialogRef.afterClosed().subscribe(result => {
        // if (result) {
        //   console.log(result);
        //   this.router.navigate(['/projects/view/'+0], { queryParams: { name: dialogRef.componentInstance.form.value.name, objective: dialogRef.componentInstance.form.value.objective, privacy: dialogRef.componentInstance.form.value.privacy } });
        // }
      });
    }

}
