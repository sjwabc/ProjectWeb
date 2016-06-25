/**
 * Created by sujiawei on 2016/6/24.
 */

define(
    ["angular",
    "route-config",
    "uiRoute"],
    function(angular,routeConfig,uiRoute){
        var app = angular.module("myApp", ["ui.router"]);
        app.config(["$locationProvider",
                    "$controllerProvider",
                    "$compileProvider",
                    "$filterProvider",
                    "$provide",
                    "$stateProvider",
                    "$urlRouterProvider",
                    "$httpProvider",
                    "$sceProvider",
                    function ($locationProvider, $controllerProvider, $compileProvider,
                              $filterProvider, $provide, $stateProvider, $urlRouterProvider,
                              $httpProvider, $sceProvider) {

                        app.lazy = {
                            controller: $controllerProvider.register,
                            directive: $compileProvider.directive,
                            filter: $filterProvider.register,
                            factory: $provide.factory,
                            service: $provide.service
                        };
                        if (routeConfig.states !== undefined) {
                            angular.forEach(routeConfig.states, function (route, state) {
                                if (route.dependencies !== undefined && route.dependencies.length > 0) {
                                    route.resolve = resolve(route.dependencies);
                                }
                                $stateProvider.state(state, route);
                            });
                        };

                        if (routeConfig.defaultUrl !== undefined) {
                            $urlRouterProvider.otherwise(routeConfig.defaultUrl);
                        };
                    }
        ]);

        function resolve(dependencies) {
            return {
                deps: ["$q", function ($q) {
                    var deferred = $q.defer();

                    require(dependencies, function () {
                        deferred.resolve();
                    });

                    return deferred.promise;
                }]
            };
        };

        return app;
    }
);
