
/*
 * Centralize all controller definitions for cleaner app.js
 * Created By: Jay Wilson
 * Created On: 12/20/2013
 */

module.exports =
{
	dashboard : require('./routes/dashboard.js'),
	likegate : require('./routes/likegate.js'),
	projectbuilder : require('./routes/projectbuilder.js'),
	projectdetail : require('./routes/projectdetail.js'),
	refreshAPI : require('./routes/refreshAPI.js')
	/* some other modules you want OK */
};