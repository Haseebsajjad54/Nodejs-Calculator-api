const express = require('express');
const app = express();
app.use(express.json());

// Calculator endpoints
app.get('/add', (req, res) => {
  const { a, b } = req.query;
  res.json({ result: Number(a) + Number(b) });
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  res.json({ result: Number(a) - Number(b) });
});

app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  res.json({ result: Number(a) * Number(b) });
});

app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  if (Number(b) === 0)
    return res.status(400).json({ error: 'Cannot divide by zero' });
  res.json({ result: Number(a) / Number(b) });
});

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}

module.exports = app;
