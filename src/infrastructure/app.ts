import express from 'express';
import * as bodyParser from "body-parser";
import { Route } from "./route";
import cors from 'cors';
import { registerServices } from './module';

class App {

    public app: express.Application;
    public routePrv: Route = new Route();

    constructor() {
        this.app = express();
        this.config();

      
        this.routePrv.routes(this.app);
        this.routePrv.routes.bind(() => {
            console.log('bind bind')
        });
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors({origin: '*'}));
    }

}

export default new App().app;