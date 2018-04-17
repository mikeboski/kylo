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
    var InfoTopComponent = /** @class */ (function () {
        function InfoTopComponent() {
            this.projectName = 'Project Name';
            // subscribe to router event
            /*      this.params = this.route.queryParams.subscribe(
                    params => {
                      let name = params['name'];
                      if (name) this.projectName = name;
                    }
                  );*/
        }
        InfoTopComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], InfoTopComponent.prototype, "documentId", void 0);
        __decorate([
            core_1.Input('projectName'),
            __metadata("design:type", Object)
        ], InfoTopComponent.prototype, "projectName", void 0);
        InfoTopComponent = __decorate([
            core_1.Component({
                selector: 'app-project-info-top',
                templateUrl: 'js/medikly/project-view/main/info-top/info-top.component.html',
                styleUrls: ['js/medikly/project-view/main/info-top/info-top.component.css']
            }),
            __metadata("design:paramtypes", [])
        ], InfoTopComponent);
        return InfoTopComponent;
    }());
    exports.InfoTopComponent = InfoTopComponent;
});
//# sourceMappingURL=info-top.component.js.map