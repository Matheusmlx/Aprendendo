const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const connectedUsers = {};

io.on("connect", socket => {
  const { user } = socket.handshake.query;

  console.log(user, socket.id);
  connectedUsers[user] = socket.id;
});

const routes = require("../src/routes/routes");

mongoose.connect(
  "mongodb+srv://matheus:o2en3yyo2ei6kk@livecoding-x3fc9.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;
  return next();
});
app.use(cors());
//cors precisa estar antes das rotas
//configurando o express para aceitar jsons nas requisições
app.use(express.json());
app.use(routes);

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
