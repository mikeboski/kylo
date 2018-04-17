import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {DATA} from './data/sidebar';
import {MockModel} from './data/model';
import {DOCTORS} from './data/doctors';
/*import {ToolbarService} from '../core/toolbar/toolbar.service';*/
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
@Component({
  selector: 'app-search-directory',
  templateUrl: 'js/medikly/search-directory/search-directory.component.html',
  styleUrls: ['js/medikly/search-directory/search-directory.component.css']
})

export class SearchDirectoryComponent implements OnInit, OnDestroy {
  categories: MockModel[];
  @ViewChild('map1') map1;
  @ViewChild('directoryListing') directoryListing;
  @ViewChild('directorySidenav') sidemenu;
  collapseSidebar: boolean = false;
  sub: any;
  category: any;
  listingEnabled: boolean = true;
  mapCfg: object = {
    lat: 40.7597623,
    lng: -73.9780035,
    zoom: 8,
  };
  flagFilters: boolean = true;
  filters: any;
  multi = true;
  providers: any;
  selected: any;
  infoWindowOpened = null;

  //Compare
  providersCompare = [];
  minProviders = 2;
  maxProviders = 3;

  //SnackBar
  alreadyAdded = 'This provider is already added.';
  added= 'Added to compare.';
  max='It is not possible to compare more than '+this.maxProviders+' providers.';
  actionButtonLabel = 'Retry';
  action = false;
  setAutoHide = true;
  autoHide = 3000;
  addExtraClass = false;
  quickpanelOpen: boolean = false;
  comparePanel: boolean = false;
  filterOpen: boolean = false;
  filterPanel: boolean = false;
  markers = [
    {lat: 40.72763956, ln: -73.82638322},
    {lat: 40.81327588, ln: -73.66461299},
    {lat: 40.56974642, ln: -74.39789802},
    {lat: 40.76698274, ln: -74.30610306},
    {lat: 41.05271405, ln: -74.25038854},
    {lat: 40.82232239, ln: -74.52105824},
    {lat: 40.9670578, ln: -73.94190166},
    {lat: 40.6421955, ln: -74.28914059},
    {lat: 40.95758377, ln: -74.25619124},
    {lat: 40.56383105, ln: -73.64267842},
    {lat: 40.57788162, ln: -73.77650895},
    {lat: 40.59591353, ln: -74.52946108},
    {lat: 41.09850829, ln: -74.01932544},
    {lat: 40.91994821, ln: -74.10600531},
    {lat: 40.87082808, ln: -74.4429114},
    {lat: 40.54612327, ln: -73.85726855},
    {lat: 40.92571731, ln: -73.77962394},
    {lat: 40.86066037, ln: -74.42136194},
    {lat: 41.14469984, ln: -74.13617412},
    {lat: 40.37450654, ln: -74.35128819},
    {lat: 41.07940418, ln: -75.3893358},
    {lat: 40.84540307, ln: -75.75162759},
    {lat: 40.79194106, ln: -74.92019853},
    {lat: 41.7221995, ln: -75.41063128},
    {lat: 41.34676661, ln: -75.44974367},
  ];

  //List of providers followed
  following=[1,4,5,8];

  styles: any = [{
    featureType: 'all',
    stylers: [{
      saturation: -95
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{
      hue: '#00ffee'
    }, {
      saturation: 50
    }]
  }, {
    featureType: 'poi.business',
    elementType: 'labels',
    stylers: [{
      visibility: 'off'
    }]
  }];

  constructor(public snackBar: MatSnackBar) {
/*    ts.setTopSectionTitle('Directory');
    ts.setToolbarColor('blue');*/
  }

  ngOnInit(): void {
    this.getCategories();
    this.getProviders();
    //this.sidemenu.mode = 'side';

    this.sub = 1; /*this.route.params.subscribe(params => {
      this.category = params['category']; // (+) converts string 'id' to a number
    });*/


    const elemSidebar = <HTMLElement>document.querySelector('.app-inner .sidebar-panel');
    const elemContent = <HTMLElement>document.querySelector('.app-inner .main-content');

    // this.mapHeight = window.innerHeight - 135;
  }

  // onResize(event) {
  //     this.mapHeight = event.target.innerHeight - 135;
  // }

  ngOnDestroy() {
    //this.sub.unsubscribe();

    //this.ts.restoreToolbarColor();
  }

  getCategories() {
    this.fetchCategories().then(categories => {
      this.categories = categories;
      this.filters = this.categories[0].children;
    });
  }

  fetchCategories(): Promise<MockModel[]> {
    return Promise.resolve(DATA);
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

  menuMouseOver(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
      this.sidemenu.mode = 'over';
    }
  }

  menuMouseOut(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
      this.sidemenu.mode = 'side';
    }
  }

