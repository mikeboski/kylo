import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: 'js/medikly/projects/main/main.component.html',
  styleUrls: ['js/medikly/projects/main/main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  //SideMenu
  mainMenu = [
    {icon: 'inbox', title: 'My reports', items:[{icon: 'folder', title: 'Folder 1'}, {icon: 'folder', title: 'Folder 2'}]},
    {icon: 'label', title: 'Labels', items: [{icon: 'label', title: 'Label 1'}, {icon: 'label', title: 'Label 2'}]}/*,
    {icon: 'people', title: 'Shared with Me'},
    {icon: 'access_time', title: 'Recent'},
    {icon: 'star_rate', title: 'Starred'},
    {icon: 'delete', title: 'Archive'}*/];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

}
