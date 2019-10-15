const express = require ('express');
const bodyParser = require ('body-parser');
var request = require('request');

const app = express();

app.use (bodyParser.urlencoded ({extended: true}))

app.get ("/", function (req, res) {
    res.sendFile (__dirname + "/index.html");
})

app.post("/", function (req, res) {
    console.log (req.body.crypto);
})

request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function (error, response, body) {
    var data = JSON.parse(body);

    var price = data.last;

    res.send("<h1> The price of bitcoin Is " + price + " USD" + "</h1>")
})

app.listen (3000, function () {
    console.log ('Server is started at port 3000')
    
})