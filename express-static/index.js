const express = require('./node_modules/express');
const app = express();
const path = require('path');
const joinPublic = path.join('path.dirname', './public');
const staticPublic = express.static(joinPublic);
app.use(staticPublic);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Port 3000 on!');
});
