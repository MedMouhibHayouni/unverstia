import { Student } from '../../students/entities/student.entity';
import { Teacher } from '../../teachers/entities/teacher.entity';
import { PfeStatus } from 'src/enums/pfe-status.enum';
import { PfeDocument } from './pfe-document.entity';
import { PfeEvaluation } from './pfe-evaluation.entity';
export declare class Pfe {
    id: number;
    title: string;
    description: string;
    status: PfeStatus;
    submission_date: Date;
    defense_date: Date;
    student: Student;
    supervisor: Teacher;
    documents: PfeDocument[];
    evaluations: PfeEvaluation[];
}
