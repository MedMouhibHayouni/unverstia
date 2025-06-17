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
exports.PfeEvaluation = void 0;
const typeorm_1 = require("typeorm");
const pfe_entity_1 = require("./pfe.entity");
const teacher_entity_1 = require("../../teachers/entities/teacher.entity");
const evaluation_type_enum_1 = require("../../enums/evaluation-type.enum");
let PfeEvaluation = class PfeEvaluation {
};
exports.PfeEvaluation = PfeEvaluation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PfeEvaluation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: evaluation_type_enum_1.EvaluationType }),
    __metadata("design:type", String)
], PfeEvaluation.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], PfeEvaluation.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], PfeEvaluation.prototype, "feedback", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PfeEvaluation.prototype, "evaluated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pfe_entity_1.Pfe, (pfe) => pfe.evaluations),
    (0, typeorm_1.JoinColumn)({ name: 'pfe_id' }),
    __metadata("design:type", pfe_entity_1.Pfe)
], PfeEvaluation.prototype, "pfe", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entity_1.Teacher),
    (0, typeorm_1.JoinColumn)({ name: 'evaluator_id' }),
    __metadata("design:type", teacher_entity_1.Teacher)
], PfeEvaluation.prototype, "evaluator", void 0);
exports.PfeEvaluation = PfeEvaluation = __decorate([
    (0, typeorm_1.Entity)('pfe_evaluations')
], PfeEvaluation);
//# sourceMappingURL=pfe-evaluation.entity.js.map