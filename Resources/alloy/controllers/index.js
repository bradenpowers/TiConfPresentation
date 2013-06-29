function Controller() {
    function __alloyId5() {
        var models = __alloyId4.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId2 = models[i];
            __alloyId2.__transform = {};
            var __alloyId3 = Alloy.createController("row", {
                $model: __alloyId2
            });
            rows.push(__alloyId3.getViewEx({
                recurse: true
            }));
        }
        $.__views.table.setData(rows);
    }
    function addTeam() {
        $.textName.blur();
        var city = $.textCity.value;
        var name = $.textName.value;
        var model = Alloy.createModel("baseball", {
            city: city,
            name: name
        });
        baseball.add(model);
        model.save();
        $.textCity.value = "";
        $.textName.value = "";
        Ti.UI.createAlertDialog({
            message: "New Team Entered",
            title: "Success!"
        });
        baseball.fetch();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "blue",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.addTeams = Ti.UI.createView({
        id: "addTeams"
    });
    $.__views.index.add($.__views.addTeams);
    $.__views.textCity = Ti.UI.createTextField({
        top: 10,
        hintText: "Enter City",
        backgroundColor: "white",
        borderRadius: .5,
        width: "70%",
        id: "textCity"
    });
    $.__views.addTeams.add($.__views.textCity);
    $.__views.textName = Ti.UI.createTextField({
        top: 60,
        hintText: "Enter Team Name",
        backgroundColor: "white",
        borderRadius: .5,
        width: "70%",
        id: "textName"
    });
    $.__views.addTeams.add($.__views.textName);
    $.__views.addButton = Ti.UI.createButton({
        top: 110,
        title: "Add New Team",
        backgroundColor: "red",
        width: "150",
        height: 50,
        color: "white",
        style: "none",
        id: "addButton"
    });
    $.__views.addTeams.add($.__views.addButton);
    addTeam ? $.__views.addButton.addEventListener("click", addTeam) : __defers["$.__views.addButton!click!addTeam"] = true;
    $.__views.table = Ti.UI.createTableView({
        bottom: 30,
        width: "80%",
        height: 200,
        scrollable: true,
        id: "table"
    });
    $.__views.index.add($.__views.table);
    var __alloyId4 = Alloy.Collections["baseball"] || baseball;
    __alloyId4.on("fetch destroy change add remove reset", __alloyId5);
    exports.destroy = function() {
        __alloyId4.off("fetch destroy change add remove reset", __alloyId5);
    };
    _.extend($, $.__views);
    var baseball = Alloy.Collections.baseball;
    baseball.fetch();
    $.index.open();
    __defers["$.__views.addButton!click!addTeam"] && $.__views.addButton.addEventListener("click", addTeam);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;