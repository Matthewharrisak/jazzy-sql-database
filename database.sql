CREATE TABLE "artists" (
    "id" SERIAL PRIMARY KEY,
    "artist_name" varchar(80) not null,
    "year_born" date
);

CREATE TABLE "song" (
    "id" SERIAL PRIMARY KEY,
    "title" varchar(80) not null,
    "length" varchar(80) not null,
    "date_released" date
);