var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../data/doctors"], function (require, exports, core_1, doctors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DirectoryListingComponent = /** @class */ (function () {
        function DirectoryListingComponent() {
            this.addProviderCompare = new core_1.EventEmitter();
            this.follow = new core_1.EventEmitter();
        }
        DirectoryListingComponent.prototype.capitalize = function (value) {
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
        DirectoryListingComponent.prototype.ngOnInit = function () {
            //this.getProviders();
        };
        DirectoryListingComponent.prototype.getProviders = function () {
            var _this = this;
            this.fetchProviders().then(function (providers) {
                _this.providers = providers;
                for (var i in _this.providers) {
                    var mKey = parseInt(i) + 1;
                    _this.providers[i].basic.first_name = _this.capitalize(_this.providers[i].basic.first_name).trim();
                    _this.providers[i].basic.last_name = _this.capitalize(_this.providers[i].basic.last_name).trim();
                    _this.providers[i].addresses[0].city = _this.capitalize(_this.providers[i].addresses[0].city).trim();
                    _this.providers[i].avatar = "assets/images/providers/" + _this.providers[i].basic.gender + "/" + mKey + ".png";
                    _this.providers[i].key = mKey;
                }
            });
        };
        DirectoryListingComponent.prototype.fetchProviders = function () {
            return Promise.resolve(doctors_1.DOCTORS);
        };
        DirectoryListingComponent.prototype.selectItem = function (selected) {
            this.selected = selected;
        };
        //Compare
        DirectoryListingComponent.prototype.addToProvidersCompare = function (provider) {
            this.providersCompare.push(provider);
        };
        DirectoryListingComponent.prototype.throwEventProviderCompare = function (provider) {
            this.addProviderCompare.emit(provider);
        };
        //Follow
        DirectoryListingComponent.prototype.throwEventFollow = function (provider) {
            this.follow.emit(provider);
        };
        __decorate([
            core_1.Input('category'),
            __metadata("design:type", String)
        ], DirectoryListingComponent.prototype, "category", void 0);
        __decorate([
            core_1.Input('selected'),
            __metadata("design:type", Object)
        ], DirectoryListingComponent.prototype, "selected", void 0);
        __decorate([
            core_1.Input('providers'),
            __metadata("design:type", Object)
        ], DirectoryListingComponent.prototype, "providers", void 0);
        __decorate([
            core_1.Input('following'),
            __metadata("design:type", Object)
        ], DirectoryListingComponent.prototype, "following", void 0);
        __decorate([
            core_1.Input('providersCompare'),
            __metadata("design:type", Object)
        ], DirectoryListingComponent.prototype, "providersCompare", void 0);
        __decorate([
            core_1.Output('addProviderCompare'),
            __metadata("design:type", core_1.EventEmitter)
        ], DirectoryListingComponent.prototype, "addProviderCompare", void 0);
        __decorate([
            core_1.Output('follow'),
            __metadata("design:type", core_1.EventEmitter)
        ], DirectoryListingComponent.prototype, "follow", void 0);
        DirectoryListingComponent = __decorate([
            core_1.Component({
                selector: 'app-directory-listing',
                templateUrl: 'js/medikly/search-directory/listing/directory-listing.component.html',
                styleUrls: ['js/medikly/search-directory/listing/directory-listing.component.css']
            }),
            __metadata("design:paramtypes", [])
        ], DirectoryListingComponent);
        return DirectoryListingComponent;
    }());
    exports.DirectoryListingComponent = DirectoryListingComponent;
});
//# sourceMappingURL=directory-listing.component.js.map