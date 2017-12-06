const pl = require("./db_connection");
const get_reviews = response => {
  pl.query("SELECT * from places", (err, res) => {
    if (err) {
      console.log(err);
      console.log("error");
      response.writeHead(500);
      response.end("DATABASE error");
    } else {
      console.log("success");
      response.writeHead(200, {
        "content-type": "application/json"
      });
      response.end(JSON.stringify(res.rows));
    }
  });
};
module.exports = get_reviews;