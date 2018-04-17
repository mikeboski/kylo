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
    /**
     * Footer of a card, needed as it's used as a selector in the API.
     * @docs-private
     */
    var AppCardTopActionsDirective = /** @class */ (function () {
        function AppCardTopActionsDirective(el) {
            el.nativeElement.style.position = 'absolute';
            el.nativeElement.style.textAlign = 'right';
            el.nativeElement.style.width = '100%';
            el.nativeElement.style.zIndex = '10';
            el.nativeElement.style.boxShadow = 'inset 0px 31px 29px -5px rgba(0,0,0,0.4)';
        }
        AppCardTopActionsDirective = __decorate([
            core_1.Directive({
                selector: 'app-card-top-actions',
                host: { 'class': 'top-actions' },
            }),
            __metadata("design:paramtypes", [core_1.ElementRef])
        ], AppCardTopActionsDirective);
        return AppCardTopActionsDirective;
    }());
    exports.AppCardTopActionsDirective = AppCardTopActionsDirective;
});
//# sourceMappingURL=avatar-card.js.map