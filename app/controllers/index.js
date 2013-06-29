var baseball = Alloy.Collections.baseball;

function addTeam(e)
{
	$.textName.blur();
	
	var city = $.textCity.value;
	var name = $.textName.value;
	
	var model = Alloy.createModel('baseball',{city: city,name:name});
	
	baseball.add(model);
	model.save();
	
	$.textCity.value = "";
	$.textName.value = "";
	
	Ti.UI.createAlertDialog({message:"New Team Entered", title: 'Success!'})
	
	baseball.fetch();
	
}


baseball.fetch();

$.index.open();
