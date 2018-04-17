/**
 * Created by German on 31/10/17.
 */

import {OnInit} from "@angular/core";
import {IAngularStatic} from "angular";

import {MatDialog, MatDialogRef} from '@angular/material';
import {DialogAddFilesUrl} from '../../project-workspace/dialog/add-files-url/add-files-url.dialog';

declare const angular: IAngularStatic;

const moduleName: string = require("feed-mgr/feeds/edit-feed/module-name");

/**
 * Feed details - Contributors.
 */
class FeedDetailsContributorsComponent implements OnInit {

    canList: string[] = ['Can view only', 'Can view and edit', 'Can view, edit, and manage'];
    can: string = this.canList[0];

    constructor() {
    }

    ngOnInit(): void {
    }

    $onInit(): void {
        this.ngOnInit();
    }

}

angular.module(moduleName).component('feedDetailsContributors', {
    bindings: {
        engine: "<"
    },
    controller: [ FeedDetailsContributorsComponent],
    controllerAs: "vm",
    templateUrl: "js/medikly/feeds/feed-details/contributors.component.html"
});

