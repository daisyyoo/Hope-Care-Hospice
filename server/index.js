require('dotenv/config');
const express = require('express');
const pg = require('pg');
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
  const { name, phone, email, comment } = req.body;

  const sql = `
    insert into "patients" ("name", "phone", "email", "comment")
    values ($1, $2, $3, $4)
    returning *
  `;
  const params = [name, phone, email, comment];
  db.query(sql, params)
    .then(result => {
      const newPatient = result.rows;
      res.status(201).json(newPatient);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
