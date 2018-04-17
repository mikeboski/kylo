import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-target-tabs',
  templateUrl: 'js/medikly/project-view/target-component/target-tabs/target-tabs.component.html',
  styleUrls: ['js/medikly/project-view/target-component/target-tabs/target-tabs.component.css']
})
export class TargetTabsComponent {

  @Input('filters') filters: any = [];
  @Input('opened') opened:boolean = false;
  //Chips
  disabled: boolean = false;
  chipAddition: boolean = true;
  chipRemoval: boolean = true;
  filteredStrings: string[];

  constructor() {
  }

  filterStrings(value: string, list, selecteds): void {
    this.filteredStrings = list.filter((item: any) => {
      if (value) {
        return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
      } else {
        return false;
      }
    }).filter((filteredItem: any) => {
      return selecteds ? selecteds.indexOf(filteredItem) < 0 : true;
    });
  }

  addToModel(link, selecteds) {
    if (selecteds.indexOf(link) < 0)
      selecteds.push(link);
  }

  getLinks(list, selecteds) {
    let array = list.slice(0, 4).filter(item => selecteds.indexOf(item) < 0);
    return array;
  }

  expandedEvent(filter:any){
    filter.open=true;
  }
  collapsedEvent(filter:any){
    filter.open=false;
  }

}
