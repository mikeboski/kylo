/**
 * Created by development on 10/7/17.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import {ChartsComponent} from './charts.component';
import {InvertedComponent} from './vertical-inverted/inverted.component';
import {HorizontalComponent} from './horizontal/horizontal.component';
import {MapComponent} from './map/map.component';

import {ChartModule} from 'angular2-highcharts';

import {MatIconModule} from '@angular/material';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

// export declare let require: any;

export function highchartsFactory() {
    const highcharts = require('highcharts/highstock');
    const highmaps = require('highcharts/modules/map');
    ChartModule.forRoot(require('highcharts/highstock'),
        require('highcharts/modules/map'));
    return highcharts;
}


@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatIconModule,
        ChartModule
    ],
    declarations: [ChartsComponent, InvertedComponent, HorizontalComponent, MapComponent],
    exports: [ChartsComponent, InvertedComponent, HorizontalComponent, MapComponent, ChartModule],
    providers: [{
        provide: HighchartsStatic,
        useFactory: highchartsFactory
    }]
})

export class ChartsModule {
}
