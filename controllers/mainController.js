let express = require("express");
let mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://root:root@todo.m0gn3.mongodb.net/?retryWrites=true&w=majority"
);

let schema = mongoose.Schema({
  name: String,
});

let db = mongoose.model("Todo", schema);

module.exports = (app) => {
  app.get("/", (req, res) => {
    db.find({}, (err, data) => {
      if (err) throw err;
      res.render("todoApp", { allItems: data });
    });
  });

  app.post("/", (req, res) => {
    let newItem = {
      name: req.body.name,
    };
    let item = db(newItem).save((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });

  app.delete("/:desc", (req, res) => {
    let specifiedItem = {
      name: req.params.desc,
    };

    db.deleteOne(specifiedItem, (err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });
};
