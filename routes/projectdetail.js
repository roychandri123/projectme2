
/*
 * projectdetail Controller
 * Created By: Jay Wilson
 * Created On: 12/20/2013
 */

//Page: project detail page
//  Basics: LOTS!
exports.index = function(req, res){
	//TODO:need to check if we have a FB token?
	//IF NOT APP USER
	//res.redirect("/likegate");

	
	serverdata="Test data";
	res.render('projectdetail',{ title: serverdata});

};

//Page: projectdetail_dreamboard (AJAX?)
//  Basics: LOTS!
exports.dreamboard = function(req, res){
	//TODO:need to check if we have a FB token?
	//IF NOT APP USER 
	//res.redirect("/");

	
	serverdata="Test data";
	res.render('projectdetail_dreamboard',{ title: serverdata});

};

//Page: projectdetail_doboard (AJAX?)
//  Basics: LOTS!
exports.doboard = function(req, res){
	//TODO:need to check if we have a FB token?
	//IF NOT APP USER 
	//res.redirect("/");

	
	serverdata="Test data";
	res.render('projectdetail_doboard',{ title: serverdata});

};

//Page: projectdetail_friend
//  Basics: LOTS!
exports.friend = function(req, res){
	//TODO:need to check if we have a FB token?
	//IF NOT APP USER 
	//res.redirect("/");

	
	serverdata="Test data";
	res.render('projectdetail_friend',{ title: serverdata});

};