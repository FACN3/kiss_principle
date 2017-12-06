BEGIN;

CREATE TABLE if not exists users(

id            serial          PRIMARY KEY ,
user_name     varchar(100)    NOT NULL,
password      varchar(100)    NOT NULL ,
creation_time timestamp       default current_timestamp ,
age           int             NOT NULL ,
email         varchar(100)    NOT NULL ,
gender        varchar(20)

);

CREATE TABLE  if not exists places(

  id serial PRIMARY KEY,
  name varchar(50),
  user_id INTEGER,
  location POINT,
  address TEXT,
 creation_time timestamp       default current_timestamp
);

CREATE TABLE if not exists reviews (
  id serial PRIMARY KEY,
  user_id INTEGER,
  place_id INTEGER,
  review TEXT,
  rating INTEGER
);

INSERT INTO users(user_name , password , age ,email , gender) VALUES
('nick' , '12345' ,34 ,'nick@hotmail.com' , 'male');

COMMIT;
