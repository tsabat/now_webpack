const express = require('express');
const asyncHandler = require('express-async-handler');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');



// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.post('/webpack', asyncHandler(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const output = await exec('/opt/webpack/run.sh');
  console.log('stdout:', output);
  const contents = fs.readFileSync('/opt/webpack/bundle.js', 'utf8');
  output['bundle'] = contents;

  res.send(JSON.stringify({
    output
  }));
}));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);