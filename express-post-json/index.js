const express = require('./node_modules/express');
const app = express();
let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const arrayGrades = [];
  for (const key in grades) {
    arrayGrades.push(grades[key]);
  }
  res.json(arrayGrades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const id = nextId;
  const newGrade = req.body;
  newGrade.id = id;
  grades[id] = newGrade;
  nextId++;
  res.status(201).json(newGrade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Port 3000 go!');
});
