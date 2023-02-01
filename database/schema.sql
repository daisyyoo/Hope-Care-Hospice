set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."patients" (
	"inquiryId" serial NOT NULL,
	"patientFirstName" TEXT NOT NULL,
	"patientLastName" TEXT NOT NULL,
	"patientPhoneNumber" TEXT,
	"diagnosis" TEXT,
	"location" TEXT NOT NULL,
	CONSTRAINT "patients_pk" PRIMARY KEY ("inquiryId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."patientContact" (
	"inquiryId" int NOT NULL UNIQUE,
	"contactFirstName" TEXT NOT NULL,
	"contactLastName" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"contactPhoneNumber" TEXT NOT NULL,
	"relationship" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "patientContact" ADD CONSTRAINT "patientContact_fk0" FOREIGN KEY ("inquiryId") REFERENCES "patients"("inquiryId");
