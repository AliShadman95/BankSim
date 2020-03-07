const pgp = require("pg-promise")(/*options*/);
const cn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  ssl: "false"
};

const db = pgp(cn); // database instance;

module.exports = db;
