const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
const express = require('./node_modules/express');
const app = express();

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

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  const name = newGrade.name;
  const course = newGrade.course;
  const score = parseInt(newGrade.score, 10);
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
  `;
  const params = [name, course, score];
  if (!name || !course || !newGrade.score) {
    res.status(400).json({
      error: 'name, course, or score is missing'
    });
    return;
  }
  if (!Number.isInteger(score) || score <= 0 || score > 100) {
    res.status(400).json({
      error: 'score must be a positive integer between 0 to 100'
    });
    return;
  }
  db.query(sql, params)
    .then(result => {
      res.status(201).json(newGrade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  const editGrade = req.body;
  const name = editGrade.name;
  const course = editGrade.course;
  const score = parseInt(editGrade.score, 10);
  const sql = `
    update  "grades"
       set  "name"    = $1,
            "course"  = $2,
            "score"   = $3
      where "gradeId" = $4
      returning *;
  `;
  const params = [name, course, score, gradeId];
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  if (!Number.isInteger(score) || score <= 0 || score > 100) {
    res.status(400).json({
      error: 'score must be a positive integer between 0 to 100'
    });
    return;
  }
  if (!name || !course || !editGrade.score) {
    res.status(400).json({
      error: 'name, course, or score is missing'
    });
    return;
  }
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *;
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Port 3000 go!!!');
});
