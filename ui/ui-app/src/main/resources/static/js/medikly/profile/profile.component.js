var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/forms", "./data/profile"], function (require, exports, core_1, forms_1, profile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArrayTypes = /** @class */ (function () {
        function ArrayTypes() {
        }
        return ArrayTypes;
    }());
    exports.ArrayTypes = ArrayTypes;
    ;
    var ProfileComponent = /** @class */ (function () {
        function ProfileComponent(fb) {
            this.fb = fb;
            this.disabled = false;
            this.chipAddition = true;
            this.chipRemoval = true;
            this.profile = profile_1.MockDoctor;
            this.strings = [
                'oncologist',
                'hospital',
                'medical training',
                'doctor',
                'general practitioner'
            ];
            this.stringsModel = this.strings.slice(0, 6);
            this.createUserForm();
        }
        ProfileComponent.prototype.ngOnInit = function () {
            this.filterStrings('');
        };
        ProfileComponent.prototype.ngOnDestroy = function () {
        };
        ProfileComponent.prototype.createUserForm = function () {
            this.userForm = this.fb.group({
                name: ['Gerald Morris', forms_1.Validators.required],
                description: ['Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper'],
                phones: this.fb.array([]),
                emails: this.fb.array([]),
                addresses: this.fb.array([]),
                websites: this.fb.array([]),
                socials: this.fb.array([]),
            });
            this.addNewEmail('WorkEmail', 'gerald@morris.com');
            this.addNewPhone('WorkPhone', '+1 123 456');
            this.addNewAddress('WorkAddress', 'PO Box 4668, New York, NY');
            this.addNewWebsite('WorkWebsite', 'http://www.dundermifflin.com/index.shtml');
            this.addNewSocial('Facebook', 'http://www.dundermifflin.com/index.shtml');
            this.addNewSocial('Twitter', 'http://www.dundermifflin.com/index.shtml');
            this.addNewSocial('Linkedin', 'http://www.dundermifflin.com/index.shtml');
        };
        ProfileComponent.prototype.isOver = function () {
            return window.matchMedia("(max-width: 960px)").matches;
        };
        ProfileComponent.prototype.addNewPhone = function (type, value) {
            var fg = this.fb.group({
                type: [type, forms_1.Validators.required],
                value: [value, forms_1.Validators.required]
            });
            // add address to the list
            var control = this.userForm.controls['phones'];
            control.push(fg);
        };
        ProfileComponent.prototype.addNewEmail = function (type, value) {
            var fg = this.fb.group({
                type: [type, forms_1.Validators.required],
                value: [value, forms_1.Validators.compose([forms_1.Validators.email, forms_1.Validators.required])]
            });
            // add address to the list
            var control = this.userForm.controls['emails'];
            control.push(fg);
        };
        ProfileComponent.prototype.addNewAddress = function (type, value) {
            var fg = this.fb.group({
                type: [type, forms_1.Validators.required],
                value: [value, forms_1.Validators.required]
            });
            // add address to the list
            var control = this.userForm.controls['addresses'];
            control.push(fg);
        };
        ProfileComponent.prototype.addNewWebsite = function (type, value) {
            var fg = this.fb.group({
                type: [type, forms_1.Validators.required],
                value: [value, forms_1.Validators.required]
            });
            // add address to the list
            var control = this.userForm.controls['websites'];
            control.push(fg);
        };
        ProfileComponent.prototype.addNewSocial = function (type, value) {
            var fg = this.fb.group({
                type: [type, forms_1.Validators.required],
                value: [value, forms_1.Validators.required]
            });
            // add address to the list
            var control = this.userForm.controls['socials'];
            control.push(fg);
        };
        ProfileComponent.prototype.removeArrayItem = function (type, key) {
            // remove address from the list
            var control = this.userForm.controls[type];
            control.removeAt(key);
        };
        ProfileComponent.prototype.filterStrings = function (value) {
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
        ProfileComponent = __decorate([
            core_1.Component({
                selector: 'app-profile',
                templateUrl: 'js/medikly/profile/profile.component.html',
                styleUrls: ['js/medikly/profile/profile.component.css']
            }),
            __metadata("design:paramtypes", [forms_1.FormBuilder])
        ], ProfileComponent);
        return ProfileComponent;
    }());
    exports.ProfileComponent = ProfileComponent;
});
//# sourceMappingURL=profile.component.js.map