const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("../src/routes/routes");

mongoose.connect(
  "mongodb+srv://matheus:o2en3yyo2ei6kk@livecoding-x3fc9.mongodb.net/test?retryWrites=true&w=majority"
);

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("Servidor ON");
});
