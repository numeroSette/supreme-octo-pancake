import express from 'express';
import '@controllers/UserController';

const app = express();

app.get('/', (req, res) => {
  return res.send('ok');
});

app.listen(3000, () => console.log('Running 3000'));