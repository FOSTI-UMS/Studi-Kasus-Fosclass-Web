//import models disini
const {getAllTodo} = require('../models/Todo')
const os = require('os')
//business logic disini
function main(req,res){
    getAllTodo(function(barangs){
        res.render('index.ejs',{welcome:'GUDANG APP',todos:barangs})
    })
}
function info(req,res){
    res.send({os:os})
}
module.exports = {main,info}