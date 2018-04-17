var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/material", "../../shared/dialog/dialog-remove-file.component", "../../shared/dialog/dialog-rename-file.component", "./display-documents.service", "../data/documents"], function (require, exports, core_1, material_1, dialog_remove_file_component_1, dialog_rename_file_component_1, display_documents_service_1, documents_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DisplayDocumentsComponent = /** @class */ (function () {
        function DisplayDocumentsComponent(dialog, dds) {
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
            this.modeCard = true;
            this.titleMode = 'Recent Projects';
            this.hover = '';
            this.date = new Date();
            this.getDocuments();
        }
        DisplayDocumentsComponent.prototype.ngOnInit = function () {
        };
        DisplayDocumentsComponent.prototype.ngOnDestroy = function () {
            this.documents = this.dds.getDocuments();
            this.titleMode = this.dds.getTitleMode();
        };
        DisplayDocumentsComponent.prototype.isOver = function () {
            return window.matchMedia("(max-width: 960px)").matches;
        };
        DisplayDocumentsComponent.prototype.isMac = function () {
            var bool = false;
            if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
                bool = true;
            }
            return bool;
        };
        //Dialog Rename File
        DisplayDocumentsComponent.prototype.openDialogRenameFile = function (document) {
            var dialogRef = this.dialog.open(dialog_rename_file_component_1.DialogRenameFile);
            dialogRef.componentInstance.currentName = document.name;
            dialogRef.afterClosed().subscribe(function (result) {
                if (result)
                    document.name = result;
            });
        };
        //Dialog Remove File
        DisplayDocumentsComponent.prototype.openDialogRemoveFile = function (file) {
            var _this = this;
            var dialogRef = this.dialog.open(dialog_remove_file_component_1.DialogRemoveFile);
            dialogRef.componentInstance.file = file;
            dialogRef.afterClosed().subscribe(function (result) {
                if (result)
                    _this.removeFile(file);
            });
        };
        DisplayDocumentsComponent.prototype.removeFile = function (file) {
            var index = this.documents.indexOf(file);
            if (index !== -1) {
                this.documents.splice(index, 1);
            }
        };
        //Metod to switch between 'Card Mode' and 'List Mode'
        DisplayDocumentsComponent.prototype.changeMode = function () {
            if (this.modeCard) {
                this.modeCard = false;
                this.titleMode = 'Today';
            }
            else {
                this.modeCard = true;
                this.titleMode = 'Recent Documents';
            }
        };
        DisplayDocumentsComponent.prototype.getDocuments = function () {
            var _this = this;
            this.fetchDocuments().then(function (documents) {
                _this.documents = documents;
                _this.dds.setDocuments(_this.documents);
                _this.dds.setTitleMode(_this.titleMode);
            });
        };
        DisplayDocumentsComponent.prototype.fetchDocuments = function () {
            return Promise.resolve(documents_1.DOCUMENTS);
        };
        DisplayDocumentsComponent.prototype.orderByName = function () {
            this.reverse = !this.reverse;
            this.dds.setReverse(this.reverse);
        };
        __decorate([
            core_1.Input('titleMode'),
            __metadata("design:type", String)
        ], DisplayDocumentsComponent.prototype, "titleMode", void 0);
        DisplayDocumentsComponent = __decorate([
            core_1.Component({
                selector: 'app-display-documents',
                templateUrl: 'js/medikly/shared/display-documents/display-documents.component.html',
                styleUrls: ['js/medikly/shared/display-documents/display-documents.component.css']
            }),
            __metadata("design:paramtypes", [material_1.MatDialog, display_documents_service_1.DisplayDocumentsService])
        ], DisplayDocumentsComponent);
        return DisplayDocumentsComponent;
    }());
    exports.DisplayDocumentsComponent = DisplayDocumentsComponent;
});
//# sourceMappingURL=display-documents.component.js.map