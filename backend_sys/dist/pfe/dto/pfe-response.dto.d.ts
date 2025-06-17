import { DocumentType } from '../../enums/document-type.enum';
import { EvaluationType } from '../../enums/evaluation-type.enum';
import { PfeStatus } from '../../enums/pfe-status.enum';
import { StudentDto } from 'src/students/dto/student.dto';
import { TeacherDto } from 'src/teachers/dto/teacher.dto';
export declare class PfeResponseDto {
    id: number;
    title: string;
    description: string;
    status: PfeStatus;
    submission_date?: string;
    defense_date?: string;
    student: StudentDto;
    supervisor?: TeacherDto;
    documents?: PfeDocumentDto[];
    evaluations?: PfeEvaluationDto[];
    private static formatDate;
}
export declare class PfeDocumentDto {
    id: number;
    type: DocumentType;
    file_url: string;
}
export declare class PfeEvaluationDto {
    type: EvaluationType;
    score: number;
    feedback: string;
}
