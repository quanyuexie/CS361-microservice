'use strict';

// NOTE: Don't change the port number
const PORT = 3000;

// The variable stocks has the same value as the variable stocks in the file `stocks.js`


const express = require("express");
const app = express();

//rest-api
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const path = require('path');
app.use(express.urlencoded({
    extended: true
}));

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
// app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// Add your code here




app.use(express.static('public'));

//app.use(express.static(path.join(__dirname,'/public')));


//microservice-get news

var request = require('request');


app.post("/news", (req, res) =>  {
    var query = req.body.search;

    var url = `https://microservice-news-app.herokuapp.com/${query}`
    

    request(url, function(err, response, body) {
        console.log(url);
        res.send(JSON.parse(body));
});
        
       
 });


    




//-----不用管上面这一部分-----------

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
