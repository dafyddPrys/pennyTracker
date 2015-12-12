
/**
 * If the contents of this file make no sense, visit
 * http://www.raywenderlich.com/61078/write-simple-node-jsmongodb-web-service-ios-app
 * 
 * The server takes reqests and if valid passes back information received from the mongo DB.
 */
var http = require('http'), 
    express = require('express'),
    path = require('path'),
    //body parser needed to parse request bodies into JSON
    bodyParser = require('body-parser'),
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    CollectionDriver = require('./collectionDriver').CollectionDriver; 
    
var app = express();
app.set('port', process.env.PORT || 3000);

/**
 * Tell express to parse the incoming body data. If its JSON, then
 * create a JSON object. put here so it happens before any of the route handlers.
 */
app.use(bodyParser.json());

/**
 * Serves the angular application (any static file asked for in the pubblic folder)
 */
app.use(express.static(__dirname + '/public'));


/**
 * Set host and port for database
 */
var mongoHost = 'localHost';
var mongoPort = 27017; 
var collectionDriver;
 
var server = new Server(mongoHost, mongoPort);
var mongoClient = new MongoClient(server);

//try to establish a connection with the database.
mongoClient.open(function(err, mongoClient) {
  if (!mongoClient) {
      console.error("Error! Exiting... Must start MongoDB first");
      process.exit(1);
  }
  //open the "MyDatabase" database.
  var db = mongoClient.db("MyDatabase"); 
  collectionDriver = new CollectionDriver(db); 
});

/**
 * create a get call which takes a collection name as a parameter.
 */
app.get('/api/:collection', function(req, res) {

   //Call the collectionDriver's findAll function.
   collectionDriver.findAll(req.params.collection, function(error, objs) {
       
    	  if (error) { res.send(400, error); }
          
          //no error: return a JSON object from the database.
	      else { 
              
              //set a content type header and send back the spends with an OK status
	          res.set('Content-Type','application/json');
                  res.status(200, objs).send(objs);
         }
   	});
});

/**
 * Call that takes a collection and entity name and calls te collectionDriver's GET 
 * function.
 */
app.get('/api/:collection/:entity', function(req, res) { 
   var params = req.params;
   var entity = params.entity;
   var collection = params.collection;
   if (entity) {
       collectionDriver.get(collection, entity, function(error, objs) { 
          if (error) { res.status(400, error).send(error); }
          else { res.status(200, objs).send(objs); }
       });
   } else {
      res.send(400, {error: 'bad url', url: req.url});
   }
});

/**
 * Post a new item into the database
 */
app.post('/api/:collection', function(req, res) {
    var object = req.body;
    var collection = req.params.collection;
    //save the body of the request to the database
    collectionDriver.save(collection, object, function(err,docs) {
          if (err) { res.send(400, err); } 
          else { res.send(201, docs); } 
     });
});
/*
app.get("*", function(req,res){
    res.sendfile('./public/index.html')
});
*/

app.listen(app.get('port'));
console.log('server listeing on port '  + app.get('port'));