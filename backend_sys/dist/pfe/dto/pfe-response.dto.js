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
exports.PfeEvaluationDto = exports.PfeDocumentDto = exports.PfeResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
const document_type_enum_1 = require("../../enums/document-type.enum");
const evaluation_type_enum_1 = require("../../enums/evaluation-type.enum");
const pfe_status_enum_1 = require("../../enums/pfe-status.enum");
const student_dto_1 = require("../../students/dto/student.dto");
const teacher_dto_1 = require("../../teachers/dto/teacher.dto");
class PfeResponseDto {
    static formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
}
exports.PfeResponseDto = PfeResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], PfeResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], PfeResponseDto.prototype, "title", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], PfeResponseDto.prototype, "description", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], PfeResponseDto.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? PfeResponseDto.formatDate(value) : null)),
    __metadata("design:type", String)
], PfeResponseDto.prototype, "submission_date", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? PfeResponseDto.formatDate(value) : null)),
    __metadata("design:type", String)
], PfeResponseDto.prototype, "defense_date", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => student_dto_1.StudentDto),
    __metadata("design:type", student_dto_1.StudentDto)
], PfeResponseDto.prototype, "student", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => teacher_dto_1.TeacherDto),
    __metadata("design:type", teacher_dto_1.TeacherDto)
], PfeResponseDto.prototype, "supervisor", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => PfeDocumentDto),
    __metadata("design:type", Array)
], PfeResponseDto.prototype, "documents", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => PfeEvaluationDto),
    __metadata("design:type", Array)
], PfeResponseDto.prototype, "evaluations", void 0);
class PfeDocumentDto {
}
exports.PfeDocumentDto = PfeDocumentDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], PfeDocumentDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], PfeDocumentDto.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], PfeDocumentDto.prototype, "file_url", void 0);
class PfeEvaluationDto {
}
exports.PfeEvaluationDto = PfeEvaluationDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], PfeEvaluationDto.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], PfeEvaluationDto.prototype, "score", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], PfeEvaluationDto.prototype, "feedback", void 0);
//# sourceMappingURL=pfe-response.dto.js.map