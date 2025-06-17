import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Get,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Authentification')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({
    summary: 'Connexion utilisateur',
    description: 'Permet à un utilisateur de se connecter',
  })
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 200,
    description: 'Connexion réussie',
    type: AuthResponseDto,
  })
  @ApiResponse({ status: 401, description: 'Identifiants incorrects' })
  async login(@Body() loginDto: LoginDto): Promise<AuthResponseDto> {
    return this.authService.login(loginDto);
  }

  @Post('register')
  @ApiOperation({
    summary: 'Inscription utilisateur',
    description: "Permet à un nouvel utilisateur de s'inscrire",
  })
  @ApiBody({ type: RegisterDto })
  @ApiResponse({
    status: 201,
    description: 'Inscription réussie',
    type: AuthResponseDto,
  })
  @ApiResponse({ status: 409, description: 'Email ou CIN déjà utilisé' })
  async register(@Body() registerDto: RegisterDto): Promise<AuthResponseDto> {
    return this.authService.register(registerDto);
  }

  @Post('request-password-reset')
  @ApiOperation({
    summary: 'Demande de réinitialisation de mot de passe',
    description: 'Envoie un lien de réinitialisation par email',
  })
  @ApiResponse({ status: 200, description: 'Email envoyé si le compte existe' })
  async requestPasswordReset(
    @Body('email') email: string,
  ): Promise<{ message: string }> {
    return this.authService.requestPasswordReset(email);
  }

  @Post('reset-password')
  @ApiOperation({
    summary: 'Réinitialisation de mot de passe',
    description:
      'Permet de définir un nouveau mot de passe avec un token valide',
  })
  @ApiResponse({
    status: 200,
    description: 'Mot de passe réinitialisé avec succès',
  })
  @ApiResponse({ status: 401, description: 'Token invalide ou expiré' })
  async resetPassword(
    @Query('token') token: string,
    @Body('newPassword') newPassword: string,
  ): Promise<{ message: string }> {
    return this.authService.resetPassword(token, newPassword);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOperation({
    summary: 'Profil utilisateur',
    description: 'Récupère les informations du profil utilisateur',
  })
  @ApiResponse({
    status: 200,
    description: 'Profil utilisateur',
    type: AuthResponseDto,
  })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  getProfile(@Req() req) {
    return req.user;
  }
}
