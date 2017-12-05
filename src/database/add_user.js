//add new users from front-end into the database
//one . because it's in the same directory
const pl = require("./db_connection");

const add_user = (user_name, password, age, email, gender,response) => {
  console.log('user_name', user_name);
  console.log(`user name ${user_name}`);
  pl.query(
    'INSERT INTO users(user_name , password , age ,email , gender) VALUES ($1, $2, $3, $4, $5);',
    [user_name, password, age, email, gender],
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
module.exports = add_user;
