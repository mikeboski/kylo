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
    var DialogAddDescriptionFile = /** @class */ (function () {
        function DialogAddDescriptionFile(dialogRef, fb) {
            this.dialogRef = dialogRef;
            this.fb = fb;
            this.maxDescription = 240;
            this.dialogRef;
        }
        DialogAddDescriptionFile.prototype.ngOnInit = function () {
            this.Math = Math;
            this.chips = [
                {
                    name: 'raw data',
                    checked: false,
                    color: 'light-blue',
                },
                {
                    name: 'documentation',
                    checked: false,
                    color: 'rose',
                },
                {
                    name: 'visualization',
                    checked: false,
                    color: 'yellow',
                },
                {
                    name: 'clean data',
                    checked: false,
                    color: 'yellow',
                },
                {
                    name: 'script',
                    checked: false,
                    color: 'purple',
                },
                {
                    name: 'report',
                    checked: false,
                    color: 'orange',
                }
            ];
            this.form = this.fb.group({
                description: [this.item != undefined && this.item.file.description != '' ? this.item.file.description : '', forms_1.Validators.compose([forms_1.Validators.maxLength(this.maxDescription)])],
            });
            this.setLabelsChecked();
        };
        DialogAddDescriptionFile.prototype.saveChanges = function () {
            this.item.file.description = this.form.value.description;
            this.item.file.labels = this.getLabelsChecked();
            this.dialogRef.close(true);
        };
        DialogAddDescriptionFile.prototype.getLabelsChecked = function () {
            var array = this.chips.filter(function (item) { return item.checked == true; });
            return array;
        };
        DialogAddDescriptionFile.prototype.setLabelsChecked = function () {
            var _loop_1 = function (label) {
                this_1.chips.filter(function (item) {
                    if (label.name === item.name) {
                        item.checked = true;
                    }
                });
            };
            var this_1 = this;
            for (var _i = 0, _a = this.item.file.labels; _i < _a.length; _i++) {
                var label = _a[_i];
                _loop_1(label);
            }
        };
        __decorate([
            core_1.Input('item'),
            __metadata("design:type", Object)
        ], DialogAddDescriptionFile.prototype, "item", void 0);
        DialogAddDescriptionFile = __decorate([
            core_1.Component({
                selector: 'app-add-description-file-dialog',
                styleUrls: ['js/medikly/project-workspace/dialog/add-description-file/add-description-file.dialog.css'],
                template: "\n   <div class=\"dialog-content\">\n   \n\n    <h2 md-dialog-title class=\"mb-0\">{{item.file.name}}</h2>\n    <span>{{this.Math.round(item.file.size/1024)}} kb</span>\n    \n    <md-dialog-content class=\"pt-2 pb-2\">\n    \n          <form [formGroup]=\"form\">\n\n          <div class=\"mb-1\">\n            <md-input-container style=\"width: 100%\">\n              <textarea mdInput\n                     placeholder=\"Description ({{!form._value.description || form._value.description.length==0 ? 'max. '+maxDescription : maxDescription-form.value.description.length}})\"\n                     [formControl]=\"form.controls['description']\" maxlength=\"{{maxDescription}}\"> </textarea>\n            </md-input-container>\n          </div>\n            </form>\n        \n       <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap=\"wrap\" > \n        <div fxFlex=\"33\" *ngFor=\"let chip of chips\">\n        <md-chip-list selectable=\"false\" class=\"chips-description-file\">\n           <md-checkbox [checked]=\"chip.checked\" [(ngModel)]=\"chip.checked\">\n          <md-chip color=\"accent\" selected=\"true\" class=\"{{chip.color}}-color\">{{chip.name}}</md-chip>\n        </md-checkbox>\n         </md-chip-list>\n           </div>\n           </div> \n    </md-dialog-content>   \n\n   </div>\n   \n      <md-dialog-actions>\n         <span fxFlex></span>\n            <button\n        md-button\n          color=\"warn\"\n        md-dialog-close=\"false\">CANCEL</button>\n        \n         <button\n          md-button\n          color=\"primary\"\n          (click)=\"saveChanges()\"\n          [disabled]=\"!form.valid\">SAVE\n         \n        </button>\n         \n    </md-dialog-actions>\n\n  "
            }),
            __metadata("design:paramtypes", [material_1.MatDialogRef, forms_1.FormBuilder])
        ], DialogAddDescriptionFile);
        return DialogAddDescriptionFile;
    }());
    exports.DialogAddDescriptionFile = DialogAddDescriptionFile;
});
//# sourceMappingURL=add-description-file.dialog.js.map