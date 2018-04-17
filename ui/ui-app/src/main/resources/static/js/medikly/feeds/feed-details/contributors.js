/**
 * Created by German on 1/11/17.
 */
define(['angular','feed-mgr/feeds/edit-feed/module-name'], function (angular,moduleName) {


    var directive = function () {
        return {
            restrict: "EA",
            bindToController: {
                selectedTabIndex:'='
            },
            controllerAs: 'vm',
            scope: {},
            templateUrl: 'js/medikly/feeds/feed-details/contributors.component.html',
            controller: "FeedDetailsContributorsController",
            link: function ($scope, attrs, controller) {

            }

        };
    }

    var controller =  function($scope,$http,$mdDialog, $filter, $q, FeedService, RestUrlService, HiveService, StateService, Utils) {

        var self = this;

        self.canList = ['Can view only', 'Can view and edit', 'Can view, edit, and manage'];
        self.can = this.canList[0];
        self.contributors = [];
        self.selectedItem;
        self.itemToAdd;

        self.simulateQuery = false;
        self.isDisabled    = false;

        self.repos         = loadAll();
        self.querySearch   = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange   = searchTextChange;

        // ******************************
        // Internal methods
        // ******************************

        /**
         * Search for repos... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch (query) {
            var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
                deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {
        }

        function selectedItemChange(item) {
        }

        this.addToContributors = function(){
            var index = self.contributors.indexOf(this.selectedItem);
            if(index==-1){
                self.contributors.push(this.selectedItem);
                this.selectedItem=null;
            }
        };

        /**
         * Build `components` list of key/value pairs
         */
        function loadAll() {
            var repos = [
                {
                    'name'      : 'German Onate',
                    'user'      : '@gonate',
                    'url'       : 'https://github.com/angular/angular.js',
                    'watchers'  : '3,623',
                    'forks'     : '16,175',
                },
                {
                    'name'      : 'German Bortoli',
                    'user'      : '@gbortoli',
                    'url'       : 'https://github.com/angular/angular',
                    'watchers'  : '469',
                    'forks'     : '760',
                },
                {
                    'name'      : 'Alejandro Stabile',
                    'user'      : '@astabile',
                    'url'       : 'https://github.com/angular/material',
                    'watchers'  : '727',
                    'forks'     : '1,241',
                },
            ];
            return repos.map( function (repo) {
                repo.value = repo.name.toLowerCase();
                return repo;
            });
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(item) {
                return (item.value.indexOf(lowercaseQuery) === 0);
            };

        }

        this.removeFromContributors = function(item){
            var index = self.contributors.indexOf(item);
            if(index > -1) self.contributors.splice(index, 1);
        }
    };

    angular.module(moduleName).controller('FeedDetailsContributorsController', ["$scope","$http","$mdDialog","$filter", "$q","FeedService","RestUrlService","HiveService","StateService","Utils",controller]);

    angular.module(moduleName)
        .directive('feedDetailsContributors', directive);

});


