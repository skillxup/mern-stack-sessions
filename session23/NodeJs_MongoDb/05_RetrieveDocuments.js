var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;
    var dbObject = db.db("restaurantsdb");
    var dbCollection = "restaurants";
    var dbQuery = {
        "$and": [
            {"name": /^W/}, 
            {"$and": [
                {"cuisine": {$ne: "American "}}, 
                {"cuisine": {$ne: "Chinese"}}
            ]}
        ]};

    dbObject.collection(dbCollection).find(dbQuery).toArray(function(err, res) {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});