create table itemes (
	itemid VARCHAR(500) ,
	price INTEGER,
	description VARCHAR(10000),
	productname VARCHAR(100),
	quantity INTEGER DEFAULT 10 NOT NULL,
	images VARCHAR(1000),
	selectitemquentuty INTEGER DEFAULT 1 NOT NULL,
	resturantselect VARCHAR(50)
);
