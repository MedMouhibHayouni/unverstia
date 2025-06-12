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
exports.AcademicInstitution = void 0;
const typeorm_1 = require("typeorm");
const address_entity_1 = require("../../addresses/entities/address.entity");
const degree_program_entity_1 = require("../../degree-programs/entities/degree-program.entity");
let AcademicInstitution = class AcademicInstitution {
};
exports.AcademicInstitution = AcademicInstitution;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AcademicInstitution.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], AcademicInstitution.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], AcademicInstitution.prototype, "university", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AcademicInstitution.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], AcademicInstitution.prototype, "fax", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], AcademicInstitution.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], AcademicInstitution.prototype, "director", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], AcademicInstitution.prototype, "logo_url", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => address_entity_1.Addresses, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'address_id' }),
    __metadata("design:type", address_entity_1.Addresses)
], AcademicInstitution.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => degree_program_entity_1.DegreeProgram, (degreeProgram) => degreeProgram.institution),
    __metadata("design:type", Array)
], AcademicInstitution.prototype, "degreePrograms", void 0);
exports.AcademicInstitution = AcademicInstitution = __decorate([
    (0, typeorm_1.Entity)('academic_institution')
], AcademicInstitution);
//# sourceMappingURL=academic-institution.entity.js.map