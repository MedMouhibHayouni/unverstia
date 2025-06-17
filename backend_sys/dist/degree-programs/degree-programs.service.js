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
exports.DegreeProgramsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const degree_program_entity_1 = require("./entities/degree-program.entity");
const major_entity_1 = require("../majors/entities/major.entity");
const speciality_entity_1 = require("../specialities/entities/speciality.entity");
const academic_institution_entity_1 = require("../academic-institution/entities/academic-institution.entity");
const exceptions_1 = require("@nestjs/common/exceptions");
let DegreeProgramsService = class DegreeProgramsService {
    constructor(repository, majorRepository, specialityRepository, academicInstitutionRepository) {
        this.repository = repository;
        this.majorRepository = majorRepository;
        this.specialityRepository = specialityRepository;
        this.academicInstitutionRepository = academicInstitutionRepository;
    }
    async create(createDegreeProgramDto) {
        const major = await this.majorRepository.findOneBy({
            id: createDegreeProgramDto.major_id,
        });
        if (!major) {
            throw new exceptions_1.BadRequestException(`Major with ID ${createDegreeProgramDto.major_id} not found`);
        }
        const speciality = await this.specialityRepository.findOneBy({
            id: createDegreeProgramDto.speciality_id,
        });
        if (!speciality) {
            throw new exceptions_1.BadRequestException(`Speciality with ID ${createDegreeProgramDto.speciality_id} not found`);
        }
        const institution = await this.academicInstitutionRepository.findOneBy({
            id: createDegreeProgramDto.institution_id,
        });
        if (!institution) {
            throw new exceptions_1.BadRequestException(`Institution with ID ${createDegreeProgramDto.institution_id} not found`);
        }
        const existingDegreeProgram = await this.repository.findOneBy({
            code: createDegreeProgramDto.code,
        });
        if (existingDegreeProgram) {
            throw new common_1.ConflictException(`Degree Program with code ${createDegreeProgramDto.code} already exists`);
        }
        const degreeProgram = new degree_program_entity_1.DegreeProgram();
        degreeProgram.name = createDegreeProgramDto.name;
        degreeProgram.code = createDegreeProgramDto.code;
        degreeProgram.level = createDegreeProgramDto.level;
        degreeProgram.duration_years = createDegreeProgramDto.duration_years;
        degreeProgram.description = createDegreeProgramDto.description;
        degreeProgram.major = major;
        degreeProgram.speciality = speciality;
        degreeProgram.institution = institution;
        return await this.repository.save(degreeProgram);
    }
    async findAll() {
        if (!this.repository) {
            throw new exceptions_1.BadRequestException('Degree Program repository not found');
        }
        const degreePrograms = await this.repository.find({
            relations: ['major', 'speciality', 'institution'],
        });
        return degreePrograms;
    }
    async findOne(id) {
        if (!this.repository) {
            throw new exceptions_1.BadRequestException('Degree Program repository not found');
        }
        return await this.repository.findOne({
            where: { id },
            relations: ['major', 'speciality', 'institution'],
        });
    }
    async update(id, updateDegreeProgramDto) {
        if (!this.repository) {
            throw new exceptions_1.BadRequestException('Degree Program repository not found');
        }
        const degreeProgram = await this.repository.findOne({ where: { id } });
        if (!degreeProgram) {
            throw new exceptions_1.BadRequestException('Degree Program not found');
        }
        Object.assign(degreeProgram, updateDegreeProgramDto);
        return await this.repository.save(degreeProgram);
    }
    async remove(id) {
        const degreeProgram = await this.findOne(id);
        if (!degreeProgram) {
            return false;
        }
        await this.repository.remove(degreeProgram);
        return true;
    }
};
exports.DegreeProgramsService = DegreeProgramsService;
exports.DegreeProgramsService = DegreeProgramsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(degree_program_entity_1.DegreeProgram)),
    __param(1, (0, typeorm_1.InjectRepository)(major_entity_1.Major)),
    __param(2, (0, typeorm_1.InjectRepository)(speciality_entity_1.Speciality)),
    __param(3, (0, typeorm_1.InjectRepository)(academic_institution_entity_1.AcademicInstitution)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DegreeProgramsService);
//# sourceMappingURL=degree-programs.service.js.map