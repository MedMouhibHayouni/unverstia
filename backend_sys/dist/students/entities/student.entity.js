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
exports.Student = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const SexType_enum_1 = require("../../enums/SexType.enum");
const LevelType_enum_1 = require("../../enums/LevelType.enum");
const degree_program_entity_1 = require("../../degree-programs/entities/degree-program.entity");
let Student = class Student {
};
exports.Student = Student;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Student.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Student.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: SexType_enum_1.SexType, nullable: true }),
    __metadata("design:type", String)
], Student.prototype, "sex", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], Student.prototype, "student_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => degree_program_entity_1.DegreeProgram, (degree) => degree.students),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: 'id' }),
    __metadata("design:type", degree_program_entity_1.DegreeProgram)
], Student.prototype, "degree", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: LevelType_enum_1.LevelType }),
    __metadata("design:type", String)
], Student.prototype, "level", void 0);
exports.Student = Student = __decorate([
    (0, typeorm_1.Entity)('students')
], Student);
//# sourceMappingURL=student.entity.js.map