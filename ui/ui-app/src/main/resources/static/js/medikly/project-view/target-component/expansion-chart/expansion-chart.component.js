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
    var ExpansionChartComponent = /** @class */ (function () {
        function ExpansionChartComponent() {
        }
        //This method throw event 'window:resize' to resize echarts
        ExpansionChartComponent.prototype.tabActive = function () {
            setTimeout(function () {
                window.dispatchEvent(new Event('resize'));
            }, 100);
        };
        ExpansionChartComponent.prototype.expandedEvent = function (chart) {
            chart.open = true;
        };
        ExpansionChartComponent.prototype.collapsedEvent = function (chart) {
            chart.open = false;
        };
        __decorate([
            core_1.Input('children'),
            __metadata("design:type", Object)
        ], ExpansionChartComponent.prototype, "children", void 0);
        __decorate([
            core_1.ViewChild('myPanel'),
            __metadata("design:type", Object)
        ], ExpansionChartComponent.prototype, "myPanel", void 0);
        ExpansionChartComponent = __decorate([
            core_1.Component({
                selector: 'app-expansion-chart',
                templateUrl: 'js/medikly/project-view/target-component/expansion-chart/expansion-chart.component.html',
                styleUrls: ['js/medikly/project-view/target-component/expansion-chart/expansion-chart.component.css']
            }),
            __metadata("design:paramtypes", [])
        ], ExpansionChartComponent);
        return ExpansionChartComponent;
    }());
    exports.ExpansionChartComponent = ExpansionChartComponent;
});
//# sourceMappingURL=expansion-chart.component.js.map