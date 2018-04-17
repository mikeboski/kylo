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
    var MatkCardLayoutLeftSidebarDirective = /** @class */ (function () {
        function MatkCardLayoutLeftSidebarDirective(el) {
        }
        MatkCardLayoutLeftSidebarDirective = __decorate([
            core_1.Directive({
                selector: 'mdk-card-layout-left-sidebar',
                host: { 'class': 'mdk-card-left-sd' }
            }),
            __metadata("design:paramtypes", [core_1.ElementRef])
        ], MatkCardLayoutLeftSidebarDirective);
        return MatkCardLayoutLeftSidebarDirective;
    }());
    exports.MatkCardLayoutLeftSidebarDirective = MatkCardLayoutLeftSidebarDirective;
    var MatkCardLayoutRightSidebarDirective = /** @class */ (function () {
        function MatkCardLayoutRightSidebarDirective(el) {
        }
        MatkCardLayoutRightSidebarDirective = __decorate([
            core_1.Directive({
                selector: 'mdk-card-layout-right-sidebar',
                host: { 'class': 'mdk-card-right-sd' }
            }),
            __metadata("design:paramtypes", [core_1.ElementRef])
        ], MatkCardLayoutRightSidebarDirective);
        return MatkCardLayoutRightSidebarDirective;
    }());
    exports.MatkCardLayoutRightSidebarDirective = MatkCardLayoutRightSidebarDirective;
    var MatkCardLayoutContentDirective = /** @class */ (function () {
        function MatkCardLayoutContentDirective(el) {
        }
        MatkCardLayoutContentDirective = __decorate([
            core_1.Directive({
                selector: 'mdk-card-layout-content',
                host: { 'class': 'mdk-card-content' }
            }),
            __metadata("design:paramtypes", [core_1.ElementRef])
        ], MatkCardLayoutContentDirective);
        return MatkCardLayoutContentDirective;
    }());
    exports.MatkCardLayoutContentDirective = MatkCardLayoutContentDirective;
    var CardLayoutComponent = /** @class */ (function () {
        function CardLayoutComponent() {
        }
        CardLayoutComponent.prototype.ngOnInit = function () {
        };
        CardLayoutComponent = __decorate([
            core_1.Component({
                selector: 'app-card-layout',
                templateUrl: 'js/medikly/shared/card-layout/card-layout.component.html',
                styleUrls: ['js/medikly/shared/card-layout/card-layout.component.css']
            }),
            __metadata("design:paramtypes", [])
        ], CardLayoutComponent);
        return CardLayoutComponent;
    }());
    exports.CardLayoutComponent = CardLayoutComponent;
});
//# sourceMappingURL=card-layout.component.js.map