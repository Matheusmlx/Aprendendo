// Update with your config settings.
//Informações de conexao com o banco de dados
const { password } = require("./.env");
module.exports = {
  client: "mysql",
  connection: {
    database: "graphql",
    user: "root",
    password
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
