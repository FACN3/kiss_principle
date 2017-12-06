const pl = require("./db_connection");
const add_review = (user_id, place_id, review, rating, response) => {
  pl.query(
    "INSERT INTO reviews(user_id, place_id, review, rating) VALUES ($1, $2, $3, $4);",
    [user_id, place_id, review, rating],
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
module.exports = add_review;
