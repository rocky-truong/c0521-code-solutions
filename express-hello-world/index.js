const express = require('./node_modules/express');
const app = express();

app.use((req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
});
