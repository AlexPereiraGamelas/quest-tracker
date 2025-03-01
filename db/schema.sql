CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar(255) NOT NULL UNIQUE,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" TEXT  NOT NULL,
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

ALTER TABLE "quests" ADD CONSTRAINT "quests_fk1" FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("id");
ALTER TABLE "campaigns" ADD CONSTRAINT "campaigns_fk3" FOREIGN KEY ("user_key") REFERENCES "users"("id");

INSERT INTO users (id, username, password)
VALUES ('add351b9-c7a5-4c6d-94bc-adf9b4541975', 'dev', '$2b$10$gri7ohWgh4LLR5Z8eIzahuCaWBbTzQUhwqWqTiafjfVTvdAau/M2i');