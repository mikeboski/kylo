/**
 * Created by development on 10/7/17.
 */
import {Component, Input} from '@angular/core';

@Component({
  selector: 'chart-horizontal',
  templateUrl: 'js/medikly/shared/charts/horizontal/horizontal.component.html',
  styleUrls: ['js/medikly/shared/charts/horizontal/horizontal.component.css']
})
export class HorizontalComponent {
  @Input('categories') categories: string[];
  @Input('data1') data1: number[];
  @Input('data2') data2: number[];
  @Input('matched') matched: number = null;

  //HighCharts
  sparkLine = {
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
    series: [{color: 'rgba(214, 213, 213, 0.6)',name: "Audience", "data": this.data1, pointPadding: 0.1},{color: 'rgba(56, 142, 60, 0.85)',name: "Segment", "data": this.data2, pointPadding: 0.3}],
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
        return {x: point.plotX - w / 2, y: point.plotY - h};
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

  ngOnChanges(changes: any) {
    //HighCharts

    this.sparkLine.series[0].data = changes.data1.currentValue;
    this.sparkLine.series[1].data = changes.data2.currentValue;

  }

  setSparkLine(data1,data2){
    this.sparkLine.series[0].data = [data1];
    this.sparkLine.series[1].data = [data2];

    return this.sparkLine;
  }

}






