/**
 * Created by liyueying on 2016-06-25.
 */
define(["app",
        "services/LoginServices"],
    function(app){

        //依赖
        var deps = ["$scope","LoginServices"];

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
            scope.msgError = services.pageParam.msgError;
            scope.msgErrorFlag = services.pageParam.msgErrorFlag;
            scope.loginVo = {
                "loginUser" : services.pageParam.userName(),
                "loginPassword" : services.pageParam.password(),
                "rememberMe" : services.pageParam.rememberMeFlag(),
                "autoSubmit" : services.pageParam.autoSubmitFlag(),
            };
            console.log(scope.loginVo);
            console.log("scope.loginVo.loginUser:"+services.pageParam.userName());
            console.log("scope.loginVo.loginUser:"+scope.loginVo["loginUser"]);
            console.log("scope.loginVo.loginPassword:"+scope.loginVo.loginPassword);
            console.log("scope.loginVo.rememberMe:"+scope.loginVo.rememberMe);
            console.log("scope.loginVo.autoSubmit:"+scope.loginVo.autoSubmit);
        };

        //controller
        function controller($scope,loginServices){
            console.log("LoginController");

            init($scope,loginServices);

            $scope.submit = function(){
                var userName = $scope.loginVo.loginUser;
                var password = $scope.loginVo.loginPassword;
                $scope.msgErrorFlag = loginServices.submit(userName,password);
            };
        };
        controller.$inject = deps;
        app.lazy.controller("LoginController",controller);
});
