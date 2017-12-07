const pl = require("./db_connection");
const add_place = (name, user_id, location, address, cb) => {
  pl.query(
    "INSERT INTO places(name , user_id , location ,address) VALUES ($1, $2, $3, $4);",
    [name, user_id, location, address],
    (err, res) => {
      cb(err, res);
    }
  );
};
module.exports = add_place;
