// create-pfe.dto.ts
import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsDate,
  IsEnum,
} from 'class-validator';
import { PfeStatus } from 'src/enums/pfe-status.enum';

export class CreatePfeDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  student_id: number;

  @IsNumber()
  @IsOptional()
  supervisor_id?: number;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  submission_date?: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  defense_date?: Date;

  @IsEnum(PfeStatus)
  @IsOptional()
  status?: PfeStatus; // Now allowed
}
