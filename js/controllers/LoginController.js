/**
 * Created by liyueying on 2016-06-25.
 */
define(["app"],function(app){
    var deps = ["$scope"];
    function controller($scope){
        console.log("LoginController");
    };
    controller.$inject = deps;
    app.lazy.controller("LoginController",controller);
});
