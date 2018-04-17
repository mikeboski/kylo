/**
 * Created by development on 10/7/17.
 */
/**
 * Created by development on 10/7/17.
 */
import {Component, Input} from '@angular/core';

@Component({
  selector: 'chart-vertical-inverted',
  templateUrl: 'js/medikly/shared/charts/vertical-inverted/inverted.component.html',
  styleUrls: ['js/medikly/shared/charts/vertical-inverted/inverted.component.css']
})
export class InvertedComponent {

  @Input('categories') categories: string[];
  @Input('name1') name1: string;
  @Input('name2') name2: string;
  @Input('data1') data1: number[];
  @Input('data2') data2: number[];
  @Input('data3') data3: number[];
  @Input('data4') data4: number[];
  @Input('matched') matched: number = null;

  //HighCharts
  graph1 = {
    chart: {
      type: 'column',
      height: '130px'
    },
    title: {
      text: ''
    },
    credits: {enabled: false},
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
    }
    , plotOptions: {
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
  graph2 = {
    chart: {
      type: 'column',
      height: '130x'
    },
    credits: {enabled: false},
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
    }
    , plotOptions: {
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
      }]
    ,
  };

  ngOnChanges(changes: any) {
    //HighCharts
    this.graph1.xAxis.categories = changes.categories.currentValue;
    this.graph2.xAxis.categories = changes.categories.currentValue;

    this.graph1.series[0].data = changes.data1.currentValue;
    this.graph1.series[1].data = changes.data2.currentValue;

    this.graph2.series[0].data = changes.data3.currentValue;
    this.graph2.series[1].data = changes.data4.currentValue;

  }

}
