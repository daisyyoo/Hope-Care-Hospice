set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."patients" (
	"id" serial NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"phone" int,
	"diagnosis" TEXT,
	"location" TEXT NOT NULL,
	CONSTRAINT "patients_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."patientContact" (
	"id" int NOT NULL UNIQUE,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"phone" int NOT NULL,
	"relationship" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "patientContact" ADD CONSTRAINT "patientContact_fk0" FOREIGN KEY ("id") REFERENCES "patients"("id");
