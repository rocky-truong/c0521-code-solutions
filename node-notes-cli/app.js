const fs = require('fs');
const dataObj = require('./data.json');
const feature = process.argv[2];

if (feature === 'read') {
  for (const key in dataObj.notes) {
    console.log(key + ':', dataObj.notes[key]);
  }
} else if (feature === 'create') {
  dataObj.notes[dataObj.nextId] = process.argv[3];
  dataObj.nextId++;
} else if (feature === 'delete') {
  delete dataObj.notes[process.argv[3]];
} else if (feature === 'update') {
  dataObj.notes[process.argv[3]] = process.argv[4];
}

const newDataObj = JSON.stringify(dataObj, null, 2);

fs.writeFile('data.json', newDataObj, 'utf8', err => {
  if (err) throw err;
});
