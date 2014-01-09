
/*
 * refreshAPI Controller (MAIN API Controller)
 * Created By: Jay Wilson
 * Created On: 12/20/2013
 */

var async = require('async');


//MUST be called upon module load
exports.initCache = function(){
	  async.series([
  		  function(callback){
	  		  cacheGlobalInterfaceCopy(callback);
	  		  
  	},
  		function(callback){
			cacheProjectType(callback);
	  
	}]);
}

/// function cacheGlobalInterfaceCopy caches the values within the GlobalInterfaceCopy DBTable
cacheGlobalInterfaceCopy = function(callback){

  	 GlobalInterfaceCopy.find('all', function(err, row) {  
	 	global.cache.put('GlobalInterfaceCopy', row);
	 	callback(null,row.length);

	 });
}

/// function cacheProjectType caches the values within the GlobalInterfaceCopy DBTable
cacheProjectType = function(callback){

     	ProjectType.find('all', function(err, row) {  
		  	global.cache.put('ProjectType', row);
		  	callback(null,row.length);
		  });
}

exports.index = function(req, res){

  if( global.cache.get(req.params.table) === null)
  {

	  res.status(404);
	  res.end("Not Found");
  }else{
  switch(req.params.table){
  	case 'GlobalInterfaceCopy':
  		async.series([
  		  function(callback){
	  		  cacheGlobalInterfaceCopy(callback);
	  		  
	  	}],//callback results returned
		function(err, results){
	    	if(results.length>0){
	    		val = results[0];
	    	}else{
		    	val = 0;
	    	}
	    	res.json(200,{ status: "Cached "+val+" Records for "+req.params.table+"." });
		});
  		
  		break;
  	case 'ProjectType':
  		 async.series([
  		  
		  		function(callback){
					cacheProjectType(callback);
			  
			}],//callback results returned
			function(err, results){
		    	if(results.length>0){
		    		val = results[0];
		    	}else{
			    	val = 0;
		    	}
		    	res.json(200,{ status: "Cached "+val+" Records for "+req.params.table+"." });
			});
  		break;
  }
  }
};
exports.refreshAll = function(req, res){
  //perform all table refreshes

  //run multiple functions in series
  async.series([
  		  function(callback){
	  		  cacheGlobalInterfaceCopy(callback);
	  		  
  	},
  		function(callback){
			cacheProjectType(callback);
	  
	}],//callback results returned
	function(err, results){
    	if(results.length>1){
    		val = results[0]+results[1];
    	}else{
	    	val = 0;
    	}
    	res.json(200,{ status: "Cached "+val+" Records." });
	});


};