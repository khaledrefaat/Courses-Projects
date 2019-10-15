//jshint esversion:6

const express = require('express')

const app = express()

app.get('/', function (req, res) {
    res.send('<button> Click me </button>')
})

app.get('/contact', function (req, res) {
    res.send('Please Contact Me At <br> <a href = "https://www.facebook.com/khaled.refaatelkady" target = "blank"> FaceBook </a>')
})

app.get('/about', function (req, res) {
    res.send('<h1>mySkills</h1><ul><li>Html<li>Css<li>JavScript<li>Node.Js<li>Express.js</ul>')
})

app.listen(3000, function () {
    console.log('Sever Started On Port 3000')
})