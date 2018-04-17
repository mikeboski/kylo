var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "./mock-messages"], function (require, exports, core_1, mock_messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ActivityService = /** @class */ (function () {
        function ActivityService() {
        }
        ActivityService.prototype.getMessages = function () {
            return Promise.resolve(mock_messages_1.MESSAGES);
        };
        ActivityService = __decorate([
            core_1.Injectable()
        ], ActivityService);
        return ActivityService;
    }());
    exports.ActivityService = ActivityService;
});
//# sourceMappingURL=activity.service.js.map