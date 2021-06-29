const express = require('./node_modules/express');
const app = express();
const dataObj = require('./data.json');
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const key in dataObj.notes) {
    notesArray.push(dataObj.notes[key]);
  }
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const userReq = parseInt(req.params.id);
  const error400 = {
    error: 'id must be a positive integer'
  };
  const error404 = {
    error: `cannot find note with id ${userReq}`
  };
  if (isNaN(userReq) === true) {
    res.status(400).json(error400);
  } else if (dataObj.notes[userReq] === undefined) {
    res.status(404).json(error404);
  } else if (isNaN(userReq) === false) {
    res.status(200).json(dataObj.notes[userReq]);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const error400 = {
    error: 'content is a required field'
  };
  const error500 = { error: 'An unexpected error occurred.' };
  if (req.body.content === undefined) {
    res.status(400).json(error400);
  } else if (Boolean(newNote) === true) {
    const id = dataObj.nextId;
    newNote.id = id;
    dataObj.notes[newNote.id] = newNote;
    dataObj.nextId++;
    const newDataObj = JSON.stringify(dataObj, null, 2);
    fs.writeFile('fake/data.json', newDataObj, 'utf8', err => {
      if (err) {
        res.status(500).json(error500);
      } else res.status(201).json(newNote);
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Port 3000 is on!');
});
