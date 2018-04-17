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
    var FilterComponent = /** @class */ (function () {
        function FilterComponent() {
            this.collapseSidebar = false;
            this.states = [
                { value: 'Alabama', viewValue: 'Alabama' },
                { value: 'Alaska', viewValue: 'Alaska' },
                { value: 'Arizona', viewValue: 'Arizona' },
                { value: 'Arkansas', viewValue: 'Arkansas' }
            ];
            this.drinks = [
                { value: 'coke-0', viewValue: 'Coke' },
                { value: 'long-name-1', viewValue: 'Decaf Chocolate Brownie Vanilla Gingerbread Frappuccino' },
                { value: 'water-2', viewValue: 'Water' },
                { value: 'pepper-3', viewValue: 'Dr. Pepper' },
                { value: 'coffee-4', viewValue: 'Coffee' },
                { value: 'tea-5', viewValue: 'Tea' },
                { value: 'juice-6', viewValue: 'Orange juice' },
                { value: 'wine-7', viewValue: 'Wine' },
                { value: 'milk-8', viewValue: 'Milk' },
            ];
            this.drinksTheme = 'primary';
            this.displayMode = 'flat';
            this.multi = true;
            this.hideToggle = false;
        }
        FilterComponent.prototype.ngOnInit = function () {
        };
        FilterComponent.prototype.isOver = function () {
            return window.matchMedia("(max-width: 960px)").matches;
        };
        FilterComponent.prototype.isMac = function () {
            var bool = false;
            if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
                bool = true;
            }
            return bool;
        };
        FilterComponent.prototype.isFilters = function () {
            return (this.categories && this.categories.size && this.categories.size > 0);
        };
        __decorate([
            core_1.Input('categories'),
            __metadata("design:type", Object)
        ], FilterComponent.prototype, "categories", void 0);
        __decorate([
            core_1.ViewChild('filterSidenav'),
            __metadata("design:type", Object)
        ], FilterComponent.prototype, "sidemenu", void 0);
        FilterComponent = __decorate([
            core_1.Component({
                selector: 'filter-sidebar',
                templateUrl: 'filter.component.html',
                styleUrls: ['filter.component.css']
            }),
            __metadata("design:paramtypes", [])
        ], FilterComponent);
        return FilterComponent;
    }());
    exports.FilterComponent = FilterComponent;
});
//# sourceMappingURL=filter.component.js.map