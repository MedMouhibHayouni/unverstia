import { IsNumber, IsOptional, IsString, Length } from 'class-validator';

export class CreateMajorDto {
  @IsString()
  @Length(1, 50)
  name: string;

  @IsNumber()
  department: number;

  @IsString()
  @IsOptional()
  @Length(10, 2000) // Adjust range as needed
  description: string;
}
