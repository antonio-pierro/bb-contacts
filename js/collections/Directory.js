define(["backbone", "models/Contact"], function(Backbone, Contact){
	return Backbone.Collection.extend({
		model:Contact
	});
});