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
exports.DegreeProgramResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
const major_dto_1 = require("../../majors/dto/major.dto");
const degree_program_dto_1 = require("./degree-program.dto");
const speciality_dto_1 = require("../../specialities/dto/speciality.dto");
class DegreeProgramResponseDto {
}
exports.DegreeProgramResponseDto = DegreeProgramResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], DegreeProgramResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DegreeProgramResponseDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DegreeProgramResponseDto.prototype, "code", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DegreeProgramResponseDto.prototype, "description", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => major_dto_1.MajorDto),
    __metadata("design:type", major_dto_1.MajorDto)
], DegreeProgramResponseDto.prototype, "major", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => speciality_dto_1.SpecialityDto),
    __metadata("design:type", speciality_dto_1.SpecialityDto)
], DegreeProgramResponseDto.prototype, "speciality", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => degree_program_dto_1.DegreeProgramDto),
    __metadata("design:type", Array)
], DegreeProgramResponseDto.prototype, "degreePrograms", void 0);
//# sourceMappingURL=degree-program-response.dto.js.map