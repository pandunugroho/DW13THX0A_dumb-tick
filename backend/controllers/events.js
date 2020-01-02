const Model = require("../models");
const Events = Model.events;
const Categories = Model.categories;
const Users = Model.users;


exports.index = (req, res) => {
    Events.findAll()
        .then(all => {
            res.send(all)
        })
};

exports.indexToday = (req, res) => {
    const { startDate } = req.params;
    Events.findAll(
        {
            where: { startDate }
        })
        .then(today => {
            res.send(today)
        }
        )
};

// exports.indexByCategory = (req, res) => {
//     Events.findAll({
//         attributes: {
//             exclude: ["category", "createdAt", "updatedAt"]
//         },
//         include: [
//             {
//                 model: Categories,
//                 // as: "categories",
//                 attributes: ["id", "name"]
//             },
//             {
//                 model: Users,
//                 // as: "users",
//                 // attributes: ["id", "name", "noTelp", "email", "img"]
//             }
//         ],
//         where: { id: req.params.id }
//     }).then(data => res.send(data));
// };

exports.favorites = (req, res) => {
    let result = []
    Events.findAll({
        attributes: {
            exclude: ["category", "createdAt", "updatedAt"]
        },
        include: [
            // {
            //     model: Categories,
            //     as: "categories",
            //     attributes: ["id", "name"]
            // },
            {
                model: Users,
                // as: "events",
                // attributes: ["id", "name", "noTelp", "email", "img"]
                where: { id: req.params.id }
            }
        ],
        
    }).then(data =>{
        result.push(data)
        res.send(result)
    } )
};



exports.findByTitle = (req, res) => {
    const {title} = req.query // 000
    console.log(title + " fdfdffdfdf")
    Events.findAll({
        where: {
            title
        }
    })
        .then(keyword => {
            res.send(keyword)
        })
};

exports.eventDetails = (req, res) => {
    let result = []
    const id = req.params.id
    Events.findOne({
      where: {
        id: id
      },
      include:[
          {
              model: Categories
          },
          {
              model: Users
          }
      ]
    }).then(data => {
        result.push(data)
        res.send(result)
    })
  };