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
exports.DegreeProgram = void 0;
const typeorm_1 = require("typeorm");
const academic_institution_entity_1 = require("../../academic-institution/entities/academic-institution.entity");
const DegreeProgramType_enum_1 = require("../../enums/DegreeProgramType.enum");
const major_entity_1 = require("../../majors/entities/major.entity");
const speciality_entity_1 = require("../../specialities/entities/speciality.entity");
const student_entity_1 = require("../../students/entities/student.entity");
let DegreeProgram = class DegreeProgram {
};
exports.DegreeProgram = DegreeProgram;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DegreeProgram.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], DegreeProgram.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], DegreeProgram.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: DegreeProgramType_enum_1.DegreeProgramType }),
    __metadata("design:type", String)
], DegreeProgram.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => major_entity_1.Major, (major) => major.degreePrograms),
    (0, typeorm_1.JoinColumn)({ name: 'major_id' }),
    __metadata("design:type", major_entity_1.Major)
], DegreeProgram.prototype, "major", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => speciality_entity_1.Speciality, (speciality) => speciality.degreePrograms),
    (0, typeorm_1.JoinColumn)({ name: 'speciality_id' }),
    __metadata("design:type", speciality_entity_1.Speciality)
], DegreeProgram.prototype, "speciality", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DegreeProgram.prototype, "duration_years", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DegreeProgram.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => academic_institution_entity_1.AcademicInstitution, (academicInstitution) => academicInstitution.degreePrograms),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: 'id', name: 'institution_id' }),
    __metadata("design:type", academic_institution_entity_1.AcademicInstitution)
], DegreeProgram.prototype, "institution", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_entity_1.Student, (student) => student.degree),
    __metadata("design:type", Array)
], DegreeProgram.prototype, "students", void 0);
exports.DegreeProgram = DegreeProgram = __decorate([
    (0, typeorm_1.Entity)('degree_program')
], DegreeProgram);
//# sourceMappingURL=degree-program.entity.js.map