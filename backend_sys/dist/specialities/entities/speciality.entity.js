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
exports.Speciality = void 0;
const typeorm_1 = require("typeorm");
const major_entity_1 = require("../../majors/entities/major.entity");
const degree_program_entity_1 = require("../../degree-programs/entities/degree-program.entity");
let Speciality = class Speciality {
};
exports.Speciality = Speciality;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Speciality.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Speciality.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Speciality.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => major_entity_1.Major, (major) => major.specialities),
    (0, typeorm_1.JoinColumn)({ name: 'major' }),
    __metadata("design:type", major_entity_1.Major)
], Speciality.prototype, "major", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => degree_program_entity_1.DegreeProgram, (degreeProgram) => degreeProgram.speciality),
    __metadata("design:type", Array)
], Speciality.prototype, "degreePrograms", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Speciality.prototype, "description", void 0);
exports.Speciality = Speciality = __decorate([
    (0, typeorm_1.Entity)()
], Speciality);
//# sourceMappingURL=speciality.entity.js.map