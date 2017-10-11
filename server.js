const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  // to prove it worked, print to the terminal
  console.log(`My awesome app is listening on port ${port}`);
})

app.get('/', function(req,res){
  res.send('HELLOoOOOoOOoOOOooO! <h1>Welcome to TravelOp </h1>');
});
