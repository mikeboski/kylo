var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "ng2-file-upload", "../dialog/upload-files/upload-files.dialog", "../dialog/add-files-url/add-files-url.dialog", "@angular/material"], function (require, exports, core_1, ng2_file_upload_1, upload_files_dialog_1, add_files_url_dialog_1, material_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
    var MainComponent = /** @class */ (function () {
        function MainComponent(dialog) {
            this.dialog = dialog;
            this.uploader = new ng2_file_upload_1.FileUploader({
                url: URL,
                isHTML5: true
            });
            this.hasBaseDropZoneOver = false;
            this.files = [];
            //Left Sidenav
            this.documents = [
                {
                    name: 'Project summary',
                    url: 'workspace.summary'
                },
                {
                    name: 'Data dictionary',
                    url: 'workspace.dictionary'
                }
            ];
            this.project = 15; /*this.route.snapshot.params['id'];*/
            this.files = [
                {
                    file: {
                        name: 'file1.png',
                        size: 544323,
                        description: '',
                        labels: []
                    }
                },
                {
                    file: {
                        name: 'file2.json',
                        size: 44323,
                        description: '',
                        labels: []
                    }
                },
                {
                    file: {
                        name: 'file3.csv',
                        size: 144323,
                        description: '',
                        labels: []
                    }
                },
                {
                    file: {
                        name: 'file4.sql',
                        size: 244323,
                        description: '',
                        labels: []
                    }
                },
                {
                    file: {
                        name: 'file5.png',
                        size: 544323,
                        description: '',
                        labels: []
                    }
                }
            ];
        }
        MainComponent.prototype.ngOnInit = function () {
            /*    this.ts.setSearchBarVisible(false);
                this.ts.setToolbarColor('purple has-breadcrumb');
                this.ts.setTopSectionTitle('Project Name / Workspace');
                this.ts.setBackRoute(`/projects/view/${this.project}/home`);*/
        };
        MainComponent.prototype.ngOnDestroy = function () {
            /*    this.ts.setSearchBarVisible(true);
                this.ts.restoreToolbarColor();
                this.ts.setBackRoute('');
                this.ts.setSearchBarVisible(true);*/
        };
        MainComponent.prototype.isOver = function () {
            return window.matchMedia("(max-width: 960px)").matches;
        };
        //Open dialog upload files
        MainComponent.prototype.openDialogUploadFiles = function () {
            var dialogRef = this.dialog.open(upload_files_dialog_1.DialogUploadFiles, {
                width: '500px',
                height: '100vh',
                position: { right: '0px' }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    /*    for (let file of dialogRef.componentInstance.uploader.queue) {
                          this.files.push(file);
                        }*/
                }
            });
        };
        //Open dialog add files from URL
        MainComponent.prototype.openDialogAddFilesUrl = function () {
            var dialogRef = this.dialog.open(add_files_url_dialog_1.DialogAddFilesUrl, {
                width: '500px',
                height: '100vh',
                position: { right: '0px' }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                /* if (result) {
                   this.files.push(dialogRef.componentInstance.files);
                 }*/
            });
        };
        MainComponent.prototype.getExtension = function (fileName) {
            return fileName.substr(fileName.lastIndexOf('.') + 1);
        };
        MainComponent = __decorate([
            core_1.Component({
                selector: 'app-main',
                templateUrl: 'js/medikly/project-workspace/main/main.component.html',
                styleUrls: ['js/medikly/project-workspace/main/main.component.css']
            }),
            __metadata("design:paramtypes", [material_1.MatDialog])
        ], MainComponent);
        return MainComponent;
    }());
    exports.MainComponent = MainComponent;
});
//# sourceMappingURL=main.component.js.map