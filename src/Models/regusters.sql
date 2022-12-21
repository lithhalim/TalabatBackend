create table regusters (
	regusterid VARCHAR(6000) ,
	fullname VARCHAR(1000) NOT NULL,
	email VARCHAR(1000) NOT NULL,
	password VARCHAR(1000) NOT NULL,
	country VARCHAR(1000) DEFAULT 'jordan' NOT NULL,
	role VARCHAR(50)   DEFAULT 'user' NOT NULL,
	image VARCHAR(6000),
	accesstoken VARCHAR(6000),
	refreshtoken VARCHAR(6000)
);
