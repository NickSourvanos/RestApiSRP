import { Request, Response } from "express";
const books = require("../models/BooksList");

export class GetBooksController {

    public getBook(req: Request, res: Response): void {
        res.status(200).json({
            books: books.booksList,
        });
    }
}
