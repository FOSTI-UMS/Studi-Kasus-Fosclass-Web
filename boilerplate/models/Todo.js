const {QueryTypes} = require('sequelize');
const sequelize = require('../database/db')

function createTodo(todo,result){
    sequelize.query(
        'INSERT INTO todos (todo) VALUES ($todo)',
        {
            bind: { todo:todo },
            type: QueryTypes.INSERT
        }
    ).then(result)
}

function getAllTodo(result){
    sequelize.query(
        'SELECT * FROM todos',
        {
            type: QueryTypes.SELECT
        }
    ).then(result)
}

module.exports = {createTodo,getAllTodo}