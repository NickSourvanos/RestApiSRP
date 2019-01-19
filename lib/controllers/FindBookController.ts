import { Request, Response } from 'express';
const books = require('../models/BooksList');

export class FindBookController{

    public findBook(req: Request, res: Response): void{
        const book: string = req.params.book;
        console.log("Param: " + book);
        var flag = false;
        for(var i = 0; i < books.booksList.length; i++){
            if(book === books.booksList[i]){
                flag = true; 
                break;
            }else{
                flag = false;
            }
        }
        if(flag){
            res.status(200).json({
                book: book,
                message: 'Book Found'
            });
        }else{
            res.status(200).json({
                message: 'Book does not exist'
            });
        }
    }
}