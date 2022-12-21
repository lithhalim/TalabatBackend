create table itemes (
	id  SERIAL PRIMARY KEY NOT NULL,
	itemid VARCHAR(500) ,
	price float,
	description VARCHAR(10000),
	productname VARCHAR(100),
	quantity INTEGER DEFAULT 10 NOT NULL,
	images VARCHAR(1000),
	selectitemquentuty INTEGER DEFAULT 1 NOT NULL,
	resturantselect VARCHAR(50)
);
