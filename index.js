const express = require('express');
const tracer = require('dd-trace').init();

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  console.log(req);
  
  res.status(200).send({
    success: true,
    message: 'Working',
    version: '1.0.0',
  });
});

app.listen(port);

console.log(port)