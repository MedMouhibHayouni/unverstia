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
exports.RegisterDto = void 0;
const class_validator_1 = require("class-validator");
const RoleType_enum_1 = require("../../enums/RoleType.enum");
class RegisterDto {
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Le prénom doit être une chaîne de caractères' }),
    (0, class_validator_1.Length)(1, 50, {
        message: 'Le prénom doit contenir entre 1 et 50 caractères',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "first_name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Le nom doit être une chaîne de caractères' }),
    (0, class_validator_1.Length)(1, 50, { message: 'Le nom doit contenir entre 1 et 50 caractères' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "last_name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Le CIN doit être une chaîne de caractères' }),
    (0, class_validator_1.Length)(8, 8, { message: 'Le CIN doit contenir exactement 8 caractères' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "cin", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "L'email doit être une adresse email valide" }),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Le téléphone doit être une chaîne de caractères' }),
    (0, class_validator_1.Length)(8, 20, {
        message: 'Le téléphone doit contenir entre 8 et 20 caractères',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Le mot de passe doit être une chaîne de caractères' }),
    (0, class_validator_1.Length)(6, 50, {
        message: 'Le mot de passe doit contenir entre 6 et 50 caractères',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(RoleType_enum_1.RoleType, { message: 'Le rôle doit être une valeur valide' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: "L'URL de la photo de profil doit être une chaîne de caractères",
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "profile_picture", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], RegisterDto.prototype, "address_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: 'Le statut actif doit être un booléen' }),
    __metadata("design:type", Boolean)
], RegisterDto.prototype, "is_active", void 0);
//# sourceMappingURL=register.dto.js.map