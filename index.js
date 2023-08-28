const express = require("express");
var cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(cors());

app.get('/',(_req,res)=>{
  res.send("Hi All");
});
app.get('/data',(req,res)=>{
  var data = ['Ali','Geogrio','Rym','Sarah','Steve','Alex','Josh','Chris','Nour','Samir','Britteny','Yaldez','Hazar']
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});