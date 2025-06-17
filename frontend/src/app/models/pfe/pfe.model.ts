import { Student } from '../student.model';
import { Teacher } from '../teacher.model';

import { PfeStatus } from '../../core/enum/pfe.enum';
import { PfeDocument } from './pfe-document.model';
import { PfeEvaluation } from './pfe-evaluation.model';

export interface Pfe {
  id: number;
  title: string;
  description: string;
  status: PfeStatus;
  submission_date?: Date;
  defense_date?: Date;

   student?: {
    user?: {
      first_name?: string;
      last_name?: string;
      profile_picture?: string;
    };
    degree?: {
      name?: string;
    };
    level?: string;
  };
  supervisor?: string;

  documents?: PfeDocument[];
  evaluations?: PfeEvaluation[];
}
