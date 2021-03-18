DROP DATABASE IF EXISTS play_listDB;

CREATE DATABASE play_listDB;

USE play_listDB;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  artist VARCHAR(50) NOT NULL,
  genre VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ('Hold On', 'Wilson Phillips', 'Pop');

INSERT INTO songs (title, artist, genre)
VALUES ("I'm Not Okay", 'My Chemical Romance', 'Rock');

INSERT INTO songs (title, artist, genre)
VALUES ("Sober", 'Tool', 'Metal');