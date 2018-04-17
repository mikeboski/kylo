var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/http"], function (require, exports, core_1, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpService = /** @class */ (function () {
        /**
         * Main constructor
         */
        function HttpService(http) {
            this.http = http;
        }
        HttpService.prototype.getJsonCalDataMap = function () {
            return this.http.get("assets/medikly_theme/highcharts/mapdata/us-cal-all.geo.json")
                .map(function (res) { return res.json(); });
        };
        HttpService.prototype.getJsonUsaDataMap = function () {
            return this.http.get("assets/medikly_theme/highcharts/mapdata/us-all-all.geo.json")
                .map(function (res) { return res.json(); });
        };
        HttpService.prototype.getJsonUsaData = function () {
            /*return this.http.get("https://www.highcharts.com/samples/data/jsonp.php?filename=us-counties-unemployment.json&callback=?")*/
            return this.http.get("assets/medikly_theme/highcharts/mapdata/data.json")
                .map(function (res) { return res.json(); });
        };
        HttpService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.Http])
        ], HttpService);
        return HttpService;
    }());
    exports.HttpService = HttpService;
});
//# sourceMappingURL=http.service.js.map