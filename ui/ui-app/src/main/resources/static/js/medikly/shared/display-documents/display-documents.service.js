var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "rxjs/BehaviorSubject"], function (require, exports, core_1, BehaviorSubject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DisplayDocumentsService = /** @class */ (function () {
        function DisplayDocumentsService() {
            this.titleMode = new BehaviorSubject_1.BehaviorSubject('');
            this.titleMode$ = this.titleMode.asObservable();
            this.documents = new BehaviorSubject_1.BehaviorSubject([]);
            this.documents$ = this.documents.asObservable();
            this.order = new BehaviorSubject_1.BehaviorSubject('');
            this.order$ = this.titleMode.asObservable();
            this.reverse = new BehaviorSubject_1.BehaviorSubject(false);
            this.reverse$ = this.reverse.asObservable();
        }
        DisplayDocumentsService.prototype.setTitleMode = function (titleMode) {
            this.titleMode.next(titleMode);
        };
        DisplayDocumentsService.prototype.setDocuments = function (documents) {
            this.documents.next(documents);
        };
        DisplayDocumentsService.prototype.getTitleMode = function () {
            return this.titleMode.toString();
        };
        DisplayDocumentsService.prototype.getDocuments = function () {
            return this.documents;
        };
        DisplayDocumentsService.prototype.setOrder = function (order) {
            this.order.next(order);
        };
        DisplayDocumentsService.prototype.setReverse = function (reverse) {
            this.reverse.next(reverse);
        };
        DisplayDocumentsService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [])
        ], DisplayDocumentsService);
        return DisplayDocumentsService;
    }());
    exports.DisplayDocumentsService = DisplayDocumentsService;
});
//# sourceMappingURL=display-documents.service.js.map