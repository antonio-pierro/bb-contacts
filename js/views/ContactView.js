define(["backbone", "tpl!templates/contact.tmpl"], function(Backbone, contactTemplate){
	return Backbone.View.extend({
		tagName: "article",
		className: "contact-container",
		render: function(){
			this.$el.html(contactTemplate( this.model.toJSON() ));
			return this;
		}
	});
})