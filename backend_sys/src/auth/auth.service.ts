import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Identifiants incorrects');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Identifiants incorrects');
    }

    if (!user.is_active) {
      throw new UnauthorizedException(
        "Votre compte est désactivé. Veuillez contacter l'administrateur.",
      );
    }

    return user;
  }

  async login(loginDto: LoginDto): Promise<AuthResponseDto> {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    await this.usersService.updateLastLogin(user.id);

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const authResponse = plainToClass(
      AuthResponseDto,
      {
        ...user,
        access_token: this.jwtService.sign(payload),
      },
      { excludeExtraneousValues: true },
    );

    return authResponse;
  }

  async register(registerDto: RegisterDto): Promise<AuthResponseDto> {
    try {
      // Création de l'utilisateur via le service utilisateur
      const user = await this.usersService.create(registerDto);

      // Génération du token JWT
      const payload = {
        sub: user.id,
        email: user.email,
        role: user.role,
      };

      const authResponse = plainToClass(
        AuthResponseDto,
        {
          ...user,
          access_token: this.jwtService.sign(payload),
        },
        { excludeExtraneousValues: true },
      );

      return authResponse;
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new ConflictException(error.message);
      }
      throw error;
    }
  }

  async requestPasswordReset(email: string): Promise<{ message: string }> {
    const token = await this.usersService.generateResetToken(email);

    if (!token) {
      // Ne pas révéler que l'email n'existe pas pour des raisons de sécurité
      return {
        message:
          'Si un compte avec cet email existe, un lien de réinitialisation a été envoyé.',
      };
    }

    // En production, vous enverriez ici un email avec le token
    console.log(`Token de réinitialisation pour ${email}: ${token}`);

    return {
      message:
        'Si un compte avec cet email existe, un lien de réinitialisation a été envoyé.',
    };
  }

  async resetPassword(
    token: string,
    newPassword: string,
  ): Promise<{ message: string }> {
    const success = await this.usersService.resetPassword(token, newPassword);

    if (!success) {
      throw new UnauthorizedException(
        'Le token de réinitialisation est invalide ou a expiré.',
      );
    }

    return { message: 'Votre mot de passe a été réinitialisé avec succès.' };
  }
}
