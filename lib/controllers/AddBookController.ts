import { Request, Response } from 'express';
const books = require('../models/BooksList');

export class AddBookController{

    public addBook(req: Request, res: Response): void{
        console.log("Add reached");
        const book: string = req.body.book;
        console.log(book);
        books.booksList.push(book);
        res.status(200).json({
            status: "Book Added",
            book: book,
            books: books.booksList
        });
    }

}