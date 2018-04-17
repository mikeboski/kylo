import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-project-info-top',
    templateUrl: 'js/medikly/project-view/main/info-top/info-top.component.html',
    styleUrls: ['js/medikly/project-view/main/info-top/info-top.component.css']
})
export class InfoTopComponent implements OnInit {

    @Input() documentId: any;
    @Input('projectName') projectName = 'Project Name';
    params: any;

    constructor() {
      // subscribe to router event
/*      this.params = this.route.queryParams.subscribe(
        params => {
          let name = params['name'];
          if (name) this.projectName = name;
        }
      );*/
    }

    ngOnInit() {
    }

}
