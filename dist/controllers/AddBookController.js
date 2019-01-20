"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const books = require("../models/BooksList");
class AddBookController {
    addBook(req, res) {
        const bookObj = req.body.book;
        books.booksList.push(bookObj);
        res.status(200).json({
            status: "Book Added",
            book: bookObj,
            books: books.booksList,
        });
    }
}
exports.AddBookController = AddBookController;
//# sourceMappingURL=AddBookController.js.map