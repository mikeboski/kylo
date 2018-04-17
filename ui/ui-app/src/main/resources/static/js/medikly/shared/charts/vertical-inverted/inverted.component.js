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
    var InvertedComponent = /** @class */ (function () {
        function InvertedComponent() {
            this.matched = null;
            //HighCharts
            this.graph1 = {
                chart: {
                    type: 'column',
                    height: '130px'
                },
                title: {
                    text: ''
                },
                credits: { enabled: false },
                yAxis: {
                    title: {
                        text: ''
                    },
                    gridLineWidth: 0,
                    labels: {
                        enabled: false
                    }
                },
                xAxis: {
                    categories: [
                        this.categories
                    ],
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
                        name: 'Audience',
                        color: 'rgba(214, 213, 213, 0.6)',
                        data: this.data1,
                        showInLegend: false,
                        pointPadding: 0.1,
                    },
                    {
                        name: 'Segment',
                        color: 'rgba(56, 142, 60, 0.85)',
                        data: this.data2,
                        showInLegend: false,
                        pointPadding: 0.3,
                    }],
            };
            this.graph2 = {
                chart: {
                    type: 'column',
                    height: '130x'
                },
                credits: { enabled: false },
                title: {
                    text: ''
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    gridLineWidth: 0,
                    reversed: true,
                    labels: {
                        enabled: false
                    }
                },
                xAxis: {
                    visible: false,
                    categories: this.categories,
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
                        name: 'Audience',
                        color: 'rgba(214, 213, 213, 0.6)',
                        data: this.data3,
                        showInLegend: false,
                        pointPadding: 0.1,
                    },
                    {
                        name: 'Segment',
                        color: 'rgba(56, 142, 60, 0.85)',
                        data: this.data4,
                        showInLegend: false,
                        pointPadding: 0.3,
                    }],
            };
        }
        InvertedComponent.prototype.ngOnChanges = function (changes) {
            //HighCharts
            this.graph1.xAxis.categories = changes.categories.currentValue;
            this.graph2.xAxis.categories = changes.categories.currentValue;
            this.graph1.series[0].data = changes.data1.currentValue;
            this.graph1.series[1].data = changes.data2.currentValue;
            this.graph2.series[0].data = changes.data3.currentValue;
            this.graph2.series[1].data = changes.data4.currentValue;
        };
        __decorate([
            core_1.Input('categories'),
            __metadata("design:type", Array)
        ], InvertedComponent.prototype, "categories", void 0);
        __decorate([
            core_1.Input('name1'),
            __metadata("design:type", String)
        ], InvertedComponent.prototype, "name1", void 0);
        __decorate([
            core_1.Input('name2'),
            __metadata("design:type", String)
        ], InvertedComponent.prototype, "name2", void 0);
        __decorate([
            core_1.Input('data1'),
            __metadata("design:type", Array)
        ], InvertedComponent.prototype, "data1", void 0);
        __decorate([
            core_1.Input('data2'),
            __metadata("design:type", Array)
        ], InvertedComponent.prototype, "data2", void 0);
        __decorate([
            core_1.Input('data3'),
            __metadata("design:type", Array)
        ], InvertedComponent.prototype, "data3", void 0);
        __decorate([
            core_1.Input('data4'),
            __metadata("design:type", Array)
        ], InvertedComponent.prototype, "data4", void 0);
        __decorate([
            core_1.Input('matched'),
            __metadata("design:type", Number)
        ], InvertedComponent.prototype, "matched", void 0);
        InvertedComponent = __decorate([
            core_1.Component({
                selector: 'chart-vertical-inverted',
                templateUrl: 'js/medikly/shared/charts/vertical-inverted/inverted.component.html',
                styleUrls: ['js/medikly/shared/charts/vertical-inverted/inverted.component.css']
            })
        ], InvertedComponent);
        return InvertedComponent;
    }());
    exports.InvertedComponent = InvertedComponent;
});
//# sourceMappingURL=inverted.component.js.map