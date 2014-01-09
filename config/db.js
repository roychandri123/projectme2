/*
 * DB Config
 * Created By: Jay Wilson
 * Date: 12/19/2014
 */
 
var mysqlDB = require('mysql-model');

var dbConn = mysqlDB.createConnection({
  host     : '107.21.205.34',
  user     : 'root',
  password : 'new-password',
  database : 'ProjectMe2',
});
exports.mysqlDB = mysqlDB;
exports.dbConn = dbConn;

