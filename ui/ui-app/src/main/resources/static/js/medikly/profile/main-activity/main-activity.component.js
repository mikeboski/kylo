var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "./activity.service"], function (require, exports, core_1, activity_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MainActivityComponent = /** @class */ (function () {
        function MainActivityComponent(activityService) {
            this.activityService = activityService;
            this.getMessages();
        }
        MainActivityComponent.prototype.ngOnInit = function () {
        };
        MainActivityComponent.prototype.getMessages = function () {
            var _this = this;
            this.activityService.getMessages().then(function (messages) { return _this.messages = messages; });
        };
        MainActivityComponent.prototype.onSelect = function (message) {
            this.selectedMessage = message;
        };
        MainActivityComponent = __decorate([
            core_1.Component({
                selector: 'app-main-activity',
                templateUrl: 'js/medikly/profile/main-activity/main-activity.component.html',
                styleUrls: ['js/medikly/profile/main-activity/main-activity.component.css'],
                providers: [activity_service_1.ActivityService]
            }),
            __metadata("design:paramtypes", [activity_service_1.ActivityService])
        ], MainActivityComponent);
        return MainActivityComponent;
    }());
    exports.MainActivityComponent = MainActivityComponent;
});
//# sourceMappingURL=main-activity.component.js.map