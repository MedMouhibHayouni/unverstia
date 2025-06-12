import { IsEmail, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: "L'email doit être une adresse email valide" })
  email: string;

  @IsString({ message: 'Le mot de passe doit être une chaîne de caractères' })
  @Length(6, 50, {
    message: 'Le mot de passe doit contenir entre 6 et 50 caractères',
  })
  password: string;
}
