const Model = require("../models");
const Orders = Model.orders;
// const Users = Model.users;
// const Events = Model.events;

exports.index = (req, res) => {
    Orders.findOne({
        where: {id}
    })
        .then(index => {
            res.send(index)
        })
};



