// blog index, blog_details, blog_create_get, blog_create_post, blog create
const Blog = require('../models/blog');

const blogIndex = (req, res) => {
	Blog.find()
		.sort({ createdAt: -1 }) // this means sort them from the lats
		.then((result) => {
			res.render('index', { title: 'Blog - Home', blogs: result });
		})
		.catch((err) => console.log(err));
};

const blogDetails = (req, res) => {
	const id = req.params.id;
	Blog.findById(id)
		.then((result) => {
			res.render('details', { blog: result, title: 'Blog Details' });
		})
		.catch((err) => {
			res.status(404).render('404', { title: 'Blog Not Found' });
		});
};

const blogCreateGet = (req, res) => {
	res.render('create', { title: 'Blog - Create' });
};

const blogCreatePost = (req, res) => {
	const blog = new Blog(req.body);
	blog
		.save()
		.then((result) => {
			res.redirect('/');
		})
		.catch((err) => console.log(err));
};

const blogDelete = (req, res) => {
	const id = req.params.id;
	Blog.findByIdAndDelete(id)
		.then((result) => {
			res.json({ redirect: '/' });
		})
		.catch((err) => console.log(err));
};

module.exports = { blogIndex, blogDetails, blogCreateGet, blogCreatePost, blogDelete };
