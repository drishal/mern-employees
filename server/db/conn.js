const { MongoClient } = require("mongodb");
// const Db = process.env.MONGO_URI;
// const Db = "mongodb://0.0.0.0:27017/employees";
const Db = "mongodb://mongodb:27017/employees";
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("employees");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};
