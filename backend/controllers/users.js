const Model = require("../models");
const Users = Model.users;
// const Events = Model.events;

exports.profile = (req, res) => {
    let result=[]
    Users.findOne({
        where: {id:req.params.id}
    })
        .then(index => {
            result.push(index)
            res.send(result)
        })
};



