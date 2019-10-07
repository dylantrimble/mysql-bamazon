DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;
USE bamazon_db;


CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Suavaceito Pomade', 'Cosmetics', 11.50, 20),
        ('Castrole Edge', 'Automotive', 30.00, 100),
        ('Iphone 11 Pro Case', 'Electronics', 20.25, 15),
        ('Press Papa New Guini', 'Grocery', 18.99, 13),
        ('Dove Body Wash', 'Cosmetics', 7.50, 300),
        ('Apple Magic Mouse', 'Electronics', 69.00, 400),
        ('Mini Cooper Door Motor', 'Automotive', 160.50, 8),
        ('Dole Bananas', 'Grocery', 0.25, 900),
        ('Chelsea Boot', 'Clothing', 70.00, 90),
        ('Wella Deep Conditioner', 'Cosmetics', 20.49, 1100);