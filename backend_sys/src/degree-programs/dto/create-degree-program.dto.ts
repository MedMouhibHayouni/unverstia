import {
  IsEnum,
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';
import { DegreeProgramType } from 'src/enums/DegreeProgramType.enum';

export class CreateDegreeProgramDto {
  @IsString()
  @Length(1, 50)
  name: string;

  @IsString()
  @Length(1, 10)
  code: string;

  @IsEnum(DegreeProgramType)
  level: DegreeProgramType; // Matches entity field

  @IsString()
  @Length(1, 255)
  description: string;

  @IsInt()
  @IsPositive()
  duration_years: number; // Matches entity field

  @IsNumber()
  major_id: number;

  @IsNumber()
  @IsPositive()
  speciality_id: number;

  @IsNumber()
  @IsPositive()
  institution_id: number;
}
