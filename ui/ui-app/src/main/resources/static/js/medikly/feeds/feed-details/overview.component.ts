/**
 * Created by German on 31/10/17.
 */

import {OnInit, Output, EventEmitter} from "@angular/core";
import {IAngularStatic} from "angular";

import {MatDialog, MatDialogRef} from '@angular/material';
import {DialogAddFilesUrl} from '../../project-workspace/dialog/add-files-url/add-files-url.dialog';

declare const angular: IAngularStatic;

const moduleName: string = require("feed-mgr/feeds/edit-feed/module-name");

/**
 * Feed Details - Overview
 */
class FeedDetailsOverviewComponent implements OnInit {

    constructor($scope: angular.IScope, private dialog: MatDialog, private $mdDialog: angular.material.IDialogService) {
    }

    ngOnInit(): void {
    }

    $onInit(): void {
        this.ngOnInit();
    }

    //Open dialog add files from URL
    openDialogAddFilesUrl() {
/*        let dialogRef = this.dialog.open(DialogAddFilesUrl, {
            width: '500px',
            height: '100vh',
            position: { right: '0px' }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                //this.files.push(dialogRef.componentInstance.files);
            }
        });*/
    }

}

angular.module(moduleName).component('feedDetailsOverview', {
    bindings: {
        engine: "<"
    },
    controller: [FeedDetailsOverviewComponent],
    controllerAs: "vm",
    templateUrl: "js/medikly/feeds/feed-details/overview.component.html"
});

