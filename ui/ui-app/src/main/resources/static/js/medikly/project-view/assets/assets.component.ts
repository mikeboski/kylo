/**
 * Created by German on 5/10/17.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
//import {ToolbarService} from '../../core/toolbar/toolbar.service';

import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';
const NUMBER_FORMAT: (v: any) => any = (v: number) => v;
const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);

@Component({
  selector: 'app-assets',
  templateUrl: 'js/medikly/project-view/assets/assets.component.html',
  styleUrls: ['js/medikly/project-view/assets/assets.component.css']
})
export class AssetsComponent implements OnInit, OnDestroy {

  columns: ITdDataTableColumn[] = [
    { name: 'name',  label: 'Dessert (100g serving)', sortable: true },
    { name: 'type', label: 'Type', filter: true },
    { name: 'calories', label: 'Calories', numeric: true, format: NUMBER_FORMAT, sortable: true, hidden: false },
    { name: 'carbs', label: 'Carbs (g)', numeric: true, format: NUMBER_FORMAT }
  ];

  data: any[] = [
    {
      'id': 1,
      'name': 'Frozen yogurt',
      'type': 'Ice cream',
      'calories': 159.0,
      'fat': 6.0,
      'carbs': 24.0,
      'protein': 4.0,
      'sodium': 87.0,
      'calcium': 14.0,
      'iron': 1.0,
      'comments': 'I love froyo!',
    }, {
      'id': 2,
      'name': 'Ice cream sandwich',
      'type': 'Ice cream',
      'calories': 237.0,
      'fat': 9.0,
      'carbs': 37.0,
      'protein': 4.3,
      'sodium': 129.0,
      'calcium': 8.0,
      'iron': 1.0,
    }, {
      'id': 3,
      'name': 'Eclair',
      'type': 'Pastry',
      'calories':  262.0,
      'fat': 16.0,
      'carbs': 24.0
    }, {
      'id': 4,
      'name': 'Cupcake',
      'type': 'Pastry',
      'calories':  305.0,
      'fat': 3.7,
      'carbs': 67.0
    }, {
      'id': 5,
      'name': 'Jelly bean',
      'type': 'Candy',
      'calories':  375.0,
      'fat': 0.0,
      'carbs': 94.0
    }, {
      'id': 6,
      'name': 'Lollipop',
      'type': 'Candy',
      'calories': 392.0,
      'fat': 0.2,
      'carbs': 98.0
    }, {
      'id': 7,
      'name': 'Honeycomb',
      'type': 'Other',
      'calories': 408.0,
      'fat': 3.2,
      'carbs': 87.0,
    }, {
      'id': 8,
      'name': 'Donut',
      'type': 'Pastry',
      'calories': 452.0,
      'fat': 25.0,
      'carbs': 51.0,
    }, {
      'id': 9,
      'name': 'KitKat',
      'type': 'Candy',
      'calories': 518.0,
      'fat': 26.0,
      'carbs': 65.0,
    }, {
      'id': 10,
      'name': 'Chocolate',
      'type': 'Candy',
      'calories': 518.0,
      'fat': 26.0,
      'carbs': 65.0,
    }, {
      'id': 11,
      'name': 'Chamoy',
      'type': 'Candy',
      'calories': 518.0,
      'fat': 26.0,
      'carbs': 65.0,
    },
  ];

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;

  searchTerm: string = '';
  fromRow: number = 1;
  selectable: boolean = true;
  multiple: boolean = true;
  clickable: boolean = true;
  currentPage: number = 1;
  pageSize: number = 10;
  sortBy: string = 'name';
  selectedRows: any[] = [];
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(private _dataTableService: TdDataTableService) {

  }

  ngOnInit() {
    //this.ts.setToolbarColor('dark-blue');
    //this.ts.setSearchBarVisible(false);

    this.filter();
  }

  ngOnDestroy() {
    //this.ts.restoreToolbarColor();
    //this.ts.setBackRoute('');
    //this.ts.setSearchBarVisible(true);
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  filter(): void {
    let newData: any[] = this.data;
    let excludedColumns: string[] = this.columns
      .filter((column: ITdDataTableColumn) => {
        return ((column.filter === undefined && column.hidden === true) ||
        (column.filter !== undefined && column.filter === false));
      }).map((column: ITdDataTableColumn) => {
        return column.name;
      });
    newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }

}
