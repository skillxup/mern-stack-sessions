var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/transactionsdb";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;
    console.log("Database Created Successfully!");
    db.close();
});