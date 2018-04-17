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
    var DialogNewProject = /** @class */ (function () {
        function DialogNewProject(dialogRef, fb) {
            this.dialogRef = dialogRef;
            this.fb = fb;
            this.privacy = "open";
            this.maxName = 60;
            this.maxObjective = 120;
        }
        DialogNewProject.prototype.ngOnInit = function () {
            this.form = this.fb.group({
                name: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(this.maxName)])],
                objective: [null, forms_1.Validators.compose([forms_1.Validators.minLength(2), forms_1.Validators.maxLength(this.maxObjective)])],
                privacy: [null, forms_1.Validators.required],
            });
        };
        DialogNewProject.prototype.openProjectTemplate = function () {
            console.log('cerrado');
            this.dialogRef.close();
            //this.router.navigate(['/projects/view/'+0]);
        };
        DialogNewProject = __decorate([
            core_1.Component({
                selector: 'app-content-element-dialog',
                templateUrl: 'js/medikly/projects/dialog/new-project/dialog.new-project.html',
                styleUrls: ['js/medikly/projects/dialog/new-project/dialog.new-project.css'],
            }),
            __metadata("design:paramtypes", [material_1.MatDialogRef, forms_1.FormBuilder])
        ], DialogNewProject);
        return DialogNewProject;
    }());
    exports.DialogNewProject = DialogNewProject;
});
//# sourceMappingURL=dialog.new-project.js.map