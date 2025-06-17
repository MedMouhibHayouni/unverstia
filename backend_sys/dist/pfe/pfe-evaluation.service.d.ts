import { Repository } from 'typeorm';
import { EvaluatePfeDto } from './dto/evaluate-pfe.dto';
import { PfeEvaluation } from './entities/pfe-evaluation.entity';
export declare class PfeEvaluationService {
    private evalRepo;
    constructor(evalRepo: Repository<PfeEvaluation>);
    evaluate(dto: EvaluatePfeDto): Promise<PfeEvaluation>;
    getEvaluations(pfe_id: number): Promise<PfeEvaluation[]>;
}
