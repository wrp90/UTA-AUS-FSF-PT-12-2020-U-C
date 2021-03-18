DROP DATABASE IF EXISTS itemsDB;

CREATE DATABASE itemsDB;

USE itemsDB;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  items_name VARCHAR(50) NOT NULL,
  price VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

