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
exports.AcademicInstitutionController = void 0;
const common_1 = require("@nestjs/common");
const academic_institution_service_1 = require("./academic-institution.service");
const create_academic_institution_dto_1 = require("./dto/create-academic-institution.dto");
const update_academic_institution_dto_1 = require("./dto/update-academic-institution.dto");
let AcademicInstitutionController = class AcademicInstitutionController {
    constructor(academicInstitutionService) {
        this.academicInstitutionService = academicInstitutionService;
    }
    async create(createDto) {
        try {
            return await this.academicInstitutionService.create(createDto);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        return await this.academicInstitutionService.findAll();
    }
    async findOne(id) {
        const institution = await this.academicInstitutionService.findOne(+id);
        if (!institution) {
            throw new common_1.HttpException('Institution not found', common_1.HttpStatus.NOT_FOUND);
        }
        return institution;
    }
    async update(id, updateDto) {
        try {
            const institution = await this.academicInstitutionService.update(+id, updateDto);
            if (!institution) {
                throw new common_1.HttpException('Institution not found', common_1.HttpStatus.NOT_FOUND);
            }
            return institution;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        const result = await this.academicInstitutionService.remove(+id);
        if (!result) {
            throw new common_1.HttpException('Institution not found', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'Institution deleted successfully' };
    }
};
exports.AcademicInstitutionController = AcademicInstitutionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_academic_institution_dto_1.CreateAcademicInstitutionDto]),
    __metadata("design:returntype", Promise)
], AcademicInstitutionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AcademicInstitutionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcademicInstitutionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_academic_institution_dto_1.UpdateAcademicInstitutionDto]),
    __metadata("design:returntype", Promise)
], AcademicInstitutionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcademicInstitutionController.prototype, "remove", null);
exports.AcademicInstitutionController = AcademicInstitutionController = __decorate([
    (0, common_1.Controller)('academic-institutions'),
    __metadata("design:paramtypes", [academic_institution_service_1.AcademicInstitutionService])
], AcademicInstitutionController);
//# sourceMappingURL=academic-institution.controller.js.map