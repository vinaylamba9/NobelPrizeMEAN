const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const api1 = require('./routes/1');
const api2 = require('./routes/2');
const api3 = require('./routes/3');
const api4 = require('./routes/4');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false  }));

app.use('/api', api1);
app.use('/api', api2);
app.use('/api', api3);
app.use('/api', api4);
app.use('', (req,res) =>{
    res.send(`<html>
    <head>
    <title>Welcome to Nobel Database</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <style>
        .spacing{
            margin: 15px;
        }
    </style>
    </head>
    <body class="spacing">
    <h1>Hi, and Welcome to our database to know about Nobel Prize holders.</h1><br>
    <p>Please visit these 4 links according to data u want, You can customize query parameters according to your search.<p><hr>
    <a class="btn btn-danger spacing" href="http://localhost:3000/api/1?name=Malala">Search by Name</a> <br>
    <a class="btn btn-primary spacing" href="http://localhost:3000/api/2?year=2014">Search by Year</a> <br>
    <a class="btn btn-success spacing" href="http://localhost:3000/api/3?year=2014&category=peace">Search by Year and Category</a><br>
    <a class="btn btn-warning spacing" href="http://localhost:3000/api/4">Get alphabetically sorted order of winners</a>
    </body>
    </html>`)
})

app.listen(3000, ()=>{
    console.log("Server started at 3000:");
});