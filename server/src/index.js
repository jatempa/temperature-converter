require('dotenv').config();
const express = require('express');

// CONSTANTS
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'hello from server' });
});

app.listen(PORT, HOST, () => {
  console.log(`App listening on http://${HOST}:${PORT}`);
});
