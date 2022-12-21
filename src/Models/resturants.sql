create table resturants (
	id  SERIAL PRIMARY KEY NOT NULL,
	restaurantid VARCHAR(1000) ,
	restaurantname VARCHAR(100),
	images VARCHAR(5000),
	categories VARCHAR(50),
	rate float,
	freedelivery boolean,
	fastdelevery boolean,
	place VARCHAR(50),
	numberrate INTEGER
);
