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
    var HorizontalComponent = /** @class */ (function () {
        function HorizontalComponent() {
            this.matched = null;
            //HighCharts
            this.sparkLine = {
                chart: {
                    backgroundColor: null,
                    borderWidth: 0,
                    type: 'bar',
                    margin: [2, 0, 2, 0],
                    width: 375,
                    height: 30,
                    style: {
                        overflow: 'visible'
                    },
                    // small optimalization, saves 1-2 ms each sparkline
                    skipClone: true
                },
                title: {
                    text: ''
                },
                series: [{ color: 'rgba(214, 213, 213, 0.6)', name: "Audience", "data": this.data1, pointPadding: 0.1 }, { color: 'rgba(56, 142, 60, 0.85)', name: "Segment", "data": this.data2, pointPadding: 0.3 }],
                credits: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    startOnTick: false,
                    endOnTick: false,
                    tickPositions: []
                },
                yAxis: {
                    min: 0,
                    visible: false,
                    endOnTick: false,
                    startOnTick: false,
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    tickPositions: [0]
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    /*backgroundColor: null,*/
                    /*      borderWidth: 0,*/
                    shadow: false,
                    useHTML: true,
                    hideDelay: 0,
                    shared: true,
                    padding: 0,
                    positioner: function (w, h, point) {
                        return { x: point.plotX - w / 2, y: point.plotY - h };
                    }
                },
                plotOptions: {
                    series: {
                        animation: false,
                        lineWidth: 1,
                        shadow: false,
                        pointPadding: 0,
                        groupPadding: 0,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        marker: {
                            radius: 1,
                            states: {
                                hover: {
                                    radius: 2
                                }
                            }
                        },
                        fillOpacity: 0.25
                    },
                    column: {
                        negativeColor: '#910000',
                        borderColor: 'silver',
                        grouping: false,
                        shadow: false,
                        borderWidth: 0
                    },
                    bar: {
                        grouping: false,
                        shadow: false,
                        borderWidth: 0
                    }
                }
            };
        }
        HorizontalComponent.prototype.ngOnChanges = function (changes) {
            //HighCharts
            this.sparkLine.series[0].data = changes.data1.currentValue;
            this.sparkLine.series[1].data = changes.data2.currentValue;
        };
        HorizontalComponent.prototype.setSparkLine = function (data1, data2) {
            this.sparkLine.series[0].data = [data1];
            this.sparkLine.series[1].data = [data2];
            return this.sparkLine;
        };
        __decorate([
            core_1.Input('categories'),
            __metadata("design:type", Array)
        ], HorizontalComponent.prototype, "categories", void 0);
        __decorate([
            core_1.Input('data1'),
            __metadata("design:type", Array)
        ], HorizontalComponent.prototype, "data1", void 0);
        __decorate([
            core_1.Input('data2'),
            __metadata("design:type", Array)
        ], HorizontalComponent.prototype, "data2", void 0);
        __decorate([
            core_1.Input('matched'),
            __metadata("design:type", Number)
        ], HorizontalComponent.prototype, "matched", void 0);
        HorizontalComponent = __decorate([
            core_1.Component({
                selector: 'chart-horizontal',
                templateUrl: 'js/medikly/shared/charts/horizontal/horizontal.component.html',
                styleUrls: ['js/medikly/shared/charts/horizontal/horizontal.component.css']
            })
        ], HorizontalComponent);
        return HorizontalComponent;
    }());
    exports.HorizontalComponent = HorizontalComponent;
});
//# sourceMappingURL=horizontal.component.js.map