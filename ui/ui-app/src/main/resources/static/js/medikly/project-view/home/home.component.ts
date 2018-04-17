import {Component, OnInit, OnDestroy} from '@angular/core';

//import {ToolbarService} from '../../core/toolbar/toolbar.service';
import {DOCUMENTS} from '../../shared/data/documents';
//import {SidenavService} from '../../core/sidenav/sidenav.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {DialogUploadFiles} from '../../project-workspace/dialog/upload-files/upload-files.dialog';
import {DialogAddFilesUrl} from '../../project-workspace/dialog/add-files-url/add-files-url.dialog';

@Component({
  selector: 'app-project-view-home',
  templateUrl: 'js/medikly/project-view/home/home.component.html',
  styleUrls: ['js/medikly/project-view/home/home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  filters: any = [];
  num = 1;
  isOpen: boolean;
  projectName: string = 'MDK Project';
  projectObjective: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

  //Chips
  disabled: boolean = false;
  chipAddition: boolean = true;
  chipRemoval: boolean = true;
  strings: string[] = [
    'oncologist',
    'hospital',
    'medical training',
    'doctor',
    'general practitioner'
  ];
  params: any;
  filteredStrings: string[];
  stringsModel: string[] = this.strings.slice(0, 2);
  project: number ;

  //Right Sidenav
  documents: any = [
    {
      name: 'Project summary',
      url: 'workspace.summary'
    },
    {
      name: 'Data dictionary',
      url: 'workspace.dictionary'
    }];

  //Uploader
  files: any = [];

  constructor( public dialog: MatDialog) {

  }

  ngOnInit() {
    //this.ts.setToolbarColor('dark-blue');
    //this.ts.setSearchBarVisible(false);
    //this.ts.setBackRoute('');

    this.project = 15;

    // subscribe to router event
/*    this.params = this.route.queryParams.subscribe(
      params => {
        let name = params['name'];
        if (name) this.projectName = name;

        let objective = params['objective'];
        if (objective) this.projectObjective = objective;
      }
    );*/
  }

  ngOnDestroy() {
    //this.ts.restoreToolbarColor();
    //this.ts.setBackRoute('');
    //this.ts.setSearchBarVisible(true);
  }


  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  filterStrings(value: string): void {
    this.filteredStrings = this.strings.filter((item: any) => {
      if (value) {
        return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
      } else {
        return false;
      }
    }).filter((filteredItem: any) => {
      return this.stringsModel ? this.stringsModel.indexOf(filteredItem) < 0 : true;
    });
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
        for (let file of dialogRef.componentInstance.uploader.queue) {
          this.files.push(file);
        }

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
      if (result) {
        this.files.push(dialogRef.componentInstance.files);
      }
    });
  }

  redirectToWorkspace(){
    //let url = this.router.url;
    //url = url.replace('/home','/workspace');
    console.log(this.files);
    //this.router.navigate([url]);
  }

}
