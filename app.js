
/**
 * Module dependencies.
 */

/* configs */
global.db = require("./config/db.js");
global.helpers = require("./config/helpers.js");
global.cache = require('memory-cache');
/**********/

/****APP SETUP************/
var express = require('express');
var routes = require('./routes.js');
var http = require('http');
var path = require('path');
var models = require('./models/models.js');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.urlencoded());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only environment flag
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


//DEFINE ALL ROUTES
app.get('/', routes.dashboard.index);
app.get('/dashboard', routes.dashboard.index);
app.get('/likegate', routes.likegate.index);
app.get('/likegate/modal', routes.likegate.modal);
app.get('/projectdetail', routes.projectdetail.index);
app.get('/projectdetail/doboard', routes.projectdetail.doboard);
app.get('/projectdetail/dreamboard', routes.projectdetail.dreamboard);
app.get('/projectdetail/friend', routes.projectdetail.friend);
app.get('/projectbuilder', routes.projectbuilder.index);

//SETUP LISTENER

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//////////API/CACHING SERVER////////////
//////////RUNS OFF OF PORT 8081

var app2 = express();

// all environments
app2.set('port', 8081);
app2.use(express.logger('dev'));
app2.use(express.json());
app2.use(express.urlencoded());
app2.use(express.methodOverride());
app2.use(app2.router);

//Initiate Datacache For Tables
routes.refreshAPI.initCache();

//API Routes
app2.get('/refresh/:table', routes.refreshAPI.index);
app2.get('/refreshall', routes.refreshAPI.refreshAll);


//SETUP LISTENER
http.createServer(app2).listen(app2.get('port'), function(){
  console.log('Express API server listening on port ' + app2.get('port'));
});

