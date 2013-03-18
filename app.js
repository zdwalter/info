
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.get('/slides/:title', routes.slides);
app.get('/js', routes.js);
app.get('/cv', routes.cv);
app.get('/resume', routes.resume);
app.get('/proxyhub', routes.proxyhub);
app.get('/echo/:content', routes.echo);

app.listen(8000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
