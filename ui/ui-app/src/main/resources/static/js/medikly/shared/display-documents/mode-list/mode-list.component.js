var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/material", "../../../shared/dialog/dialog-remove-file.component", "../../../shared/dialog/dialog-rename-file.component", "../display-documents.service"], function (require, exports, core_1, material_1, dialog_remove_file_component_1, dialog_rename_file_component_1, display_documents_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ModeListComponent = /** @class */ (function () {
        function ModeListComponent(dialog, dds) {
            var _this = this;
            this.dialog = dialog;
            this.dds = dds;
            this.displayMode = 'default';
            this.multi = false;
            this.hideToggle = true;
            this.documents = [];
            this.num = 1;
            this.order = 'file_name';
            this.reverse = false;
            //Card Mode and List Mode
            this.modeCard = false;
            this.titleMode = 'Recent Projects';
            this.index1 = 3;
            this.index2 = 11;
            this.index3 = 25;
            this.date = new Date();
            this.titleMode = this.dds.getTitleMode();
            this.dds.documents$.subscribe(function (data) {
                _this.documents = data;
            });
            this.dds.reverse$.subscribe(function (data) {
                _this.reverse = data;
            });
        }
        ModeListComponent.prototype.ngOnInit = function () {
        };
        ModeListComponent.prototype.ngOnDestroy = function () {
            this.dds.setDocuments(this.documents);
            this.dds.setTitleMode(this.titleMode);
        };
        ModeListComponent.prototype.isOver = function () {
            return window.matchMedia("(max-width: 960px)").matches;
        };
        ModeListComponent.prototype.isMac = function () {
            var bool = false;
            if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
                bool = true;
            }
            return bool;
        };
        //Dialog Rename File
        ModeListComponent.prototype.openDialogRenameFile = function (document) {
            var dialogRef = this.dialog.open(dialog_rename_file_component_1.DialogRenameFile);
            dialogRef.componentInstance.currentName = document.name;
            dialogRef.afterClosed().subscribe(function (result) {
                if (result)
                    document.name = result;
            });
        };
        //Dialog Remove File
        ModeListComponent.prototype.openDialogRemoveFile = function (file) {
            var _this = this;
            var dialogRef = this.dialog.open(dialog_remove_file_component_1.DialogRemoveFile);
            dialogRef.componentInstance.file = file;
            dialogRef.afterClosed().subscribe(function (result) {
                if (result)
                    _this.removeFile(file);
            });
        };
        ModeListComponent.prototype.removeFile = function (file) {
            var index = this.documents.indexOf(file);
            if (index !== -1) {
                this.documents.splice(index, 1);
            }
        };
        __decorate([
            core_1.Input('documents'),
            __metadata("design:type", Object)
        ], ModeListComponent.prototype, "documents", void 0);
        __decorate([
            core_1.Input('titleMode'),
            __metadata("design:type", String)
        ], ModeListComponent.prototype, "titleMode", void 0);
        ModeListComponent = __decorate([
            core_1.Component({
                selector: 'app-display-mode-list',
                templateUrl: 'js/medikly/shared/display-documents/mode-list/mode-list.component.html',
                styleUrls: ['js/medikly/shared/display-documents/mode-list/mode-list.component.css']
            }),
            __metadata("design:paramtypes", [material_1.MatDialog, display_documents_service_1.DisplayDocumentsService])
        ], ModeListComponent);
        return ModeListComponent;
    }());
    exports.ModeListComponent = ModeListComponent;
});
//# sourceMappingURL=mode-list.component.js.map