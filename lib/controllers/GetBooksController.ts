import { Request, Response } from 'express';
const books = require('../models/BooksList');

export class GetBooksController{

    public getBook(req: Request, res: Response): void{
        console.log("Get reached");
        res.status(200).json({
            books: books.booksList
        });
    }

}

/*import { Router, Request, Response } from 'express';
const books = require('../models/BooksList');

export class GetBooksController{

    router: Router;

    constructor (){
        this.router = Router();
    }

    public getBooksList(req: Request, res: Response): void{
        console.log(books);
        res.status(200).json({
            books: books.booksList
        });
    }

    public addBook(req: Request, res: Response): void{
        console.log("Add reached");
        res.status(200).json({
            status: "Book Added",
            books: books.booksList
        })
    }

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

    routes(){
        this.router.get('/books', this.getBooksList);
    }
}

const getBookRoute = new GetBooksController();
getBookRoute.routes();

export default getBookRoute.router;*/