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
    var DialogRemoveFile = /** @class */ (function () {
        function DialogRemoveFile(dialogRef) {
            this.dialogRef = dialogRef;
        }
        __decorate([
            core_1.Input('file'),
            __metadata("design:type", Object)
        ], DialogRemoveFile.prototype, "file", void 0);
        DialogRemoveFile = __decorate([
            core_1.Component({
                selector: 'dialog-remove-file',
                template: "\n    <h4 style=\"margin-bottom: 8px\">Remove</h4>\n    <span >Do you want to remove <b>{{file.name}}</b>?</span>\n    <md-dialog-actions style=\"margin-top: 16px\">\n         <span fxFlex></span>\n            <button\n        md-button\n        color=\"warn\"\n        md-dialog-close>CANCEL</button>\n      <button\n        md-button\n        color=\"primary\"\n        md-dialog-close=\"true\">OK</button>\n    </md-dialog-actions>",
            }),
            __metadata("design:paramtypes", [material_1.MatDialogRef])
        ], DialogRemoveFile);
        return DialogRemoveFile;
    }());
    exports.DialogRemoveFile = DialogRemoveFile;
});
//# sourceMappingURL=dialog-remove-file.component.js.map