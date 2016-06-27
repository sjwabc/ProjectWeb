/**
 * Created by liyueying on 2016-06-25.
 */
define(["app",
        "services/LoginServices"],
    function(app){

        //数据初始化
        function init(scope,servies){
            scope.title = servies.pageParam.title;
            scope.loginUser = servies.pageParam.loginUser;
            scope.loginUserPrompt = servies.pageParam.loginUserPrompt;
            scope.loginPassword = servies.pageParam.loginPassword;
            scope.loginPasswordPrompt = servies.pageParam.loginPasswordPrompt;
            scope.loginCommit = servies.pageParam.loginCommit;
            scope.loginRememberMe = servies.pageParam.loginRememberMe;
        }
    var deps = ["$scope","LoginServices"];
    function controller($scope,loginServices){
        console.log("LoginController");
        init($scope,loginServices);
    };
    controller.$inject = deps;
    app.lazy.controller("LoginController",controller);
});
