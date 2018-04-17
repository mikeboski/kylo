/**
 * Created by development on 14/7/17.
 */
import { platformBrowserDynamic }  from '@angular/platform-browser-dynamic';
import { Component }     from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { contextColors } from '../data/dataContext';

@Component({
  selector: 'chart-map',
  styles: [`
      chart {
        display: block;
      }
    `],
  template: `<chart type="Map" [options]="options"></chart>`
})
export class MapComponent {
  dataMap: any;
  data: any;
  options: Object;
  colors: any;

  constructor(private http: HttpService) {

    this.getColors();

    this.http.getJsonCalDataMap().subscribe(data => {
      this.dataMap = data;

    /*  this.http.getJsonUsaData().subscribe(data => {
        this.data = data;*/

        /*this.options = {
          chart: {
            borderWidth: 0,
            // marginRight: 50 // for the legend
            marginRight: 0, // for the legend
            margin: [0,0,0,0]
          },

          title: {
            text: ''
          },
          mapNavigation: {
            enabled: false,
            enableMouseWheelZoom: false
          },

          legend: {
            enabled: false,
            title: {
              text: null,
              style: {
                color: 'black'
              }
            },
            layout: 'vertical',
            align: 'right',
            floating: true,
            valueDecimals: 0,
            valueSuffix: '%',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            symbolRadius: 0,
            symbolHeight: 14
          },

          colorAxis: {
            dataClasses: [{
              from: 0,
              to: 2,
              color: this.colors[50]
            }, {
              from: 2,
              to: 4,
              color: this.colors[100]
            }, {
              from: 4,
              to: 6,
              color: this.colors[300]
            }, {
              from: 6,
              to: 8,
              color: this.colors[500]
            }, {
              from: 8,
              to: 10,
              color: this.colors[700]
            }, {
              from: 10,
              color: this.colors[900]
            }]
          },

          plotOptions: {
            mapline: {
              showInLegend: false,
              enableMouseTracking: false
            }
          },

          series: [{
            mapData: this.dataMap,
            data: this.data,
            joinBy: ['hc-key', 'code'],
            name: 'Unemployment rate',
            tooltip: {
              valueSuffix: '%'
            },
            borderWidth: 0.5,
            states: {
              hover: {
                color: '#a4edba'
              }
            }
          }]
        };*/

      this.data = [
        ['us-ca-083', 0],
        ['us-ca-111', 1],
        ['us-ca-071', 2],
        ['us-ca-115', 3],
        ['us-ca-101', 4],
        ['us-ca-031', 5],
        ['us-ca-053', 6],
        ['us-ca-057', 7],
        ['us-ca-059', 8],
        ['us-ca-065', 9],
        ['us-ca-073', 10],
        ['us-ca-041', 11],
        ['us-ca-075', 12],
        ['us-ca-095', 13],
        ['us-ca-097', 14],
        ['us-ca-055', 15],
        ['us-ca-013', 16],
        ['us-ca-009', 17],
        ['us-ca-077', 18],
        ['us-ca-035', 19],
        ['us-ca-091', 20],
        ['us-ca-067', 21],
        ['us-ca-017', 22],
        ['us-ca-099', 23],
        ['us-ca-061', 24],
        ['us-ca-043', 25],
        ['us-ca-063', 26],
        ['us-ca-049', 27],
        ['us-ca-089', 28],
        ['us-ca-109', 29],
        ['us-ca-039', 30],
        ['us-ca-003', 31],
        ['us-ca-069', 32],
        ['us-ca-047', 33],
        ['us-ca-079', 34],
        ['us-ca-011', 35],
        ['us-ca-007', 36],
        ['us-ca-081', 37],
        ['us-ca-087', 38],
        ['us-ca-085', 39],
        ['us-ca-029', 40],
        ['us-ca-005', 41],
        ['us-ca-113', 42],
        ['us-ca-033', 43],
        ['us-ca-045', 44],
        ['us-ca-103', 45],
        ['us-ca-023', 46],
        ['us-ca-093', 47],
        ['us-ca-027', 48],
        ['us-ca-001', 49],
        ['us-ca-037', 50],
        ['us-ca-025', 51],
        ['us-ca-021', 52],
        ['us-ca-107', 53],
        ['us-ca-019', 54],
        ['us-ca-015', 55],
        ['us-ca-105', 56],
        ['us-ca-051', 57]
      ];

        this.options = {
          chart: {
            width: 350,
            height: 350
          },
          credits: {enabled: false},
          title: {
            text: ''
          },

          subtitle: {
            text: ''
          },
          legend: {
            enabled: false,
            title: {
              text: null,
              style: {
                color: 'black'
              }
            },
            layout: 'vertical',
            align: 'right',
            floating: true,
            valueDecimals: 0,
            valueSuffix: '%',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            symbolRadius: 0,
            symbolHeight: 14
          },
          mapNavigation: {
            enabled: false,
            buttonOptions: {
              verticalAlign: 'bottom'
            }
          },

          colorAxis: {
            dataClasses: [{
              from: 0,
              to: 10,
              color: this.colors[50]
            }, {
              from: 10,
              to: 20,
              color: this.colors[100]
            }, {
              from: 20,
              to: 30,
              color: this.colors[300]
            }, {
              from: 30,
              to: 40,
              color: this.colors[500]
            }, {
              from: 40,
              to: 50,
              color: this.colors[700]
            }, {
              from: 50,
              color: this.colors[900]
            }]
          },

          series: [{
            mapData: this.dataMap,
            data: this.data,
            name: 'Random data',
            borderWidth: 0.5,
            states: {
              hover: {
                color: '#a4edba'
              }
            },
            dataLabels: {
              enabled: false,
              format: '{point.name}'
            }
          }]
        };

   /*   });*/
    });

  }

  getColors() {
    this.fetchColors().then(colors => this.colors = colors);
  }

  fetchColors(): Promise<any> {
    return Promise.resolve(contextColors);
  }
}

