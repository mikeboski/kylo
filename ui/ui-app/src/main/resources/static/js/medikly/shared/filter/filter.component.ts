/**
 * Created by development on 3/7/17.
 */
import { Component ,ViewChild, Inject, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'filter-sidebar',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input('categories') categories: any;
  @ViewChild('filterSidenav') sidemenu;
  collapseSidebar: boolean = false;

  currentStates: string[];
  currentPokemonFromGroup: string;

  states = [
    {value: 'Alabama', viewValue: 'Alabama'},
    {value: 'Alaska', viewValue: 'Alaska'},
    {value: 'Arizona', viewValue: 'Arizona'},
    {value: 'Arkansas', viewValue: 'Arkansas'}

  ];

  drinks = [
    {value: 'coke-0', viewValue: 'Coke'},
    {value: 'long-name-1', viewValue: 'Decaf Chocolate Brownie Vanilla Gingerbread Frappuccino'},
    {value: 'water-2', viewValue: 'Water'},
    {value: 'pepper-3', viewValue: 'Dr. Pepper'},
    {value: 'coffee-4', viewValue: 'Coffee'},
    {value: 'tea-5', viewValue: 'Tea'},
    {value: 'juice-6', viewValue: 'Orange juice'},
    {value: 'wine-7', viewValue: 'Wine'},
    {value: 'milk-8', viewValue: 'Milk'},
  ];
  drinksTheme = 'primary';

  constructor() {
  }

  displayMode = 'flat';
  multi = true;
  hideToggle = false;

  ngOnInit(): void {

  }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }

  isFilters(): boolean {
    return (this.categories && this.categories.size && this.categories.size > 0);
  }

}
