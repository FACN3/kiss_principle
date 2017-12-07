const pl = require('./db_connection');
const get_reviews = (response, cafe) => {
  console.log('cafe in question', cafe);
  pl.query(
    'SELECT * FROM reviews WHERE place_id = (SELECT id FROM places WHERE name = $1)',
    [cafe],
    (err, res) => {
      console.log('do we get here?');
      if (err) {
        console.log(err);
        console.log('error');
        response.writeHead(500);
        response.end('DATABASE error');
      } else {
        console.log('success');
        response.writeHead(200, {
          'content-type': 'application/json'
        });
        console.log('here is the review', JSON.stringify(res.rows));
        response.end(JSON.stringify(res.rows));
      }
    }
  );
};
module.exports = get_reviews;
