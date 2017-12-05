// pg helps to make sure the server talks to the database
require("env2")("./config.env");;

const {Pool}  = require("pg");
//const pg = require("pg");
//const Pool = pg.Pool;

if (!process.env.DB_URL) {
  throw new Error("environment variable DB_URL must be set ");
}
const pool = new Pool({
  connectionString: process.env.DB_URL
});
module.exports = pool;
