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
exports.Pfe = void 0;
const typeorm_1 = require("typeorm");
const student_entity_1 = require("../../students/entities/student.entity");
const teacher_entity_1 = require("../../teachers/entities/teacher.entity");
const pfe_status_enum_1 = require("../../enums/pfe-status.enum");
const pfe_document_entity_1 = require("./pfe-document.entity");
const pfe_evaluation_entity_1 = require("./pfe-evaluation.entity");
let Pfe = class Pfe {
};
exports.Pfe = Pfe;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pfe.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Pfe.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Pfe.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: pfe_status_enum_1.PfeStatus, default: pfe_status_enum_1.PfeStatus.PROPOSED }),
    __metadata("design:type", String)
], Pfe.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true,
        transformer: {
            to: (value) => value
                ? new Date(value.getFullYear(), value.getMonth(), value.getDate())
                : null,
            from: (value) => value,
        },
    }),
    __metadata("design:type", Date)
], Pfe.prototype, "submission_date", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true,
        transformer: {
            to: (value) => value
                ? new Date(value.getFullYear(), value.getMonth(), value.getDate())
                : null,
            from: (value) => value,
        },
    }),
    __metadata("design:type", Date)
], Pfe.prototype, "defense_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, (student) => student.pfes),
    (0, typeorm_1.JoinColumn)({ name: 'student_id' }),
    __metadata("design:type", student_entity_1.Student)
], Pfe.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entity_1.Teacher, (teacher) => teacher.supervisedPfes),
    (0, typeorm_1.JoinColumn)({ name: 'supervisor_id' }),
    __metadata("design:type", teacher_entity_1.Teacher)
], Pfe.prototype, "supervisor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pfe_document_entity_1.PfeDocument, (document) => document.pfe),
    __metadata("design:type", Array)
], Pfe.prototype, "documents", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pfe_evaluation_entity_1.PfeEvaluation, (evaluation) => evaluation.pfe),
    __metadata("design:type", Array)
], Pfe.prototype, "evaluations", void 0);
exports.Pfe = Pfe = __decorate([
    (0, typeorm_1.Entity)('pfe')
], Pfe);
//# sourceMappingURL=pfe.entity.js.map