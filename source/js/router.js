$(function() {

	var App = Backbone.Router.extend({
		routes: {
		    "": "BBM488"
		},
		BBM488: function() {
			var formView = new window.FormView;
		}
	});
	var app = new App();

	Backbone.history.start();

});