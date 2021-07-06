const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
const express = require('./node_modules/express');
const app = express();
const fs = require('fs');

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ()
  `;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Port 3000 go!!!');
});
