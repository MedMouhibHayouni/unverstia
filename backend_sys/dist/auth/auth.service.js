"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const auth_response_dto_1 = require("./dto/auth-response.dto");
const class_transformer_1 = require("class-transformer");
const teachers_service_1 = require("../teachers/teachers.service");
const RoleType_enum_1 = require("../enums/RoleType.enum");
let AuthService = class AuthService {
    constructor(usersService, jwtService, teachersService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.teachersService = teachersService;
    }
    async validateUser(email, password) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('Identifiants incorrects');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Identifiants incorrects');
        }
        if (!user.is_active) {
            throw new common_1.UnauthorizedException("Votre compte est désactivé. Veuillez contacter l'administrateur.");
        }
        return user;
    }
    async login(loginDto) {
        const user = await this.validateUser(loginDto.email, loginDto.password);
        await this.usersService.updateLastLogin(user.id);
        let position = undefined;
        if (user.role === RoleType_enum_1.RoleType.TEACHER) {
            const teacher = await this.teachersService.findOneByUserId(user.id);
            position = teacher?.position;
        }
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
            position: position || null,
        };
        return (0, class_transformer_1.plainToClass)(auth_response_dto_1.AuthResponseDto, {
            ...user,
            position,
            access_token: this.jwtService.sign(payload),
        }, { excludeExtraneousValues: true });
    }
    async register(registerDto) {
        const user = await this.usersService.create(registerDto);
        let position;
        if (registerDto.role === RoleType_enum_1.RoleType.TEACHER && registerDto.position) {
            await this.teachersService.create({
                user_id: user.id,
                position: registerDto.position,
            });
            position = registerDto.position;
        }
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
            position: position || null,
        };
        return (0, class_transformer_1.plainToClass)(auth_response_dto_1.AuthResponseDto, {
            ...user,
            position,
            access_token: this.jwtService.sign(payload),
        }, { excludeExtraneousValues: true });
    }
    async requestPasswordReset(email) {
        const token = await this.usersService.generateResetToken(email);
        if (!token) {
            return {
                message: 'Si un compte avec cet email existe, un lien de réinitialisation a été envoyé.',
            };
        }
        console.log(`Token de réinitialisation pour ${email}: ${token}`);
        return {
            message: 'Si un compte avec cet email existe, un lien de réinitialisation a été envoyé.',
        };
    }
    async resetPassword(token, newPassword) {
        const success = await this.usersService.resetPassword(token, newPassword);
        if (!success) {
            throw new common_1.UnauthorizedException('Le token de réinitialisation est invalide ou a expiré.');
        }
        return { message: 'Votre mot de passe a été réinitialisé avec succès.' };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        teachers_service_1.TeachersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map