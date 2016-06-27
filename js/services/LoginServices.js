/**
 * Created by liyueying on 2016-06-27.
 */
define(["app"],function(app){
    var deps = ["$cookieStore"];
    var loginTitle = "登录页面";
    var loginUser = "用户名";
    var loginUserPrompt = "请输入用户名或者Email";
    var loginPassword = "密码";
    var loginPasswordPrompt = "请输入密码";
    var loginCommit = "登陆";
    var loginCancel ="取消";
    var loginRememberMe = "记住我";
    var loginVerify = "请输入验证码";


    function service($cookieStore){
        this.pageParam = {
            "title" : loginTitle,
            "loginUser" : loginUser,
            "loginUserPrompt" : loginUserPrompt,
            "loginPassword" : loginPassword,
            "loginPasswordPrompt" : loginPasswordPrompt,
            "loginCommit" : loginCommit,
            "loginCancel" : loginCancel,
            "loginRememberMe" : loginRememberMe,
            "loginVerify" : loginVerify
        };
    };
    service.$inject = deps;
    app.lazy.service("LoginServices",service);
});
