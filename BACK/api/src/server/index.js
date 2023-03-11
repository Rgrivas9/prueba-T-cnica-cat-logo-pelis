const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(express.json({ limit: "15mb" }));
server.use(express.urlencoded({ limit: "15mb", extended: true }));

require("../routes")(server);

module.exports = server;
