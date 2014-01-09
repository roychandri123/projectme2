
/*
 * projectbuilder Controller
 * Created By: Jay Wilson
 * Created On: 12/20/2013
 */

//Page: projectbuilder
//  Basics: LOTS!
exports.index = function(req, res){
	//TODO:need to check if we have a FB token?
	//IF NOT APP USER 
	//res.redirect("/");

	
	serverdata="Test data";
	res.render('projectbuilder',{ title: serverdata});

};