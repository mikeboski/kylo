/**
 * Created by development on 10/7/17.
 */
import {Component, Input} from '@angular/core';


@Component({
  selector: 'chart-vertical',
  templateUrl: 'js/medikly/shared/charts/charts.component.html',
  styleUrls: ['js/medikly/shared/charts/charts.component.css']
})
export class ChartsComponent {

  @Input('categories') categories: string[];
  @Input('data1') data1: number[];
  @Input('data2') data2: number[];

  //HighCharts
  options = {
    chart: {
      type: 'column',
      height: '200px'
    },
    credits: {enabled: false},
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

  ngOnChanges(changes: any) {
    //HighCharts
    this.options.xAxis.categories = changes.categories.currentValue;
    this.options.series[0].data = changes.data1.currentValue;
    this.options.series[1].data = changes.data2.currentValue;
  }

}
