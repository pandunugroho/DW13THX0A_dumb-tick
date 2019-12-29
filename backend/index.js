require('express-group-routes');
// instantiate express module
const express = require('express');
const cors = require("cors");
//init body-parser
const bodyParser = require('body-parser')
//use express in app variable
const app = express();
//define the server port
const port = process.env.PORT || 8080;
app.use(cors());
//connect to routers.js after routers.js exported
// const routers = require('./routers');

// allow this app to recieve incoming json request
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.json())

//
//Task 2nd week
//

const categoriesController = require("./controllers/categories")
const usersController = require("./controllers/users")
const eventsController = require('./controllers/events')
// const ordersController = require('./controllers/orders')
// const authController = require('./controllers/auth')

app.get('/', (req, res) => {
    res.send("Welcome to My Server. My name is Pandu Nugroho")
});

// app.get('/', async function(req, res) {

//     // Access the provided 'page' and 'limt' query parameters
//     let page = req.query.page;
//     let limit = req.query.limit;

//     let articles = await Article.findAll().paginate({page: page, limit: limit}).exec();

//     // Return the articles to the rendering engine
//     res.render('index', {
//         articles: articles
//     });
// });

// routers.get("/")

app.group('', (router) => {
    //   // Categories
    router.get('/test', (req, res) => {
        res.send("Welcome to My Server. This is a TEST")
    })

    //GET
    router.get('/categories', categoriesController.index)
    router.get('/category/:id/events', eventsController.indexByCategory)
    router.get('/events', eventsController.index)
    router.get('/events/:start_time', eventsController.indexToday)

    // router.get('/events?title=keyword', eventsController.indexByKeyword)
    // router.get('/events?start_time=2019-12-30', eventsController.index)
    // router.get('/events?start_time=2019-12-31', eventsController.index)

    router.get('/event/:id', eventsController.indexByCategory)
    router.get('/profile/:id', usersController.profile)
    router.get('/user/:id/favorites', usersController.favorites)

    // router.get('/orders?status=approved', ordersController.index)

    // //POST

    // router.post('/login', authController.index)
    // router.post('/register', authController.index)
    // router.post('/order', ordersController.index)
    // router.post('/event', eventsController.index)

    // //PUT
    // router.post('/order/:id', ordersController.index)
});


//When this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}`))
