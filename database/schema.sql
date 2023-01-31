set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."patients" (
	"inquiryId" serial NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"phone" int,
	"diagnosis" TEXT,
	"location" TEXT NOT NULL,
	CONSTRAINT "patients_pk" PRIMARY KEY ("inquiryId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."patientContact" (
	"inquiryId" int NOT NULL UNIQUE,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"phone" int NOT NULL,
	"relationship" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "patientContact" ADD CONSTRAINT "patientContact_fk0" FOREIGN KEY ("inquiryId") REFERENCES "patients"("inquiryId");
