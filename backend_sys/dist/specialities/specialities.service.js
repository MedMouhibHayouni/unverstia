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
exports.SpecialitiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const speciality_entity_1 = require("./entities/speciality.entity");
const major_entity_1 = require("../majors/entities/major.entity");
const exceptions_1 = require("@nestjs/common/exceptions");
let SpecialitiesService = class SpecialitiesService {
    constructor(specialityRepository, majorRepository) {
        this.specialityRepository = specialityRepository;
        this.majorRepository = majorRepository;
    }
    async create(createSpecialityDto) {
        const major = await this.majorRepository.findOneBy({
            id: createSpecialityDto.major,
        });
        if (!major) {
            throw new exceptions_1.BadRequestException(`Major with ID ${createSpecialityDto.major} not found`);
        }
        const speciality = new speciality_entity_1.Speciality();
        speciality.name = createSpecialityDto.name;
        speciality.code = createSpecialityDto.code;
        speciality.description = createSpecialityDto.description;
        speciality.major = major;
        return await this.specialityRepository.save(speciality);
    }
    async findAll() {
        if (!this.specialityRepository) {
            throw new exceptions_1.BadRequestException('Speciality repository not found');
        }
        const specialities = await this.specialityRepository.find({
            relations: ['major'],
        });
        return specialities;
    }
    async findOne(id) {
        if (!this.specialityRepository) {
            throw new exceptions_1.BadRequestException('Speciality repository not found');
        }
        return await this.specialityRepository.findOne({
            where: { id },
            relations: ['major'],
        });
    }
    async update(id, updateSpecialityDto) {
        if (!this.specialityRepository) {
            throw new exceptions_1.BadRequestException('Speciality repository not found');
        }
        const speciality = await this.specialityRepository.findOne({
            where: { id },
        });
        if (!speciality) {
            throw new exceptions_1.BadRequestException('Speciality not found');
        }
        Object.assign(speciality, updateSpecialityDto);
        return await this.specialityRepository.save(speciality);
    }
    async remove(id) {
        const speciality = await this.findOne(id);
        if (!speciality) {
            return false;
        }
        await this.specialityRepository.remove(speciality);
        return true;
    }
};
exports.SpecialitiesService = SpecialitiesService;
exports.SpecialitiesService = SpecialitiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(speciality_entity_1.Speciality)),
    __param(1, (0, typeorm_1.InjectRepository)(major_entity_1.Major)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SpecialitiesService);
//# sourceMappingURL=specialities.service.js.map