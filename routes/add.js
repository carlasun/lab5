var data = require("../data.json");

exports.addFriend = function(req, res) {  
	var name = req.query.name;
	var description = req.query.description;
	var imageURL= "http://lorempixel.com/400/400/people";
	
	var jsonObject = 		{
			"name": name,
			"description": description,
			"imageURL": imageURL			
		};
	console.log(jsonObject);
	
	data["friends"].push(jsonObject);
	
}