import { Request, Response } from "express";
const books = require("../models/BooksList");

export class FindBookController {

    public findBook(req: Request, res: Response): void {
        const bookObject: string = req.params.book;
        let flag = false;
        for (const b of books.booksList) {
            if (bookObject === b) {
                flag = true;
                break;
            } else {
                flag = false;
            }
        }
        if (flag) {
            res.status(200).json({
                book: bookObject,
                message: "Book Found",
            });
        } else {
            res.status(200).json({
                message: "Book does not exist",
            });
        }
    }
}
