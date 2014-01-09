
/*
 * DB Config
 * Created By: Jay Wilson
 * Date: 12/19/2014
 */
 
var mysqlDB = require('mysql-model');

var dbConn = mysqlDB.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pakmaTZr',
  database : 'ProjectMe',
});
exports.mysqlDB = mysqlDB;
exports.dbConn = dbConn;

