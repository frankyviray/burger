var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    var burgersObj = {
      burgers: data
    };
    res.render("index", burgersObj);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insert(req.body, function (result) {
    res.send("Inserted");
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log(condition);
  var burgerObj = req.body;
  burger.update(burgerObj, condition, function (data) {
    if(data.changedRows === 0){
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
