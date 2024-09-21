import { ConverterService } from "src/application/service/converter.service";
import { container } from "src/common/container.common";
import { LatexController } from "./controller/latex.controller";


const CONTROLLER = [

]

const REPOSITORY = [

]

const SERVICE = [
    
]

export function registerServices() {
    
    // #Services
    container.register<ConverterService>('ConverterService', ConverterService);

    // Controller
    container.register<LatexController>('LatexController', LatexController, ['ConverterService']);

    return container
}