/**
 * import the objectID function from the mongo package.
 * Object ID is used for optimised lookup of unique IDs.
 */
var ObjectID = require('mongodb').ObjectID;

/**
 * CollectionDriver constructor method
 */
 function CollectionDriver(db){
	this.db = db;
}

/**
 * Add a helper method to collectionDriver to get a mongo collection by name.
 * Note the structure of the arguments in the callback!
 */
CollectionDriver.prototype.getCollection = function(collectionName, callback) {
  this.db.collection(collectionName, function(error, the_collection) {
    if( error ) callback(error);
    else callback(null, the_collection);
  });
};

/**
 * Another helper method to get an entire collection.
 */
CollectionDriver.prototype.findAll = function(collectionName, callback) {
    this.getCollection(collectionName, function(error, the_collection) {
      if( error ) callback(error);
      else {
		  //if no error: cal find. returns all found objects in an array.
        the_collection.find().toArray(function(error, results) {
          if( error ) callback(error);
          else callback(null, results);
        });
      }
    });
};

/**
 * Get a single item from a collection by it's ID.
 */
CollectionDriver.prototype.get = function(collectionName, id, callback) {
	
	//try and get the collection from the database:
    this.getCollection(collectionName, function(error, the_collection) {
        if (error) callback(error);
		//if no error:
        else {
			
			//check for invalid ID by testing against regexp
            var checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$"); 
            if (!checkForHexRegExp.test(id)) callback({error: "invalid id"});
			
			//if valid, call findOne method
            else the_collection.findOne({'_id':ObjectID(id)}, function(error,doc) {
                if (error) callback(error);
                else callback(null, doc);
            });
        }
    });
};

/**
 * Save a new object to a collection
 */
CollectionDriver.prototype.save = function(collectionName, obj, callback) {
    this.getCollection(collectionName, function(error, the_collection) {
      if( error ) callback(error)
      //if valid, add date and insert obj to collection
      else {
        obj.created_at = new Date();
        the_collection.insert(obj, function() {
          callback(null, obj);
        });
      }
    });
};

exports.CollectionDriver = CollectionDriver;