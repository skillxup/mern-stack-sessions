const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const books = require("./books.json");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// get all books
app.get("/books", (req, res) => {
    res.json(books);
});

// get single book
app.get("/books/:isbn", (req, res) => {
    const isbn = req.params.isbn;
    for(let book of books) {
        if(book.isbn === isbn) {
            res.json(book);
            return;
        }
    }
    res.status(404).send('book not found');
});

// add book
app.post("/books", (req, res) => {
    const book = req.body;
    books.push(book);
    res.send(`book added successfully`);
});

// update book
app.put("/books/:isbn", (req, res) => {
    const isbn = req.params.isbn;
    const newBook = req.body;

    for(let i = 0; i < books.length; i++) {
        let book = books[i];
        if(book.isbn === isbn) {
            books[i] = newBook;
            res.json(books[i]);
            return;
        }
    }

    // {"title": "ServiceNow", "author": "sN", "published": "2019-09-12", "publisher": "Arther", "pages": 185, "description": "its service now", "website": "https://servicenow.in"}
    // res.status(404).send('book not found');
    res.send(`book: ${isbn} is edited`);
});

// delete book
app.delete("/books/:isbn", (req, res) => {
    const isbn = req.params.isbn;
    for(let book of books) {
        if(book.isbn === isbn) {
            res.send(`book: ${isbn} deleted successfully`);
            return;
        }
    }
});


app.listen(port, () => console.log(`server running at post: ${port}`));