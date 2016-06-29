/**
 * Created by sujiawei on 2016/6/24.
 * 1.配置全局requireJs：
 *   1.1 shim 用于需要导入的JS为用到define()定义依赖使用,如angular、bootstrap调用前需要依赖jquery。
 *   1.2 priority 用于优先调用
 * 2.配置全局ng-app，并在angular启动
 * 2.手动调用启动angular.bootstrap(document,[app.name]);
 */

require.config({
    baseUrl: "js",
    paths: {
        "jquery": "lib/jquery/jquery-2.2.3",
        "angular": "lib/angular-v1.5.7/angular.min",
        "uiRoute": "lib/ui-route-v0.2.18/angular-ui-router.min",
        "angularCookies": "lib/angular-v1.5.7/angular-cookies.min",
        "bootstrap": "lib/bootstrap-v3.3.5/bootstrap.min"
    },
    shim: {
        "angular": {
            "deps": ["jquery"],
            "exports": "angular"
        },
        "uiRoute": ["angular"],
        "angularCookies": ["angular"],
        "bootstrap": {
            "deps": ["jquery"],
            "exports": "bootstrap"
        }
    },
    priority: ["jquery", "angular"] //优先
});


require(['app', 'angular', "uiRoute"], function(app, angular, uiRoute) {
    angular.bootstrap(document, [app.name]);
});