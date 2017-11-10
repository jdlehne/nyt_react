const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

//===USE AFTER A YARN BUILD ===//
//app.use(express.static("client/build"));
app.use(express.static("client"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(apiRoutes);

//========  MONGO MONGOOSE =======//
mongoose.Promise = global.Promise;

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
