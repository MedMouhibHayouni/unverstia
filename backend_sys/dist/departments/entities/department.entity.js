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
exports.Department = void 0;
const typeorm_1 = require("typeorm");
const major_entity_1 = require("../../majors/entities/major.entity");
const academic_institution_entity_1 = require("../../academic-institution/entities/academic-institution.entity");
let Department = class Department {
};
exports.Department = Department;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Department.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, unique: true }),
    __metadata("design:type", String)
], Department.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, unique: true }),
    __metadata("design:type", String)
], Department.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => academic_institution_entity_1.AcademicInstitution, { nullable: true }),
    __metadata("design:type", academic_institution_entity_1.AcademicInstitution)
], Department.prototype, "academicInstitution", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => major_entity_1.Major, (major) => major.department),
    __metadata("design:type", Array)
], Department.prototype, "majors", void 0);
exports.Department = Department = __decorate([
    (0, typeorm_1.Entity)('department')
], Department);
//# sourceMappingURL=department.entity.js.map