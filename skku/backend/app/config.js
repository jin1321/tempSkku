const mysql = require("mysql2");

var config = module.exports;

config.db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "mydb",
});

config.express = {
    port: 3001
};