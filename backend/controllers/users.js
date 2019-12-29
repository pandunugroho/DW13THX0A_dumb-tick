const Model = require("../models");
const Users = Model.users;

exports.profile = (req, res) => {
    Users.findAll({
        where: {id}
    })
        .then(index => {
            res.send(index)
        })
};

exports.favorites = (req, res) => {
    Events.findAll({
        attributes: {
            exclude: ["category", "createdAt", "updatedAt"]
        },
        include: [
            {
                model: Categories,
                as: "categories",
                attributes: ["id", "name"]
            },
            {
                model: Users,
                as: "users",
                attributes: ["id", "name", "noTelp", "email", "img"]
            }
        ],
        where: { id: req.params.id }
    }).then(data => res.send(data));
};

