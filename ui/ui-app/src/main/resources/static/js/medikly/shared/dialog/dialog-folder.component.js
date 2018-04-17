var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/material"], function (require, exports, core_1, material_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DialogFolder = /** @class */ (function () {
        function DialogFolder(dialogRef) {
            this.dialogRef = dialogRef;
        }
        DialogFolder = __decorate([
            core_1.Component({
                selector: 'dialog-folder',
                template: "\n    <h4 >Folder name:</h4>\n    <md-dialog-content>\n         <md-input-container style=\"width: 100%\">\n          <input mdInput #nameFolder>\n        </md-input-container>\n    </md-dialog-content>\n    <md-dialog-actions>\n         <span fxFlex></span>\n      <button\n        md-button\n        color=\"primary\"\n        md-dialog-close (click)=\"dialogRef.close(nameFolder.value)\">CREATE</button>\n    </md-dialog-actions>",
            }),
            __metadata("design:paramtypes", [material_1.MatDialogRef])
        ], DialogFolder);
        return DialogFolder;
    }());
    exports.DialogFolder = DialogFolder;
});
//# sourceMappingURL=dialog-folder.component.js.map