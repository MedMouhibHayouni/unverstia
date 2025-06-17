import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { plainToClass } from 'class-transformer';
import { TeachersService } from 'src/teachers/teachers.service';
import { PositionType } from 'src/enums/PositionType.enum';
import { RoleType } from 'src/enums/RoleType.enum';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private teachersService: TeachersService,
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

    let position: PositionType | undefined = undefined;

    if (user.role === RoleType.TEACHER) {
      const teacher = await this.teachersService.findOneByUserId(user.id);
      position = teacher?.position;
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      position: position || null, // 👈 Include position in token
    };

    return plainToClass(
      AuthResponseDto,
      {
        ...user,
        position, // 👈 Also include in response DTO
        access_token: this.jwtService.sign(payload),
      },
      { excludeExtraneousValues: true },
    );
  }

  async register(registerDto: RegisterDto): Promise<AuthResponseDto> {
    // Step 1: Create the user
    const user = await this.usersService.create(registerDto);

    let position: PositionType | undefined;

    // Step 2: If user is a teacher and provided a position, create the Teacher entry
    if (registerDto.role === RoleType.TEACHER && registerDto.position) {
      await this.teachersService.create({
        user_id: user.id,
        position: registerDto.position,
      });
      position = registerDto.position;
    }

    // Step 3: Build JWT payload with role + optional position
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      position: position || null,
    };

    // Step 4: Return response DTO with position
    return plainToClass(
      AuthResponseDto,
      {
        ...user,
        position,
        access_token: this.jwtService.sign(payload),
      },
      { excludeExtraneousValues: true },
    );
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
