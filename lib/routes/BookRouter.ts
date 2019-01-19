import { AddBookController } from "../controllers/AddBookController";

const books = require("../models/BooksList");

import { Request, Response } from "express";
import { FindBookController } from "../controllers/FindBookController";
import { GetBooksController } from "../controllers/GetBooksController";

export class BookRouter {

    public getBooksController: GetBooksController = new GetBooksController();
    public addBookController: AddBookController = new AddBookController();
    public findBookController: FindBookController = new FindBookController();

    public getBooksRoute(app): void {
        app.route("/books").get((req: Request, res: Response) => {
            this.getBooksController.getBook(req, res);
        });
    }

    public addBookRoute(app): void {
        app.route("/books").post((req: Request, res: Response) => {
            this.addBookController.addBook(req, res);
        });
    }

    public findBookRoute(app): void {
        app.route("/books/:book").get((req: Request, res: Response) => {
            this.findBookController.findBook(req, res);
        });
    }
}
