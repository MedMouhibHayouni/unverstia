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
exports.MajorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const major_entity_1 = require("./entities/major.entity");
const department_entity_1 = require("../departments/entities/department.entity");
let MajorsService = class MajorsService {
    constructor(majorsRepository, departmentRepository) {
        this.majorsRepository = majorsRepository;
        this.departmentRepository = departmentRepository;
    }
    async create(createMajorDto) {
        const department = await this.departmentRepository.findOneBy({
            id: createMajorDto.department,
        });
        if (!department) {
            throw new common_1.NotFoundException(`Department with ID ${createMajorDto.department} not found`);
        }
        const existingMajor = await this.majorsRepository.findOneBy({
            name: createMajorDto.name,
        });
        if (existingMajor) {
            throw new common_1.ConflictException(`Major with name ${createMajorDto.name} already exists`);
        }
        const major = new major_entity_1.Major();
        major.name = createMajorDto.name;
        major.description = createMajorDto.description;
        major.department = department;
        return await this.majorsRepository.save(major);
    }
    async findAll() {
        if (!this.majorsRepository) {
            throw new common_1.BadRequestException('Major repository not found');
        }
        const majors = await this.majorsRepository.find({
            relations: ['department'],
        });
        return majors;
    }
    async findOne(id) {
        if (!this.majorsRepository) {
            throw new common_1.BadRequestException('Major repository not found');
        }
        return await this.majorsRepository.findOne({
            where: { id },
            relations: ['department'],
        });
    }
    async update(id, updateMajorDto) {
        if (!this.majorsRepository) {
            throw new common_1.BadRequestException('Major repository not found');
        }
        const major = await this.majorsRepository.findOne({ where: { id } });
        if (!major) {
            throw new common_1.NotFoundException('Major not found');
        }
        Object.assign(major, updateMajorDto);
        return await this.majorsRepository.save(major);
    }
    async remove(id) {
        const major = await this.findOne(id);
        if (!major) {
            return false;
        }
        await this.majorsRepository.remove(major);
        return true;
    }
};
exports.MajorsService = MajorsService;
exports.MajorsService = MajorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(major_entity_1.Major)),
    __param(1, (0, typeorm_1.InjectRepository)(department_entity_1.Department)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], MajorsService);
//# sourceMappingURL=majors.service.js.map