var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/material", "@angular/forms"], function (require, exports, core_1, material_1, forms_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //import { CustomValidators } from 'ng2-validation';
    var DialogAddFilesUrl = /** @class */ (function () {
        function DialogAddFilesUrl(dialogRef, fb) {
            this.dialogRef = dialogRef;
            this.fb = fb;
            this.files = [];
            this.urlAdded = false;
        }
        DialogAddFilesUrl.prototype.ngOnInit = function () {
            this.form = this.fb.group({
                url: [null, forms_1.Validators.compose([forms_1.Validators.required])],
                fname: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            });
        };
        DialogAddFilesUrl.prototype.addToFiles = function (file) {
            this.files.push(file);
            this.urlAdded = true;
            var split = file.url.split("/");
            if (split.length > 0) {
                var index = split.length - 1;
                this.form.controls['fname'].setValue(split[index]);
            }
        };
        DialogAddFilesUrl.prototype.removeFile = function (file) {
            var index = this.files.indexOf(file);
            if (index !== -1) {
                this.files.splice(index, 1);
            }
            this.form.reset();
        };
        DialogAddFilesUrl = __decorate([
            core_1.Component({
                selector: 'app-add-files-url-dialog',
                styleUrls: ['js/medikly/project-workspace/dialog/add-files-url/add-files-url.dialog.css'],
                template: "\n    <div class=\"dialog-content\">\n    <h2 md-dialog-title>Add files via URL</h2>\n    \n    <md-dialog-content>\n    \n       <form [formGroup]=\"form\">\n          <div class=\"mb-1\">\n            <md-input-container style=\"width: 75%\">\n              <input mdInput placeholder=\"Paste URL\" [formControl]=\"form.controls['url']\" type=\"url\">\n            </md-input-container>\n          <button color=\"primary\" [disabled]=\"!form.controls.url.valid\" *ngIf=\"!urlAdded\" md-raised-button (click)=\"addToFiles(form.value)\">ADD</button>\n          <button md-button color=\"primary\" *ngIf=\"urlAdded\" (click)=\"removeFile(form.value)\">REMOVE</button>\n          </div>\n          <div class=\"mb-1\">\n          <md-input-container style=\"width: 100%\" *ngIf=\"urlAdded\">\n            <input mdInput placeholder=\"File name\" [formControl]=\"form.controls['fname']\">\n          </md-input-container>\n          <small *ngIf=\"form.controls['fname'].hasError('required') && form.controls['fname'].touched\" class=\"mat-text-warn\">\n          Add the extension type if you know it.</small>\n        </div>\n   \n      </form>\n    </md-dialog-content>   \n     \n     </div>\n    <md-dialog-actions>\n         <span fxFlex></span>\n            <button\n        md-button\n          color=\"warn\"\n        class=\"mr-1\"\n        md-dialog-close>CANCEL</button>\n            <button\n        md-button\n        color=\"primary\" [disabled]=\"!form.valid\"\n        md-dialog-close=\"true\" >SAVE</button>\n    </md-dialog-actions>\n  "
            }),
            __metadata("design:paramtypes", [material_1.MatDialogRef, forms_1.FormBuilder])
        ], DialogAddFilesUrl);
        return DialogAddFilesUrl;
    }());
    exports.DialogAddFilesUrl = DialogAddFilesUrl;
});
//# sourceMappingURL=add-files-url.dialog.js.map