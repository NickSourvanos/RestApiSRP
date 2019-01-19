import * as express from 'express';
import * as bodyParser from 'body-parser';
import { GetBooksController } from './controllers/GetBooksController';

//import Routers
import { BookRouter } from './routes/BookRouter';

class Server {
    public app: express.Application;
    private PORT: number  = 3000;

    bookRouter:BookRouter = new BookRouter();

    constructor(){
        this.app = express();
        this.config();
        this.runServer();

        this.bookRouter.getBooksRoute(this.app);
        this.bookRouter.addBookRoute(this.app);
        this.bookRouter.findBookRoute(this.app);
    }

    public config(): void{
        this.app.use(bodyParser.json());
    }

    private runServer(){
        this.app.listen(this.PORT, function(){
            console.log("Server is listening on port " + this.PORT + "...");
        })
    }
}

export default new Server().app;