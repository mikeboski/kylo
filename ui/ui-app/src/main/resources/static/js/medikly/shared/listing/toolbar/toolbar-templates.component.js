var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/material"], function (require, exports, core_1, material_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToolbarTemplatesComponent = /** @class */ (function () {
        function ToolbarTemplatesComponent() {
            this.products = [];
            this.num = 1;
            this.newProject = new core_1.EventEmitter();
        }
        ToolbarTemplatesComponent.prototype.addProducts = function (i) {
            this.products.push({
                id: i,
                price: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
                status: ['', '', '', ''][Math.floor(Math.random() * 4)],
                discounted: ['', '', '', ''][Math.floor(Math.random() * 4)],
                discount: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
                name: [
                    'Blouse',
                    'Casual Shirt',
                    'Plaid Shirt',
                    'Long Sleeve',
                    'Denim Jacked',
                    'Fur Coat',
                    'Crop Top',
                    'Stripe Tee'
                ][Math.floor(Math.random() * 8)],
                description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][Math.floor(Math.random() * 5)]
            });
        };
        ToolbarTemplatesComponent.prototype.setTemplates = function () {
            var maxItems = 5;
            this.products = [];
            if (window.matchMedia("(min-width: 1100px)").matches) {
                maxItems = 6;
            }
            if (window.matchMedia("(min-width: 1400px)").matches) {
                maxItems = 7;
            }
            for (this.num; this.num <= maxItems; this.num += 1) {
                this.addProducts(this.num);
            }
        };
        ToolbarTemplatesComponent.prototype.onResize = function (event) {
        };
        ToolbarTemplatesComponent.prototype.ngOnInit = function () {
            this.setTemplates();
        };
        ToolbarTemplatesComponent.prototype.openDialogNewProject = function () {
            this.newProject.emit();
        };
        __decorate([
            core_1.Output('newProject'),
            __metadata("design:type", core_1.EventEmitter)
        ], ToolbarTemplatesComponent.prototype, "newProject", void 0);
        __decorate([
            core_1.HostListener('window:resize', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], ToolbarTemplatesComponent.prototype, "onResize", null);
        ToolbarTemplatesComponent = __decorate([
            core_1.Component({
                selector: 'app-toolbar-templates',
                templateUrl: 'js/medikly/shared/listing/toolbar/toolbar-templates.component.html',
                styleUrls: ['js/medikly/shared/listing/toolbar/toolbar-templates.component.css'],
                providers: [material_1.MatGridList],
            }),
            __metadata("design:paramtypes", [])
        ], ToolbarTemplatesComponent);
        return ToolbarTemplatesComponent;
    }());
    exports.ToolbarTemplatesComponent = ToolbarTemplatesComponent;
});
//# sourceMappingURL=toolbar-templates.component.js.map