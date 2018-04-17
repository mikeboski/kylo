/**
 * Created by development on 3/7/17.
 */
import { Component,ViewChild, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'left-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input('categories') categories: any;
  @ViewChild('coreAudienceSidenav') sidemenu;
  @Output('filterChange') filterChange: EventEmitter<number> = new EventEmitter<number>();


  ngOnInit(): void {

  }
  throwEvent(filters) {
    this.filterChange.emit(filters);
  }


}
