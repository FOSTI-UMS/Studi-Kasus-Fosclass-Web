const express = require('express')
const app = express()
const path = require('path');
const bp = require('body-parser')
const routers = require('./routers/routers')
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/src'));
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use('/',routers)


app.listen(3000,function(){
    console.log("App running...");
})