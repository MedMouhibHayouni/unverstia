import { EvaluationType, PfeStatus } from '../../../../core/enum/pfe.enum';
import { DocumentType } from '../../../../core/enum/pfe.enum';
import { PfeDocument } from '../../../../models/pfe/pfe-document.model';
import { PfeEvaluation } from '../../../../models/pfe/pfe-evaluation.model';

export interface CreatePfeDto {
  title: string;
  description: string;
  student_id: number;
  supervisor_id: number;
  documents?: CreatePfeDocumentDto[];
  defense_date?: Date;
  submission_date?: Date;
}

export interface UpdatePfeDto {
  title?: string;
  description?: string;
  supervisor_id?: number;
  status?: PfeStatus;
  defense_date?: Date;
}

export interface CreatePfeDocumentDto {
  type: DocumentType;
  file_url: string;
}

export interface SubmitDocumentDto {
  pfe_id: number;
  type: DocumentType;
  file_url: string;
}

export interface EvaluatePfeDto {
  pfe_id: number;
  evaluator_id: number;
  type: EvaluationType;
  score: number;
  feedback: string;
}

export interface PfeResponseDto {
  id: number;
  title: string;
  description: string;
  status: PfeStatus;
  submission_date?: string; // Now as formatted string
  defense_date?: string;    // Now as formatted string
  student?: {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    profile_picture: string;
    student_id: string;
    level: string;
  };
  supervisor?: {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    profile_picture: string;
    position: string;
  };
  documents?: PfeDocument[];
  evaluations?: PfeEvaluation[];
}
