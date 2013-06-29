exports.definition = {
    config: {
        adapter: {
            type: "sql",
            collection_name: "baseball",
            db_file: "/myapp.sqlite",
            idAttribute: "id",
            remoteBackup: false
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validation: function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if ("name" === key && "Dodgers" == value) return "Error: Dodgers are not allowed";
                }
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("baseball", exports.definition, []);

collection = Alloy.C("baseball", exports.definition, model);

exports.Model = model;

exports.Collection = collection;