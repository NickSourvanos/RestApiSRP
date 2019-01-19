"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
//import Routers
const BookRouter_1 = require("./routes/BookRouter");
class Server {
    constructor() {
        this.PORT = 3000;
        this.bookRouter = new BookRouter_1.BookRouter();
        this.app = express();
        this.config();
        this.runServer();
        this.bookRouter.getBooksRoute(this.app);
        this.bookRouter.addBookRoute(this.app);
        this.bookRouter.findBookRoute(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
    }
    runServer() {
        this.app.listen(this.PORT, function () {
            console.log("Server is listening on port " + this.PORT + "...");
        });
    }
}
exports.default = new Server().app;
//# sourceMappingURL=app.js.map