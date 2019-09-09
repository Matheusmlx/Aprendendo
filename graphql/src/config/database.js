const knexfile = require("../knexfile");

const knex = require("knex")(knexfile);
module.exports = knex;
//inserindo um nome usuario
// knex("users")
//   .insert({
//     name: "Teste",
//     email: "teste@teste.com.br",
//     password: "teste"
//   })
//   .then(data => console.log(data));

knex("users").then(resultado => console.log(resultado));
