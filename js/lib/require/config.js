require.config({
	baseUrl : "/grm/community/js",
	paths : {
		"jquery" : "/grm/communitybase/js/jquery-1.10.2.min",
		"angular" : "/grm/communitybase/js/angular-v1.5.7/angular-v1.5.7.min",
		"angularSanitize" : "/grm/communitybase/js/angular-v1.5.7/angular-v1.5.7-sanitize.min",
		"ngRoute" : "/grm/communitybase/js/angular-v1.5.7/angular-v1.5.7-route",
		"bootstrapUI" : "/grm/communitybase/js/angular-v1.5.7/angularUI/ng-bootstrap-v3.3.5/ui-bootstrap-v3.3.5-tpls-0.7.0.min",
		"datetimepicker" : "/grm/communitybase/js/datetimepicker/js/bootstrap-v3.3.5-datetimepicker.min",
		"datetimepickerCn" : "/grm/communitybase/js/datetimepicker/js/locales/bootstrap-v3.3.5-datetimepicker.zh-CN",
		"jqueryUI" : "/grm/communitybase/js/jqueryui/jquery-ui-1.10.3.custom.min",
		"uislider" : "/grm/communitybase/js/uislider/slider",
		"moment" : "/grm/communitybase/js/moment/moment",
		"websocket" : "/grm/communitybase/js/websocket"
	},
	shim : {
		'angular' : {
			'deps' : ['jquery'],
			'exports' : 'angular'
		},
		'angularSanitize' : ['angular'],
		'ngRoute' : ['angular'],
		'bootstrapUI' : ['angular'],
		'datetimepicker': ['jquery'],
		'datetimepickerCn': ['datetimepicker'],
		'jqueryUI': ['jquery'],
		'uislider': ['angular', 'jqueryUI'],
		'moment': {'exports' : 'moment'},
		'websocket': {'exports' : 'YGWebSocket'}
	},
	priority: [
		"jquery",
		"angular"
	]
});