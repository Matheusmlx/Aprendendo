const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");


const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server);

io.on('connect', socket => {
  console.log('Nova conexão', socket.id);
});


const routes = require("../src/routes/routes");

mongoose.connect(
  "mongodb+srv://matheus:o2en3yyo2ei6kk@livecoding-x3fc9.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
app.use(cors());
//cors precisa estar antes das rotas
//configurando o express para aceitar jsons nas requisições
app.use(express.json());
app.use(routes);

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
