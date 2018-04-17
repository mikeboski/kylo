var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../../shared/display-documents/display-documents.service"], function (require, exports, core_1, display_documents_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SegmentsComponent = /** @class */ (function () {
        function SegmentsComponent(dds) {
            this.dds = dds;
            this.titleMode = 'Today';
            this.products = [];
            this.num = 1;
            for (this.num; this.num <= 20; this.num += 1) {
                this.addProducts(this.num);
            }
            this.dds.setDocuments(this.products);
        }
        SegmentsComponent.prototype.addProducts = function (i) {
            this.products.push({
                id: i,
                price: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
                status: ['', '', '', 'sale'][Math.floor(Math.random() * 4)],
                discounted: ['', '', '', 'discounted'][Math.floor(Math.random() * 4)],
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
        SegmentsComponent.prototype.ngOnInit = function () {
            //this.ts.setToolbarColor('dark-blue');
            //this.ts.setSearchBarVisible(false);
            //this.ts.setBackRoute('/projects/home/recent');
        };
        SegmentsComponent.prototype.ngOnDestroy = function () {
            //this.ts.restoreToolbarColor();
            //this.ts.setBackRoute('');
            //this.ts.setSearchBarVisible(true);
        };
        SegmentsComponent = __decorate([
            core_1.Component({
                selector: 'app-segments',
                templateUrl: 'js/medikly/project-view/segments/segments.component.html',
                styleUrls: ['js/medikly/project-view/segments/segments.component.scss']
            }),
            __metadata("design:paramtypes", [display_documents_service_1.DisplayDocumentsService])
        ], SegmentsComponent);
        return SegmentsComponent;
    }());
    exports.SegmentsComponent = SegmentsComponent;
});
//# sourceMappingURL=segments.component.js.map