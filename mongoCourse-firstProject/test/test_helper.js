const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection
    .once('open', () => console.log('Connected! ^__^'))
    .on('error', (err) => console.warn('error -__-', err))