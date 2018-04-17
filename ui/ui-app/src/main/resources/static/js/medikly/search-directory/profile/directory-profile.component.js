var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../../environments/environment"], function (require, exports, core_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DirectoryProfileComponent = /** @class */ (function () {
        function DirectoryProfileComponent() {
            this.onClosed = new core_1.EventEmitter();
            this.addProviderCompare = new core_1.EventEmitter();
            this.follow = new core_1.EventEmitter();
            this.tabWidth = 300;
            this.images = [];
            this.num = 1;
            this.googleApiKey = environment_1.environment.googleMapApiKey;
            for (this.num; this.num <= 9; this.num += 1) {
                this.images.push(this.num);
            }
        }
        DirectoryProfileComponent.prototype.ngOnInit = function () {
            var elemContent = document.querySelector('#directory-profile');
            this.tabWidth = elemContent.offsetWidth;
        };
        DirectoryProfileComponent.prototype.toggleScreenfull = function () {
            var elemContent = document.querySelector('app-directory-profile');
            // if (screenfull.enabled) {
            //     screenfull.toggle();
            // }
        };
        DirectoryProfileComponent.prototype.close = function (agreed) {
            this.onClosed.emit(agreed);
            this.profile = null;
        };
        //Compare
        DirectoryProfileComponent.prototype.throwEventProviderCompare = function (provider) {
            this.addProviderCompare.emit(provider);
        };
        //Follow
        DirectoryProfileComponent.prototype.throwEventFollow = function (provider) {
            this.follow.emit(provider);
        };
        __decorate([
            core_1.Input('profile'),
            __metadata("design:type", Object)
        ], DirectoryProfileComponent.prototype, "profile", void 0);
        __decorate([
            core_1.Output('onClosed'),
            __metadata("design:type", Object)
        ], DirectoryProfileComponent.prototype, "onClosed", void 0);
        __decorate([
            core_1.Output('addProviderCompare'),
            __metadata("design:type", core_1.EventEmitter)
        ], DirectoryProfileComponent.prototype, "addProviderCompare", void 0);
        __decorate([
            core_1.Output('follow'),
            __metadata("design:type", core_1.EventEmitter)
        ], DirectoryProfileComponent.prototype, "follow", void 0);
        DirectoryProfileComponent = __decorate([
            core_1.Component({
                selector: 'app-directory-profile',
                templateUrl: 'js/medikly/search-directory/profile/directory-profile.component.html',
                styleUrls: ['js/medikly/search-directory/profile/directory-profile.component.css']
            }),
            __metadata("design:paramtypes", [])
        ], DirectoryProfileComponent);
        return DirectoryProfileComponent;
    }());
    exports.DirectoryProfileComponent = DirectoryProfileComponent;
});
//# sourceMappingURL=directory-profile.component.js.map