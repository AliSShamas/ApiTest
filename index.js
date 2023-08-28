const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;


app.get('/',(_req,res)=>{
  res.send("Hi All");
});
app.get('/data',(req,res)=>{
  var data = ['Ali','Geogrio','Rym','Sara']
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});