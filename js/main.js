/**
 * Created by sujiawei on 2016/6/24.
 * 1.����ȫ��requireJs��
 *   1.1 shim ������Ҫ�����JSΪ�õ�define()��������ʹ��,��angular��bootstrap����ǰ��Ҫ����jquery��
 *   1.2 priority �������ȵ���
 * 2.����ȫ��ng-app������angular����
 * 2.�ֶ���������angular.bootstrap(document,[app.name]);
 */

require.config({
    baseUrl : "js",
    paths : {
        "jquery" : "lib/jquery/jquery-2.2.3",
        "angular" : "lib/angular-v1.5.7/angular.min",
        "uiRoute" : "lib/ui-route-v0.2.18/angular-ui-router.min",
        "bootstrap" : "lib/bootstrap-v3.3.5/bootstrap.min"
    },
    shim : {
        "angular" : {
            "deps" : ["jquery"],
            "exports" : "angular"
        },
        "uiRoute" :  ["angular"],
        "bootstrap" : {
            "deps" :["jquery"],
            "exports" : "bootstrap"
        }
    },
    priority : ["jquery","angular"]  //����
});


require(['app','angular',"uiRoute"],function(app,angular,uiRoute){
    angular.bootstrap(document,[app.name]);
});
