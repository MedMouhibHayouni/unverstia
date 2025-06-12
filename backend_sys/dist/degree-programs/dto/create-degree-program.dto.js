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
exports.CreateDegreeProgramDto = void 0;
const class_validator_1 = require("class-validator");
const DegreeProgramType_enum_1 = require("../../enums/DegreeProgramType.enum");
class CreateDegreeProgramDto {
}
exports.CreateDegreeProgramDto = CreateDegreeProgramDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CreateDegreeProgramDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    __metadata("design:type", String)
], CreateDegreeProgramDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(DegreeProgramType_enum_1.DegreeProgramType),
    __metadata("design:type", String)
], CreateDegreeProgramDto.prototype, "degree_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], CreateDegreeProgramDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(DegreeProgramType_enum_1.DegreeProgramType),
    __metadata("design:type", String)
], CreateDegreeProgramDto.prototype, "level", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateDegreeProgramDto.prototype, "duration", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDegreeProgramDto.prototype, "major_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateDegreeProgramDto.prototype, "speciality_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateDegreeProgramDto.prototype, "institution_id", void 0);
//# sourceMappingURL=create-degree-program.dto.js.map