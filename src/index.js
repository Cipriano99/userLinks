const express = require('express');

const authController = require('./controllers/auth');

const app = express();
app.use(express.json());

app.use('/auth', authController);

app.get('/', (req, res) => {
  return res.json('Api runing');
});

app.listen(3001, () => console.log(`Listening on port 3001 🔥`));
