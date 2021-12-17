const mysql = require("mysql2")
const dotenv = require("dotenv")
dotenv.config()

const connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})

module.exports = connection
