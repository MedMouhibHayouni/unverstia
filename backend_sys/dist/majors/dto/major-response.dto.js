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
exports.MajorResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
const department_dto_1 = require("../../departments/dto/department.dto");
class MajorResponseDto {
}
exports.MajorResponseDto = MajorResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MajorResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MajorResponseDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MajorResponseDto.prototype, "description", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => department_dto_1.DepartmentDto),
    __metadata("design:type", department_dto_1.DepartmentDto)
], MajorResponseDto.prototype, "department", void 0);
//# sourceMappingURL=major-response.dto.js.map