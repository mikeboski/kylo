/**
 * Created by German on 31/10/17.
 */
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var moduleName = require("feed-mgr/feeds/edit-feed/module-name");
    /**
     * Feed details - Contributors.
     */
    var FeedDetailsContributorsComponent = /** @class */ (function () {
        function FeedDetailsContributorsComponent() {
            this.canList = ['Can view only', 'Can view and edit', 'Can view, edit, and manage'];
            this.can = this.canList[0];
        }
        FeedDetailsContributorsComponent.prototype.ngOnInit = function () {
        };
        FeedDetailsContributorsComponent.prototype.$onInit = function () {
            this.ngOnInit();
        };
        return FeedDetailsContributorsComponent;
    }());
    angular.module(moduleName).component('feedDetailsContributors', {
        bindings: {
            engine: "<"
        },
        controller: [FeedDetailsContributorsComponent],
        controllerAs: "vm",
        templateUrl: "js/medikly/feeds/feed-details/contributors.component.html"
    });
});
//# sourceMappingURL=contributors.component.js.map