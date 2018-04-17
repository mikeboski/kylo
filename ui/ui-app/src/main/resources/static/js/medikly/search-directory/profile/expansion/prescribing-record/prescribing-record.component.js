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
    var PrescribingRecordComponent = /** @class */ (function () {
        function PrescribingRecordComponent() {
        }
        __decorate([
            core_1.Input('profile'),
            __metadata("design:type", Object)
        ], PrescribingRecordComponent.prototype, "profile", void 0);
        PrescribingRecordComponent = __decorate([
            core_1.Component({
                selector: 'app-prescribing-record-expansion',
                templateUrl: 'js/medikly/search-directory/profile/expansion/prescribing-record/prescribing-record.component.html'
            })
        ], PrescribingRecordComponent);
        return PrescribingRecordComponent;
    }());
    exports.PrescribingRecordComponent = PrescribingRecordComponent;
});
//# sourceMappingURL=prescribing-record.component.js.map