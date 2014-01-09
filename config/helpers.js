
/*
 * Helpers
 * Created By: Jay Wilson
 * Date: 12/19/2014
 */
 
getGICValue = function(id){
	var returnval = null;
	var GIC = global.cache.get("GlobalInterfaceCopy");
	GIC.some(function(value) {
		if(value['FRIENDLY_ID']==id){
			returnval = value['CONTENT'];
			return true;
		}
	});
	return returnval;
};
exports.getGICValue = getGICValue;

createCommaList = function(array,keyname){
	var commalist = "";
	array.forEach(function(val){
		if(val[keyname])
		{
			if(commalist.length>0){
				commalist = commalist+",";
			}
			commalist=commalist + val[keyname];
		}
	}
	);
	return commalist;
};
exports.createCommaList = createCommaList;