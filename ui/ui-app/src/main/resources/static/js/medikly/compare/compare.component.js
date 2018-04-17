var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../search-directory/data/doctors", "@uirouter/angular"], function (require, exports, core_1, doctors_1, angular_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CompareComponent = /** @class */ (function () {
        function CompareComponent(uiRouter) {
            this.uiRouter = uiRouter;
            this.doctors = [];
            this.allDoctors = [];
            this.getProviders();
            /*ts.setTopSectionTitle('Compare');
             ts.setToolbarColor('purple');*/
        }
        CompareComponent.prototype.ngOnInit = function () {
        };
        CompareComponent.prototype.ngOnDestroy = function () {
        };
        CompareComponent.prototype.getProviders = function () {
            var _this = this;
            this.fetchProviders().then(function (providers) {
                _this.allDoctors = providers;
                for (var i in _this.allDoctors) {
                    var mKey = parseInt(i) + 1;
                    _this.allDoctors[i].basic.first_name = _this.capitalize(_this.allDoctors[i].basic.first_name).trim();
                    _this.allDoctors[i].basic.last_name = _this.capitalize(_this.allDoctors[i].basic.last_name).trim();
                    _this.allDoctors[i].addresses[0].city = _this.capitalize(_this.allDoctors[i].addresses[0].city).trim();
                    _this.allDoctors[i].avatar = "assets/medikly_theme/images/providers/" + _this.allDoctors[i].basic.gender + "/" + mKey + ".png";
                    _this.allDoctors[i].key = mKey;
                }
                _this.filterDoctors();
            });
        };
        CompareComponent.prototype.filterDoctors = function () {
            var parameter = this.uiRouter.globals.params.ids;
            /*    this.parameter = this.route.snapshot.params['ids'];*/
            var ids = parameter.split("-");
            for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
                var id = ids_1[_i];
                this.doctors.push(this.allDoctors[+id - 1]);
            }
        };
        ;
        CompareComponent.prototype.capitalize = function (value) {
            value = value.replace('  ', ' ');
            if (value) {
                var w_1 = '';
                var word = '';
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
        CompareComponent.prototype.fetchProviders = function () {
            return Promise.resolve(doctors_1.DOCTORS);
        };
        CompareComponent = __decorate([
            core_1.Component({
                selector: 'app-compare',
                templateUrl: 'js/medikly/compare/compare.component.html',
                styleUrls: ['js/medikly/compare/compare.component.css']
            }),
            __metadata("design:paramtypes", [angular_1.UIRouter])
        ], CompareComponent);
        return CompareComponent;
    }());
    exports.CompareComponent = CompareComponent;
});
//# sourceMappingURL=compare.component.js.map