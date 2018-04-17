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
    var TargetTabsComponent = /** @class */ (function () {
        function TargetTabsComponent() {
            this.filters = [];
            this.opened = false;
            //Chips
            this.disabled = false;
            this.chipAddition = true;
            this.chipRemoval = true;
        }
        TargetTabsComponent.prototype.filterStrings = function (value, list, selecteds) {
            this.filteredStrings = list.filter(function (item) {
                if (value) {
                    return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
                }
                else {
                    return false;
                }
            }).filter(function (filteredItem) {
                return selecteds ? selecteds.indexOf(filteredItem) < 0 : true;
            });
        };
        TargetTabsComponent.prototype.addToModel = function (link, selecteds) {
            if (selecteds.indexOf(link) < 0)
                selecteds.push(link);
        };
        TargetTabsComponent.prototype.getLinks = function (list, selecteds) {
            var array = list.slice(0, 4).filter(function (item) { return selecteds.indexOf(item) < 0; });
            return array;
        };
        TargetTabsComponent.prototype.expandedEvent = function (filter) {
            filter.open = true;
        };
        TargetTabsComponent.prototype.collapsedEvent = function (filter) {
            filter.open = false;
        };
        __decorate([
            core_1.Input('filters'),
            __metadata("design:type", Object)
        ], TargetTabsComponent.prototype, "filters", void 0);
        __decorate([
            core_1.Input('opened'),
            __metadata("design:type", Boolean)
        ], TargetTabsComponent.prototype, "opened", void 0);
        TargetTabsComponent = __decorate([
            core_1.Component({
                selector: 'app-target-tabs',
                templateUrl: 'js/medikly/project-view/target-component/target-tabs/target-tabs.component.html',
                styleUrls: ['js/medikly/project-view/target-component/target-tabs/target-tabs.component.css']
            }),
            __metadata("design:paramtypes", [])
        ], TargetTabsComponent);
        return TargetTabsComponent;
    }());
    exports.TargetTabsComponent = TargetTabsComponent;
});
//# sourceMappingURL=target-tabs.component.js.map