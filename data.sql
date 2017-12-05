BEGIN;

CREATE TABLE users(

id            serial          PRIMARY KEY ,
user_name     varchar(100)    NOT NULL,
password      varchar(100)    NOT NULL ,
creation_time timestamp       default current_timestamp ,
age           int             NOT NULL ,
email         varchar(100)    NOT NULL ,
gender        varchar(20)

);

INSERT INTO users(user_name , password , age ,email , gender) VALUES
('nick' , '12345' ,34 ,'nick@hotmail.com' , 'male');

COMMIT;
