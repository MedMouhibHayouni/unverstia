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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PfeEvaluationController = void 0;
const common_1 = require("@nestjs/common");
const pfe_evaluation_service_1 = require("./pfe-evaluation.service");
const evaluate_pfe_dto_1 = require("./dto/evaluate-pfe.dto");
let PfeEvaluationController = class PfeEvaluationController {
    constructor(evalService) {
        this.evalService = evalService;
    }
    evaluate(dto) {
        return this.evalService.evaluate(dto);
    }
    getEvaluations(pfe_id) {
        return this.evalService.getEvaluations(pfe_id);
    }
};
exports.PfeEvaluationController = PfeEvaluationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluate_pfe_dto_1.EvaluatePfeDto]),
    __metadata("design:returntype", void 0)
], PfeEvaluationController.prototype, "evaluate", null);
__decorate([
    (0, common_1.Get)(':pfe_id'),
    __param(0, (0, common_1.Param)('pfe_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PfeEvaluationController.prototype, "getEvaluations", null);
exports.PfeEvaluationController = PfeEvaluationController = __decorate([
    (0, common_1.Controller)('pfe-evaluations'),
    __metadata("design:paramtypes", [pfe_evaluation_service_1.PfeEvaluationService])
], PfeEvaluationController);
//# sourceMappingURL=pfe-evaluation.controller.js.map