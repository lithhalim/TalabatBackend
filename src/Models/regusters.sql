create table regusters (
	regusterid VARCHAR(1000) ,
	fullname VARCHAR(150) NOT NULL,
	email VARCHAR(10000) NOT NULL,
	password VARCHAR(100) NOT NULL,
	country VARCHAR(100) DEFAULT 'jordan' NOT NULL,
	role VARCHAR(50)   DEFAULT 'user' NOT NULL,
	image VARCHAR(6000) DEFAULT 'https://thumbs.dreamstime.com/z/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-user-icon-vector-male-person-symbol-profile-circle-avatar-sign-115922533.jpg' NOT NULL,
	accesstoken VARCHAR(1000),
	refreshtoken VARCHAR(1000)
);
