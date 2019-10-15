const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use (express.static("public"))

app.use (bodyParser.urlencoded ({extended: true}))

app.get ("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req, res) {

    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    console.log(username, email, password)

})

var data = {
    members: {
        email_adress: email,
        status: subscribed
    }
};

var jsonData = JSON.stringify(data);

var options = {
    url: "https://us3.api.mailchimp.com/3.0/lists/70a0a4fb44",
    method: "Post",
    headers: {
        "Authorization": "Khaled a4de76118d39e3e79553196ee61d42ed-us3"
    },
    body: jsonData,

}

request (options, function(error, response, body) {
    if (error) {
        console.log(error)
    } else {
        console.log(response.statusCode)
    }
})

app.listen(3000, function () {
    console.log("Server is working in port 3000")
})


//a4de76118d39e3e79553196ee61d42ed-us3
// 70a0a4fb44 list id