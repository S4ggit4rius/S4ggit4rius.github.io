const dotenv = require("dotenv");
const mysql = require("mysql2");

dotenv.config({
  path: "./config.env",
});

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

module.exports = pool.promise();