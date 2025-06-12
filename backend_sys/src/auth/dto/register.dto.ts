import {
  IsString,
  IsEmail,
  IsEnum,
  Length,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { RoleType } from '../../enums/RoleType.enum';

export class RegisterDto {
  @IsString({ message: 'Le prénom doit être une chaîne de caractères' })
  @Length(1, 50, {
    message: 'Le prénom doit contenir entre 1 et 50 caractères',
  })
  first_name: string;

  @IsString({ message: 'Le nom doit être une chaîne de caractères' })
  @Length(1, 50, { message: 'Le nom doit contenir entre 1 et 50 caractères' })
  last_name: string;

  @IsString({ message: 'Le CIN doit être une chaîne de caractères' })
  @Length(8, 8, { message: 'Le CIN doit contenir exactement 8 caractères' })
  cin: string;

  @IsEmail({}, { message: "L'email doit être une adresse email valide" })
  email: string;

  @IsString({ message: 'Le téléphone doit être une chaîne de caractères' })
  @Length(8, 20, {
    message: 'Le téléphone doit contenir entre 8 et 20 caractères',
  })
  phone: string;

  @IsString({ message: 'Le mot de passe doit être une chaîne de caractères' })
  @Length(6, 50, {
    message: 'Le mot de passe doit contenir entre 6 et 50 caractères',
  })
  password: string;

  @IsEnum(RoleType, { message: 'Le rôle doit être une valeur valide' })
  role: RoleType;

  @IsOptional()
  @IsString({
    message: "L'URL de la photo de profil doit être une chaîne de caractères",
  })
  profile_picture?: string;

  @IsOptional()
  address_id?: number;

  @IsOptional()
  @IsBoolean({ message: 'Le statut actif doit être un booléen' })
  is_active?: boolean;
}
