/**
 * Created by German on 31/10/17.
 */
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var moduleName = require("feed-mgr/feeds/edit-feed/module-name");
    /**
     * Feed Details - Overview
     */
    var FeedDetailsOverviewComponent = /** @class */ (function () {
        function FeedDetailsOverviewComponent($scope, dialog, $mdDialog) {
            this.dialog = dialog;
            this.$mdDialog = $mdDialog;
        }
        FeedDetailsOverviewComponent.prototype.ngOnInit = function () {
        };
        FeedDetailsOverviewComponent.prototype.$onInit = function () {
            this.ngOnInit();
        };
        //Open dialog add files from URL
        FeedDetailsOverviewComponent.prototype.openDialogAddFilesUrl = function () {
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
        };
        return FeedDetailsOverviewComponent;
    }());
    angular.module(moduleName).component('feedDetailsOverview', {
        bindings: {
            engine: "<"
        },
        controller: [FeedDetailsOverviewComponent],
        controllerAs: "vm",
        templateUrl: "js/medikly/feeds/feed-details/overview.component.html"
    });
});
//# sourceMappingURL=overview.component.js.map