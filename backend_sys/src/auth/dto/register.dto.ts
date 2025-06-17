// register.dto.ts
import {
  IsString,
  IsEmail,
  IsEnum,
  Length,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { RoleType } from '../../enums/RoleType.enum';
import { PositionType } from '../../enums/PositionType.enum';

export class RegisterDto {
  @IsString()
  @Length(1, 50)
  first_name: string;

  @IsString()
  @Length(1, 50)
  last_name: string;

  @IsString()
  @Length(8, 8)
  cin: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 20)
  phone: string;

  @IsString()
  @Length(6, 50)
  password: string;

  @IsEnum(RoleType)
  role: RoleType;

  @IsOptional()
  profile_picture?: string;

  @IsOptional()
  address_id?: number;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;

  @IsOptional()
  @IsEnum(PositionType)
  position?: PositionType;
}
