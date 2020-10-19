const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoute');

// express pp
const app = express();

// connect to mongoDB
const dbURI = 'mongodb+srv://khaledrefaat:5214705@cluster0.nos6l.mongodb.net/Ninja-Node?retryWrites=true&w=majority';
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => app.listen(3000))
	.catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
	const blog = new Blog({
		title: 'blog title',
		snippet: 'blog snippet',
		body: 'blog blody'
	});
	blog
		.save()
		.then((result) => {
			res.send(result);
		})
		.catch((err) => console.log(err));
});

app.get('/all-blogs', (req, res) => {
	Blog.find()
		.then((result) => {
			res.send(result);
		})
		.catch((err) => console.log(err));
});

app.get('/find-blog', (req, res) => {
	Blog.findById('5f03633ec29e2d26d0586449')
		.then((result) => {
			res.send(result);
		})
		.catch((err) => console.log(err));
});

// routes
app.get('/', (req, res) => {
	res.redirect('/blogs');
});

app.get('/about', (req, res) => {
	// res.send('<p>About Page</p>');
	res.render('about', { title: 'Blog - About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
// make sure to make it always on the bottom of your code
app.use((req, res) => {
	res.status(404).render('404', { title: 'Blog - 404' });
	// res.status(404);
});
