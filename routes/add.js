var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	res.render('add',data);



   var newfriend = {
        "friend": req.query.name,
        "name": req.query.description,
        "imageURL": "http://www.calit2.net/images/articles/2013/Tiffany/ScottKlemmer2011.jpg"
   };

   data["friends"].push(newfriend);


 };