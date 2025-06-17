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
exports.PfeController = void 0;
const common_1 = require("@nestjs/common");
const pfe_service_1 = require("./pfe.service");
const pfe_response_dto_1 = require("./dto/pfe-response.dto");
const create_pfe_dto_1 = require("./dto/create-pfe.dto");
const update_pfe_dto_1 = require("./dto/update-pfe.dto");
const class_transformer_1 = require("class-transformer");
let PfeController = class PfeController {
    constructor(pfeService) {
        this.pfeService = pfeService;
    }
    async create(dto) {
        const pfe = await this.pfeService.create(dto);
        return (0, class_transformer_1.plainToClass)(pfe_response_dto_1.PfeResponseDto, pfe, { excludeExtraneousValues: true });
    }
    findAll() {
        return this.pfeService.findAll();
    }
    findOne(id) {
        return this.pfeService.findOne(id);
    }
    update(id, dto) {
        return this.pfeService.update(id, dto);
    }
    delete(id) {
        return this.pfeService.delete(id);
    }
    approve(id) {
        return this.pfeService.approvePfe(id);
    }
    reject(id) {
        return this.pfeService.rejectPfe(id);
    }
    async getBySupervisor(id) {
        return this.pfeService.getBySupervisor(id);
    }
};
exports.PfeController = PfeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pfe_dto_1.CreatePfeDto]),
    __metadata("design:returntype", Promise)
], PfeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PfeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PfeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_pfe_dto_1.UpdatePfeDto]),
    __metadata("design:returntype", Promise)
], PfeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PfeController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(':id/approve'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PfeController.prototype, "approve", null);
__decorate([
    (0, common_1.Post)(':id/reject'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PfeController.prototype, "reject", null);
__decorate([
    (0, common_1.Get)('supervisor/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PfeController.prototype, "getBySupervisor", null);
exports.PfeController = PfeController = __decorate([
    (0, common_1.Controller)('pfe'),
    __metadata("design:paramtypes", [pfe_service_1.PfeService])
], PfeController);
//# sourceMappingURL=pfe.controller.js.map