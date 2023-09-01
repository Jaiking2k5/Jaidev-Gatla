const express = require('express');

const app = express();

app.get('/',(req,res) => res.send("Hello World"));

const port =  process.env.PORT || 8082;

zpp.listen(port, () => console.log('server running on port $(port)'))



