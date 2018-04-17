var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import {environment} from '../../../../environments/environment';
    var ProfileHeaderCardComponent = /** @class */ (function () {
        function ProfileHeaderCardComponent() {
            this.googleApiKey = 'abc';
            this.socialNetworks = [
                { name: 'linkedin', 'icon': 'ion-social-linkedin', mouseOvered: false },
                { name: 'facebook', 'icon': 'ion-social-facebook', mouseOvered: false },
                { name: 'twitter', 'icon': 'ion-social-twitter', mouseOvered: false },
                { name: 'googleplus', 'icon': 'ion-social-googleplus', mouseOvered: false }
            ];
        }
        ProfileHeaderCardComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core_1.Input('profile'),
            __metadata("design:type", Object)
        ], ProfileHeaderCardComponent.prototype, "profile", void 0);
        __decorate([
            core_1.Input('coverImage'),
            __metadata("design:type", String)
        ], ProfileHeaderCardComponent.prototype, "coverImage", void 0);
        ProfileHeaderCardComponent = __decorate([
            core_1.Component({
                selector: 'app-profile-header-card',
                templateUrl: 'js/medikly/shared/profile/profile-header-card/profile-header-card.component.html',
                styleUrls: ['js/medikly/shared/profile/profile-header-card/profile-header-card.component.css']
            }),
            __metadata("design:paramtypes", [])
        ], ProfileHeaderCardComponent);
        return ProfileHeaderCardComponent;
    }());
    exports.ProfileHeaderCardComponent = ProfileHeaderCardComponent;
});
//# sourceMappingURL=profile-header-card.component.js.map