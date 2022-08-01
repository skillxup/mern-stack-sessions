const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const books = require("./books.json");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/books", (req, res) => {
    res.json(books);
});

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