/**
 * Created by liyueying on 2016-06-27.
 */
define(["app"], function(app) {
    var deps = ["$cookieStore"];
    var loginTitle = "登录页面";
    var loginUser = "用户名";
    var loginUserPrompt = "请输入用户名或者Email";
    var loginPassword = "密码";
    var loginPasswordPrompt = "请输入密码";
    var loginCommit = "登陆";
    var loginCancel = "取消";
    var loginRememberMe = "记住我";
    var loginVerify = "请输入验证码";
    var msgError = "用户名或者密码错误";
    var magErrorFlag = false;
    var rememberMeFlag = "REMEMBER_ME_FLAG";
    var autoSubmitFlag = "AUTO_SUBMIT_FLAG";
    var userName = "USER_NAME";
    var passWord = "PASS_WORD";


    function service($cookieStore) {
        this.pageParam = {
            "title": loginTitle,
            "loginUser": loginUser,
            "loginUserPrompt": loginUserPrompt,
            "loginPassword": loginPassword,
            "loginPasswordPrompt": loginPasswordPrompt,
            "loginCommit": loginCommit,
            "loginCancel": loginCancel,
            "loginRememberMe": loginRememberMe,
            "loginVerify": loginVerify,
            "msgError": msgError,
            "magErrorFlag": magErrorFlag,
            "rememberMeFlag": function() {
                return $cookieStore.get(rememberMeFlag) === "undefined" ? false : $cookieStore.get(rememberMeFlag);
            },
            "autoSubmitFlag": function() {
                return $cookieStore.get(autoSubmitFlag) === "undefined" ? false : $cookieStore.get(autoSubmitFlag);
            },
            "userName": function() {
                console.log($cookieStore.get(userName));
                $cookieStore.get(userName) === "undefined" ? "" : $cookieStore.get(userName);
            },
            "password": function() {
                $cookieStore.get(passWord) === "undefined" ? "" : $cookieStore.get(passWord)
            }
        };
        //保存登陆信息
        this.saveStatus = function(username, password, remem, auto) {
            $cookieStore.put(rememberMeFlag, remem);
            $cookieStore.put(autoSubmitFlag, auto);
            $cookieStore.put(userName, username);
            $cookieStore.put(passWord, password);
        };
        ////清除登陆信息
        //this.clearRememStatusStatus = function() {
        //    $cookieStore.remove(rememberMeFlag);
        //    $cookieStore.remove(userName);
        //    $cookieStore.remove(passWord);
        //};
        ////清除自动登陆
        //this.clearAutoStatus = function(){
        //    $cookieStore.remove(autoSubmitFlag);
        //};
        this.submit = function(userName, password, remem, auto) {
            if ((userName != null && userName == "sujiawei@ygsoft.com") &&
                (password != null && password == "1234")) {
                //保存登陆信息
                this.saveStatus(userName, password, remem, auto);
                alert("登陆成功");
                return false;
            } else {
                return true;
            }
        };
    };
    service.$inject = deps;
    app.lazy.service("LoginServices", service);
});