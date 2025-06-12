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
exports.SpecialitiesController = void 0;
const common_1 = require("@nestjs/common");
const specialities_service_1 = require("./specialities.service");
const create_speciality_dto_1 = require("./dto/create-speciality.dto");
const update_speciality_dto_1 = require("./dto/update-speciality.dto");
const class_transformer_1 = require("class-transformer");
const speciality_response_dto_1 = require("./dto/speciality-response.dto");
let SpecialitiesController = class SpecialitiesController {
    constructor(specialitiesService) {
        this.specialitiesService = specialitiesService;
    }
    async create(createSpecialityDto) {
        if (!createSpecialityDto) {
            throw new common_1.BadRequestException('Invalid speciality data');
        }
        if (!createSpecialityDto.name) {
            throw new common_1.BadRequestException('Name is required');
        }
        if (!createSpecialityDto.code) {
            throw new common_1.BadRequestException('Code is required');
        }
        if (!createSpecialityDto.major) {
            throw new common_1.BadRequestException('Major is required');
        }
        return await this.specialitiesService.create(createSpecialityDto);
    }
    async findAll() {
        const specialities = await this.specialitiesService.findAll();
        return specialities.map((speciality) => (0, class_transformer_1.plainToClass)(speciality_response_dto_1.SpecialityResponseDto, speciality, {
            excludeExtraneousValues: true,
        }));
    }
    async findOne(id) {
        const speciality = await this.specialitiesService.findOne(+id);
        return (0, class_transformer_1.plainToClass)(speciality_response_dto_1.SpecialityResponseDto, speciality, {
            excludeExtraneousValues: true,
        });
    }
    async update(id, updateSpecialityDto) {
        try {
            const Speciality = await this.specialitiesService.update(+id, updateSpecialityDto);
            if (!Speciality) {
                throw new common_1.BadRequestException(`Speciality with ID ${id} not found`);
            }
            return Speciality;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message || 'Invalid speciality data');
        }
    }
    async remove(id) {
        const result = await this.specialitiesService.findOne(+id);
        if (!result) {
            throw new common_1.BadRequestException(`Speciality with ID ${id} not found`);
        }
        await this.specialitiesService.remove(+id);
    }
};
exports.SpecialitiesController = SpecialitiesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_speciality_dto_1.CreateSpecialityDto]),
    __metadata("design:returntype", Promise)
], SpecialitiesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpecialitiesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SpecialitiesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_speciality_dto_1.UpdateSpecialityDto]),
    __metadata("design:returntype", Promise)
], SpecialitiesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SpecialitiesController.prototype, "remove", null);
exports.SpecialitiesController = SpecialitiesController = __decorate([
    (0, common_1.Controller)('specialities'),
    __metadata("design:paramtypes", [specialities_service_1.SpecialitiesService])
], SpecialitiesController);
//# sourceMappingURL=specialities.controller.js.map