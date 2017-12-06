// pg helps to make sure the server talks to the database
require("env2")("./config.env");;

const {Pool}  = require("pg");
//const pg = require("pg");
//const Pool = pg.Pool;
let DB_URL = process.env.DB_URL;
if (process.env.NODE_ENV === "test") {
  DB_URL = process.env.TEST_DB_URL;
}

if (!DB_URL) {
  throw new Error("environment variable DB_URL must be set ");
}
//const params = url.parse(DB_URL);

const pool = new Pool({
  connectionString: process.env.DB_URL
});
module.exports = pool;
