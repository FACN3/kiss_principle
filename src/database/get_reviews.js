const pl = require('./db_connection');
const get_reviews = (response, cafe) => {
  pl.query(
    "SELECT id,location,name FROM places WHERE id = $1",
    [cafe],
    (err1, res_id) => {
      console.log("CAfe name is                    :" + cafe);
      if (err1) {
        response.end();
      }
      pl.query(
        "SELECT * FROM reviews WHERE place_id =  $1",
        [res_id.rows[0].id],
        (err, res) => {
          console.log("do we get here?");
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
            console.log("here is the review", JSON.stringify(res));
            res["id"] = res_id.rows[0].id;
            res["location"] = res_id.rows[0].location;
            res["name"] = res_id.rows[0].name;
            console.log("to send", res);
            response.end(JSON.stringify(res));
          }
        }
      );
    }
  );
};
module.exports = get_reviews;
