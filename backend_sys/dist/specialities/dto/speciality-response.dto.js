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
exports.SpecialityResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
const major_dto_1 = require("../../majors/dto/major.dto");
class SpecialityResponseDto {
}
exports.SpecialityResponseDto = SpecialityResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], SpecialityResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SpecialityResponseDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SpecialityResponseDto.prototype, "description", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => major_dto_1.MajorDto),
    __metadata("design:type", major_dto_1.MajorDto)
], SpecialityResponseDto.prototype, "Major", void 0);
//# sourceMappingURL=speciality-response.dto.js.map