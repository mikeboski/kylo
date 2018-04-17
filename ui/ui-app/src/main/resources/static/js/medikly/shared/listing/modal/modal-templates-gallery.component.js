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
    var ModalTemplatesGalleryComponent = /** @class */ (function () {
        function ModalTemplatesGalleryComponent() {
            this.products = [];
            this.num = 1;
            this.openProject = new core_1.EventEmitter();
        }
        ModalTemplatesGalleryComponent.prototype.addProducts = function (i) {
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
        ModalTemplatesGalleryComponent.prototype.setTemplates = function () {
            var maxItems = 5;
            this.products = [];
            for (this.num; this.num <= maxItems; this.num += 1) {
                this.addProducts(this.num);
            }
        };
        ModalTemplatesGalleryComponent.prototype.onResize = function (event) {
        };
        ModalTemplatesGalleryComponent.prototype.ngOnInit = function () {
            this.setTemplates();
        };
        ModalTemplatesGalleryComponent.prototype.openDialogNewProject = function () {
            this.openProject.emit();
        };
        __decorate([
            core_1.Output('openProject'),
            __metadata("design:type", core_1.EventEmitter)
        ], ModalTemplatesGalleryComponent.prototype, "openProject", void 0);
        __decorate([
            core_1.HostListener('window:resize', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], ModalTemplatesGalleryComponent.prototype, "onResize", null);
        ModalTemplatesGalleryComponent = __decorate([
            core_1.Component({
                selector: 'app-modal-templates-gallery',
                templateUrl: 'js/medikly/shared/listing/modal/modal-templates-gallery.component.html',
                styleUrls: ['js/medikly/shared/listing/modal/modal-templates-gallery.component.css'],
                providers: [material_1.MatGridList],
            }),
            __metadata("design:paramtypes", [])
        ], ModalTemplatesGalleryComponent);
        return ModalTemplatesGalleryComponent;
    }());
    exports.ModalTemplatesGalleryComponent = ModalTemplatesGalleryComponent;
});
//# sourceMappingURL=modal-templates-gallery.component.js.map