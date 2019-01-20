"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddBookController_1 = require("../controllers/AddBookController");
const books = require("../models/BooksList");
const FindBookController_1 = require("../controllers/FindBookController");
const GetBooksController_1 = require("../controllers/GetBooksController");
class BookRouter {
    constructor() {
        this.getBooksController = new GetBooksController_1.GetBooksController();
        this.addBookController = new AddBookController_1.AddBookController();
        this.findBookController = new FindBookController_1.FindBookController();
    }
    getBooksRoute(app) {
        app.route("/books").get((req, res) => {
            this.getBooksController.getBook(req, res);
        });
    }
    addBookRoute(app) {
        app.route("/books").post((req, res) => {
            this.addBookController.addBook(req, res);
        });
    }
    findBookRoute(app) {
        app.route("/books/:book").get((req, res) => {
            this.findBookController.findBook(req, res);
        });
    }
}
exports.BookRouter = BookRouter;
//# sourceMappingURL=BookRouter.js.map