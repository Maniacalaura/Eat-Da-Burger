var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burgers = require("../models/burger");

router.get("/", function(req, res) {
    burgers.all(function(data) {
        var hbsObj = {
            burgers: data
        };
        // console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burgers.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    // console.log("condition");

    burgers.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        console.log("result: ", result);
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.send(200);
        }
    });
});

module.exports = router