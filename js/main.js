require.config({
	shim:{
		underscore: {
			exports:'_'
		},
		backbone:{
			deps:['jquery', 'underscore'],
			exports:'Backbone'
		}
	},
	paths:{
		'jquery':'libs/jquery.min',
		'backbone':'libs/backbone-min',
		'underscore':'libs/underscore-min',
		'tpl':"libs/tpl"
	}
});

require(["app"], function(App){
	App.initialize();
});