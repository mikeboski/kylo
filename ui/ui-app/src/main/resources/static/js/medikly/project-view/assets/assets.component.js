var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@covalent/core"], function (require, exports, core_1, core_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NUMBER_FORMAT = function (v) { return v; };
    var DECIMAL_FORMAT = function (v) { return v.toFixed(2); };
    var AssetsComponent = /** @class */ (function () {
        function AssetsComponent(_dataTableService) {
            this._dataTableService = _dataTableService;
            this.columns = [
                { name: 'name', label: 'Dessert (100g serving)', sortable: true },
                { name: 'type', label: 'Type', filter: true },
                { name: 'calories', label: 'Calories', numeric: true, format: NUMBER_FORMAT, sortable: true, hidden: false },
                { name: 'carbs', label: 'Carbs (g)', numeric: true, format: NUMBER_FORMAT }
            ];
            this.data = [
                {
                    'id': 1,
                    'name': 'Frozen yogurt',
                    'type': 'Ice cream',
                    'calories': 159.0,
                    'fat': 6.0,
                    'carbs': 24.0,
                    'protein': 4.0,
                    'sodium': 87.0,
                    'calcium': 14.0,
                    'iron': 1.0,
                    'comments': 'I love froyo!',
                }, {
                    'id': 2,
                    'name': 'Ice cream sandwich',
                    'type': 'Ice cream',
                    'calories': 237.0,
                    'fat': 9.0,
                    'carbs': 37.0,
                    'protein': 4.3,
                    'sodium': 129.0,
                    'calcium': 8.0,
                    'iron': 1.0,
                }, {
                    'id': 3,
                    'name': 'Eclair',
                    'type': 'Pastry',
                    'calories': 262.0,
                    'fat': 16.0,
                    'carbs': 24.0
                }, {
                    'id': 4,
                    'name': 'Cupcake',
                    'type': 'Pastry',
                    'calories': 305.0,
                    'fat': 3.7,
                    'carbs': 67.0
                }, {
                    'id': 5,
                    'name': 'Jelly bean',
                    'type': 'Candy',
                    'calories': 375.0,
                    'fat': 0.0,
                    'carbs': 94.0
                }, {
                    'id': 6,
                    'name': 'Lollipop',
                    'type': 'Candy',
                    'calories': 392.0,
                    'fat': 0.2,
                    'carbs': 98.0
                }, {
                    'id': 7,
                    'name': 'Honeycomb',
                    'type': 'Other',
                    'calories': 408.0,
                    'fat': 3.2,
                    'carbs': 87.0,
                }, {
                    'id': 8,
                    'name': 'Donut',
                    'type': 'Pastry',
                    'calories': 452.0,
                    'fat': 25.0,
                    'carbs': 51.0,
                }, {
                    'id': 9,
                    'name': 'KitKat',
                    'type': 'Candy',
                    'calories': 518.0,
                    'fat': 26.0,
                    'carbs': 65.0,
                }, {
                    'id': 10,
                    'name': 'Chocolate',
                    'type': 'Candy',
                    'calories': 518.0,
                    'fat': 26.0,
                    'carbs': 65.0,
                }, {
                    'id': 11,
                    'name': 'Chamoy',
                    'type': 'Candy',
                    'calories': 518.0,
                    'fat': 26.0,
                    'carbs': 65.0,
                },
            ];
            this.filteredData = this.data;
            this.filteredTotal = this.data.length;
            this.searchTerm = '';
            this.fromRow = 1;
            this.selectable = true;
            this.multiple = true;
            this.clickable = true;
            this.currentPage = 1;
            this.pageSize = 10;
            this.sortBy = 'name';
            this.selectedRows = [];
            this.sortOrder = core_2.TdDataTableSortingOrder.Descending;
        }
        AssetsComponent.prototype.ngOnInit = function () {
            //this.ts.setToolbarColor('dark-blue');
            //this.ts.setSearchBarVisible(false);
            this.filter();
        };
        AssetsComponent.prototype.ngOnDestroy = function () {
            //this.ts.restoreToolbarColor();
            //this.ts.setBackRoute('');
            //this.ts.setSearchBarVisible(true);
        };
        AssetsComponent.prototype.sort = function (sortEvent) {
            this.sortBy = sortEvent.name;
            this.sortOrder = sortEvent.order;
            this.filter();
        };
        AssetsComponent.prototype.search = function (searchTerm) {
            this.searchTerm = searchTerm;
            this.filter();
        };
        AssetsComponent.prototype.page = function (pagingEvent) {
            this.fromRow = pagingEvent.fromRow;
            this.currentPage = pagingEvent.page;
            this.pageSize = pagingEvent.pageSize;
            this.filter();
        };
        AssetsComponent.prototype.filter = function () {
            var newData = this.data;
            var excludedColumns = this.columns
                .filter(function (column) {
                return ((column.filter === undefined && column.hidden === true) ||
                    (column.filter !== undefined && column.filter === false));
            }).map(function (column) {
                return column.name;
            });
            newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
            this.filteredTotal = newData.length;
            newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
            newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
            this.filteredData = newData;
        };
        AssetsComponent = __decorate([
            core_1.Component({
                selector: 'app-assets',
                templateUrl: 'js/medikly/project-view/assets/assets.component.html',
                styleUrls: ['js/medikly/project-view/assets/assets.component.css']
            }),
            __metadata("design:paramtypes", [core_2.TdDataTableService])
        ], AssetsComponent);
        return AssetsComponent;
    }());
    exports.AssetsComponent = AssetsComponent;
});
//# sourceMappingURL=assets.component.js.map