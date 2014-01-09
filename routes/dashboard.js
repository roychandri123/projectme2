
/*
 * dashboard Controller
 * Created By: Jay Wilson
 * Created On: 12/20/2013
 */

var async = require('async');

//Page: user dashboard
//  Basics: needs to provide list of projects
//				needs to provide list of friends (via Facebook API)
//				needs to provide list of dreams you support
exports.index = function(req, res){
	//TODO:need to check if we have a FB token?
	//IF NOT APP USER
	//res.redirect("/likegate");

	//dependent activities must rely on async.series  (parallel can be used when order doesn't matter)
	var userid=0;
	async.series([
		function(callback){
			//TODO:Determine USER (fbtoken??)
			userid = 13;
			callback();
		},
		function(callback){ //get projects
			Project.find('all', {where: "PROJECT_USER_ID="+userid}, function(err, row) {
				callback(null,row);
  		  	 });
		},
		function(callback){ //get list of supported dreams
			ProjectDreamBoardSupport.find('all', {where: "PROJECT_USER_ID="+userid}, function(err, supported) {
				var dreams_supported_ids=global.helpers.createCommaList(supported,"DREAM_BOARD_ID");										ProjectDreamBoard.find('all', {where: "DREAM_BOARD_ID in ("+dreams_supported_ids+") "}, function(err, dreams) 				{
					callback(null,dreams);
				});
  		  	 });
		}

	],
	function(err,results){  //have to wait to render page until we get the response from the DB
			var projects = null;
			if(results.length>1){//get callback result from second async function
				projects = results[1];
			}
			
			var supported_dreams = null;
			if(results.length>2){//get callback result from third async function
				supported_dreams = results[2];
			}
			serverdata="Test data";
			res.render('dashboard',{ title: serverdata, projectdata: projects, dreamdata: supported_dreams});
	});
	
};