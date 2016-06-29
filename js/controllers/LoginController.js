/**
 * Created by liyueying on 2016-06-25.
 */
define(["app",
        "services/LoginServices"
    ],
    function(app) {

        //依赖
        var deps = ["$scope", "LoginServices"];

        //数据初始化
        function init(scope, services) {
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
                "loginUser": services.pageParam.userName(),
                "loginPassword": services.pageParam.password(),
                "rememberMe": services.pageParam.rememberMeFlag(),
                "autoSubmit": services.pageParam.autoSubmitFlag(),
            };
            console.log(scope.loginVo);
        };

        //controller
        function controller($scope, loginServices) {
            console.log("LoginController");

            init($scope, loginServices);

            $scope.submit = function() {
                console.log($scope.loginVo.autoSubmit);
                $scope.msgErrorFlag = loginServices.submit($scope.loginVo);
            };
        };
        controller.$inject = deps;
        app.lazy.controller("LoginController", controller);
    });
