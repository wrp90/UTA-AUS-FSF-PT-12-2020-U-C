DROP DATABASE IF EXISTS quiz_db;

CREATE DATABASE quiz_db;

USE quiz_db;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  toy VARCHAR(45) NULL,
  activity VARCHAR(50) NULL,
  food VARCHAR(50) NULL,
  PRIMARY KEY (id)
);

INSERT INTO items (toy, activity, food)
VALUES ("ball", 'walking', 'treats');

INSERT INTO items (toy, activity, food)
VALUES ("bone", 'playtime', 'kibbles n bits');

INSERT INTO items (toy, activity, food)
VALUES ("toy", 'dinnertime', 'blue buffalo');