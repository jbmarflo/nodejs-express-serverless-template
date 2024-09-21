import { HttpException } from "../../common/error/http-exception";
import { ConverterService } from "../../application/service/converter.service";
import { HttpStatus } from "src/common/error/http-status";
import { Bind } from "src/common/decorator/bind.decorator";

export class LatexController {

    constructor(
        private converterService: ConverterService
    ) {
        console.log('this.converterService', this.converterService.convertToSvg("sd"))
    }

    @Bind
    public async detectLatex(req: any, res: any): Promise<void> {
        const body = req.body;
        const latex = body.latex;

        throw new HttpException(HttpStatus.BAD_REQUEST, 'Latex not detected'); 
        res.send({ msg: 'Latex detected' });
    }
    
    @Bind
    public async convertLatex(req: any, res: any): Promise<void> {
        const body = req.body;
        const latex = body.latex;
        const svg = await this.converterService.convertToSvg(latex);
        res.send({ 
            msg: 'Latex converted s', 
            data: svg
        });
    }

}