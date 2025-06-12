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
exports.Major = void 0;
const typeorm_1 = require("typeorm");
const department_entity_1 = require("../../departments/entities/department.entity");
const speciality_entity_1 = require("../../specialities/entities/speciality.entity");
const degree_program_entity_1 = require("../../degree-programs/entities/degree-program.entity");
let Major = class Major {
};
exports.Major = Major;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Major.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, unique: true }),
    __metadata("design:type", String)
], Major.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_entity_1.Department, (department) => department.majors),
    (0, typeorm_1.JoinColumn)({ name: 'department' }),
    __metadata("design:type", department_entity_1.Department)
], Major.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => speciality_entity_1.Speciality, (speciality) => speciality.major),
    __metadata("design:type", Array)
], Major.prototype, "specialities", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => degree_program_entity_1.DegreeProgram, (degreeprogram) => degreeprogram.major),
    __metadata("design:type", Array)
], Major.prototype, "degreePrograms", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Major.prototype, "description", void 0);
exports.Major = Major = __decorate([
    (0, typeorm_1.Entity)()
], Major);
//# sourceMappingURL=major.entity.js.map