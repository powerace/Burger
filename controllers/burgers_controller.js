var express = require("express");
var burger = require("../models/burger.js")

var router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});

router.post("/", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  

});

// Export routes for server.js to use.
module.exports = router;