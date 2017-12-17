CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE Products (
item_id int NOT NULL,
product_name varchar(50) NOT NULL,
department_name varchar(50) NOT NULL,
price DECIMAL(4,2) NOT NULL,
stock_quantity int NOT NULL);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) VALUES (
129423,
'Game Cube',
'Electronics',
19.99,
21);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) VALUES (
129923,
'N64',
'Electronics',
23.99,
17);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) VALUES (
154489,
'Game Boy',
'Electronics',
18.99,
11);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) VALUES (
193623,
'SNES',
'Electronics',
34.99,
6);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) VALUES (
109623,
'Harry Potter: The Complete Series',
'Books',
72.99,
19);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) VALUES (
129982,
'Marley and Me',
'Books',
7.99,
9);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) VALUES (
126720,
'Turtles All the Way Down',
'Books',
8.99,
23);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) VALUES (
129731,
'Star Wars: Bloodlines',
'Books',
15.99,
16);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) VALUES (
129749,
'Patagonia Fleece',
'Apparel',
31.99,
6);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) VALUES (
159936,
'North Face Hoodie',
'Apparel',
39.79,
4);