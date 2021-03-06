const mongoose = require("mongoose");
const URI = "mongodb://localhost/erp" || process.env.URI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", () => {
  console.log("mongodb error!");
});

db.once("open", () => {
  console.log("Local DB connected!");
});
module.exports = db;
