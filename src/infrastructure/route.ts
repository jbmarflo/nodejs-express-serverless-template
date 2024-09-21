import {NextFunction, Request, Response} from "express";
import { LatexController } from "./controller/latex.controller";
// import { ResponseHelperCommon } from "../common/helper/response.helper.common";
import { errorMiddleware } from "./middleware/error.middleware";
import { registerServices } from "./module";

export class Route {

    // Dependency Injection
    private latexController: LatexController;

    constructor() {
          // Registrar servicios en el contenedor
        const container = registerServices();
        this.latexController = container.resolve<LatexController>('LatexController');
        console.log('this.latexController', this.latexController)
    }


    private methodAsync = fn => (...args) => fn(...args).catch((args[2]));

    public routes(app): void {

        app.route('/latex').get(this.wrapAsync(this.latexController.convertLatex))
        app.route('/latex/detect').get(this.wrapAsync(this.latexController.detectLatex))

        app.use(errorMiddleware)
    }

    private wrapAsync(fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) {
        return (req: Request, res: Response, next: NextFunction) => {
            fn(req, res, next).catch(next);
        };
    }
  
}