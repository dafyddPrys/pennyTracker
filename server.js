var express = require('express');
var app = express();
var path = require('path');

MongoClient = require('mongodb').MongoClient,
Server = require('mongodb').Server,
CollectionDriver = require('./private/collectionDriver').CollectionDriver;

/**
 * Set the port number to 3000 but allow it to get overriden in the command
 * line.
 */
app.set('port', process.env.PORT || 3000);


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

/**
 * Catch all function which accepts all arguments and will return a 404.
 */
app.use(function (req,res) { //1
    res.render('404', {url:req.url}); //2
});

app.listen(app.get('port'));
console.log('server listeing on port '  + app.get('port'));