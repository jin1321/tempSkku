const mysql = require("mysql2");

var config = module.exports;

config.db = mysql.createPool({
    user: "root",
    host: "127.0.0.1",
    password: `Mangoleahchoi3!`,
    database: "mydb",
});

config.express = {
    port: 3001
};