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
    var ChartsComponent = /** @class */ (function () {
        function ChartsComponent() {
            //HighCharts
            this.options = {
                chart: {
                    type: 'column',
                    height: '200px'
                },
                credits: { enabled: false },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: this.categories,
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    gridLineWidth: 0,
                    labels: {
                        enabled: false
                    }
                },
                plotOptions: {
                    column: {
                        dataLabels: {
                            enabled: true
                        },
                        grouping: false,
                        shadow: false,
                        borderWidth: 0
                    }
                },
                series: [{
                        name: "Audience",
                        color: 'rgba(214, 213, 213, 0.6)',
                        showInLegend: false,
                        data: this.data1,
                        pointPadding: 0.0
                    },
                    {
                        name: "Segment",
                        color: 'rgba(56, 142, 60, 0.85)',
                        showInLegend: false,
                        data: this.data2,
                        pointPadding: 0.2
                    }]
            };
        }
        ChartsComponent.prototype.ngOnChanges = function (changes) {
            //HighCharts
            this.options.xAxis.categories = changes.categories.currentValue;
            this.options.series[0].data = changes.data1.currentValue;
            this.options.series[1].data = changes.data2.currentValue;
        };
        __decorate([
            core_1.Input('categories'),
            __metadata("design:type", Array)
        ], ChartsComponent.prototype, "categories", void 0);
        __decorate([
            core_1.Input('data1'),
            __metadata("design:type", Array)
        ], ChartsComponent.prototype, "data1", void 0);
        __decorate([
            core_1.Input('data2'),
            __metadata("design:type", Array)
        ], ChartsComponent.prototype, "data2", void 0);
        ChartsComponent = __decorate([
            core_1.Component({
                selector: 'chart-vertical',
                templateUrl: 'js/medikly/shared/charts/charts.component.html',
                styleUrls: ['js/medikly/shared/charts/charts.component.css']
            })
        ], ChartsComponent);
        return ChartsComponent;
    }());
    exports.ChartsComponent = ChartsComponent;
});
//# sourceMappingURL=charts.component.js.map