set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."patients" (
	"name" TEXT NOT NULL,
	"phone" int NOT NULL,
	"email" TEXT NOT NULL,
	"comments" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);
