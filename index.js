const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Cors middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, '/Angular-in-Mean-stack')));

//body parser middleware
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,"Angular-in-Mean-stack","index.html"));
});

//Index Route
app.get('/',(req,res)=>{
    res.send('Invalid Endpoint');
});

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, '/Angular-in-Mean-stack/index.html'));
});

module.exports = app;
