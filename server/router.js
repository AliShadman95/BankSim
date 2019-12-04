const express = require("express");
const router = express.Router();
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

client.connect();

router.get("/", (req, res) => {
  res.send("ser is up and runn");
});

module.exports = router;
