CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

DROP TABLE "story";

CREATE TABLE "story" (
"id" SERIAL PRIMARY KEY,
"user_id" INT NOT NULL REFERENCES "user",
"first_name" VARCHAR(30) NOT NULL,
"last_name" VARCHAR(30) NOT NULL,
"title" VARCHAR(60) NOT NULL,
"state" VARCHAR(2),
"party" VARCHAR(30),
"twitter" VARCHAR(60),
"facebook" VARCHAR(60),
"instagram" VARCHAR(60),
"image_url" VARCHAR(200),
"additional_information" VARCHAR(1000),
"headline" VARCHAR(60),
"body" VARCHAR(1000) 
);
