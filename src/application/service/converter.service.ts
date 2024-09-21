export class ConverterService {

    public async isLatex(latex: string): Promise<boolean> {
        return true;
    }

    public async convertToSvg(latex: string): Promise<string> {
        return 'SVG';
    }
}