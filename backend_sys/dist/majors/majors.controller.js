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
exports.MajorsController = void 0;
const common_1 = require("@nestjs/common");
const majors_service_1 = require("./majors.service");
const create_major_dto_1 = require("./dto/create-major.dto");
const update_major_dto_1 = require("./dto/update-major.dto");
const class_transformer_1 = require("class-transformer");
const major_response_dto_1 = require("./dto/major-response.dto");
let MajorsController = class MajorsController {
    constructor(majorsService) {
        this.majorsService = majorsService;
    }
    async create(createMajorDto) {
        if (!createMajorDto) {
            throw new common_1.BadRequestException('Invalid major data');
        }
        if (!createMajorDto.name) {
            throw new common_1.BadRequestException('Name is required');
        }
        return await this.majorsService.create(createMajorDto);
    }
    async findAll() {
        const majors = await this.majorsService.findAll();
        return majors.map((major) => (0, class_transformer_1.plainToClass)(major_response_dto_1.MajorResponseDto, major, {
            excludeExtraneousValues: true,
        }));
    }
    async findOne(id) {
        const major = await this.majorsService.findOne(+id);
        return (0, class_transformer_1.plainToClass)(major_response_dto_1.MajorResponseDto, major, {
            excludeExtraneousValues: true,
        });
    }
    async update(id, updateMajorDto) {
        try {
            const Major = await this.majorsService.update(+id, updateMajorDto);
            if (!Major) {
                throw new common_1.BadRequestException(`Major with ID ${id} not found`);
            }
            return Major;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message || 'Invalid major data');
        }
    }
    async remove(id) {
        const result = await this.majorsService.findOne(+id);
        if (!result) {
            throw new common_1.BadRequestException(`Major with ID ${id} not found`);
        }
        await this.majorsService.remove(+id);
    }
};
exports.MajorsController = MajorsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_major_dto_1.CreateMajorDto]),
    __metadata("design:returntype", Promise)
], MajorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MajorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MajorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_major_dto_1.UpdateMajorDto]),
    __metadata("design:returntype", Promise)
], MajorsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MajorsController.prototype, "remove", null);
exports.MajorsController = MajorsController = __decorate([
    (0, common_1.Controller)('majors'),
    __metadata("design:paramtypes", [majors_service_1.MajorsService])
], MajorsController);
//# sourceMappingURL=majors.controller.js.map