  isCategoryOpen(): boolean {
    if (!this.filters) {
      this.listingEnabled = false;
      return false;
    }
    return this.filters.length > 0;
  }

  showProvidersListing(event): void {
    this.listingEnabled = true;
  }

  closeProfile() {
    this.directoryListing.selected = false;
  }

  changeFilters(filters): void {
    this.listingEnabled = true;
    this.flagFilters = true;
    this.filters = filters;
  }

  getProviders() {
    this.fetchProviders().then(providers => {
      this.providers = providers;
      for (let i in this.providers) {
        var mKey = parseInt(i) + 1;
        this.providers[i].basic.first_name = this.capitalize(this.providers[i].basic.first_name).trim();
        this.providers[i].basic.last_name = this.capitalize(this.providers[i].basic.last_name).trim();
        this.providers[i].addresses[0].city = this.capitalize(this.providers[i].addresses[0].city).trim();
        this.providers[i].avatar = `assets/medikly_theme/images/providers/${this.providers[i].basic.gender}/${mKey}.png`;
        this.providers[i].key = mKey;
      }
    });
  }

  capitalize(value: any): any {
    value = value.replace('  ', ' ');
    if (value) {
      let w = '';
      if (value.split(' ').length > 0) {
        value.split(' ').forEach(word => {
          w += word.charAt(0).toUpperCase() + word.toString().substr(1, word.length).toLowerCase() + ' '
        });
      } else {
        w = value.charAt(0).toUpperCase() + value.toString().substr(1, value.length).toLowerCase();
      }
      return w;
    }
    return value;
  }

  fetchProviders(): Promise<any[]> {
    return Promise.resolve(DOCTORS);
  }

  selectedItem(provider) : any {
    this.directoryListing.selected = provider;
  }

  clickedMarker(infoWindow) {

    if( this.infoWindowOpened ===  infoWindow)
      return;

    if(this.infoWindowOpened !== null)
      this.infoWindowOpened.close();

    this.infoWindowOpened = infoWindow;
  }


  //List Provicers Compare
  addToProvidersCompare(provider){
    if(this.providersCompare.length >= this.maxProviders){
      this.openMax();
      return;
    }

    let index: number = this.providersCompare.indexOf(provider);
    if(index<0) {
      this.providersCompare.push(provider);
      this.openAdded();
    }
    else {
      //Alert
      this.openAlreadyAdded();
    }
  }
  removeToProvidersCompare(provider){
    let index: number = this.providersCompare.indexOf(provider);
    if (index !== -1) {
      this.providersCompare.splice(index, 1);
    }
  }
  redirectToCompare(){
    let param = this.getsIdsProviders();
  }

  getsIdsProviders(){
    let param = '';
    this.providersCompare.forEach(function (provider, i) {
      if(i!=0) param=param+'-';
      param = param + provider.key;
    });
    return param;
  }

  //SnackBar
  openAlreadyAdded() {
    const config = new MatSnackBarConfig();
    config.duration = this.autoHide;
    config.extraClasses = this.addExtraClass ? ['party'] : null;
    this.snackBar.open(this.alreadyAdded, this.action && this.actionButtonLabel, config);
  }
  openAdded() {
    const config = new MatSnackBarConfig();
    config.duration = this.autoHide;
    config.extraClasses = this.addExtraClass ? ['party'] : null;
    this.snackBar.open(this.added, this.action && this.actionButtonLabel, config);
  }
  openMax() {
    const config = new MatSnackBarConfig();
    config.duration = this.autoHide;
    config.extraClasses = this.addExtraClass ? ['party'] : null;
    this.snackBar.open(this.max, this.action && this.actionButtonLabel, config);
  }

  followMessage(provider){
    const config = new MatSnackBarConfig();
    config.duration = this.autoHide;
    config.extraClasses = this.addExtraClass ? ['party'] : null;

    let index = this.following.indexOf(provider.key);

    if(index > -1){
      this.following.splice(index, 1);
      this.snackBar.open('Removed '+provider.basic.first_name+' '+provider.basic.last_name+' from your favorite list.', this.action && this.actionButtonLabel, config);
    }
    else{
      this.following.push(provider.key);
      this.snackBar.open('Added '+provider.basic.first_name+' '+provider.basic.last_name+' to favorite list.', this.action && this.actionButtonLabel, config);
    }


  }

  //All providers button
  isOpen: boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }


  //On Close event sidepanel `Filter`
  showListing(){
    this.listingEnabled=true;
  }

}
