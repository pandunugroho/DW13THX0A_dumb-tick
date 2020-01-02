const jwt = require("jsonwebtoken");
const Model = require("../models");
const Events = Model.events;
const Categories = Model.categories;
const Orders = Model.orders;


exports.testCategory = (req, res) => {
    Categories.create(req.body).then(category => {
      res.send({
        message: "category data created by ADMIN",
        category
      });
    });
  };

  exports.testEvent = (req, res) => {
    Events.create(req.body).then(event => {
      res.send({
        message: "event data created by ADMIN",
        event
      });
    });
  };

  exports.testOrder = (req, res) => {
    Orders.create(req.body).then(order => {
      res.send({
        message: "order data created by ADMIN",
        order
      });
    });
  };