import { Component, OnInit, OnDestroy } from '@angular/core';
//import {ToolbarService} from '../../core/toolbar/toolbar.service';
import {DOCUMENTS} from '../../shared/data/documents';
//import {SidenavService} from '../../core/sidenav/sidenav.service';

@Component({
  selector: 'app-project-view',
  templateUrl: 'js/medikly/project-view/main/project-view.component.html',
  styleUrls: ['js/medikly/project-view/main/project-view.component.css']
})
export class ProjectViewComponent implements OnInit, OnDestroy {
  filters: any = [];
  documentSelected:any;
  documentId: number;
  documents: any = [];
  num = 1;
  isOpen: boolean;

  constructor() {
    this.documentId = 15//this.route.snapshot.params['id'];

    if(this.documentId && this.documentId != 0){
      this.getDocuments();
    }
    else{
      //this.ts.setTopSectionTitle('New file');
    }

    this.filters = [
      {title:'Manage accounts and users', icon:''},
      {title:'Create an experiment', icon:''},
      {title:'Link to Google Analytics', icon:''},
      {title:'Install Optimize plugin', icon:''},
      {title:'Start an experiment', icon:''}
      ];
  }

  ngOnInit() {
      //this.ts.setTopSectionTitle('');
      //this.ts.setToolbarColor('dark-blue');
      //this.ts.setSearchBarVisible(false);
      // this.ts.setBackRoute('');
  }

  ngOnDestroy() {
    //this.ts.restoreToolbarColor();
      // this.ts.setBackRoute('');
      //this.ts.setSearchBarVisible(true);
  }

  getDocuments() {
    this.fetchDocuments().then(documents => {
      this.documents = documents;

      this.documentSelected = this.documents.find(x => x.id == this.documentId);

      //this.ts.setTopSectionTitle(this.documentSelected.file_name);


    });
  }
  fetchDocuments(): Promise<any[]> {
    return Promise.resolve(DOCUMENTS);
  }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }


  //Dropdown buttons
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }
}
