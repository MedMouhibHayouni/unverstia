import { EvaluationType } from "../../core/enum/pfe.enum";
import { Pfe } from "./pfe.model";
import { Teacher } from "../teacher.model";


export interface PfeEvaluation {
  id: number;
  pfe_id: number;
  evaluator_id: number;
  type: EvaluationType;
  score: number;
  feedback: string;
  evaluated_at: Date;

  pfe?: Pfe;
  evaluator?: Teacher;
}
