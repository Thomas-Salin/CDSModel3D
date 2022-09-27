const express = require('express');

const app = express();

const path = require('path');


app.use(express.static(__dirname + '/src'))

app.use('/three/', express.static(path.join(__dirname,'/three')));



app.listen(3000, () =>{
    console.log("http://localhost:3000");
} )