const mongoose = require("mongoose");

function connection2db(url) {
  mongoose
    .connect("mongodb://127.0.0.1:27017/MyFirstdb")
    .then(() => console.log("MongoDB successfully connected"))
    .catch((err) => console.log("MongoError", err));
}

module.exports={connection2db};
