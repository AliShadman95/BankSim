const dotenv = require("dotenv");
dotenv.config();
var cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

var http = require("http");
const PORT = process.env.PORT || 3005;
const router = require("../server/router");

var bodyParser = require("body-parser");

const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

server.listen(PORT, () => {
  console.log("listening on *:3005");
});
