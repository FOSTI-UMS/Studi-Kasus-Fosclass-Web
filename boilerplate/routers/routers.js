const routes = require('express').Router()

const Todo = require('../controllers/Todo')
const Home = require('../controllers/Home')

routes.post('/tambahtodo',Todo.add)

routes.get('/', Home.main)

routes.get('/info',Home.info)

module.exports = routes;
