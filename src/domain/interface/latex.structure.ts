import { createHash } from "crypto";

export class LatexExpressionStructure {

    static PK_HASH_PREFIX = 'LatexHash#';
    // static SK_HASH_PREFIX = ;

    static TABLE_CATEGORY = 'latex-expression'

    hash: string;
    latex: string;
    svgFile: string;
    dviFile: string;
    hasFailure: boolean;
    createdAt: Date;

    public static create(
        latex: string,
        svgFile: string,
        dviFile: string,
        isFailure: boolean): LatexExpressionStructure {

        const LATEX_EXPRESSION_STRUCTURE = new LatexExpressionStructure();

        LATEX_EXPRESSION_STRUCTURE.hash = createHash('sha256').update(latex).digest('hex');
        LATEX_EXPRESSION_STRUCTURE.latex = latex;
        LATEX_EXPRESSION_STRUCTURE.svgFile = svgFile;
        LATEX_EXPRESSION_STRUCTURE.dviFile = dviFile;
        LATEX_EXPRESSION_STRUCTURE.hasFailure = isFailure;
        LATEX_EXPRESSION_STRUCTURE.createdAt = new Date();

        return LATEX_EXPRESSION_STRUCTURE;

    }

    get pk(): string {
        return LatexExpressionStructure.PK_HASH_PREFIX + this.hash;
    }

    get sk(): number {
        return Math.floor(Date.now() / 1000);
    }

    public toJSONStructured(): any {
        return {
            PK: this.pk,
            SK: this.sk,
            Latex: this.latex,
            SvgFile: this.svgFile,
            DviFile: this.dviFile,
            HasFailure: this.hasFailure,
            CreatedAtISO: this.createdAt?.toISOString(),
            CreatedAtUnix: Math.floor(Date.now() / 1000),
            TableCategory: LatexExpressionStructure.TABLE_CATEGORY
        }
    }

    public async fromJSON(data: any) {
        const LATEX_EXPRESSION_STRUCTURE = new LatexExpressionStructure();

        LATEX_EXPRESSION_STRUCTURE.hash = data.PK.replace(LatexExpressionStructure.PK_HASH_PREFIX, '');
        LATEX_EXPRESSION_STRUCTURE.latex = data.Latex;
        LATEX_EXPRESSION_STRUCTURE.svgFile = data.SvgFile;
        LATEX_EXPRESSION_STRUCTURE.dviFile = data.DviFile;
        LATEX_EXPRESSION_STRUCTURE.hasFailure = data.HasFailure;
        LATEX_EXPRESSION_STRUCTURE.createdAt = new Date(data.CreatedAtISO);
    }


}