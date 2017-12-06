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

/*INSERT INTO users ( user_name , password , age ,email , gender) VALUES
('Brian' , '12345' ,45 ,'brian@hotmail.com' , 'male'),
('June' , '12345' ,54 ,'june@hotmail.com' , 'female'),
('Hasan' , '12345' ,20 ,'hasan@hotmail.com' , 'male'),
('Danny' , '12345' ,24 ,'danny@hotmail.com' , 'male'),
('Michelle' , '12345' ,17 ,'michelle@hotmail.com' , 'female');

INSERT INTO places ( name , user_id , location , address) VALUES
('Café Greg' , '1' ,'32.696336, 35.301983' , 'Big Fashion, Nazareth'),
('Landwer Café' , '1' ,'32.694046, 35.303235' , 'Derech HaEmek 41, Natsrat Ilit, 1754142'),
('Liwan Culture Café' , '2' ,'32.704452, 35.298076' , '6132 St 22-24, Nazareth'),
('Shany' , '2' ,'32.694400, 35.304723' , 'Derech HaEmek 41, Natsrat Ilit, 1754142'),
('Aroma' , '3' ,'32.694043, 35.304717' , 'Derech HaEmek 41, Natsrat Ilit, 1754142'),
('Landwer Café' , '3' ,'32.694013, 35.303217' , 'Derech HaEmek 41, Natsrat Ilit, 1754142'),
('Kahla Café' , '4' ,'32.702948, 35.298067' , 'Al-Bishara St 21, Nazareth'),
('Kakao' , '4' ,'32.694483, 35.303612' , 'Derech HaEmek 41, Natsrat Ilit, 1754142'),
('Café Abu Salem' , '5' ,'32.703678, 35.296320' , '6143 St 7-15, Nazareth'),
('Mukhtar Café' , '5' ,'32.700940, 35.297118' , '1 Al-Bishara St, Nazareth');
*/

COMMIT;
