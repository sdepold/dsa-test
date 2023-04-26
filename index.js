var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Content-Security-Policy", "script-src 'unsafe-inline' *");
  return next();
});

app.use(express.static(__dirname + "/"));

app.listen(process.env.PORT || 3000);
