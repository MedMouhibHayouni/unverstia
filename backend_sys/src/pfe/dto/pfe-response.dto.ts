import { Expose, Transform, Type } from 'class-transformer';

import { DocumentType } from '../../enums/document-type.enum';
import { EvaluationType } from '../../enums/evaluation-type.enum';
import { PfeStatus } from '../../enums/pfe-status.enum';
import { StudentDto } from 'src/students/dto/student.dto';
import { TeacherDto } from 'src/teachers/dto/teacher.dto';

export class PfeResponseDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose()
  status: PfeStatus;

  @Expose()
  @Transform(({ value }) => (value ? PfeResponseDto.formatDate(value) : null))
  submission_date?: string;

  @Expose()
  @Transform(({ value }) => (value ? PfeResponseDto.formatDate(value) : null))
  defense_date?: string;

  @Expose()
  @Type(() => StudentDto)
  student: StudentDto;

  @Expose()
  @Type(() => TeacherDto)
  supervisor?: TeacherDto;

  @Expose()
  @Type(() => PfeDocumentDto)
  documents?: PfeDocumentDto[];

  @Expose()
  @Type(() => PfeEvaluationDto)
  evaluations?: PfeEvaluationDto[];

  private static formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

export class PfeDocumentDto {
  @Expose()
  id: number;

  @Expose()
  type: DocumentType;

  @Expose()
  file_url: string;
}

export class PfeEvaluationDto {
  @Expose()
  type: EvaluationType;

  @Expose()
  score: number;

  @Expose()
  feedback: string;
}
