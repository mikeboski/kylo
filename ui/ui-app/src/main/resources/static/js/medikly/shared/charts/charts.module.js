var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "@angular/flex-layout", "./charts.component", "./vertical-inverted/inverted.component", "./horizontal/horizontal.component", "./map/map.component", "angular2-highcharts", "@angular/material", "angular2-highcharts/dist/HighchartsService"], function (require, exports, core_1, common_1, flex_layout_1, charts_component_1, inverted_component_1, horizontal_component_1, map_component_1, angular2_highcharts_1, material_1, HighchartsService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // export declare let require: any;
    function highchartsFactory() {
        var highcharts = require('highcharts/highstock');
        var highmaps = require('highcharts/modules/map');
        angular2_highcharts_1.ChartModule.forRoot(require('highcharts/highstock'), require('highcharts/modules/map'));
        return highcharts;
    }
    exports.highchartsFactory = highchartsFactory;
    var ChartsModule = /** @class */ (function () {
        function ChartsModule() {
        }
        ChartsModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    flex_layout_1.FlexLayoutModule,
                    material_1.MatIconModule,
                    angular2_highcharts_1.ChartModule
                ],
                declarations: [charts_component_1.ChartsComponent, inverted_component_1.InvertedComponent, horizontal_component_1.HorizontalComponent, map_component_1.MapComponent],
                exports: [charts_component_1.ChartsComponent, inverted_component_1.InvertedComponent, horizontal_component_1.HorizontalComponent, map_component_1.MapComponent, angular2_highcharts_1.ChartModule],
                providers: [{
                        provide: HighchartsService_1.HighchartsStatic,
                        useFactory: highchartsFactory
                    }]
            })
        ], ChartsModule);
        return ChartsModule;
    }());
    exports.ChartsModule = ChartsModule;
});
//# sourceMappingURL=charts.module.js.map