exports.definition = {
	config: {
		adapter: {
			"type": "sql",
			"collection_name": "baseball",
			"db_file": "/myapp.sqlite",
			"idAttribute": "id",
			"remoteBackup": false
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			// extended functions and properties go here	
		});
		
		return Model;
	},
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});
		
		return Collection;
	}
}

