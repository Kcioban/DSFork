const CNTSTRING = process.env.CNTSTRING || { host: "localhost", database: "inventario", user: "root" }
const mysql = require('mysql')

const con = mysql.createConnection(CNTSTRING);

module.exports = con;