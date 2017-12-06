const pl = require("./db_connection");
const add_place = (name, user_id, location, address, response) => {
  pl.query(
    "INSERT INTO places(name , user_id , location ,address) VALUES ($1, $2, $3, $4);",
    [name, user_id, location, address],
    (err, res) => {
      if (err) {
        console.log(err);
        console.log("error");
        response.writeHead(500);
        response.end();
      } else {
        console.log("success");
        response.writeHead(200);
        response.end("success");
      }
    }
  );
};
module.exports = add_place;
