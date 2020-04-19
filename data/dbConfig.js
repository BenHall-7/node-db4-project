const knex = require("knex");
const knexConfig = knex(require("../knexfile").development);
module.exports = knexConfig;