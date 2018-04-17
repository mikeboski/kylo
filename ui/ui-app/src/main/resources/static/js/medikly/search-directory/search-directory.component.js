var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "./data/sidebar", "./data/doctors", "@angular/material"], function (require, exports, core_1, sidebar_1, doctors_1, material_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SearchDirectoryComponent = /** @class */ (function () {
        function SearchDirectoryComponent(snackBar) {
            this.snackBar = snackBar;
            this.collapseSidebar = false;
            this.listingEnabled = true;
            this.mapCfg = {
                lat: 40.7597623,
                lng: -73.9780035,
                zoom: 8,
            };
            this.flagFilters = true;
            this.multi = true;
            this.infoWindowOpened = null;
            //Compare
            this.providersCompare = [];
            this.minProviders = 2;
            this.maxProviders = 3;
            //SnackBar
            this.alreadyAdded = 'This provider is already added.';
            this.added = 'Added to compare.';
            this.max = 'It is not possible to compare more than ' + this.maxProviders + ' providers.';
            this.actionButtonLabel = 'Retry';
            this.action = false;
            this.setAutoHide = true;
            this.autoHide = 3000;
            this.addExtraClass = false;
            this.quickpanelOpen = false;
            this.comparePanel = false;
            this.filterOpen = false;
            this.filterPanel = false;
            this.markers = [
                { lat: 40.72763956, ln: -73.82638322 },
                { lat: 40.81327588, ln: -73.66461299 },
                { lat: 40.56974642, ln: -74.39789802 },
                { lat: 40.76698274, ln: -74.30610306 },
                { lat: 41.05271405, ln: -74.25038854 },
                { lat: 40.82232239, ln: -74.52105824 },
                { lat: 40.9670578, ln: -73.94190166 },
                { lat: 40.6421955, ln: -74.28914059 },
                { lat: 40.95758377, ln: -74.25619124 },
                { lat: 40.56383105, ln: -73.64267842 },
                { lat: 40.57788162, ln: -73.77650895 },
                { lat: 40.59591353, ln: -74.52946108 },
                { lat: 41.09850829, ln: -74.01932544 },
                { lat: 40.91994821, ln: -74.10600531 },
                { lat: 40.87082808, ln: -74.4429114 },
                { lat: 40.54612327, ln: -73.85726855 },
                { lat: 40.92571731, ln: -73.77962394 },
                { lat: 40.86066037, ln: -74.42136194 },
                { lat: 41.14469984, ln: -74.13617412 },
                { lat: 40.37450654, ln: -74.35128819 },
                { lat: 41.07940418, ln: -75.3893358 },
                { lat: 40.84540307, ln: -75.75162759 },
                { lat: 40.79194106, ln: -74.92019853 },
                { lat: 41.7221995, ln: -75.41063128 },
                { lat: 41.34676661, ln: -75.44974367 },
            ];
            //List of providers followed
            this.following = [1, 4, 5, 8];
            this.styles = [{
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
            //All providers button
            this.isOpen = false;
            /*    ts.setTopSectionTitle('Directory');
                ts.setToolbarColor('blue');*/
        }
        SearchDirectoryComponent.prototype.ngOnInit = function () {
            this.getCategories();
            this.getProviders();
            //this.sidemenu.mode = 'side';
            this.sub = 1; /*this.route.params.subscribe(params => {
              this.category = params['category']; // (+) converts string 'id' to a number
            });*/
            var elemSidebar = document.querySelector('.app-inner .sidebar-panel');
            var elemContent = document.querySelector('.app-inner .main-content');
            // this.mapHeight = window.innerHeight - 135;
        };
        // onResize(event) {
        //     this.mapHeight = event.target.innerHeight - 135;
        // }
        SearchDirectoryComponent.prototype.ngOnDestroy = function () {
            //this.sub.unsubscribe();
            //this.ts.restoreToolbarColor();
        };
        SearchDirectoryComponent.prototype.getCategories = function () {
            var _this = this;
            this.fetchCategories().then(function (categories) {
                _this.categories = categories;
                _this.filters = _this.categories[0].children;
            });
        };
        SearchDirectoryComponent.prototype.fetchCategories = function () {
            return Promise.resolve(sidebar_1.DATA);
        };
        SearchDirectoryComponent.prototype.isOver = function () {
            return window.matchMedia("(max-width: 960px)").matches;
        };
        SearchDirectoryComponent.prototype.isMac = function () {
            var bool = false;
            if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
                bool = true;
            }
            return bool;
        };
        SearchDirectoryComponent.prototype.menuMouseOver = function () {
            if (window.matchMedia("(min-width: 960px)").matches && this.collapseSidebar) {
                this.sidemenu.mode = 'over';
            }
        };
        SearchDirectoryComponent.prototype.menuMouseOut = function () {
            if (window.matchMedia("(min-width: 960px)").matches && this.collapseSidebar) {
                this.sidemenu.mode = 'side';
            }
        };
        SearchDirectoryComponent.prototype.isCategoryOpen = function () {
            if (!this.filters) {
                this.listingEnabled = false;
                return false;
            }
            return this.filters.length > 0;
        };
        SearchDirectoryComponent.prototype.showProvidersListing = function (event) {
            this.listingEnabled = true;
        };
        SearchDirectoryComponent.prototype.closeProfile = function () {
            this.directoryListing.selected = false;
        };
        SearchDirectoryComponent.prototype.changeFilters = function (filters) {
            this.listingEnabled = true;
            this.flagFilters = true;
            this.filters = filters;
        };
        SearchDirectoryComponent.prototype.getProviders = function () {
            var _this = this;
            this.fetchProviders().then(function (providers) {
                _this.providers = providers;
                for (var i in _this.providers) {
                    var mKey = parseInt(i) + 1;
                    _this.providers[i].basic.first_name = _this.capitalize(_this.providers[i].basic.first_name).trim();
                    _this.providers[i].basic.last_name = _this.capitalize(_this.providers[i].basic.last_name).trim();
                    _this.providers[i].addresses[0].city = _this.capitalize(_this.providers[i].addresses[0].city).trim();
                    _this.providers[i].avatar = "assets/medikly_theme/images/providers/" + _this.providers[i].basic.gender + "/" + mKey + ".png";
                    _this.providers[i].key = mKey;
                }
            });
        };
        SearchDirectoryComponent.prototype.capitalize = function (value) {
            value = value.replace('  ', ' ');
            if (value) {
                var w_1 = '';
                if (value.split(' ').length > 0) {
                    value.split(' ').forEach(function (word) {
                        w_1 += word.charAt(0).toUpperCase() + word.toString().substr(1, word.length).toLowerCase() + ' ';
                    });
                }
                else {
                    w_1 = value.charAt(0).toUpperCase() + value.toString().substr(1, value.length).toLowerCase();
                }
                return w_1;
            }
            return value;
        };
        SearchDirectoryComponent.prototype.fetchProviders = function () {
            return Promise.resolve(doctors_1.DOCTORS);
        };
        SearchDirectoryComponent.prototype.selectedItem = function (provider) {
            this.directoryListing.selected = provider;
        };
        SearchDirectoryComponent.prototype.clickedMarker = function (infoWindow) {
            if (this.infoWindowOpened === infoWindow)
                return;
            if (this.infoWindowOpened !== null)
                this.infoWindowOpened.close();
            this.infoWindowOpened = infoWindow;
        };
        //List Provicers Compare
        SearchDirectoryComponent.prototype.addToProvidersCompare = function (provider) {
            if (this.providersCompare.length >= this.maxProviders) {
                this.openMax();
                return;
            }
            var index = this.providersCompare.indexOf(provider);
            if (index < 0) {
                this.providersCompare.push(provider);
                this.openAdded();
            }
            else {
                //Alert
                this.openAlreadyAdded();
            }
        };
        SearchDirectoryComponent.prototype.removeToProvidersCompare = function (provider) {
            var index = this.providersCompare.indexOf(provider);
            if (index !== -1) {
                this.providersCompare.splice(index, 1);
            }
        };
        SearchDirectoryComponent.prototype.redirectToCompare = function () {
            var param = this.getsIdsProviders();
        };
        SearchDirectoryComponent.prototype.getsIdsProviders = function () {
            var param = '';
            this.providersCompare.forEach(function (provider, i) {
                if (i != 0)
                    param = param + '-';
                param = param + provider.key;
            });
            return param;
        };
        //SnackBar
        SearchDirectoryComponent.prototype.openAlreadyAdded = function () {
            var config = new material_1.MatSnackBarConfig();
            config.duration = this.autoHide;
            config.extraClasses = this.addExtraClass ? ['party'] : null;
            this.snackBar.open(this.alreadyAdded, this.action && this.actionButtonLabel, config);
        };
        SearchDirectoryComponent.prototype.openAdded = function () {
            var config = new material_1.MatSnackBarConfig();
            config.duration = this.autoHide;
            config.extraClasses = this.addExtraClass ? ['party'] : null;
            this.snackBar.open(this.added, this.action && this.actionButtonLabel, config);
        };
        SearchDirectoryComponent.prototype.openMax = function () {
            var config = new material_1.MatSnackBarConfig();
            config.duration = this.autoHide;
            config.extraClasses = this.addExtraClass ? ['party'] : null;
            this.snackBar.open(this.max, this.action && this.actionButtonLabel, config);
        };
        SearchDirectoryComponent.prototype.followMessage = function (provider) {
            var config = new material_1.MatSnackBarConfig();
            config.duration = this.autoHide;
            config.extraClasses = this.addExtraClass ? ['party'] : null;
            var index = this.following.indexOf(provider.key);
            if (index > -1) {
                this.following.splice(index, 1);
                this.snackBar.open('Removed ' + provider.basic.first_name + ' ' + provider.basic.last_name + ' from your favorite list.', this.action && this.actionButtonLabel, config);
            }
            else {
                this.following.push(provider.key);
                this.snackBar.open('Added ' + provider.basic.first_name + ' ' + provider.basic.last_name + ' to favorite list.', this.action && this.actionButtonLabel, config);
            }
        };
        SearchDirectoryComponent.prototype.toggleDropdown = function () {
            this.isOpen = !this.isOpen;
        };
        SearchDirectoryComponent.prototype.onClickOutside = function () {
            this.isOpen = false;
        };
        //On Close event sidepanel `Filter`
        SearchDirectoryComponent.prototype.showListing = function () {
            this.listingEnabled = true;
        };
        __decorate([
            core_1.ViewChild('map1'),
            __metadata("design:type", Object)
        ], SearchDirectoryComponent.prototype, "map1", void 0);
        __decorate([
            core_1.ViewChild('directoryListing'),
            __metadata("design:type", Object)
        ], SearchDirectoryComponent.prototype, "directoryListing", void 0);
        __decorate([
            core_1.ViewChild('directorySidenav'),
            __metadata("design:type", Object)
        ], SearchDirectoryComponent.prototype, "sidemenu", void 0);
        SearchDirectoryComponent = __decorate([
            core_1.Component({
                selector: 'app-search-directory',
                templateUrl: 'js/medikly/search-directory/search-directory.component.html',
                styleUrls: ['js/medikly/search-directory/search-directory.component.css']
            }),
            __metadata("design:paramtypes", [material_1.MatSnackBar])
        ], SearchDirectoryComponent);
        return SearchDirectoryComponent;
    }());
    exports.SearchDirectoryComponent = SearchDirectoryComponent;
});
//# sourceMappingURL=search-directory.component.js.map