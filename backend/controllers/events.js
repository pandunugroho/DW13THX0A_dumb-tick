const Model = require("../models");
const Events = Model.events;
const Categories = Model.categories;

exports.index = (req, res) => {
    Events.findAll()
        .then(all => {
            res.send(all)
        })
};

exports.indexToday = (req, res) => {
    const { start_time } = req.params;
    Events.findAll(
        {
            where: { start_time }
        })
        .then(today => {
            res.send(today)
        }
        )
};

exports.indexByCategory = (req, res) => {
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



// exports.indexByKeyword = (req, res) => {
//     req.query.keyword !== keyword // 000
//     Events.findAll({
//         where: {
//             title: keyword
//         }
//     })
//         .then(events => {
//             res.send(events)
//         })
// };