const { QueryTypes,Sequelize  } = require('sequelize');

var sequelize = new Sequelize(
    "database",
    process.env.USER,
    process.env.PASSWORD,
    {
        host: "0.0.0.0",
        dialect: "sqlite",
        pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    storage: "./database/database.sqlite"
});

sequelize
    .authenticate()
    .then(function(err) {
        console.log("Connection established.");
        console.log("connected");
    }).catch(function(err) {
        console.log("Unable to connect to database: ", err);
    });

module.exports = sequelize

