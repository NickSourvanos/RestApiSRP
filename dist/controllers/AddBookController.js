"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const books = require('../models/BooksList');
class AddBookController {
    addBook(req, res) {
        console.log("Add reached");
        const book = req.body.book;
        console.log(book);
        books.booksList.push(book);
        res.status(200).json({
            status: "Book Added",
            book: book,
            books: books.booksList
        });
    }
}
exports.AddBookController = AddBookController;
//# sourceMappingURL=AddBookController.js.map