const Model = require("../models");
const Events = Model.events;

exports.index = (req, res) => {
    Events.findAll()
        .then(all => {
            res.send(all)
        })
};

exports.indexToday = (req, res) => {
    Events.findAll(
        // {
        //     where: {
        //         start_time: start_time
        //     }
        // }
        )
        .then(today => {
            res.send(today)
        }
        )
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