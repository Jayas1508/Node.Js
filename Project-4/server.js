const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Book = require('./model/book');

connectDB();

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.render('index', { books });
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.get('/add', (req, res) => {
    res.render('addBook');
});


app.post('/add', async (req, res) => {
    try {
        const { title, author, genre, publishedYear } = req.body;
        await Book.create({ title, author, genre, publishedYear });
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.get('/edit/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.render('editBook', { book });
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.post('/edit/:id', async (req, res) => {
    try {
        await Book.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.post('/delete/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port http://localhost:5000}`));
