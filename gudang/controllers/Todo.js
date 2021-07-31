//import models disini
const {createTodo} = require('../models/Todo')

//business logic disini
function main(req,res) {
    res.send({result:'Hello'})
}
function add(req,res){
    createTodo(req.body.todo,() => {
        res.redirect('/')
    })   
}

module.exports = {main,add}