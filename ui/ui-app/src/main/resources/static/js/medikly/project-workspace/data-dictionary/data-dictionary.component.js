var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../dialog/add-description-file/add-description-file.dialog", "@angular/material"], function (require, exports, core_1, add_description_file_dialog_1, material_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataDictionaryComponent = /** @class */ (function () {
        function DataDictionaryComponent(dialog) {
            this.dialog = dialog;
            this.files = [];
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
        DataDictionaryComponent.prototype.ngOnInit = function () {
        };
        //Open dialog description file
        DataDictionaryComponent.prototype.openDialogAddDescriptionFile = function (file) {
            var dialogRef = this.dialog.open(add_description_file_dialog_1.DialogAddDescriptionFile, {
                width: '500px',
                height: '100vh',
                position: { right: '0px' }
            });
            dialogRef.componentInstance.item = file;
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    file = dialogRef.componentInstance.item;
                }
            });
        };
        DataDictionaryComponent = __decorate([
            core_1.Component({
                selector: 'app-project-summary',
                templateUrl: 'js/medikly/project-workspace/data-dictionary/data-dictionary.component.html',
                styleUrls: ['js/medikly/project-workspace/data-dictionary/data-dictionary.component.css']
            }),
            __metadata("design:paramtypes", [material_1.MatDialog])
        ], DataDictionaryComponent);
        return DataDictionaryComponent;
    }());
    exports.DataDictionaryComponent = DataDictionaryComponent;
});
//# sourceMappingURL=data-dictionary.component.js.map