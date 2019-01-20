"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const books = require("../models/BooksList");
class FindBookController {
    findBook(req, res) {
        const bookObject = req.params.book;
        let flag = false;
        for (const b of books.booksList) {
            if (bookObject === b) {
                flag = true;
                break;
            }
            else {
                flag = false;
            }
        }
        if (flag) {
            res.status(200).json({
                book: bookObject,
                message: "Book Found",
            });
        }
        else {
            res.status(200).json({
                message: "Book does not exist",
            });
        }
    }
}
exports.FindBookController = FindBookController;
//# sourceMappingURL=FindBookController.js.map