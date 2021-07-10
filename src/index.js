import express from 'express';

const app = express();

app.get('/', (res, req) => {
  return res.json('Api runing');
});

app.listen(3001, () => console.log(`Listen on port 3001 🔥`));
