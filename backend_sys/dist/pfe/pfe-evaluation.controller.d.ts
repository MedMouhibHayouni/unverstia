import { PfeEvaluationService } from './pfe-evaluation.service';
import { EvaluatePfeDto } from './dto/evaluate-pfe.dto';
export declare class PfeEvaluationController {
    private readonly evalService;
    constructor(evalService: PfeEvaluationService);
    evaluate(dto: EvaluatePfeDto): Promise<import("./entities/pfe-evaluation.entity").PfeEvaluation>;
    getEvaluations(pfe_id: number): Promise<import("./entities/pfe-evaluation.entity").PfeEvaluation[]>;
}
