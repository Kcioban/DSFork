const MYSQLSTR = process.env.MYSQLSTR || { host: "localhost", database: "inventario", user: "root" }
const mysql = require('mysql')

const con = mysql.createConnection(MYSQLSTR);

module.exports = con;