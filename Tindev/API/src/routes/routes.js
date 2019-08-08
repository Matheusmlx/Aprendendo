const express = require("express");

const routes = express.Router();

const DevControoler = require("../controllers/DevController");

routes.get("/", (req, res) => {
  res.json({ nome: `Hello ${req.query.name}` });
});

routes.post("/devs", DevControoler.store);

module.exports = routes;
