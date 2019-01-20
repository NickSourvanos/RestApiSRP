"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const books = require("../models/BooksList");
class GetBooksController {
    getBook(req, res) {
        res.status(200).json({
            books: books.booksList,
        });
    }
}
exports.GetBooksController = GetBooksController;
//# sourceMappingURL=GetBooksController.js.map