CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar(255) NOT NULL UNIQUE,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "quests" (
	"id" varchar(255) NOT NULL UNIQUE,
	"campaign_id" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "campaigns" (
	"id" varchar(255) NOT NULL UNIQUE,
	"title" varchar(255) NOT NULL,
	"description" bigint NOT NULL,
	"user_key" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "adventurers" (
	"id" varchar(255) NOT NULL UNIQUE,
	"name" varchar(255) NOT NULL,
	"race" varchar(255),
	"player_name" varchar(255),
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "campaigns-adventurers" (
	"campaign_id" varchar(255) NOT NULL,
	"adventurer_id" varchar(255) NOT NULL,
	PRIMARY KEY ("campaign_id", "adventurer_id")
);


ALTER TABLE "quests" ADD CONSTRAINT "quests_fk1" FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("id");
ALTER TABLE "campaigns" ADD CONSTRAINT "campaigns_fk3" FOREIGN KEY ("user_key") REFERENCES "users"("id");
ALTER TABLE "campaigns-adventurers" ADD CONSTRAINT "campaigns-adventurers_fk0" FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("id");
ALTER TABLE "campaigns-adventurers" ADD CONSTRAINT "campaigns-adventurers_fk1" FOREIGN KEY ("adventurer_id") REFERENCES "adventurers"("id");

INSERT INTO users (id, username, password)
VALUES ('add351b9-c7a5-4c6d-94bc-adf9b4541975', 'dev', '$2b$10$gri7ohWgh4LLR5Z8eIzahuCaWBbTzQUhwqWqTiafjfVTvdAau/M2i');