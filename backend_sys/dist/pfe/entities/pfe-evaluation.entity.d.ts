import { Pfe } from './pfe.entity';
import { Teacher } from '../../teachers/entities/teacher.entity';
import { EvaluationType } from 'src/enums/evaluation-type.enum';
export declare class PfeEvaluation {
    id: number;
    type: EvaluationType;
    score: number;
    feedback: string;
    evaluated_at: Date;
    pfe: Pfe;
    evaluator: Teacher;
}
