
/*
 * likegate Controller
 * Created By: Jay Wilson
 * Created On: 12/20/2013
 */

//Page: Likegate
//  Basics: not much static page
exports.index = function(req, res){
	//TODO:need to check if we have a FB token?
	//IF ALREADY APP USER skip to dashboad
	//res.redirect("/");

	
	serverdata="Test data";
	res.render('likegate',{ title: serverdata});

};

//Page: likegate Modal version (via AJAX?)
//  Basics: not much, static page
exports.modal = function(req, res){
	//TODO:need to check if we have a FB token?
	//IF ALREADY APP USER, do we do anything???
	//
	
	serverdata="Test data";
	res.render('likegate_modal',{ title: serverdata});

};