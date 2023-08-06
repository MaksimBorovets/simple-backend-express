const express = require('express');
const cors = require('cors');

const app = express();

let count = 0;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('App is working!');
});

app.get('/counter', (req, res) => {
  res.status(200).send({ count });
});

app.patch('/counter', (req, res) => {
  count = +req.body.newCount;
  res.status(200).send({ succsess: true  });
});

app.post('/counter/increment', (req, res) => {
  count++;
  res.status(200).send({ succsess: true  });
});

app.post('/counter/incrementByAmmount', (req, res) => {
  count = count + +req.body.ammount;
  res.status(200).send({ succsess: true });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost: ${PORT}`);
});
