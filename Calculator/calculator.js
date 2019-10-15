const express = require('express');

const bodyParser = require('body-parser')

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded( {extended: true} ))

app.get ('/', function (req, res) {
    res.sendFile(__dirname + '/BmiCalc.html')
})

app.post('/', function (req, res) {
    var weight = Number (req.body.weight);
    var height = Number (req.body.height);
    var result = weight / (height * height)

    res.send ('The result of The Bmi is: ' + result)
})

app.listen(3000, function () {
    console.log('Server is runing on port 3000.')
})