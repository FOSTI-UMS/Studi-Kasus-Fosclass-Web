const routes = require('express').Router()

const Todo = require('../controllers/Todo')
const Home = require('../controllers/Home')
const Time = require('../controllers/Time')
const Biodata = require('../controllers/Biodata')
const Barang = require('../controllers/Barang')
routes.post('/tambahtodo',Todo.add)

routes.get('/', Home.main)

routes.get('/info',Home.info)

routes.get('/waktu',Time.kirimwaktu)

routes.get('/biodata',Biodata.kirimBiodata)

routes.get('/tambahbarang', Barang.TambahBarangView)

module.exports = routes;
