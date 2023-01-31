require('dotenv/config');
const express = require('express');
const pg = require('pg');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');

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
  const { patientFirstName, patientLastName, patientPhoneNumber, diagnosis, currentLocation, contactFirstName, contactLastName, email, contactPhoneNumber, relationship } = req.body;
  if (!patientFirstName || !patientLastName || !currentLocation || !contactFirstName || !contactLastName || !email || !contactPhoneNumber || !relationship) {
    throw new ClientError(400, 'fields with an asterisk are required');
  }
  const sql = `
    insert into "patients" ("firstName", "lastName", "phone", "diagnosis", "location")
    values ($1, $2, $3, $4, $5)
    returning *
  `;

  const params = [patientFirstName, patientLastName, patientPhoneNumber, diagnosis, currentLocation];
  db.query(sql, params)
    .then(result => {
      const newPatient = result.rows[0];
      const { inquiryId } = newPatient;

      const sql = `
        insert into "patientContact" ("inquiryId", "firstName", "lastName", "email", "phone", "relationship")
        values ($1, $2, $3, $4, $5, $6)
        returning *
      `;
      const params = [inquiryId, contactFirstName, contactLastName, email, contactPhoneNumber, relationship];
      return db.query(sql, params);
    })
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
