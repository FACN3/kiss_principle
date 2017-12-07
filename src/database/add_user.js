//add new users from front-end into the database
//one . because it's in the same directory
const pl = require("./db_connection");

const add_user = (user_name, password, age, email, gender,cb) => {
  console.log('user_name', user_name);
  console.log(`user name ${user_name}`);
  pl.query(
    'INSERT INTO users(user_name , password , age ,email , gender) VALUES ($1, $2, $3, $4, $5);',
    [user_name, password, age, email, gender],
    (err, res) => {
      cb(err);
    }
  );
};
module.exports = add_user;
