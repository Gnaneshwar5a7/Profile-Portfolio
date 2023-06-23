"use strict";

var express = require("express");

var path = require('path');

var App = express();
App.use(express["static"]('public')); // App.set('view engine', 'html');

App.engine('.html', require('ejs').renderFile);
var count = 0;
App.get("/", function (req, res) {
  // res.sendFile(path.join(__dirname+'/views/index.html'))
  count += 1;
  res.render('index.html', {
    count: count
  });
});
App.listen(8000, function (e) {
  if (e) {
    console.lof(e);
  } else {
    console.log("The App is running...");
  }
});
//# sourceMappingURL=App.dev.js.map
