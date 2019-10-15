const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/fruitsDb'),
{userNewUrlParser:true};

// Conection Url
const url = 'mongodb//localhost:27017';



// Use method to connect to the server
Client.connect(function(err){


    assert.equal(null, err);
    console.log('Connect Success to the server');

    const db = client.db(dbName);

    client.close();
});
