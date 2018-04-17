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
    var DialogRenameFile = /** @class */ (function () {
        function DialogRenameFile(dialogRef) {
            this.dialogRef = dialogRef;
            this.currentName = '';
        }
        __decorate([
            core_1.Input('currentName'),
            __metadata("design:type", String)
        ], DialogRenameFile.prototype, "currentName", void 0);
        DialogRenameFile = __decorate([
            core_1.Component({
                selector: 'dialog-rename-file',
                template: "\n    <h4 style=\"margin-bottom: 8px\">Rename</h4>\n    <span >Please enter a new name for the item:</span>\n    <mat-dialog-content style=\"margin-top: 16px\">\n         <mat-input-container style=\"width: 100%\">\n          <input mdInput [(ngModel)]=\"currentName\" #newFileName>\n        </mat-input-container>\n    </mat-dialog-content>\n    <mat-dialog-actions>\n         <span fxFlex></span>\n            <button\n        md-button\n        color=\"warn\"\n        mat-dialog-close>CANCEL</button>\n      <button\n        md-button\n        color=\"primary\"\n        mat-dialog-close (click)=\"dialogRef.close(newFileName.value)\">OK</button>\n    </mat-dialog-actions>",
            }),
            __metadata("design:paramtypes", [material_1.MatDialogRef])
        ], DialogRenameFile);
        return DialogRenameFile;
    }());
    exports.DialogRenameFile = DialogRenameFile;
});
//# sourceMappingURL=dialog-rename-file.component.js.map