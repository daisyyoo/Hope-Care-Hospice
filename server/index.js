require('dotenv/config');
const express = require('express');
const pg = require('pg');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const validator = require('email-validator');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const app = express();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());
app.use(staticMiddleware);

app.post('/newInquiry', (req, res, next) => {
  const { patientFirstName, patientLastName, patientPhoneNumber, diagnosis, location, contactFirstName, contactLastName, email, contactPhoneNumber, relationship } = req.body;
  if (!patientFirstName || !patientLastName || !location || !contactFirstName || !contactLastName || !email || !contactPhoneNumber || !relationship) {
    throw new ClientError(400, 'fields with an asterisk are required.');
  }
  if (contactPhoneNumber.length !== 10) {
    throw new ClientError(400, 'phone number must be 10 digits.');
  }
  if (!validator.validate(email)) {
    throw new ClientError(400, 'email must be a valid email.');
  }

  const sql = `
    insert into "patients" ("patientFirstName", "patientLastName", "patientPhoneNumber", "diagnosis", "location")
    values ($1, $2, $3, $4, $5)
    returning *
  `;

  const params = [patientFirstName, patientLastName, patientPhoneNumber, diagnosis, location];
  db.query(sql, params)
    .then(result => {
      const newPatient = result.rows[0];
      const { inquiryId } = newPatient;

      const sql = `
        insert into "patientContact" ("inquiryId", "contactFirstName", "contactLastName", "email", "contactPhoneNumber", "relationship")
        values ($1, $2, $3, $4, $5, $6)
        returning *
      `;
      const params = [inquiryId, contactFirstName, contactLastName, email, contactPhoneNumber, relationship];
      return db.query(sql, params);
    })
    .then(result => {
      const newContact = result.rows[0];
      const { inquiryId } = newContact;

      const sql = `
        select "patients"."inquiryId",
              "patients"."patientFirstName",
              "patients"."patientLastName",
              "patients"."patientPhoneNumber",
              "patients"."diagnosis",
              "patients"."location",
              "patientContact"."contactFirstName",
              "patientContact"."contactLastName",
              "patientContact"."email",
              "patientContact"."contactPhoneNumber",
              "patientContact"."relationship"
        from "patients"
        join "patientContact" using ("inquiryId")
        where "inquiryId" = $1
      `;
      const params = [inquiryId];
      return db.query(sql, params);
    })
    .then(result => {
      const newPatientInfo = result.rows;
      const { inquiryId, patientFirstName, patientLastName, patientPhoneNumber, diagnosis, location, contactFirstName, contactLastName, email, contactPhoneNumber, relationship } = newPatientInfo[0];

      const diagnosis1 = JSON.parse(diagnosis).value;
      const location1 = JSON.parse(location).value;
      const relationship1 = JSON.parse(relationship).value;
      const hospiceEmail = 'hch090419@gmail.com';

      if (!result.rows) {
        throw new ClientError(404, `cannot find patient with inquiryId ${inquiryId}`);
      }

      const msg = {
        to: [email, hospiceEmail],
        from: 'Hope Care Hospice <hopecarehospice2019@gmail.com>',
        subject: 'Hospice Referral Submission',
        text: `Hospice Referral Submission for ${patientFirstName + ' ' + patientLastName}`,
        html: `
            <br><h2>Thank you for your referral submission.</h2>
            <br><h3>Here is a copy of the information you submitted.</h3>
            <br>
            <br><strong>Patient's Name: </strong> ${patientFirstName + ' ' + patientLastName}<br>
            <br><strong>Patient's Phone Number: </strong> ${patientPhoneNumber}<br>
            <br><strong>Patient's Diagnosis: </strong> ${diagnosis1}<br>
            <br><strong>Patient's Current Location: </strong> ${location1}<br>
            <br><strong>Contact's Name: </strong> ${contactFirstName + ' ' + contactLastName}<br>
            <br><strong>Contact's Phone Number: </strong> ${contactPhoneNumber}<br>
            <br><strong>Contact's Email: </strong> ${email}<br>
            <br><strong>Contact's Relationship: </strong> ${relationship1}<br>
            <br>
            <br><h4>We'll be reaching out soon!</h4>
            <br><h5><em>If any of the above information is incorrect, please reach out to us by replying to this email.</em></h5>`
      };
      return sgMail.sendMultiple(msg);
    })
    .then(() => {
      res.json();
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
