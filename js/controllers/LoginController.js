/**
 * Created by liyueying on 2016-06-25.
 */
define(["app",
        "services/LoginServices"],
    function(app){

        //数据初始化
        function init(scope,services){
            scope.title = services.pageParam.title;
            scope.loginUser = services.pageParam.loginUser;
            scope.loginUserPrompt = services.pageParam.loginUserPrompt;
            scope.loginPassword = services.pageParam.loginPassword;
            scope.loginPasswordPrompt = services.pageParam.loginPasswordPrompt;
            scope.loginCommit = services.pageParam.loginCommit;
            scope.loginRememberMe = services.pageParam.loginRememberMe;
            scope.loginVerify = services.pageParam.loginVerify;
        }
    var deps = ["$scope","LoginServices"];
    function controller($scope,loginServices){
        console.log("LoginController");
        init($scope,loginServices);
    };
    controller.$inject = deps;
    app.lazy.controller("LoginController",controller);
});
