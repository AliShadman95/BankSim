const pgp = require("pg-promise")(/*options*/);
const cn = process.env.DATABASE_URL;
const db = pgp(cn); // database instance;

module.exports = db;
