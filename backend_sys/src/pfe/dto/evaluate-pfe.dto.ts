import { EvaluationType } from 'src/enums/evaluation-type.enum';

export class EvaluatePfeDto {
  pfe_id: number;
  evaluator_id: number;
  type: EvaluationType;
  score: number;
  feedback: string;
}
