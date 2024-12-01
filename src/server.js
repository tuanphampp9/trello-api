import express from 'express';

const app = express();
const hostName = 'localhost';
const port = 8017;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});