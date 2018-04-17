var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/material", "ng2-file-upload/ng2-file-upload"], function (require, exports, core_1, material_1, ng2_file_upload_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // const URL = '/api/';
    var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
    var DialogUploadFiles = /** @class */ (function () {
        function DialogUploadFiles(dialogRef) {
            this.dialogRef = dialogRef;
            this.uploader = new ng2_file_upload_1.FileUploader({
                url: URL,
                isHTML5: true
            });
            this.hasBaseDropZoneOver = false;
        }
        DialogUploadFiles.prototype.ngOnInit = function () {
        };
        DialogUploadFiles.prototype.fileOverBase = function (e) {
            this.hasBaseDropZoneOver = e;
        };
        DialogUploadFiles.prototype.removeFile = function (file) {
            var index = this.uploader.queue.indexOf(file);
            if (index !== -1) {
                this.uploader.queue.splice(index, 1);
            }
        };
        DialogUploadFiles = __decorate([
            core_1.Component({
                selector: 'app-upload-files-dialog',
                styleUrls: ['js/medikly/project-workspace/dialog/upload-files/upload-files.dialog.css'],
                template: "\n    <div class=\"dialog-content\">\n    <h2 mat-dialog-title>Add files to your dataset</h2>\n    \n    <mat-dialog-content class=\"content-dialog-upload-files\">\n    \n      <md-tab-group color=\"primary\">\n        <md-tab>\n          <ng-template md-tab-label>MY COMPUTER</ng-template>\n            \n            <div *ngFor=\"let file of uploader.queue ; let i = index\">\n                 <div fxLayout=\"row\" class=\"file-uploaded\">\n              <div>\n                {{file.file.name}}\n              </div>\n              <div fxFlex></div>\n                    <button md-icon-button (click)=\"removeFile(file)\"><mat-icon>close</mat-icon></button>\n              </div>\n            </div>\n            <div class=\"upload-files\" *ngIf=\"uploader.queue.length==0\">\n              Upload from your computer\n            </div>\n            <div ng2FileDrop\n            [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n            (fileOver)=\"fileOverBase($event)\"\n            [uploader]=\"uploader\" class=\"my-drop-zone mb-1 dragdrop-content\">\n              \n              <h2 class=\"dragdrop-title\">Drag files here</h2>\n              <p class=\"middle-content\">- or -</p>\n              <input type=\"file\" ng2FileSelect placeholder=\"\" title=\"\" [uploader]=\"uploader\" multiple/>\n               \n            </div>\n          </md-tab>\n      </md-tab-group>\n    </mat-dialog-content>   \n    </div>\n    \n    <mat-dialog-actions>\n         <span fxFlex></span>\n        <button\n        md-button\n          color=\"warn\"\n        class=\"mr-1\"\n        mat-dialog-close>CANCEL</button>\n        \n        <button md-raised-button md-button-sm color=\"primary\" type=\"button\" mat-dialog-close=\"true\"\n          (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">UPLOAD</button>\n    </mat-dialog-actions>\n  "
            }),
            __metadata("design:paramtypes", [material_1.MatDialogRef])
        ], DialogUploadFiles);
        return DialogUploadFiles;
    }());
    exports.DialogUploadFiles = DialogUploadFiles;
});
//# sourceMappingURL=upload-files.dialog.js.map