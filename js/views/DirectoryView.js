define(["backbone", "views/ContactView"], function(Backbone, ContactView){
	return Backbone.View.extend({
		el:"#contacts",
		events:{
			"change #filter select": "setFilter"
		},
		setFilter: function(e){
			this.filterType = e.currentTarget.value;
			this.trigger("change:filterType");
		},
		initialize: function(attrs){
			this.allContacts = attrs.allContacts;
			this.render();
			this.$("#filter").append( this.createSelect() );
			this.listenTo(this.collection, "reset", this.render);
			this.on("change:filterType", this.filterByType, this);
			
		},
		render: function(){
			this.$("article").remove();
			this.collection.each(this.renderContact, this);
			return this;
		},
		renderContact: function(contact){
			var contactview = new ContactView({model:contact});
			this.$el.append(contactview.render().el);
		},
		getTypes: function(){
			return _.uniq(this.collection.pluck("type"), false, function(type){
				return type.toLowerCase();
			});
		},
		filterByType: function(){
			console.log('filter by type called');
			console.log(this.filterType);
			if(this.filterType == "All"){
				this.collection.reset(this.allContacts);
			}
			else{
				
				this.collection.reset(this.allContacts, {silent:true});
				var filterType = this.filterType,
					filtered = _.filter(this.collection.models, function(contact){
						return contact.get("type").toLowerCase() == filterType;
					});
				console.log('filtered');		
				console.log(filtered);	
				this.collection.reset(filtered);
			}
		},
		createSelect: function(){

			var filter = this.$("#filter"),
				select = $("<select />", {
					html:"<option>All</option>"
				});
				
			_.each(this.getTypes(), function(item){
				var option = $("<option />", {
					value:item, 
					text:item
				}).appendTo(select);
			});

			return select;
		}
	});
});