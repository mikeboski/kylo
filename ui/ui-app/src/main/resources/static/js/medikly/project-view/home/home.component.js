var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/material", "../../project-workspace/dialog/upload-files/upload-files.dialog", "../../project-workspace/dialog/add-files-url/add-files-url.dialog"], function (require, exports, core_1, material_1, upload_files_dialog_1, add_files_url_dialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HomeComponent = /** @class */ (function () {
        function HomeComponent(dialog) {
            this.dialog = dialog;
            this.filters = [];
            this.num = 1;
            this.projectName = 'MDK Project';
            this.projectObjective = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
            //Chips
            this.disabled = false;
            this.chipAddition = true;
            this.chipRemoval = true;
            this.strings = [
                'oncologist',
                'hospital',
                'medical training',
                'doctor',
                'general practitioner'
            ];
            this.stringsModel = this.strings.slice(0, 2);
            //Right Sidenav
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
            //Uploader
            this.files = [];
        }
        HomeComponent.prototype.ngOnInit = function () {
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
        };
        HomeComponent.prototype.ngOnDestroy = function () {
            //this.ts.restoreToolbarColor();
            //this.ts.setBackRoute('');
            //this.ts.setSearchBarVisible(true);
        };
        HomeComponent.prototype.isOver = function () {
            return window.matchMedia("(max-width: 960px)").matches;
        };
        HomeComponent.prototype.filterStrings = function (value) {
            var _this = this;
            this.filteredStrings = this.strings.filter(function (item) {
                if (value) {
                    return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
                }
                else {
                    return false;
                }
            }).filter(function (filteredItem) {
                return _this.stringsModel ? _this.stringsModel.indexOf(filteredItem) < 0 : true;
            });
        };
        //Open dialog upload files
        HomeComponent.prototype.openDialogUploadFiles = function () {
            var _this = this;
            var dialogRef = this.dialog.open(upload_files_dialog_1.DialogUploadFiles, {
                width: '500px',
                height: '100vh',
                position: { right: '0px' }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    for (var _i = 0, _a = dialogRef.componentInstance.uploader.queue; _i < _a.length; _i++) {
                        var file = _a[_i];
                        _this.files.push(file);
                    }
                }
            });
        };
        //Open dialog add files from URL
        HomeComponent.prototype.openDialogAddFilesUrl = function () {
            var _this = this;
            var dialogRef = this.dialog.open(add_files_url_dialog_1.DialogAddFilesUrl, {
                width: '500px',
                height: '100vh',
                position: { right: '0px' }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    _this.files.push(dialogRef.componentInstance.files);
                }
            });
        };
        HomeComponent.prototype.redirectToWorkspace = function () {
            //let url = this.router.url;
            //url = url.replace('/home','/workspace');
            console.log(this.files);
            //this.router.navigate([url]);
        };
        HomeComponent = __decorate([
            core_1.Component({
                selector: 'app-project-view-home',
                templateUrl: 'js/medikly/project-view/home/home.component.html',
                styleUrls: ['js/medikly/project-view/home/home.component.css']
            }),
            __metadata("design:paramtypes", [material_1.MatDialog])
        ], HomeComponent);
        return HomeComponent;
    }());
    exports.HomeComponent = HomeComponent;
});
//# sourceMappingURL=home.component.js.map