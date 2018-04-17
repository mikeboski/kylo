import {Component, Input, ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-expansion-chart',
  templateUrl: 'js/medikly/project-view/target-component/expansion-chart/expansion-chart.component.html',
  styleUrls: ['js/medikly/project-view/target-component/expansion-chart/expansion-chart.component.css']
})
export class ExpansionChartComponent{
  @Input('children') children: any;
  @ViewChild('myPanel') myPanel;

  constructor() {
  }

  //This method throw event 'window:resize' to resize echarts
  tabActive(){
    setTimeout(()=>{
      window.dispatchEvent(new Event('resize'));
    },100);
  }

  expandedEvent(chart:any){
    chart.open=true;
  }
  collapsedEvent(chart:any){
    chart.open=false;
  }

}
