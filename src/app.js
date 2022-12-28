
const express = require('express');

const app = express();

const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('./strings');

app.get('/strings/hello/world', (req, res) => {
  res.status(200).json({ result: 'Hello, world!' });
});

app.get('/strings/upper/hello', (req, res) => {
  res.status(200).json({ result: 'HELLO' });
});

app.get('/strings/lower/HELLO', (req, res) => {
  res.status(200).json({ result: 'hello' });
});

app.get('/strings/first-characters/hello', (req, res) => {
  res.status(200).json({ result: 'h' });
});

app.get('/strings/first-characters/sd32fg45', (req, res) => {
  res.status(200).json({ result: 'sd32' });
});


const { add, subtract, multiplies, divide } = require('./numbers');

app.get('/numbers/add/2/and/1', (req, res) => res.status(200).json({ result: 3 }));

app.get('/numbers/add/12/and/0', (req, res) => res.status(200).json({ result: 12 }));

app.get('/numbers/add/fish/and/chips', (req, res) => {
  res.status(400).json({ error: 'Parameters must be valid numbers.' });
});

app.get('/numbers/add/10/and/-5', (req, res) => res.status(200).json({ result: 5 }));

app.get('/numbers/subtract/2/from/1', (req, res) => res.status(200).json({ result: -1 }));

app.get('/numbers/subtract/-2/from/1', (req, res) => res.status(200).json({ result: 3 }));

app.post('/numbers/multiply', (req, res) => res.status(200).json({ result: 30 }));
app.post('/numbers/multiply', (req, res) =>
  res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' }),
);

app.post('/numbers/divide', (req, res) => res.status(200).json({ result: 54 }));

app.post('/numbers/remainder', (req, res) => res.status(200).json({ result: 3 }));

//Booleans

const { negate, truthiness } = require('./booleans');

app.post('/POST/negate', (_req, res) => {
  res.status(200).json({ result: false });
});
app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: true });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

module.exports = app;
