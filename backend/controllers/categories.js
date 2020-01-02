// const Categories = require('../models').categories;
const Model = require("../models");
const Categories = Model.categories;
const Users = Model.users;
const Events = Model.events;


exports.index = (req, res) => {
  Categories.findAll()
    .then(categories => {
      res.send(categories)
    })
};

exports.indexByCategory = (req, res) => {
  Events.findAll({
      // attributes: {
      //     exclude: ["category", "createdAt", "updatedAt"]
      // },
      include: [
          {
              model: Categories,
              where: { id: req.params.id }
              // as: "categories",
              // attributes: ["id", "name"]
          },
          // {
          //     model: Users,
          //     // as: "users",
          //     // attributes: ["id", "name", "noTelp", "email", "img"]
          // }
      ],
  }).then(data => res.send(data));
};

// exports.indexById = (req, res) => {
//   const { id } = req.params;
//   Categories.findOne({
//     attributes: {
//       exclude: ['updatedAt', "is_active", "createdAt"]
//     },

//     include: [
//       {
//         model: Events,
//         as: "events",
//         //   where: {
//         //     name: slugify(req.params.name, " ")
//         //   }
//         attributes: {
//           exclude: ['id', 'category', 'createdAt', 'updatedAt', 'is_active']
//         }

//       }],
//     where: { id }
//   })
//     .then(as => {
//       res.send(as)
//     })
// };

exports.show = (req, res) => {
  const id = req.params.id
  Categories.findOne({
    where: {
      id: id
    }
  }).then(data => res.send(data))
};

exports.add = (req, res) => {
  Categories.create(req.body).then(data =>
    res.send({
      message: "Success to Add an Category",
      data
    })
  )
};