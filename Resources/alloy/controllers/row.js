function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.city = Ti.UI.createLabel({
        left: 10,
        id: "city",
        text: "undefined" != typeof $model.__transform["city"] ? $model.__transform["city"] : $model.get("city")
    });
    $.__views.row.add($.__views.city);
    $.__views.name = Ti.UI.createLabel({
        right: 10,
        id: "name",
        text: "undefined" != typeof $model.__transform["name"] ? $model.__transform["name"] : $model.get("name")
    });
    $.__views.row.add($.__views.name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $model && ($.row.model = $model.toJSON());
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;