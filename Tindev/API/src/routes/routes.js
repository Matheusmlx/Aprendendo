const express = require("express");
const routes = express.Router();

const DevControler = require("../controllers/DevController");
const LikeControler = require("../controllers/Likecontroller");
const DislikeController = require("../controllers/DislikeController");

routes.get("/", (req, res) => {
  res.json({ nome: `Hello ${req.query.name}` });
});
routes.get("/devs", DevControler.index);
routes.post("/devs", DevControler.store);
routes.post("/devs/:devId/likes", LikeControler.store);
routes.post("/devs/:devId/dislikes", DislikeController.store);

module.exports = routes;
