/**
 * Created by development on 26/9/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "ng2-file-upload", "../dialog/upload-files/upload-files.dialog", "@angular/material"], function (require, exports, core_1, ng2_file_upload_1, upload_files_dialog_1, material_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
    var HomeComponent = /** @class */ (function () {
        function HomeComponent(dialog) {
            this.dialog = dialog;
            this.uploader = new ng2_file_upload_1.FileUploader({
                url: URL,
                isHTML5: true
            });
            this.hasBaseDropZoneOver = false;
            this.project = 15;
        }
        HomeComponent.prototype.ngOnInit = function () {
        };
        HomeComponent.prototype.fileOverBase = function (e) {
            this.hasBaseDropZoneOver = e;
        };
        //Open dialog upload files
        HomeComponent.prototype.openDialogUploadFiles = function () {
            var dialogRef = this.dialog.open(upload_files_dialog_1.DialogUploadFiles, {
                width: '500px',
                height: '100vh',
                position: { right: '0px' }
            });
            // dialogRef.afterClosed().subscribe(result => {
            //     if (result) {
            //         this.files.push(dialogRef.componentInstance.uploader.queue);
            //     }
            // });
        };
        HomeComponent = __decorate([
            core_1.Component({
                selector: 'app-workspace-home',
                templateUrl: 'js/medikly/project-workspace/home/home.component.html',
                styleUrls: ['js/medikly/project-workspace/home/home.component.css']
            }),
            __metadata("design:paramtypes", [material_1.MatDialog])
        ], HomeComponent);
        return HomeComponent;
    }());
    exports.HomeComponent = HomeComponent;
});
//# sourceMappingURL=home.component.js.map