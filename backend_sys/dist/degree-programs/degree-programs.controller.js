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
exports.DegreeProgramsController = void 0;
const common_1 = require("@nestjs/common");
const degree_programs_service_1 = require("./degree-programs.service");
const create_degree_program_dto_1 = require("./dto/create-degree-program.dto");
const update_degree_program_dto_1 = require("./dto/update-degree-program.dto");
const degree_program_response_dto_1 = require("./dto/degree-program-response.dto");
const class_transformer_1 = require("class-transformer");
let DegreeProgramsController = class DegreeProgramsController {
    constructor(degreeProgramsService) {
        this.degreeProgramsService = degreeProgramsService;
    }
    async create(createDegreeProgramDto) {
        if (!createDegreeProgramDto) {
            throw new common_1.BadRequestException('Invalid degree program data');
        }
        if (!createDegreeProgramDto.name) {
            throw new common_1.BadRequestException('Name is required');
        }
        if (!createDegreeProgramDto.code) {
            throw new common_1.BadRequestException('Code is required');
        }
        if (!createDegreeProgramDto.level) {
            throw new common_1.BadRequestException('Level is required');
        }
        if (!createDegreeProgramDto.major_id) {
            throw new common_1.BadRequestException('Major ID is required');
        }
        if (!createDegreeProgramDto.speciality_id) {
            throw new common_1.BadRequestException('Speciality ID is required');
        }
        if (!createDegreeProgramDto.institution_id) {
            throw new common_1.BadRequestException('Institution ID is required');
        }
        return await this.degreeProgramsService.create(createDegreeProgramDto);
    }
    async findAll() {
        const degreePrograms = await this.degreeProgramsService.findAll();
        return degreePrograms.map((degreeProgram) => (0, class_transformer_1.plainToClass)(degree_program_response_dto_1.DegreeProgramResponseDto, degreeProgram, {
            excludeExtraneousValues: true,
        }));
    }
    async findOne(id) {
        const degreeProgram = await this.degreeProgramsService.findOne(+id);
        if (!degreeProgram) {
            return null;
        }
        return (0, class_transformer_1.plainToClass)(degree_program_response_dto_1.DegreeProgramResponseDto, degreeProgram, {
            excludeExtraneousValues: true,
        });
    }
    async update(id, updateDegreeProgramDto) {
        try {
            const degreeProgram = await this.degreeProgramsService.update(+id, updateDegreeProgramDto);
            if (!degreeProgram) {
                throw new common_1.BadRequestException(`Degree program with ID ${id} not found`);
            }
            return degreeProgram;
        }
        catch (error) {
            throw new common_1.BadRequestException('Invalid degree program data');
        }
    }
    remove(id) {
        return this.degreeProgramsService.remove(+id);
    }
};
exports.DegreeProgramsController = DegreeProgramsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_degree_program_dto_1.CreateDegreeProgramDto]),
    __metadata("design:returntype", Promise)
], DegreeProgramsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DegreeProgramsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DegreeProgramsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_degree_program_dto_1.UpdateDegreeProgramDto]),
    __metadata("design:returntype", Promise)
], DegreeProgramsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DegreeProgramsController.prototype, "remove", null);
exports.DegreeProgramsController = DegreeProgramsController = __decorate([
    (0, common_1.Controller)('degree-programs'),
    __metadata("design:paramtypes", [degree_programs_service_1.DegreeProgramsService])
], DegreeProgramsController);
//# sourceMappingURL=degree-programs.controller.js.map