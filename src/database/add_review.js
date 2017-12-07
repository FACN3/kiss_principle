const pl = require("./db_connection");
const add_review = (user_id, place_id, review, rating, cb) => {
  pl.query(
    "INSERT INTO reviews(user_id, place_id, review, rating) VALUES ($1, $2, $3, $4);",
    [user_id, place_id, review, rating],
    (err, res) => {
      cb(err);
    }
  );
};
module.exports = add_review;
