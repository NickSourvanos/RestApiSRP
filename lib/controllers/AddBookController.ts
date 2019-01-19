const books = require("../models/BooksList");
import { Request, Response } from "express";

export class AddBookController {

    public addBook(req: Request, res: Response): void {
        const bookObj: string = req.body.book;
        books.booksList.push(bookObj);
        res.status(200).json({
            status: "Book Added",
            book: bookObj,
            books: books.booksList,
        });
    }
}
