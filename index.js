const express = require("express");
const app = express();
var cors = require('cors');
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(cors());

const users = [];

app.get('/', (_req, res) => {
  res.send("Hi All");
});


app.post('/SaveUser', (req, res) => {
  const user = req.body;
  users.push(user);
  res.send('User Saved');
});

app.get('/Users', (_req, res) => {
  const allUsers = [{"name":'Ali'}, {"name":'Geogrio'}, {"name":'Rym'},{"name": 'Sarah'},{"name":"Samir"}, ...users];
  res.send(allUsers);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
