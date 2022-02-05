const mongoose = require("mongoose");
const URI =
  "mongodb://localhost/erp" ||
  "mongodb+srv://root:4k3HB4eKvIUKrBc3@cluster0.lizib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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