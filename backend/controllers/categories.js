// const Categories = require('../models').categories;
const Model = require("../models");
const Categories = Model.categories;

exports.index = (req, res) => {
  Categories.findAll()
  .then(categories => {
    res.send(categories)
  })
};
/*////////////////////////////////////////////////
const articles = data => {
    const newArticle = data.map(item => {
      let newItem = {
        id: item.id,exports.indexByKeyword = (req, res) => {
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
        title: item.title,
        content: item.content,
        image: item.image,
        category: item.category.name,
        user: item.user.fullname,
        username: item.user.username,
        dateCreated: item.createdAt
      };
      return newItem;
    });
    return newArticle;
  };
  
  exports.articles = (req, res) => {
    const { username } = req.params;
    Articles.findAll({
      attributes: {
        exclude: [
          "updatedAt",
          "category_id",
          "author_id",
          "is_published",
          "is_archived"
        ]
      },
      include: [
        {
          model: Categories,
          as: "category",
          attributes: {
            exclude: ["createdAt", "updatedAt", "is_published", "is_archived"]
          },
          where: {
            is_published: true,
            is_archived: false
          }
        },
        {
          model: Users,
          as: "user",
          where: {
            username: username
          },
          attributes: {
            exclude: ["createdAt", "updatedAt", "is_active", "password"]
          }
        }
      ]
    }).then(data => {
      res.status(200), res.send(articles(data));
    });
  };
*////////////////////////////////////////////
exports.indexById = (req, res) => {
  const id = req.params.id
  Categories.findAll({
        where: {
            id:id
        },
        include:
            {
              model: Event,
              as: "events"
            //   where: {
            //     name: slugify(req.params.name, " ")
            //   }
            }
    })
    .then(categories => {
      res.send(categories)
    })
  };

exports.show = (req, res) => {
  const id = req.params.id
  Categories.findOne({
    where: {
      id: id
    }
  }).then(data => res.send(data))
};

exports.add = (req,res) => {
  Categories.create(req.body).then(data =>
    res.send({
      message: "Success to Add an Category",
      data
    })
    )
};