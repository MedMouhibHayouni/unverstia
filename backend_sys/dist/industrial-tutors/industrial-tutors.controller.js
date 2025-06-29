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
exports.IndustrialTutorsController = void 0;
const common_1 = require("@nestjs/common");
const industrial_tutors_service_1 = require("./industrial-tutors.service");
const create_industrial_tutor_dto_1 = require("./dto/create-industrial-tutor.dto");
const update_industrial_tutor_dto_1 = require("./dto/update-industrial-tutor.dto");
let IndustrialTutorsController = class IndustrialTutorsController {
    constructor(industrialTutorsService) {
        this.industrialTutorsService = industrialTutorsService;
    }
    create(createIndustrialTutorDto) {
        return this.industrialTutorsService.create(createIndustrialTutorDto);
    }
    findAll() {
        return this.industrialTutorsService.findAll();
    }
    findOne(id) {
        return this.industrialTutorsService.findOne(+id);
    }
    update(id, updateIndustrialTutorDto) {
        return this.industrialTutorsService.update(+id, updateIndustrialTutorDto);
    }
    remove(id) {
        return this.industrialTutorsService.remove(+id);
    }
};
exports.IndustrialTutorsController = IndustrialTutorsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_industrial_tutor_dto_1.CreateIndustrialTutorDto]),
    __metadata("design:returntype", void 0)
], IndustrialTutorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IndustrialTutorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IndustrialTutorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_industrial_tutor_dto_1.UpdateIndustrialTutorDto]),
    __metadata("design:returntype", void 0)
], IndustrialTutorsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IndustrialTutorsController.prototype, "remove", null);
exports.IndustrialTutorsController = IndustrialTutorsController = __decorate([
    (0, common_1.Controller)('industrial-tutors'),
    __metadata("design:paramtypes", [industrial_tutors_service_1.IndustrialTutorsService])
], IndustrialTutorsController);
//# sourceMappingURL=industrial-tutors.controller.js.map